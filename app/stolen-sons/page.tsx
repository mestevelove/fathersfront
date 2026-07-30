import { ProductDetail } from "../components/ProductDetail";

const standardCheckoutUrl = "https://portal.fathersfront.com/stolen-sons?edition=standard";
const signedCheckoutUrl = "https://portal.fathersfront.com/stolen-sons?edition=signed";

export default function StolenSonsPage() {
  return (
    <ProductDetail
      type="Book · Memoir"
      status="Available now"
      title={<>Stolen<br />Sons</>}
      deck="A father erased. A son taken. A fight not finished."
      description="A memoir of love, exile, international family court, and a father who refused to disappear when distance and the system expected him to surrender."
      cta="Choose Your Edition"
      ctaHref="#editions"
      image="/assets/stolen-sons-cover.webp"
      imageAlt="Stolen Sons book cover"
      details={[
        {
          number: "01",
          title: "The story",
          copy: "After his young son was taken across an ocean, Steve Love entered a two-year legal fight spanning Texas and Germany. What followed was not merely a custody case. It was a confrontation with fatherhood, identity, power, and the price of keeping a promise.",
        },
        {
          number: "02",
          title: "For the father who will not disappear",
          copy: "This book is for men carrying grief, responsibility, and battles few people can see—and for anyone who wants to understand what happens when a father is forced to prove that his presence matters.",
        },
      ]}
      nextHref="/family-lawfare"
      nextLabel="Next book: Family Lawfare"
    >
      <section className="shell book-editions" id="editions" aria-labelledby="stolen-sons-editions-title">
        <div className="book-editions-heading">
          <p className="section-kicker">Choose your edition</p>
          <h2 id="stolen-sons-editions-title">One story.<br /><em>Two ways to stand behind it.</em></h2>
          <p>Choose the standard edition or claim one of one hundred signed copies created for those who want to stand behind the mission that gave this story its meaning.</p>
        </div>
        <div className="book-edition-grid">
          <article className="book-edition-card">
            <p className="book-edition-number">Standard edition</p>
            <h3>Stolen Sons</h3>
            <p className="book-edition-price"><strong>$25</strong><span>One-time purchase</span></p>
            <ul>
              <li>One standard copy of Stolen Sons</li>
              <li>The complete story of the fight across Texas and Germany</li>
              <li>Standard fulfillment</li>
            </ul>
            <a className="button ink" href={standardCheckoutUrl}>Buy the Standard Edition</a>
          </article>
          <article className="book-edition-card book-edition-card-featured">
            <p className="book-edition-number">Limited to 100 copies</p>
            <h3>The Founding Hundred</h3>
            <p className="book-edition-price"><strong>$100</strong><span>Signed and numbered</span></p>
            <ul>
              <li>One signed copy of Stolen Sons</li>
              <li>Individually numbered as part of the Founding Hundred</li>
              <li>Your purchase supports Ori&apos;s return and recovery efforts</li>
            </ul>
            <a className="button ember" href={signedCheckoutUrl}>Claim a Signed Copy</a>
          </article>
        </div>
        <p className="book-editions-note">Both buttons lead to the same secure checkout. Select your edition before completing your order.</p>
      </section>
    </ProductDetail>
  );
}
