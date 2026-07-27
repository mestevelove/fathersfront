# Fathers Front Dispatch Worker

This worker keeps the Systeme.io API key off the public website. It creates or
updates a contact, creates the `Fathers Front Dispatch` tag when necessary, and
assigns that tag to the contact.

## Local setup

1. Copy `.dev.vars.example` to `.dev.vars`.
2. Add the Systeme.io public API key to `.dev.vars`.
3. From this directory, run:

   ```powershell
   pnpm exec wrangler dev
   ```

The local website sends Dispatch submissions to
`http://localhost:8787/api/dispatch`.

## Cloudflare secret

Store the production key without placing it in source control:

```powershell
pnpm exec wrangler secret put SYSTEME_API_KEY --name fathersfront-dispatch
```

Paste the key when Wrangler prompts for it.

## Deployment

```powershell
pnpm exec wrangler deploy --config workers/dispatch/wrangler.jsonc
```

The route is limited to `fathersfront.com/api/dispatch*`; the existing
`fathersfront` website worker continues serving every other route.
