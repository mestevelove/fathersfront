# Fathers Front Project Instructions

## Scope and source of truth

- Work in `C:\Users\meste\Documents\Codex\fathersfront`.
- Treat `app/` and `public/` as the website source of truth.
- Repository: `https://github.com/mestevelove/fathersfront.git`.
- Do not create or edit historical static-upload folders or ZIP archives.
- Do not restore the former OpenAI Sites/Vinext deployment workflow.

## Brand and versioning

- Preserve unrelated sections, routes, navigation, footer, fonts, and assets unless explicitly requested.
- Colors: ink `#171412`, cream `#f4ecdc`, oxblood `#912d2f`, ember `#e84509`.
- Display: Barlow Condensed; italic accent: Source Serif 4 600 italic; body: Libre Franklin; hero: Druk XCondensed; wordmark: Tungsten Condensed.
- Pillars: Leadership, Lifestyle, Law, and Love.
- Every release must update both visible header version labels and the accessible version label to the requested `V.xx`.

## Editing workflow

1. Inspect `git status`, the active branch, and relevant source before editing.
2. Make only the requested changes.
3. For responsive layouts, prefer `minmax(0, 1fr)`, `min-width: 0`, responsive typography, and wrapping. Do not conceal layout defects with global `overflow-x: hidden`.
4. Add or update focused tests for important copy, routes, and version labels.
5. Build and test:

   ```text
   pnpm run build
   node --test tests/rendered-html.test.mjs
   ```

6. Confirm static output is generated in `out/` and expected routes are present.
7. Run `git diff --check` and inspect `git status` before committing.

## Git workflow

- `main` is production. Pushing `main` triggers the live Cloudflare deployment.
- `dev` is review-only while non-production Cloudflare builds are disabled.
- For review, commit to `dev`. When the user explicitly requests production, merge the verified commit into `main` and push `main`.
- Never force-push, rewrite published history, or delete branches without explicit authorization.
- If GitHub credentials or connector write access are unavailable, finish and commit locally, then provide only the exact push command required from the user.
- Never claim production is updated until GitHub received the commit and Cloudflare reports a successful deployment.

## Cloudflare deployment

- Worker: `fathersfront`.
- Production branch: `main`.
- Build command: `pnpm run build`.
- Deploy command:

  ```text
  pnpm exec wrangler deploy --name fathersfront --assets=./out --compatibility-date=2026-07-16
  ```

- Root directory: `/`.
- Keep the compatibility date fixed unless intentionally upgrading runtime behavior.

## Verification

1. Verify both the Next.js build and Wrangler deployment steps succeed.
2. If deployment fails, fix the first substantive error rather than changing unrelated configuration.
3. After deployment, verify the live homepage, fonts, images, navigation, requested change, and mobile layout.
4. Report the deployed commit SHA and release version.
