import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const pages: Record<string, { eyebrow: string; title: string; intro: string; type: string }> = {
  podcast: { eyebrow: "Podcast · Coming soon", title: "Conversations for men who refuse to disappear.", intro: "Long-form conversations on fatherhood, family court, business, love, sovereignty, and the systems shaping modern men.", type: "podcast" },
  books: { eyebrow: "Books", title: "The story. The strategy.", intro: "Two books born from the same fight: one memoir and one practical guide to protecting your bloodline.", type: "books" },
  speaking: { eyebrow: "Speaking", title: "A voice forged in the fight.", intro: "Steve speaks on fatherhood, family systems, leadership under pressure, and building what survives the battle.", type: "speaking" },
  apparel: { eyebrow: "Apparel · Coming soon", title: "Wear the bloodline.", intro: "A restrained collection for the men who carry the standard. The first drop is being forged.", type: "apparel" },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

function PageContent({ type }: { type: string }) {
  if (type === "books") return <div className="inner-grid books-list"><article><img src="/assets/stolen-sons-cover.webp" alt="Stolen Sons" /><div><span>Memoir</span><h2>Stolen Sons</h2><p>A father erased. A son taken. A fight not finished.</p><Link className="button ink" href="/stolen-sons">Get the Book</Link></div></article><article><img src="/assets/family-lawfare-cover.webp" alt="Family Lawfare" /><div><span>Field guide</span><h2>Family Lawfare</h2><p>Protect your bloodline, rights, and future when the courts enter your family.</p><Link className="button ink" href="/family-lawfare">Get the Book</Link></div></article></div>;
  if (type === "speaking") return <div className="speaking-page speaking-page-rebuilt">
    <div className="speaking-lead">
      <img src="/assets/steve-speaking.webp" alt="Steve Love speaking to a live audience" />
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
  if (type === "apparel") return <div className="coming-soon"><h2>The Bloodline</h2><p>First drop coming soon.</p><button className="button ink">Get notified</button></div>;
  return <div className="inner-grid editorial-list"><article><span>Law</span><h2>Discipline before reaction.</h2><p>Frameworks for navigating family court, custody, child support, and the systems surrounding them.</p></article><article><span>Leadership</span><h2>Build while it burns.</h2><p>Notes on growing teams, revenue, and leadership capacity when the stakes are personal.</p></article><article><span>Lifestyle</span><h2>Build the capacity to carry it.</h2><p>Health, discipline, energy, and the daily standards required to lead every other front.</p></article></div>;
}

export default async function InnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <main><Header /><section className="page-identifier cream-section"><div className="shell"><p className="section-kicker">{page.eyebrow}</p></div></section><section className="inner-content cream-section"><div className="shell"><PageContent type={page.type} /><Link className="text-link dark-link back-home" href="/">← Return home</Link></div></section><Footer /></main>;
}
