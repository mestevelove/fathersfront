import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function WorkSection({ title, deck, children }: { title: string; deck: string; children: ReactNode }) {
  return <section className="work-content-section">
    <h2>{title}</h2>
    <p className="work-section-deck">{deck}</p>
    <div className="work-story">{children}</div>
  </section>;
}

const levels = [
  {
    number: "01",
    label: "Level 1",
    title: "Fight for Your Fatherhood",
    deck: "Every notice feels like a threat because nobody is leading the ship.",
    copy: <>
      <p>You’re in family court and fighting just to remain a father.</p>
      <p>Every court notice, attorney invoice, and text from your ex sends your nervous system into panic because you never know what it means, what it will cost, or what it will take from you next.</p>
      <p>You have an attorney, but nobody seems to understand the whole situation, nobody is showing you the plan, and nobody is leading the ship.</p>
      <p>You keep getting moved from hearing to hearing, paying more, losing time with your kids, and wondering how the only person asking for fairness became the problem.</p>
    </>,
  },
  {
    number: "02",
    label: "Level 2",
    title: "Fortify Your Foundation",
    deck: "The orders may be signed. You are still paying for it.",
    copy: <>
      <p>The orders may be signed, but the fight is still living in your bank account, your body, your business, and your relationship with your kids.</p>
      <p>You are afraid to add up the legal bills.</p>
      <p>Your career or business lost years of momentum while attorneys, GALs, supervised visits, evaluations, and therapy consumed your time and money.</p>
      <p>Your body has been carrying the stress for so long that you no longer remember what normal feels like.</p>
      <p>Everyone acts like it is over.</p>
      <p>You are still paying for it.</p>
      <p>You keep telling yourself you will rebuild when things calm down.</p>
      <p>They never do.</p>
      <p>This is where you stop waiting for your old life to return and build a stronger one.</p>
    </>,
  },
  {
    number: "03",
    label: "Level 3",
    title: "Forge Your Family’s Future",
    deck: "Survival is no longer the goal.",
    copy: <>
      <p>Most men never really make it here.</p>
      <p>You may no longer be bleeding, but you’re still living smaller than the man you know you could become.</p>
      <p>There is a business, book, mission, family, or life you keep talking about but have not built.</p>
      <p>These are the men who know they were put here to create, and they take action.</p>
      <p>They build the crazy thing they have always wanted to bring to life.</p>
      <p className="work-section-deck">What level are you willing to stop at?</p>
    </>,
  },
];

