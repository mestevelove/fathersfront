import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BookStack } from "./components/BookStack";

const pillars = [
  ["01", "Leadership", "Grow your business, team, revenue, and capacity to lead when your private life and professional life collide."],
  ["02", "Lifestyle", "Build the physical discipline, health, energy, and daily standards required to carry the life you want."],
  ["03", "Law", "Navigate custody, child support, family court, and the systems surrounding them with discipline instead of reaction."],
  ["04", "Love", "Lead your woman and family with strength, truth, devotion, and the capacity to remain present when pressure rises."],
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
          <h1><span data-text="Born in Blood.">Born in Blood.</span><span data-text="Forged in Fire.">Forged in Fire.</span></h1>
          <p className="hero-sub"><b>Love</b><i>.</i> Law<i>.</i> Leadership<i>.</i> Lifestyle<i>.</i></p>
          <div className="hero-actions"><Link className="button ember" href="/work-with-steve">Work with Steve</Link></div>
        </div>
        <div className="scroll-note">Scroll to enter the front <span>&darr;</span></div>
      </section>

      <section className="manifesto cream-section">
        <div className="shell manifesto-approved">
          <p className="section-kicker manifesto-kicker">The Foundation</p>
          <h2>Fathers are being <em>erased.</em><span>We are here to build them back.</span></h2>
          <p className="manifesto-detail">I&apos;m Steve Love. Fathers Front helps fathers rebuild their presence, their future, and their ability to lead after family conflict and financial loss.</p>
        </div>
      </section>

      <section className="pillars pillars-cross">
        <div className="shell pillars-cross-shell">
          <div className="pillars-cross-heading"><p className="section-kicker pillars-cross-kicker">The framework</p><h2 className="pillars-cross-intro">A father cannot lead one front<br />while <em>failing another.</em></h2></div>
          <div className="pillars-cross-grid">
            {pillars.map(([n, title, copy]) => <article className="pillar" key={title}><span className="pillar-number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
            <h2 className="pillars-cross-center"><span>Four Fronts</span><span>One Father</span></h2>
          </div>
        </div>
      </section>

      <section className="books-section cream-section" id="books"><div className="shell books-grid"><div className="books-copy"><p className="section-kicker">Books from the front</p><h2>Stories and strategy<br />from <em>inside the fire.</em></h2><p>One is the story of what happened. The other is the field manual built from surviving it.</p><Link className="button ink" href="/books">View all books</Link></div><BookStack /></div></section>

      <section className="work-section dark-section home-work-dossier" id="work"><div className="shell"><div className="section-heading split-heading home-work-heading"><div><p className="section-kicker">Work with Steve</p><h2>For men building<br /><em>through battle.</em></h2></div><p>When the decisions carry consequences across your family, business, and future, you need more than advice. You need someone who has been in the fire.</p></div><div className="wsc-offers"><article className="wsc-card"><span className="wsc-label">Group program</span><h3>Bloodline Brotherhood</h3><p>A private group for men strengthening Leadership, Lifestyle, Law, and Love together.</p><div className="wsc-price"><strong>$497</strong><span>/ month</span></div><Link className="button outline" href="/bloodline-brotherhood">View the program</Link><small>Founding cohort opening soon.</small></article><article className="wsc-card"><span className="wsc-label">Private advisory</span><h3>Bloodline Advisory</h3><p>Strategic counsel for high-net-worth founders, seven-figure entrepreneurs, business owners, and senior leaders.</p><div className="wsc-price"><strong>$247</strong><span>45-minute call</span></div><Link className="button ember" href="/bloodline-advisory">View the advisory</Link><small>Private engagements begin at $15,000.</small></article></div></div></section>

      <section className="resources-section cream-section"><div className="shell"><div className="section-heading split-heading ink-heading"><div><p className="section-kicker">Articles</p><h2>Dispatches from<br /><em>the front.</em></h2></div><Link className="text-link dark-link" href="/articles">View all articles <span>&rarr;</span></Link></div><div className="resource-grid"><Link className="resource-feature" href="/podcast"><span>Podcast · Coming soon</span><h3>Conversations for men who refuse to disappear.</h3><b>Listen soon &rarr;</b></Link><Link className="resource-item" href="/articles/discipline-before-reaction-family-court"><span>Law</span><h3>Family court rewards reaction. Your case requires discipline.</h3><b>Read the dispatch &rarr;</b></Link><Link className="resource-item" href="/articles"><span>Lifestyle</span><h3>You cannot lead the life you want from a body you have abandoned.</h3><b>Read the dispatch &rarr;</b></Link></div></div></section>

      <section className="legacy-photo"><div className="legacy-overlay" /><div className="shell legacy-copy"><p className="section-kicker">What remains</p><h2>The battle is temporary.<br /><em>The bloodline is not.</em></h2><Link className="button light" href="/about">Read Steve&apos;s story</Link></div></section>
      <Footer />
    </main>
  );
}
