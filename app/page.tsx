import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BookStack } from "./components/BookStack";

const pillars = [
  ["01", "Leadership", "Protect the business, income, team, and decision-making capacity that fund the fight and support the future you are building for your children."],
  ["02", "Lifestyle", "Build the strength, sleep, health, energy, and daily discipline required to carry sustained pressure without abandoning yourself."],
  ["03", "Law", "Understand the battlefield, build the record, prepare the case, and work intelligently with attorneys or pro se instead of reacting blindly to the court."],
  ["04", "Love", "Protect the bond with your children, communicate without feeding the conflict, and rebuild what separation, alienation, or litigation has damaged."],
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-copy shell">
          <div className="hero-rule" aria-hidden="true" />
          <h1 className="home-hero-headline"><span data-text="Fight for your fatherhood.">Fight for your fatherhood.</span><span data-text="Fortify your foundation.">Fortify your foundation.</span><span data-text="Forge your family’s future.">Forge your family’s future.</span></h1>
          <div className="hero-actions"><Link className="button ember" href="/work-with-steve">Work with Steve</Link></div>
        </div>
        <div className="scroll-note">Scroll to enter the front <span>&darr;</span></div>
      </section>

      <section className="manifesto cream-section">
        <div className="shell manifesto-approved">
          <p className="section-kicker manifesto-kicker">The Foundation</p>
          <h2 className="home-intro-headline"><span className="home-intro-born">Born in <b>Blood.</b></span><span className="home-intro-forged">Forged in <em>Fire</em>.</span></h2>
          <p className="manifesto-detail">Fathers Front builds disciplined, powerful fathers who protect their relationship with their children, rebuild what family conflict has damaged, and create the business, freedom, and family legacy that come next.</p>
        </div>
      </section>

      <section className="pillars pillars-cross">
        <div className="shell pillars-cross-shell">
          <div className="pillars-cross-heading"><p className="section-kicker pillars-cross-kicker">The framework</p><h2 className="pillars-cross-intro">The court case is one front.<br /><em>The whole life enters it.</em></h2></div>
          <div className="pillars-cross-grid">
            {pillars.map(([n, title, copy]) => <article className="pillar" key={title}><span className="pillar-number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
            <h2 className="pillars-cross-center"><span>Four Fronts</span><span>One Father</span></h2>
          </div>
        </div>
      </section>

      <section className="books-section cream-section" id="books"><div className="shell books-grid"><div className="books-copy"><p className="section-kicker">Books from the front</p><h2>The story.<br /><em>The strategy.</em></h2><p>Stolen Sons is the story of father erasure and international custody litigation. Family Lawfare is the field manual for fathers who need to understand the battlefield before temporary damage becomes permanent.</p><Link className="button ink" href="/books">View all books</Link></div><BookStack /></div></section>

      <section className="work-section dark-section home-work-dossier" id="work"><div className="shell"><div className="section-heading split-heading home-work-heading"><div><p className="section-kicker">Work with Steve</p><h2>For fathers who refuse<br /><em>to be erased.</em></h2></div><p>When custody, family court, alienation, or abduction threatens your relationship with your children, you need more than information. You need the strategy, discipline, and support to lead the fight without letting it destroy the rest of your life.</p></div><div className="wsc-offers"><article className="wsc-card"><span className="wsc-label">Group program</span><h3>Bloodline Brotherhood</h3><p>A private coaching group for fathers who need weekly strategy, accountability, and support while navigating family court or rebuilding from its consequences.</p><div className="wsc-price"><strong>$497</strong><span>/ month</span></div><Link className="button outline" href="/bloodline-brotherhood">Explore Brotherhood</Link><small>Founding cohort opening soon.</small></article><article className="wsc-card"><span className="wsc-label">Private advisory</span><h3>Bloodline Advisory</h3><p>Private strategic counsel for fathers facing complex litigation, significant business or asset exposure, interstate or international conflict, abduction, or enforcement.</p><div className="wsc-price"><strong>$297</strong><span>60-minute call</span></div><Link className="button ember" href="/bloodline-advisory">Explore Advisory</Link><small>Private engagements begin at $15,000.</small></article></div></div></section>

      <section className="resources-section cream-section"><div className="shell"><div className="section-heading split-heading ink-heading"><div><p className="section-kicker">Articles</p><h2>Dispatches from<br /><em>the front.</em></h2></div><Link className="text-link dark-link" href="/articles">View all articles <span>&rarr;</span></Link></div><div className="resource-grid"><Link className="resource-feature" href="/podcast"><span>Podcast · Coming soon</span><h3>Conversations for fathers who refuse to disappear.</h3><b>Listen soon &rarr;</b></Link><Link className="resource-item" href="/articles/discipline-before-reaction-family-court"><span>Law</span><h3>Family court rewards reaction. Your case requires discipline.</h3><b>Read the dispatch &rarr;</b></Link><Link className="resource-item" href="/articles"><span>Lifestyle</span><h3>You cannot lead the life you want from a body you have abandoned.</h3><b>Read the dispatch &rarr;</b></Link></div></div></section>

      <section className="legacy-photo"><div className="legacy-overlay" /><div className="shell legacy-copy"><p className="section-kicker">What remains</p><h2>The battle is temporary.<br /><em>The bloodline is not.</em></h2><Link className="button light" href="/about">Read Steve&apos;s story</Link></div></section>
      <Footer />
    </main>
  );
}
