import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const fronts = [
  ["01", "Leadership", "Turn the lessons of your losses into the work you are here to lead. Build the business, career, platform, team, or body of work that gives your experience a purpose beyond survival."],
  ["02", "Lifestyle", "Lead your body before it becomes another crisis. Build the strength, food, sleep, discipline, energy, and daily standards required to carry the life you say you want."],
  ["03", "Law", "Stop reacting blindly when custody, child support, family court, allegations, or litigation affect your family. Understand the battlefield, direct your own decisions, and work intelligently with the right professionals."],
  ["04", "Love", "Lead your relationships and family with more than intention. Create the boundaries, truth, devotion, discernment, and presence that your woman and children can actually feel."],
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
        <h1>Lead from the lessons of your losses.</h1>
        <p className="work-simple-subtitle">Live the life you know is possible.</p>

        <CopySection>
          <p>You are not here merely to recover from what happened to you.</p>
          <p>You are here to build from it.</p>
          <p>Fathers Front is for fathers, founders, leaders, and builders who know they are capable of more than the life they are currently leading. Some own businesses. Some are rebuilding after loss. Some are still employed but know they are meant to create, lead, and own more of their future.</p>
          <p>You may have built real capability, income, status, or responsibility. But something is not working. Your business may be moving while your body is neglected. You may be fighting for your children while your work is losing focus. You may be carrying the family financially while feeling disconnected from your woman, your purpose, or yourself.</p>
          <p>You do not need another isolated answer.</p>
          <p>You need to lead the whole life.</p>
        </CopySection>

        <CopySection title="The Challenge">
          <p>You can be strong in one front and still be failing in another.</p>
          <p>That is what makes this season so dangerous.</p>
          <p>The business problem affects the family. The family problem enters the business. A legal battle takes over your nervous system. Your health slips. Your relationships absorb what is left. Then you try to solve each problem separately, with separate experts, separate plans, and separate versions of yourself.</p>
          <p>But it is all one life. And you are the one responsible for leading it.</p>
        </CopySection>

        <CopySection title="The Cost">
          <p>A man can make money and still be broke in the places that matter.</p>
          <p>He can win arguments and lose access to his children. He can build a company while his body deteriorates. He can stay busy enough to avoid the truth, then wonder why the people closest to him no longer experience him as present.</p>
          <p>The cost is not only what happens outside of you.</p>
          <p>The cost is becoming reactive. Smaller. Divided. A man who knows he is capable of more, but is no longer living at the level he expects of himself.</p>
        </CopySection>

        <CopySection title="I Know the Terrain">
          <p>I did not build this work from the sidelines.</p>
          <p>For years, every breakup hit my business. I could lead, sell, coach, and create, but I had not learned how to hold the pressure of my personal life without letting it take down everything else.</p>
          <p>During my marriage, I became overweight, struggled with addiction, and was hospitalized. I was functioning, but I was not leading my body or my life.</p>
          <p>During my first divorce, I lived in anxiety and reaction. I did not understand how to move through the court process, and I gave too much responsibility to people who could never care more about my family than I did.</p>
          <p>My relationship patterns made the problems worse. I had good intentions, but intention is not leadership.</p>
          <p>Then I started building differently.</p>
          <p>My first divorce led me into coaching and work that became a multi-million-dollar business. I coached hundreds of entrepreneurs, executives, doctors, and leaders.</p>
          <p>I rebuilt my body. I lost fifty pounds, developed a disciplined diet, and train every day because physical capacity is not optional when people depend on you.</p>
          <p>When my youngest son was abducted and taken overseas, I took responsibility for understanding the legal battlefield, building the record, and directing the strategy alongside the professionals I hired. I secured sole custody in two countries and went to Germany to bring him home.</p>
          <p>I have been married for more than twenty years, raised sons through different seasons of life, and learned that love requires more than attraction or good intentions. It requires truth, standards, presence, and the ability to stay in the room when things get hard.</p>
          <p>That is why this work exists.</p>
        </CopySection>
      </div>
    </article>

    <section className="work-simple-framework cream-section">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote">The Four Fronts</blockquote>
        <div className="work-simple-front-list">
          {fronts.map(([number, title, copy]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div>
    </section>

    <article className="work-simple-copy cream-section">
      <div className="shell work-simple-column">
        <CopySection title="The Change">
          <p>This is not about becoming a different person.</p>
          <p>It is about becoming the person you know you are capable of being when your business, body, family, legal decisions, and relationships are no longer pulling in opposite directions.</p>
          <p>You stop treating your losses as evidence that life beat you.</p>
          <p>You use them as instruction.</p>
          <p>You lead from the lessons of your losses. You live the life you know is possible.</p>
        </CopySection>
      </div>
    </article>

    <section className="work-simple-offers cream-section">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote">Choose Your Level of Support</blockquote>
        <div className="work-v2-offers">
          <article className="work-v2-brotherhood"><span>Bloodline Brotherhood</span><h3>Bloodline<br />Brotherhood</h3><p>A private group coaching environment for fathers and builders who want structure, honest feedback, accountability, and a room of people committed to leading across all four fronts.</p><p>Weekly group calls focused on Leadership, Lifestyle, Law, and Love.</p><strong>$497 <small>per month</small></strong><small>Founding cohort opening soon.</small><Link className="button cream-button" href="/bloodline-brotherhood">Enroll Now</Link></article>
          <article className="work-v2-advisory"><span>Bloodline Advisory</span><h3>Bloodline<br />Advisory</h3><p>Private strategic counsel for founders, business owners, executives, and leaders facing consequential decisions across business, family, law, lifestyle, and relationships.</p><strong>$297</strong><p>A 60-minute Bloodline Advisory Call: 45 minutes of focused strategy, followed by 15 minutes to discuss deeper private advisory if it makes sense. One call at this rate per person.</p><Link className="button ember" href="/bloodline-advisory">Enroll Now</Link></article>
        </div>
        <div className="work-simple-next"><p>You do not have to keep winning one front while another one burns.</p><p>Choose the support that fits the season you are in.</p></div>
      </div>
    </section>
    <Footer />
  </main>;
}
