# Fathers Front Portal Repository

This directory is the version-controlled source of truth for the shared
Fathers Front Systeme.io shell, page-specific portal code, and working
reference files.

## Structure

```text
portal/
  shared/
    fathers-front-base-code.txt
    fathers-front-header-menu.txt
    fathers-front-footer-menu.txt
    fathers-front-footer-code.txt
    fathers-front-header-code.txt
  pages/
    advisory/
      complete-head-code.txt
      page-head-code.txt
    stolen-sons/
      checkout-code.txt
      complete-head-code.txt
    order-thank-you/
      complete-head-code.txt
      page-head-code.txt
      page-html.txt
  reference/
    systeme-io-footer-snippets.md
    systeme-io-header-menu.html
    systeme-io-site-shell-installation.md
    systeme-order-thank-you-body.html
```

Public portal and product images live in:

```text
public/assets/portal/
public/assets/products/
public/assets/products/checkout/
```

## Shared installation

Install these on every Systeme.io page:

1. `shared/fathers-front-base-code.txt`
2. `shared/fathers-front-header-menu.txt`
3. `shared/fathers-front-footer-menu.txt`
4. `shared/fathers-front-footer-code.txt`

Replace the complete contents of the corresponding Systeme.io field. Do not
paste a new version beneath an older copy.

## Stolen Sons checkout

Add `pages/stolen-sons/checkout-code.txt` after the shared installation. It
contains only checkout-specific field, Stripe, consent, radio, summary, and
focus styling. The generated Systeme.io component IDs must be rechecked if a
component is deleted and recreated.

`pages/stolen-sons/complete-head-code.txt` is the known-working combined
installation snapshot.

## Bloodline Advisory checkout

Use `pages/advisory/complete-head-code.txt` to replace the complete page head
installation. Its page-only override is preserved separately in
`pages/advisory/page-head-code.txt`.

## Order thank-you page

After the shared installation, use:

1. `pages/order-thank-you/page-head-code.txt`
2. `pages/order-thank-you/page-html.txt`

`pages/order-thank-you/complete-head-code.txt` is the known-working combined
installation snapshot.

## Maintenance

- Keep reusable shell code in `shared/`.
- Keep page-only rules in the matching `pages/<page-name>/` directory.
- Keep deployable images under `public/assets/portal/` or
  `public/assets/products/`.
- Keep the `reference/` files for comparison and recovery; they are not the
  primary installation files.
- Update visible and accessible portal version labels when the main-site
  release changes.
- Replace `YOUR_SYSTEME_IO_FORM_ACTION_URL` before enabling the Dispatch form.
