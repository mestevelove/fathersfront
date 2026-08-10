import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const fundraiserUrl =
  "https://www.gofundme.com/f/help-me-bring-my-son-ori-home-from-germany";

export default function DonatePage() {
  return (
    <main>
      <Header />
      <section className="donate-page donate-hero">
        <div className="donate-shell">
          <p className="section-kicker">Bring Ori Home</p>

          <div className="donate-grid">
            <div className="donate-copy">
              <h1>
                Help Me Bring
                <span>My Son Home.</span>
              </h1>

              <p className="donate-lead">
                This fight is about bringing Ori home from Germany and giving him
                the safety, stability, and support he needs afterward.
              </p>

              <p>
                Your contribution helps fund the legal, travel, and recovery costs
                required to keep moving this fight forward. If you cannot donate,
                sharing the fundraiser still matters.
              </p>

              <a
                className="button red donate-direct-link"
                href={fundraiserUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate on GoFundMe
              </a>
            </div>

            <aside className="donate-widget" aria-label="GoFundMe fundraiser">
              <iframe
                className="gfm-embed-iframe"
                src="https://www.gofundme.com/f/help-me-bring-my-son-ori-home-from-germany/widget/large?attribution_id=sl%3A7a4485cb-2c0a-4449-a1c1-9302960c1cd6"
                title="Help bring Ori home from Germany"
                width="100%"
                height="620"
                scrolling="no"
              />
              <noscript>
                <a href={fundraiserUrl}>View the fundraiser on GoFundMe</a>
              </noscript>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
