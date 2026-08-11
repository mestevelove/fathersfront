"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function HomeDispatch() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = window.location.hostname === "localhost"
      ? "http://localhost:8787/api/dispatch"
      : "/api/dispatch";

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          email: data.get("email"),
          website: data.get("website"),
          tag: "dispatch",
        }),
      });

      if (!response.ok) throw new Error("Subscription failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="home-dispatch cream-section" aria-labelledby="home-dispatch-title">
      <div className="shell home-dispatch-grid">
        <div className="home-dispatch-heading">
          <p className="section-kicker">Weekly field note</p>
          <h2 id="home-dispatch-title">The Fathers Front<br /><em>Dispatch.</em></h2>
        </div>
        <div className="home-dispatch-content">
          <p className="home-dispatch-lead">A weekly field note for fathers who are fighting, fortifying and forging their family&apos;s future.</p>
          <p>No noise. No empty motivation. Just something useful for the fight and the life that follows.</p>
          <form className="home-dispatch-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="home-dispatch-first-name">First name</label>
            <input id="home-dispatch-first-name" name="firstName" type="text" autoComplete="given-name" placeholder="First name" disabled={status === "success"} />
            <label className="sr-only" htmlFor="home-dispatch-email">Email address</label>
            <input id="home-dispatch-email" name="email" type="email" autoComplete="email" placeholder="Email address" required disabled={status === "success"} />
            <div className="home-dispatch-honeypot" aria-hidden="true">
              <label htmlFor="home-dispatch-website">Website</label>
              <input id="home-dispatch-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" disabled={status === "submitting" || status === "success"}>
              {status === "submitting" ? "Sending..." : status === "success" ? "You’re on the list" : "Join the Dispatch"}
            </button>
          </form>
          <p className={`home-dispatch-status${status === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
            {status === "error" ? "Something went wrong. Please try again." : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
