# Fathers Front Footer for Systeme.io

This footer mirrors the Fathers Front website while keeping every CSS selector scoped
under `.ff-sio-footer` so it does not interfere with Systeme.io page styles.

## 1. Page header code

Paste this into the Systeme.io page's **Settings → Tracking → Header code** field.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Libre+Franklin:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  .ff-sio-footer,
  .ff-sio-footer * {
    box-sizing: border-box;
  }

  .ff-sio-footer {
    --ff-ink: #171412;
    --ff-cream: #f4ecdc;
    --ff-oxblood: #912d2f;
    --ff-ember: #e84509;
    width: 100%;
    margin: 0;
    padding: 80px 0 35px;
    color: var(--ff-cream);
    background: #0c0a09;
    border-top: 1px solid rgba(244, 236, 220, 0.16);
    font-family: "Libre Franklin", Arial, sans-serif;
  }

  .ff-sio-footer a {
    color: inherit;
    text-decoration: none;
  }

  .ff-sio-footer__shell {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
  }

  .ff-sio-footer__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(130px, 0.7fr) minmax(180px, 0.8fr);
    gap: 60px;
  }

  .ff-sio-footer__dispatch {
    min-width: 0;
  }

  .ff-sio-footer__kicker {
    margin: 0 0 12px;
    color: #8d8378;
    font: 600 11px "Barlow Condensed", Arial, sans-serif;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .ff-sio-footer__title {
    max-width: 560px;
    margin: 0;
    color: var(--ff-cream);
    font: 700 42px/0.95 "Barlow Condensed", Arial, sans-serif;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .ff-sio-footer__description {
    max-width: 560px;
    margin: 12px 0 22px;
    color: #a99f92;
    font-size: 14px;
    line-height: 1.6;
  }

  .ff-sio-footer__form {
    display: flex;
    align-items: stretch;
    gap: 10px;
    max-width: 580px;
    margin: 0;
  }

  .ff-sio-footer__form input {
    min-width: 0;
    flex: 1 1 auto;
    height: 50px;
    margin: 0;
    padding: 0 16px;
    color: var(--ff-cream);
    background: #100e0d;
    border: 1px solid #675d53;
    border-radius: 0;
    box-shadow: none;
    font: 500 14px "Libre Franklin", Arial, sans-serif;
  }

  .ff-sio-footer__form input::placeholder {
    color: #8d8378;
  }

  .ff-sio-footer__form input:focus {
    outline: 2px solid var(--ff-cream);
    outline-offset: 2px;
  }

  .ff-sio-footer__form button {
    flex: 0 0 auto;
    min-height: 50px;
    margin: 0;
    padding: 0 18px;
    color: var(--ff-cream);
    background: transparent;
    border: 2px solid var(--ff-oxblood);
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    font: 600 12px "Barlow Condensed", Arial, sans-serif;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
    transition: color 160ms ease, background 160ms ease, border-color 160ms ease;
  }

  .ff-sio-footer__form button:hover,
  .ff-sio-footer__form button:focus-visible {
    color: #000;
    background: #fff;
    border-color: #fff;
  }

  .ff-sio-footer__links {
    display: grid;
    align-content: start;
    gap: 15px;
    font: 600 15px "Barlow Condensed", Arial, sans-serif;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .ff-sio-footer__links a {
    width: fit-content;
    color: var(--ff-cream);
    transition: color 160ms ease;
  }

  .ff-sio-footer__links a:hover,
  .ff-sio-footer__links a:focus-visible {
    color: var(--ff-ember);
  }

  .ff-sio-footer__note {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #8d8378;
  }

  .ff-sio-footer__pillars {
    margin: 0;
    color: var(--ff-cream);
    font: 600 20px/1.15 "Barlow Condensed", Arial, sans-serif;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .ff-sio-footer__pillars i {
    color: var(--ff-oxblood);
    font-style: normal;
  }

  .ff-sio-footer__social {
    display: flex;
    gap: 8px;
    margin: 28px 0;
  }

  .ff-sio-footer__social a {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    color: var(--ff-cream);
    border: 1px solid rgba(244, 236, 220, 0.25);
    transition: color 160ms ease, background 160ms ease, border-color 160ms ease;
  }

  .ff-sio-footer__social a:hover,
  .ff-sio-footer__social a:focus-visible {
    color: #fff;
    background: var(--ff-oxblood);
    border-color: var(--ff-oxblood);
  }

  .ff-sio-footer__social svg {
    width: 19px;
    height: 19px;
    display: block;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
  }

  .ff-sio-footer__social .ff-sio-footer__social-fill {
    fill: currentColor;
    stroke: none;
  }

  .ff-sio-footer__legal {
    margin: 0;
    color: #8d8378;
    font-size: 13px;
    line-height: 1.5;
  }

  .ff-sio-footer__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 800px) {
    .ff-sio-footer {
      padding: 64px 0 30px;
    }

    .ff-sio-footer__shell {
      width: min(100% - 36px, 1180px);
    }

    .ff-sio-footer__grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .ff-sio-footer__title {
      font-size: clamp(36px, 10vw, 46px);
    }

    .ff-sio-footer__note {
      display: block;
    }
  }

  @media (max-width: 560px) {
    .ff-sio-footer__form {
      flex-direction: column;
    }

    .ff-sio-footer__form button {
      width: 100%;
    }
  }
</style>
```

## 2. Footer HTML

Add a **Raw HTML** element as the final element on the page and paste this into it.

Before publishing, replace `YOUR_SYSTEME_IO_FORM_ACTION_URL` with the form action
from the Systeme.io opt-in form used by that funnel.

```html
<footer class="ff-sio-footer">
  <div class="ff-sio-footer__shell">
    <div class="ff-sio-footer__grid">
      <section class="ff-sio-footer__dispatch" aria-labelledby="ff-dispatch-title">
        <p class="ff-sio-footer__kicker">Weekly field note</p>
        <h2 class="ff-sio-footer__title" id="ff-dispatch-title">The Fathers Front Dispatch</h2>
        <p class="ff-sio-footer__description">A weekly field note for fathers and builders under pressure.</p>

        <form class="ff-sio-footer__form" action="YOUR_SYSTEME_IO_FORM_ACTION_URL" method="post">
          <label class="ff-sio-footer__sr-only" for="ff-dispatch-email">Email address</label>
          <input id="ff-dispatch-email" name="email" type="email" autocomplete="email" placeholder="Email address" required>
          <button type="submit">Join the Dispatch</button>
        </form>
      </section>

      <nav class="ff-sio-footer__links" aria-label="Fathers Front">
        <a href="https://fathersfront.com/">Home</a>
        <a href="https://fathersfront.com/books/">Books</a>
        <a href="https://fathersfront.com/articles/">Articles</a>
        <a href="https://fathersfront.com/speaking/">Speaking</a>
        <a href="https://fathersfront.com/work-with-steve/">Work With Steve</a>
        <a href="https://fathersfront.com/about/">About</a>
        <a href="https://fathersfront.com/the-framework/">The Framework</a>
      </nav>

      <section class="ff-sio-footer__note" aria-label="Fathers Front information">
        <p class="ff-sio-footer__pillars">
          Love<i>.</i> Law<i>.</i><br>
          Leadership<i>.</i> Lifestyle<i>.</i>
        </p>

        <div class="ff-sio-footer__social">
          <a href="https://instagram.com/fathersfront" target="_blank" rel="noopener noreferrer" aria-label="Fathers Front on Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4.2"></circle>
              <circle class="ff-sio-footer__social-fill" cx="17.4" cy="6.8" r="1.1"></circle>
            </svg>
          </a>
          <a href="https://facebook.com/fathersfront" target="_blank" rel="noopener noreferrer" aria-label="Fathers Front on Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path class="ff-sio-footer__social-fill" d="M13.7 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.5-.1-1.4-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.5V13h2.8v8h3.4Z"></path>
            </svg>
          </a>
          <a href="https://youtube.com/@fathersfront" target="_blank" rel="noopener noreferrer" aria-label="Fathers Front on YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2.5" y="5" width="19" height="14" rx="4"></rect>
              <path class="ff-sio-footer__social-fill" d="m10 9 6 3-6 3V9Z"></path>
            </svg>
          </a>
        </div>

        <p class="ff-sio-footer__legal">© <span data-ff-current-year>2026</span> Fathers Front</p>
      </section>
    </div>
  </div>
</footer>
```

## 3. Page footer code

Paste this into the Systeme.io page's **Settings → Tracking → Footer code** field.
It updates the copyright year and preserves standard campaign parameters when a
visitor returns to Fathers Front.

```html
<script>
  (function () {
    var footer = document.querySelector(".ff-sio-footer");
    if (!footer) return;

    var year = footer.querySelector("[data-ff-current-year]");
    if (year) year.textContent = new Date().getFullYear();

    var allowed = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    var incoming = new URLSearchParams(window.location.search);
    var campaign = new URLSearchParams();

    allowed.forEach(function (key) {
      if (incoming.has(key)) campaign.set(key, incoming.get(key));
    });

    if (!campaign.toString()) return;

    footer.querySelectorAll('a[href^="https://fathersfront.com/"]').forEach(function (link) {
      var url = new URL(link.href);
      campaign.forEach(function (value, key) {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value);
      });
      link.href = url.toString();
    });
  })();
</script>
```

## Systeme.io form connection

Do not publish the placeholder form action. The reliable options are:

1. Copy the `action` value and any hidden fields from a working Systeme.io form into
   the footer form above.
2. If Systeme.io does not expose that action, use a native Systeme.io form element,
   assign its container the class `ff-sio-footer__form`, and remove the form markup
   from the HTML snippet.

The second option is usually easier to maintain because the funnel automation stays
attached to a native Systeme.io form.
