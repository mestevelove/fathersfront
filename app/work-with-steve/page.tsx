import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Story({ children }: { children: ReactNode }) {
  return <section className="work-story">{children}</section>;
}

const stages = [
  {
    number: "01",
    label: "Stage 1",
    title: "Fight for Your Fatherhood",
    copy: <><p>You’re in family court and in a high-conflict situation where you’re fighting just to be a father.</p><p>This is a legal battle for most and definitely a financial battle.</p></>,
  },
  {
    number: "02",
    label: "Stage 2",
    title: "Fortify Your Foundation",
    copy: <><p>After the legal fight, you’re rebuilding your life for you and your kids, if you were lucky enough to have a meaningful relationship.</p><p>Many make it to this point and think the hard work is done.</p><p>That is a mistake.</p></>,
  },
  {
    number: "03",
    label: "Stage 3",
    title: "Forge Your Family’s Future",
    copy: <><p>Most men never really make it here.</p><p>These are the men who know they were put here to create.</p><p>It will be different for each man.</p><p>It could be a business goal, a book, travel, or creating a legacy for your kids.</p><p>Very few men actually create the lives they really want.</p><p>They either make it through family court just to survive, or they use it as the foundation to thrive.</p></>,
  },
];

export default function WorkWithStevePage() {
  return <main className="work-simple">
    <Header />
    <article className="work-simple-copy cream-section">
      <div className="shell work-simple-column">
        <p className="work-simple-label">Work With Steve</p>
        <h1>If you’re a father and made it to this page, there is a reason for it.</h1>

        <Story>
          <p>They say women are born and men are made.</p>
          <p>I’ve spent over 30 years trying to figure out what makes a man, and I’m a father of four sons.</p>
          <p>The problem is that nothing in Western society teaches men to be men and fathers to be fathers.</p>
          <p>Right when we are born, our dicks are clipped.</p>
          <p>Our fathers are away from the home providing and ill-equipped to show us what a real man is.</p>
          <p>We are left with our mothers.</p>
          <p>Then we are shipped off to school, where 90% of the teachers are women through elementary school.</p>
          <p>Schools were designed to teach boys to conform.</p>
          <p>Masculinity is a mockery in movies and media.</p>
        </Story>

        <Story>
          <p>You find the woman, you have your kids, you’ve got the house, and you’re making good money.</p>
          <p>Then she leaves and you’re hit with a divorce or custody battle.</p>
          <p>And for many of you, a restraining order.</p>
          <p>Close to 90% of women are the first to file.</p>
          <p>You spend years fighting for your kids. Maybe you get some time, maybe you don’t.</p>
          <p>You get child support, though.</p>
          <p>Financially wiped out.</p>
          <p>Emotionally scarred.</p>
          <p>Lost time with your kids that you will never get back.</p>
          <p>You’re alone to fight this. Nobody gives a shit.</p>
          <p>The courts, your attorney, and your ex all get their fair share.</p>
          <p>You know it’s wrong. It’s like the entire system gaslit you, and you can feel it pulling your last nerve.</p>
          <p>So you suck it up and move through it.</p>
          <p>You rebuild from nothing.</p>
          <p>A part of your soul has been stolen.</p>
          <p>Every child support payment.</p>
          <p>Every critical remark from your ex.</p>
          <p>It feels like a prison sentence while you wait for your kids to age out and let them make their own choices.</p>
          <p>You pray they see the price you paid and the truth.</p>
        </Story>

        <Story>
          <p>I want to tell you that you’re not alone.</p>
          <p>There are millions of fathers out there going through this.</p>
          <p>It’s been happening for decades.</p>
          <p>And it started when the government started incentivizing mothers to leave.</p>
          <p>The courts became the dad and you became the debtor.</p>
        </Story>

        <Story>
          <p>I’ve been through this system twice.</p>
          <p>The first time, I got 44% custody and child support after being married for 20 years and having three boys.</p>
          <p>And the oldest of my three sons was alienated from me.</p>
          <p>They gave mom primary while she was snorting coke and driving drunk.</p>
          <p>I couldn’t prove it.</p>
          <p>The panic I would feel letting her take the kids, let alone paying her bills.</p>
          <p>The problem is that I didn’t know what to do.</p>
          <p>I suspected my attorney’s job was to corral me through the system, make me pay the tax, and then move on to the next case.</p>
          <p>I knew something was wrong, but I didn’t know how to do it on my own.</p>
          <p>So I gave up.</p>
        </Story>

        <Story>
          <p>I moved on and started rebuilding my life.</p>
          <p>I made millions living all over the world and had a great relationship with my sons.</p>
          <p>I wanted a family, and after about a decade I met a beautiful German woman.</p>
          <p>The first year was great, but not easy.</p>
          <p>Then we had a son, Ori.</p>
          <p>I had never been happier in my life.</p>
          <p>I had a beautiful home, woman, and now a son to love on.</p>
          <p>When he was three months old, her mother came to help.</p>
          <p>They all left after two weeks.</p>
          <p>I was devastated and afraid she would leave for Germany and never return.</p>
          <p>She kept me off the birth certificate and took me to court.</p>
          <p>I had a choice to make.</p>
          <p>I could just let this go because I knew that I would be in a full-time legal fight for two years minimum.</p>
          <p>“Who do I become on the other side?”</p>
          <p>I knew I had unfinished business with the family court.</p>
          <p>I was framed as controlling, abusive, and dangerous to his wellbeing.</p>
          <p>They absolutely destroyed me.</p>
          <p>Right away, they wouldn’t let me see him, and they put me on supervised visitation for a couple of hours a week.</p>
          <p>I had no idea how that could happen after raising three sons.</p>
          <p>I had to figure this out.</p>
          <p>I knew I was being called back to understand how the courts are able to do this when it goes against what is natural and sacred.</p>
          <p>Fathers.</p>
        </Story>

        <Story>
          <p>Terrified, I refused to work with an attorney and had no idea what I was doing.</p>
          <p>I knew that I was going to lose early, but I was not going to give up.</p>
          <p>I created legal pressure and forced her to start making poor choices.</p>
          <p>When I started getting results, she fled and abducted our son to Germany.</p>
          <p>She violated court orders.</p>
          <p>I took it international through the Hague Convention and won.</p>
          <p>She appealed. I won that too.</p>
          <p>You’ll have to read my book, <em>Stolen Sons</em>, to hear how the story ends.</p>
        </Story>

        <Story>
          <p>What I have learned is that, as men, we are made.</p>
          <p>Everything that has happened to this point was to make you into the man God created you to be.</p>
          <p>This was not an accident.</p>
          <p>There are three stages to this journey, and each stage has a different set of challenges.</p>
          <p>They are the levels of the game of fatherhood.</p>
        </Story>
      </div>
    </article>

    <section className="work-stages cream-section" aria-labelledby="work-stages-title">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote" id="work-stages-title">The Three Stages</blockquote>
        <div className="work-stage-list">
          {stages.map((stage) => <article key={stage.number}>
            <span>{stage.number}</span>
            <div><p className="work-stage-label">{stage.label}</p><h3>{stage.title}</h3>{stage.copy}</div>
          </article>)}
        </div>
      </div>
    </section>

    <article className="work-simple-copy work-after-stages cream-section">
      <div className="shell work-simple-column">
        <Story>
          <p>At each stage, you are made into the man you were designed to be.</p>
          <p>Many men stop after Stage 1 or 2.</p>
          <p>All the programming from the schools, jobs, and most of the world teaches men to live mediocre lives.</p>
          <p>If that’s you, you’re on the wrong page.</p>
          <p>I’m talking to you, the badass motherfucker who’s been through some shit.</p>
          <p>The man who looks at everything he’s been through and is like, “That’s all you got?”</p>
          <p>“That was just a fucking warm-up for me!”</p>
          <p>Now imagine having a brotherhood of men who think the same way and are ready to die beside you as we fight for our sacred rights as fathers.</p>
        </Story>
        <Story>
          <p>If I’ve learned anything recently, fucked-up shit will happen when you least expect it.</p>
          <p>As fathers, we’re here to produce, provide, and protect.</p>
          <p>When we are not making ourselves better, we are neglecting our duties as men.</p>
          <p>As we have all experienced, when we neglect our duties, there are people and systems that will dictate our lives.</p>
          <p>I call that tyranny, and it won’t happen on my watch.</p>
        </Story>
      </div>
    </article>

    <section className="work-simple-offers cream-section">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote">Work With Steve</blockquote>
        <h2>Two ways to work with me directly.</h2>
        <p className="work-offers-intro">Either in a group or one-on-one.</p>
        <div className="work-v2-offers">
          <article className="work-v2-brotherhood"><span>Bloodline Brotherhood</span><h3>Bloodline<br />Brotherhood</h3><p>A private coaching group for fathers navigating custody, child support, alienation, modification, enforcement, or the rebuild that follows.</p><p>Weekly group calls combine case leadership, accountability, and coaching across Leadership, Lifestyle, Law, and Love.</p><strong>$497 <small>per month</small></strong><small>Founding cohort opening soon.</small><Link className="button cream-button" href="/bloodline-brotherhood">Explore Brotherhood</Link></article>
          <article className="work-v2-advisory"><span>Bloodline Advisory</span><h3>Bloodline<br />Advisory</h3><p>Private strategic counsel for fathers facing complex litigation, significant business or asset exposure, interstate or international conflict, abduction, enforcement, or multiple professional teams.</p><p>Start with a 60-minute private strategy call. Private advisory engagements begin at $15,000.</p><strong>$297</strong><p>A focused 60-minute private strategy call to identify the highest-risk issue, clarify the decision in front of you, and determine the next actions required. One call at this rate per person.</p><Link className="button ember" href="/bloodline-advisory">Book a Strategy Call</Link></article>
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
