import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const fronts = [
  ["01", "Leadership", "Protect the income, business, career, team, and operating capacity that fund the fight and support the future you are building for your children."],
  ["02", "Lifestyle", "Build the strength, sleep, food, health, energy, and discipline required to make clear decisions under sustained pressure."],
  ["03", "Law", "Understand the battlefield, build the chronology and record, prepare the case, and work intelligently with attorneys or pro se so you stop reacting and start creating pressure."],
  ["04", "Love", "Protect the bond with your children, communicate without feeding the conflict, rebuild after alienation or separation, and stop repeating the relationship patterns that created the fracture."],
];

function CopySection({ title, children }: { title?: string; children: ReactNode }) {
  return <section className="work-simple-copy-section">{title && <h2>{title}</h2>}{children}</section>;
}

export default function WorkWithStevePage() {
  return <main className="work-simple">
    <Header />
    <article className="work-simple-copy cream-section">
      <div className="shell work-simple-column">
        <p className="work-simple-label">Work With Steve</p>
        <h1>Protect your relationship with your children.</h1>
        <p className="work-simple-subtitle">Lead the fight that will shape their future.</p>

        <CopySection>
          <p>You may be preparing for court, already in active litigation, working with an attorney, representing yourself, trying to undo damaging orders, or rebuilding after the case changed your family.</p>
          <p>Wherever you are in the process, the problem is larger than the next hearing. Your relationship with your children, your money, your work, your health, and your ability to lead are all being tested at once.</p>
          <p>Fathers Front helps committed fathers build pressure through preparation, make better decisions, and lead across Love, Law, Leadership, and Lifestyle.</p>
        </CopySection>

        <CopySection title="The Challenge">
          <h3>Love is the reason you fight.<br />It is not a litigation strategy.</h3>
          <p>Most fathers enter family court believing the truth will be obvious, their attorney will handle everything, or the conflict will resolve before permanent damage is done.</p>
          <p>Then temporary orders, missed deadlines, emotional messages, weak evidence, financial pressure, and bad decisions begin shaping the future.</p>
          <p>An attorney can provide legal representation. They cannot know the facts better than you, care more about the outcome, or replace your responsibility to lead the preparation, communication, resources, and decisions surrounding your case.</p>
        </CopySection>

        <CopySection title="The Cost">
          <h3>Reaction gets expensive.</h3>
          <p>Every unnecessary filing costs money. Every emotional message can become part of the record. Every month of lost time with your children can become harder to recover. Every hour consumed by the case is an hour taken from your work, your body, and the life you are trying to preserve.</p>
          <p>Most fathers do not lose ground because they do not love their children.</p>
          <p>They lose ground because they enter an unfamiliar system in reaction. They wait too long, trust too blindly, communicate too emotionally, or conserve money until the damage costs more to repair.</p>
          <p>This is how fathers lose more than hearings. They lose income, health, confidence, relationships, and years of their children&apos;s lives.</p>
        </CopySection>

        <CopySection title="I Know the Terrain">
          <p>I did not build this work from theory.</p>
          <p>In my first divorce, I gave too much responsibility to professionals, lived in reaction, and learned what happens when a father enters family court without understanding the battlefield.</p>
          <p>Years later, when my youngest son was taken to Germany, I did it differently. I learned the law, built the record, represented myself through critical stages of the Texas case, secured sole custody in Texas, filed and won a Hague return case in Germany, defeated the appeal, and continue working through enforcement and return.</p>
          <p>Before this fight, I built a multi-million-dollar coaching business and coached hundreds of entrepreneurs, executives, doctors, and leaders. I know how to build income, teams, discipline, and momentum while life is under pressure.</p>
          <p>I did not simply survive the litigation.</p>
          <p>I learned how to lead it.</p>
          <p>That is the work I bring to Fathers Front.</p>
        </CopySection>
      </div>
    </article>

    <section className="work-simple-framework cream-section">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote">The Four Fronts</blockquote>
        <h2>The problem may begin in court.<br />The solution requires the whole man.</h2>
        <p>Law is the doorway for many fathers. The other three fronts determine whether you can carry the fight, protect what remains, and build the life your children need on the other side.</p>
        <div className="work-simple-front-list">
          {fronts.map(([number, title, copy]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div>
    </section>

    <article className="work-simple-copy cream-section">
      <div className="shell work-simple-column">
        <CopySection title="The Change">
          <h3>Become the father the fight requires.</h3>
          <p>This does not mean becoming a lawyer.</p>
          <p>It means becoming the man who knows the facts, controls his communication, directs his resources, holds his standards, and refuses to let other people define his relationship with his children.</p>
          <p>The court matter may be temporary.</p>
          <p>The father you become, the business you preserve, the health you rebuild, and the relationship you fight for will shape the rest of your life.</p>
        </CopySection>
      </div>
    </article>

    <section className="work-simple-offers cream-section">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote">Choose Your Level of Support</blockquote>
        <h2>Choose the support that matches the stakes.</h2>
        <p>Both offers use the same Four Fronts. The difference is the complexity of the situation, the amount at risk, and the level of access required.</p>
        <div className="work-v2-offers">
          <article className="work-v2-brotherhood"><span>Bloodline Brotherhood</span><h3>Bloodline<br />Brotherhood</h3><p>A private coaching group for fathers navigating custody, child support, alienation, modification, enforcement, or the rebuild that follows.</p><p>Weekly group calls combine case leadership, accountability, and coaching across Leadership, Lifestyle, Law, and Love.</p><strong>$497 <small>per month</small></strong><small>Founding cohort opening soon.</small><Link className="button cream-button" href="/bloodline-brotherhood">Explore Brotherhood</Link></article>
          <article className="work-v2-advisory"><span>Bloodline Advisory</span><h3>Bloodline<br />Advisory</h3><p>Private strategic counsel for fathers facing complex litigation, significant business or asset exposure, interstate or international conflict, abduction, enforcement, or multiple professional teams.</p><p>Start with a 60-minute private strategy call. Private advisory engagements begin at $15,000.</p><strong>$297</strong><p>A focused 60-minute private strategy call to identify the highest-risk issue, clarify the decision in front of you, and determine the next actions required. One call at this rate per person.</p><Link className="button ember" href="/bloodline-advisory">Book a Strategy Call</Link></article>
        </div>
        <div className="work-simple-next"><p>You do not need another person to rescue you.</p><p>You need a clear strategy, consistent pressure, and the support to lead.</p><p>Choose the level that matches the fight in front of you.</p></div>
      </div>
    </section>
    <Footer />
  </main>;
}