export default function WorkWithStevePage() {
  return <main className="work-simple">
    <Header />
    <article className="work-simple-copy cream-section">
      <div className="shell work-simple-column">
        <p className="section-kicker work-page-kicker">Work With Steve</p>
        <h1>The Men We Were Taught to Become</h1>
        <p className="work-page-deck">Men are made. Fathers are forged.</p>

        <div className="work-story work-opening-story">
          <p>If you’re a father and made it to this page, there is a reason for it.</p>
          <p>They say women are born and men are made.</p>
          <p>I’ve spent over 30 years trying to figure out what makes a man.</p>
          <p>It’s one thing for me to struggle.</p>
          <p>But I’m a father of four sons.</p>
          <p>I refuse to pass on all the shit I had to experience to my sons.</p>
          <p>The problem is that nothing in Western society teaches men to be men and fathers to be fathers.</p>
          <p>Right when we are born, our dicks are clipped.</p>
          <p>Many of us grow up without a present father who knows how to show us what a real man is.</p>
          <p>Then we are shipped off to school, where nearly nine out of ten public elementary school teachers are women.</p>
          <p>Schools were designed to teach boys to conform.</p>
          <p>Masculinity is a mockery in movies and media.</p>
          <p>In the movies, men are the war heroes.</p>
          <p>At home, they are the joke.</p>
          <p>So we grow up and build the life we were told we were supposed to have.</p>
        </div>

        <WorkSection title="Then the Life You Built Gets Taken Apart" deck="The courts became the dad. You became the debtor.">
          <p>You find the woman, you have your kids, you’ve got the house, and you’re making good money.</p>
          <p>Then she leaves and you’re hit with a divorce or custody battle.</p>
          <p>And for many of you, a restraining order.</p>
          <p>Women initiate roughly seven out of ten divorces.</p>
          <p>You spend years fighting for your kids.</p>
          <p>Maybe you get some time, maybe you don’t.</p>
          <p>You get ordered to pay child support, though.</p>
          <p>Financially wiped out.</p>
          <p>Emotionally scarred.</p>
          <p>Lost time with your kids that you will never get back.</p>
          <p>You’re alone to fight this.</p>
          <p>Nobody gives a shit.</p>
          <p>There are plenty of angry fathers, but almost nobody has a solution.</p>
          <p>The courts, your attorney, and your ex all get their fair share.</p>
          <p>Not to mention, they’ll all have more of a say in your kids’ lives.</p>
          <p>You know it’s wrong.</p>
          <p>It’s like the entire system gaslit you, and you can feel it pulling your last nerve.</p>
          <p>So you suck it up and move through it.</p>
          <p>You rebuild from nothing.</p>
          <p>A part of your soul has been stolen.</p>
          <p>Every child support payment.</p>
          <p>Every critical remark from your ex.</p>
          <p>All the passive-aggressive behavior justified as being “in the best interest of the child.”</p>
          <p>It feels like a prison sentence while you wait for your kids to age out and let them make their own choices.</p>
          <p>You’ll always be the subhuman parent.</p>
          <p>You pray they see the price you paid and the truth.</p>
          <p>I want to tell you that you’re not alone.</p>
          <p>There are millions of fathers out there going through this.</p>
          <p>It’s been happening for decades.</p>
          <p>And it started when the government started incentivizing mothers to leave.</p>
        </WorkSection>

        <WorkSection title="I’ve Been Through This System Twice" deck="The first time, I stopped. The second time, I learned to lead.">
          <p>I’ve been through this system twice.</p>
          <p>The first time, I got 44% custody and child support after being married for 20 years and having three boys.</p>
          <p>And the oldest of my three sons was alienated from me.</p>
          <p>They gave mom primary while she was snorting coke and driving drunk.</p>
          <p>I couldn’t prove it, but I could smell it on her breath.</p>
          <p>The panic I would feel letting her take the kids, let alone paying her bills.</p>
          <p>The problem is that I didn’t know what to do.</p>
          <p>I suspected my attorney’s job was to corral me through the system, make me pay the tax, foot her Mercedes note, and move on to the next case.</p>
          <p>I knew something was wrong, but I didn’t know how to do it on my own.</p>
          <p>I thought it was the end, so I stopped.</p>
          <p>It’s just the way it is.</p>
          <p>I moved on and started rebuilding my life.</p>
          <p>I made millions living all over the world and had a great relationship with my sons.</p>
          <p>But something never went away.</p>
          <p>I wasn’t done with the family courts.</p>
          <p>I also wanted a family.</p>
          <p>I had so much more to give as a father, but I didn’t have a family to give it to.</p>
          <p>A decade after my divorce, I met a beautiful German woman.</p>
          <p>The first year was great, but it wasn’t easy.</p>
          <p>I was here for it.</p>
          <p>Then we had a son, Ori.</p>
          <p>I had never been happier in my life.</p>
          <p>I had a beautiful home, a beautiful woman, and now a son to love on.</p>
          <p>When he was three months old, her mother came to help.</p>
          <p>They all left after two weeks.</p>
          <p>How the fuck could this happen again?</p>
          <p>A decade of deep work, coaching, therapy, men’s work, every modality.</p>
          <p>I did it.</p>
          <p>I was devastated and afraid she would leave for Germany and never return.</p>
          <p>She kept me off the birth certificate and took me to court.</p>
          <p>I had a choice to make.</p>
          <p>I could just let this go because I knew that I would be in a full-time legal fight for two years minimum.</p>
          <p>I had to ask myself:</p>
          <p>“Who do I become on the other side?”</p>
          <p>I knew I had unfinished business with the family court.</p>
          <p>I had a fight ahead of me, a hundred times worse than my divorce.</p>
          <p>She and her attorney framed me as controlling, abusive, and dangerous to my son.</p>
          <p>Right away, they wouldn’t let me see him, and they put me on supervised visitation for a couple of hours a week.</p>
          <p>“It’s in the best interest of the child.”</p>
          <p>I had no idea how that could happen after raising three sons.</p>
          <p>I had to figure this out.</p>
          <p>I knew I was being called back to understand how the courts are able to do this when it goes against what is natural and sacred.</p>
          <p>Fathers.</p>
          <p>Terrified, I refused to work with an attorney and had no idea what I was doing.</p>
          <p>I knew that I was going to lose early, but I was not going to give up.</p>
          <p>I created legal pressure and forced her to start making poor choices.</p>
          <p>When I started getting results, she fled and abducted our son to Germany.</p>
          <p>She violated court orders.</p>
          <p>I took it international through the Hague Convention and won.</p>
          <p>She appealed.</p>
          <p>I won that too.</p>
          <p>I ended up getting sole custody in Texas.</p>
          <p>But winning the orders was not enough.</p>
          <p>I still had to go get him because she refused to follow them.</p>
          <p>You’ll have to read my book, <em>Stolen Sons</em>, to hear how the story ends.</p>
        </WorkSection>

        <section className="work-content-section work-levels-intro">
          <h2 id="work-levels-title">The Three Levels of Fatherhood After Family Court</h2>
          <p className="work-section-deck">Who do you become on the other side?</p>
          <div className="work-story">
            <p>What I have learned is that, as men, we are made.</p>
            <p>Everything that has happened to this point was to make you into the man God created you to be.</p>
            <p>This was not an accident.</p>
            <p>There are three stages to this journey, and each stage has a different set of challenges.</p>
            <p>They are the levels of the game of fatherhood after you enter family court.</p>
          </div>
        </section>

        <div className="work-stage-list" aria-labelledby="work-levels-title">
          {levels.map((level) => <article key={level.number}>
            <span>{level.number}</span>
            <div>
              <p className="work-stage-label">{level.label}</p>
              <h3>{level.title}</h3>
              <p className="work-section-deck">{level.deck}</p>
              {level.copy}
            </div>
          </article>)}
        </div>

        <WorkSection title="We Change Ourselves First" deck="The fight exposes every place a man has not yet learned to lead.">
          <p>Imagine this.</p>
          <p>Millions of fathers walk into court already broken.</p>
          <p>Broken fathers pass that brokenness to their children.</p>
          <p>That is the cycle I am here to stop.</p>
          <p>We do not begin by changing our exes, courts, or the laws.</p>
          <p>We change ourselves first.</p>
          <p>A father who disciplines his body, learns the law, heals his trauma, and increases his income becomes harder to erase.</p>
          <p>Enough fathers doing that changes families, courts, and culture.</p>
          <p>If we keep going and help the man behind us, we become fucking unstoppable.</p>
          <p>The movement starts with you.</p>
        </WorkSection>

        <WorkSection title="What Changes When You Step Up" deck="You stop reacting. You start leading.">
          <p>You stop opening every email with your heart racing.</p>
          <p>You know the facts, the priorities, and the next move.</p>
          <p>You walk into calls with your attorney knowing what to ask and what you expect to happen next.</p>
          <p>You stop building your life around your ex’s next move.</p>
          <p>Your body gets stronger.</p>
          <p>Your income starts moving again.</p>
          <p>Your relationship with your children becomes something you actively protect and rebuild.</p>
          <p>The business, book, mission, family, or life you kept postponing starts moving forward.</p>
          <p>You become less reactive, more strategic, and harder to manipulate.</p>
          <p>You stop asking for permission.</p>
          <p>You start leading.</p>
          <p>You turn the worst thing that has ever happened to in, into the best thing that has ever happened to you.</p>
        </WorkSection>
      </div>
    </article>

    <section className="work-simple-offers cream-section">
      <div className="shell work-simple-column">
        <blockquote className="work-simple-quote">Choose Your Level of Support</blockquote>
        <p className="work-section-deck">One brotherhood. Two ways to work with me.</p>
        <div className="work-story work-offer-opening">
          <p>Whether you’re still stuck in court, rebuilding after getting your life wrecked, or ready to make your crazy goals happen, we’ve got you, brother.</p>
          <p>There are two ways to join the brotherhood and get my personal support.</p>
        </div>
        <div className="work-v2-offers">
          <article className="work-v2-brotherhood">
            <span>Bloodline Brotherhood</span>
            <h3>Bloodline<br />Brotherhood</h3>
            <p>One program.</p><p>Three levels.</p><p>One weekly call.</p><p>Start where you are.</p>
            <p>Fight for your fatherhood.<br />Fortify your foundation.<br />Forge your family’s future.</p>
            <p>Bloodline Brotherhood combines weekly group coaching, direct feedback, accountability, and the support of fathers moving through the same three levels.</p>
            <strong>$497 <small>per month</small></strong>
            <Link className="button cream-button" href="/bloodline-brotherhood">Join Bloodline Brotherhood</Link>
          </article>
          <article className="work-v2-advisory">
            <span>Bloodline Advisory</span>
            <h3>Bloodline<br />Advisory</h3>
            <p>Some fights require more proximity.</p>
            <p>Bloodline Advisory is private strategic support for fathers facing complex litigation, major financial exposure, interstate or international conflict, abduction, enforcement, or cases involving multiple professional teams.</p>
            <p>As a Bloodline Advisory client, you also receive access to Bloodline Brotherhood for the duration of your advisory engagement.</p>
            <strong>$297</strong>
            <p>Initial strategy calls are $297.</p>
            <p>Private advisory engagements begin at $15,000.</p>
            <Link className="button ember" href="/bloodline-advisory">Book a Strategy Call</Link>
          </article>
        </div>
        <aside className="work-disclaimer" aria-label="Important professional disclaimer">
          <strong>Important:</strong> Fathers Front and Steve Love provide coaching and general educational information, not legal representation or legal, tax, financial, medical, or therapeutic advice. Fathers Front is not a law firm, and no attorney-client relationship is created by this website, its content, or any coaching or advisory engagement. Decisions are fact-specific; consult qualified professionals familiar with your circumstances.
        </aside>
      </div>
    </section>
    <Footer />
  </main>;
}
