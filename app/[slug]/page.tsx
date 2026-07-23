import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const pages: Record<string, { eyebrow: string; title: string; intro: string; type: string }> = {
  podcast: { eyebrow: "Podcast · Coming soon", title: "Conversations for men who refuse to disappear.", intro: "Long-form conversations on fatherhood, family court, business, love, sovereignty, and the systems shaping modern men.", type: "podcast" },
  books: { eyebrow: "Books", title: "The story. The strategy.", intro: "Two books born from the same fight: one memoir and one practical guide to protecting your bloodline.", type: "books" },
  speaking: { eyebrow: "Speaking", title: "A voice forged in the fight.", intro: "Steve speaks on fatherhood, family systems, leadership under pressure, and building what survives the battle.", type: "speaking" },
  apparel: { eyebrow: "Apparel · Coming soon", title: "Wear the bloodline.", intro: "A restrained collection for the men who carry the standard. The first drop is being forged.", type: "apparel" },
  about: { eyebrow: "Steve Love", title: "The man behind the front.", intro: "Author, father, entrepreneur, strategist, and litigator—built through exile, family court, business, and the refusal to disappear.", type: "about" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

function PageContent({ type }: { type: string }) {
  if (type === "books") return <div className="inner-grid books-list"><article><img src="/assets/stolen-sons.png" alt="Stolen Sons" /><div><span>Memoir</span><h2>Stolen Sons</h2><p>A father erased. A son taken. A fight not finished.</p><Link className="button ink" href="/stolen-sons">Explore the book</Link></div></article><article><img src="/assets/family-lawfare.png" alt="Family Lawfare" /><div><span>Field guide</span><h2>Family Lawfare</h2><p>Protect your bloodline, rights, and future when the courts enter your family.</p><Link className="button ink" href="/family-lawfare">Explore the book</Link></div></article></div>;
  if (type === "work") return <div className="work-with-page">
    <section className="work-opening"><p className="section-kicker">The work</p><h2>Every battle crosses<br /><em>more than one front.</em></h2><p>We work across Leadership, Lifestyle, Law, and Love because a decision made on one front creates consequences across the others.</p></section>
    <section className="transformation"><div className="transformation-head"><p className="section-kicker">The four-front transformation</p><div><span>Before</span><span>After</span></div></div>
      <article><header><b>01</b><h3>Leadership</h3></header><p>Your private battles consume your attention, weaken your decisions, and follow you into the business.</p><i>→</i><p>You lead your team, revenue, and growth with clarity—even when life outside the business is under pressure.</p></article>
      <article><header><b>02</b><h3>Lifestyle</h3></header><p>Your health, energy, habits, and discipline erode under sustained pressure.</p><i>→</i><p>Your body and daily standards become a foundation strong enough to carry the life you are rebuilding.</p></article>
      <article><header><b>03</b><h3>Law</h3></header><p>You react to allegations, hearings, custody disputes, child support, and an unfamiliar system controlling the stakes.</p><i>→</i><p>You understand the battlefield, build the record, coordinate professionals, and make disciplined strategic decisions.</p></article>
      <article><header><b>04</b><h3>Love</h3></header><p>Conflict, resentment, mistrust, or emotional distance erodes your relationship with your woman and family.</p><i>→</i><p>You lead with truth, boundaries, devotion, and the strength to remain present when pressure rises.</p></article>
    </section>
    <section className="support-choice"><p className="section-kicker">Choose your level of support</p><h2>Which path is right<br /><em>for you?</em></h2><div className="choice-flow"><span>What kind of support do you need?</span><div><article><b>Ongoing brotherhood</b><p>Group coaching, accountability, and a trusted room of capable men.</p><em>Bloodline Brotherhood</em></article><article><b>Private strategy</b><p>Focused counsel when the legal, financial, family, or business stakes are significant.</p><em>Bloodline Advisory</em></article></div></div></section>
    <section className="inner-grid work-list"><article id="brotherhood"><span>Group program</span><h2>Bloodline Brotherhood</h2><p>A private group coaching environment built around Leadership, Lifestyle, Law, and Love.</p><strong>$497 / month</strong><Link className="button ember" href="/bloodline-brotherhood">Enroll Now</Link></article><article id="advisory"><span>Private advisory</span><h2>Bloodline Advisory</h2><p>For founders, business owners, executives, and leaders navigating consequential battles.</p><strong>$297 / 60 minutes</strong><p className="small">The first 45 minutes focus on strategy. The final 15 minutes determine whether deeper private advisory makes sense.</p><Link className="button ink" href="/bloodline-advisory">Enroll Now</Link></article></section>
  </div>;
  if (type === "speaking") return <div className="speaking-page speaking-page-rebuilt">
    <div className="speaking-lead">
      <img src="/assets/steve-speaking.jpg" alt="Steve Love speaking to a live audience" />
      <div><h1>Want Steve to speak to your audience or community?</h1></div>
    </div>
    <div className="work-simple-column work-page-body speaking-body">
      <div className="work-story speaking-opening">
        <p>Steve Love speaks about leadership as a father and in business when under impossible pressure. He is here to help men answer the question: <em className="speaking-accent">Who am I on the other side of impossible?</em>{" "}</p>
      </div>
      <a className="button ember" href="mailto:hello@fathersfront.com?subject=Speaking%20or%20Podcast%20Invitation">Book Steve to Speak</a>

      <section className="work-content-section speaking-copy-section">
        <h2>Steve&apos;s Story</h2>
        <div className="work-story">
          <p>Steve spent twenty years in corporate consulting, working with organizations including Microsoft, the VA Hospital, Costco, and Mega Millions.</p>
          <p>He had the life that looked like success from the outside. A good career, a big house, three sons, and a wife.</p>
          <p>In the shadows were years of drug addiction, divorce, and health challenges.</p>
          <p>That is when everything changed. In the middle of a personal crisis, Steve experienced a massive spiritual awakening.</p>
          <blockquote>&ldquo;I&apos;m here to be a better father and to be of service.&rdquo;</blockquote>
          <p>That is what he did, and it started with his sons.</p>
          <p>Then with his coaching business and worked with hundreds of entrepreneurs, coaches, executives, doctors, attorneys, and other high-performing professionals to grow their businesses, expand their impact, and lead through change.</p>
          <p>After a decade of deep work, he had it all again.</p>
          <p>He met the woman of his dreams, built a better home, and they had a baby boy.</p>
          <p>Then his son was abducted to Germany when he was only a few months old.</p>
          <p>Steve represented himself through the U.S. litigation, pursued his son&apos;s return internationally under the Hague Convention, defeated the appeal, and was appointed Sole Managing Conservator in Texas.</p>
          <p>Through every chapter, the question remained the same:</p>
          <p className="speaking-accent">Who am I on the other side of impossible?</p>
          <p>That question changed everything.</p>
          <p>Instead of asking only how to survive the situation, Steve began asking who the situation was asking him to become.</p>
          <p>This question can be applied to any challenge or impossible goal in life and business.</p>
        </div>
      </section>

      <section className="work-content-section speaking-copy-section">
        <h2>Bring Steve to Your Audience</h2>
        <div className="work-story">
          <p>Whether you host a podcast or YouTube channel, lead a mastermind, community, church, or men&apos;s group, bring speakers into your company, or run in-person or online events, Steve can bring this story and its central question to your audience.</p>
          <p>Steve&apos;s story is the doorway. Your audience is the reason he tells it.</p>
          <p>The goal is not for people to leave asking:</p>
          <p className="speaking-accent">Who am I on the other side of impossible?</p>
          <p>If your audience needs this conversation, check Steve&apos;s availability below.</p>
        </div>
        <a className="button ember" href="mailto:hello@fathersfront.com?subject=Speaking%20or%20Podcast%20Invitation">Book Steve to Speak</a>
      </section>
    </div>
  </div>;
  if (type === "about") return <AboutTimeline />;
  if (type === "apparel") return <div className="coming-soon"><h2>The Bloodline</h2><p>First drop coming soon.</p><button className="button ink">Get notified</button></div>;
  return <div className="inner-grid editorial-list"><article><span>Law</span><h2>Discipline before reaction.</h2><p>Frameworks for navigating family court, custody, child support, and the systems surrounding them.</p></article><article><span>Leadership</span><h2>Build while it burns.</h2><p>Notes on growing teams, revenue, and leadership capacity when the stakes are personal.</p></article><article><span>Lifestyle</span><h2>Build the capacity to carry it.</h2><p>Health, discipline, energy, and the daily standards required to lead every other front.</p></article></div>;
}

const journey = [
  { number:"01", era:"Age 19", title:"The first calling", text:"I became a father before I had become a man. I did not understand everything fatherhood would demand of me—but from that moment forward, my life was no longer mine alone.", image:"/assets/steve-sons.jpg", align:"right" },
  { number:"02", era:"Fifteen years", title:"The divided man", text:"From the outside, I had built the life I was supposed to want: a wife, children, a home, and a six-figure career. Underneath it, addiction followed me for fifteen years. Achievement could not fill what I refused to face.", align:"left" },
  { number:"03", era:"The awakening", title:"The life behind the life", text:"Eventually, the old identity broke. Recovery was not the finish line. It was the first honest step toward becoming the father my sons deserved.", image:"/assets/steve-hero.jpg", align:"right" },
  { number:"04", era:"The wider world", title:"Freedom, built", text:"I became present with my sons, traveled the world, built businesses, and discovered that freedom is not escape. It is the capacity to create a life you can stand inside without needing to run from it.", image:"/assets/steve-speaking.jpg", align:"left" },
  { number:"05", era:"A new beginning", title:"Love returned", text:"I started a new family. There was a beautiful woman, a home, and a new son. For a moment, everything I had fought to become seemed to have carried me into the life I had imagined.", align:"right" },
  { number:"06", era:"The abduction", title:"The world split open", text:"Then my son was taken across an ocean. In a single act, fatherhood became an international legal battle. The system expected distance, exhaustion, and delay to do what force could not: make me disappear.", align:"left" },
  { number:"07", era:"Two years · Two countries", title:"Learning to litigate", text:"I learned the case down to the smallest fact and fought through courts in Texas and Germany. Every filing, hearing, allegation, and setback became part of a flawless record built around one principle: the best way to beat a lie is with the truth.", image:"/assets/fathers-front-home-hero.jpg", align:"right" },
  { number:"08", era:"Germany", title:"I went to get my son", text:"When the court gave me sole custody, I crossed the ocean to enforce the judgment and bring him home. There was no entourage—just a father who had promised his son he would never stop coming.", align:"left" },
  { number:"09", era:"The return", title:"What comes after the fight", text:"Now it is my son and me, rebuilding daily life while I build the work that came out of the fire. Fathers Front exists for men who still have something to protect, something to lead, and something worth becoming.", image:"/assets/steve-sons.jpg", align:"right" },
];

function AboutTimeline() {
  return <div className="about-journey"><section className="about-prologue"><p className="section-kicker">The origin story</p><h2>A man is not defined by what happens to him.</h2><p>He is defined by what he builds from it. This is the story of being broken open, crossing the fire, and choosing—again and again—not to disappear.</p></section><div className="journey-line" aria-hidden="true" />{journey.map((chapter) => <article className={`journey-chapter journey-${chapter.align}`} key={chapter.number}><div className="journey-marker"><span>{chapter.number}</span></div><div className="journey-copy"><p className="journey-era">{chapter.era}</p><h3>{chapter.title}</h3><p>{chapter.text}</p></div><div className={`journey-visual ${chapter.image ? "has-image" : "is-archive"}`}>{chapter.image ? <img src={chapter.image} alt="" /> : <><span>Archive image</span><b>{chapter.era}</b></>}</div></article>)}<section className="about-epilogue"><p className="journey-era">The next chapter</p><h2>The fight was never the destination.</h2><p>It was the forge. The work now is to restore fatherhood as a foundation of the family—and the family as a foundation of society.</p><Link className="button ink" href="/work-with-steve">Work with Steve</Link></section></div>;
}

export default async function InnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <main><Header /><section className="page-identifier cream-section"><div className="shell"><p className="section-kicker">{page.eyebrow}</p></div></section><section className="inner-content cream-section"><div className="shell"><PageContent type={page.type} /><Link className="text-link dark-link back-home" href="/">← Return home</Link></div></section><Footer /></main>;
}
