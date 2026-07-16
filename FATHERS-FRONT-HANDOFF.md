# Fathers Front Website Handoff

## Project folder

`C:\Users\meste\Documents\Codex\2026-07-09\i-need-you-to-design-a`

## Important: do not change hosting or deployment workflow

The site has historically been deployed by uploading a complete static site folder to Cloudflare manually. Do **not** introduce Wrangler, Git deployment, or a different hosting workflow unless Steve explicitly asks.

## Last known-good build

`fathersfront-cloudflare-upload-v52`

This is the baseline to preserve. It contains 30 HTML pages and the full asset set.

## Current requested change only

Use V.52 as the baseline. Change **only** the homepage Foundation/WDYD section.

### Approved WDYD copy

**Fathers are being _erased._**  
**We are here to build them back.**

I'm Steve Love. Fathers Front helps fathers rebuild their presence, their future, and their ability to lead after family conflict and financial loss.

### Approved visual direction

- Cream background
- First line: black Barlow Condensed, with **erased.** in orange Source Serif 4 italic
- Second line: black Barlow Condensed bold
- Final paragraph: Libre Franklin regular, indented with a vertical orange line at its left
- Preserve the existing small orange line and `THE FOUNDATION` label
- No oxblood in this section
- Do not alter any other homepage section, navigation, footer, fonts, routes, or images

## Existing V.53 working copy folder

`fathersfront-cloudflare-upload-v53-wdyd`

This was created by copying V.52 and updating the Foundation/WDYD markup and styling. It must be visually checked locally before it is handed off. Do not create a new deployment method.

## Brand tokens

- Ink: `#171412`
- Cream: `#f4ecdc`
- Oxblood: `#912d2f`
- Orange/ember: `#e84509`
- Hero: Druk XCondensed
- Display: Barlow Condensed
- Italics: Source Serif 4, 600 italic
- Body: Libre Franklin, regular
- Wordmark: Tungsten Condensed

## Pillars

Leadership, Lifestyle, Law, Love.

Legacy has been replaced by Lifestyle on the homepage and footer.

## Versioning

Every build should show `V.xx` in the header/menu. The next handoff build should be `V.53` if using the V.52 baseline.

## Instruction for the new task

"Open `FATHERS-FRONT-HANDOFF.md`. Do not change hosting or deployment. Start from `fathersfront-cloudflare-upload-v52`, make only the approved Foundation/WDYD homepage change, verify it locally, then give me one complete static upload folder with all pages and assets included."
