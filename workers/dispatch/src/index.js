const SYSTEME_API = "https://api.systeme.io/api";
const DISPATCH_TAG = "Fathers Front Dispatch";
const ALLOWED_ORIGINS = new Set([
  "https://fathersfront.com",
  "https://www.fathersfront.com",
  "http://localhost:3000",
]);

function json(body, status = 200, origin = "") {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  };

  if (ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }

  return new Response(JSON.stringify(body), { status, headers });
}

async function systemeRequest(env, path, options = {}) {
  const response = await fetch(`${SYSTEME_API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": env.SYSTEME_API_KEY,
      ...options.headers,
    },
  });

  if (response.status === 204) {
    return { response, data: null };
  }

  const data = await response.json().catch(() => null);
  return { response, data };
}

async function upsertContact(env, email, firstName) {
  const lookup = await systemeRequest(env, `/contacts?email=${encodeURIComponent(email)}`);
  if (!lookup.response.ok) {
    throw new Error(`Contact lookup failed: ${lookup.response.status}`);
  }

  const existing = lookup.data?.items?.[0];
  const contactPayload = {
    locale: "en",
    fields: firstName ? [{ slug: "first_name", value: firstName }] : [],
  };

  if (existing) {
    const updated = await systemeRequest(env, `/contacts/${existing.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/merge-patch+json" },
      body: JSON.stringify(contactPayload),
    });

    if (!updated.response.ok) {
      throw new Error(`Contact update failed: ${updated.response.status}`);
    }

    return existing.id;
  }

  const created = await systemeRequest(env, "/contacts", {
    method: "POST",
    body: JSON.stringify({ email, ...contactPayload }),
  });

  if (!created.response.ok || !created.data?.id) {
    throw new Error(`Contact creation failed: ${created.response.status}`);
  }

  return created.data.id;
}

async function findOrCreateDispatchTag(env) {
  const lookup = await systemeRequest(env, `/tags?query=${encodeURIComponent(DISPATCH_TAG)}&limit=10`);
  if (!lookup.response.ok) {
    throw new Error(`Tag lookup failed: ${lookup.response.status}`);
  }

  const existing = lookup.data?.items?.find(
    (tag) => tag.name?.toLowerCase() === DISPATCH_TAG.toLowerCase(),
  );

  if (existing) {
    return existing.id;
  }

  const created = await systemeRequest(env, "/tags", {
    method: "POST",
    body: JSON.stringify({ name: DISPATCH_TAG }),
  });

  if (!created.response.ok || !created.data?.id) {
    throw new Error(`Tag creation failed: ${created.response.status}`);
  }

  return created.data.id;
}

async function subscribe(request, env) {
  const origin = request.headers.get("Origin") || "";
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return json({ ok: false, error: "Origin not allowed" }, 403, origin);
  }

  if (!env.SYSTEME_API_KEY) {
    return json({ ok: false, error: "Service is not configured" }, 503, origin);
  }

  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const firstName = typeof body?.firstName === "string" ? body.firstName.trim().slice(0, 80) : "";
  const website = typeof body?.website === "string" ? body.website.trim() : "";

  if (website) {
    return json({ ok: true }, 200, origin);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: "Enter a valid email address" }, 400, origin);
  }

  try {
    const [contactId, tagId] = await Promise.all([
      upsertContact(env, email, firstName),
      findOrCreateDispatchTag(env),
    ]);

    const assigned = await systemeRequest(env, `/contacts/${contactId}/tags`, {
      method: "POST",
      body: JSON.stringify({ tagId }),
    });

    if (!assigned.response.ok && assigned.response.status !== 422) {
      throw new Error(`Tag assignment failed: ${assigned.response.status}`);
    }

    return json({ ok: true }, 200, origin);
  } catch (error) {
    console.error("Dispatch subscription failed", error);
    return json({ ok: false, error: "Subscription failed" }, 502, origin);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      if (!ALLOWED_ORIGINS.has(origin)) {
        return new Response(null, { status: 403 });
      }

      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Max-Age": "86400",
          Vary: "Origin",
        },
      });
    }

    if (url.pathname !== "/api/dispatch" || request.method !== "POST") {
      return json({ ok: false, error: "Not found" }, 404, origin);
    }

    return subscribe(request, env);
  },
};
