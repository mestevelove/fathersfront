import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "About Steve Love | Fathers Front",
  description: "Steve Love's story of fatherhood, family court, rebuilding, and the work behind Fathers Front.",
};

type StoryBlock = { type?: "quote" | "strong"; text: string };
type StoryChapter = {
  number: string;
  caption: string;
  title: string;
  image: string;
  alt: string;
  blocks: StoryBlock[];
  fronts?: boolean;
};

const chapters: StoryChapter[] = [
  {
    number:"01", caption:"Father at 19", title:"I Became a Father Before I Knew How to Be a Man", image:"about-steve-01-father-at-19.jpg", alt:"A young Steve Love holding his newborn son",
    blocks:[
      {text:"I became a father at 19 after getting my high school girlfriend of three years pregnant."},
      {text:"I was still an Orange County punk rock kid."},
      {text:"My only real responsibility was working a shitty part-time job long enough to pay for beer and punk records."},
      {text:"Then something instinctual shifted inside me."},
      {text:"Almost overnight, I went into provider mode."},
      {text:"I got a credit card, bought an engagement ring, and asked her to marry me."},
      {text:"Ten years later, we had two more sons, Vander and Raiden."},
      {text:"We were married for almost twenty years."},
      {text:"From the outside, I looked responsible."},
      {text:"I spent nearly two decades in corporate consulting, working with clients that included Microsoft, the VA Hospital, Costco, and Mega Millions."},
      {text:"During the week, I was the professional."},
      {text:"On the weekends, I was still the wasted punk rocker."},
      {text:"My wife and I were caught in different addictions, and I knew something had to change."},
      {text:"I moved our family to Texas, believing a new environment might help us create a different life."},
      {text:"I cleaned up for a while."},
      {text:"But the marriage continued unraveling, and eventually I fell back into the same patterns I thought I had escaped."},
    ],
  },
  {
    number:"02", caption:"The awakening", title:"The Moment Everything Changed", image:"about-steve-02-moment-everything-changed.jpg", alt:"Steve Love seated with two of his sons",
    blocks:[
      {text:"In the middle of the worst personal crisis of my life, something broke open inside me."},
      {text:"One sentence came through clearly:"},
      {type:"quote", text:"“You’re here to be a better father and to be of service.”"},
      {text:"It interrupted everything."},
      {text:"I stopped denying how I felt."},
      {text:"I stopped lying to myself."},
      {text:"I worked with sponsors."},
      {text:"I hired mentors."},
      {text:"I began transforming every part of my life."},
      {text:"My addictions stopped controlling me, but my marriage did not survive the change."},
      {text:"Six months later, I filed for divorce."},
      {text:"Then I spent two brutal years fighting in family court."},
    ],
  },
  {
    number:"03", caption:"Family court", title:"The First Time Through Family Court", image:"about-steve-03-first-family-court.jpg", alt:"Steve Love standing in front of a courthouse with tape across his mouth",
    blocks:[
      {text:"I believed I had done everything a father was supposed to do."},
      {text:"I made six figures."},
      {text:"I had a flexible schedule built around my sons."},
      {text:"I was teaching them the things I had never been taught."},
      {text:"I was present."},
      {text:"I was their father."},
      {text:"But family court introduced me to a reality I did not understand."},
      {text:"I fought hard and achieved more than many fathers do."},
      {text:"We received joint custody, but their mother had the exclusive right to determine their residence, and I was ordered to pay child support."},
      {text:"The first time through the system, I knew something was wrong, but I did not know how to make it right."},
      {text:"I left believing the courts favored mothers and there was nothing a father could do about it."},
      {type:"strong", text:"That belief became its own prison."},
      {text:"I never escaped it. It felt like I had unfinished business with family court."},
      {text:"Still, those years gave me some of the best memories of my life with my sons."},
      {text:"I loved every minute I had with them."},
      {text:"I am proud of the men they became."},
    ],
  },
  {
    number:"04", caption:"Bali", title:"Exile and Reconstruction", image:"about-steve-04-exile-reconstruction.jpg", alt:"Steve Love standing in front of a staircase in Bali",
    blocks:[
      {text:"After the final hearing, I moved to Bali."},
      {text:"I had been a husband and father for my entire adult life."},
      {text:"I did not know who I was without the family structure I had spent twenty years building."},
      {text:"My sons knew about the move because we made the decision together."},
      {text:"They were supposed to spend their summers with me, but their mother prevented that from happening."},
      {text:"We stayed close."},
      {text:"I returned to the United States two years later, and we picked up where we had left off."},
      {text:"They were simply older now."},
      {text:"But I never stopped feeling divided."},
      {text:"On the weeks I had my sons, I was the father with the family."},
      {text:"On the weeks I did not, I was the single man."},
      {text:"I could not fully settle into either life."},
      {text:"So I kept doing the work."},
      {text:"I built a coaching business and worked with hundreds of entrepreneurs, coaches, executives, doctors, attorneys, and other high-performing professionals."},
      {text:"I helped them grow their businesses, expand their impact, and lead through change."},
      {text:"I made millions."},
      {text:"I lived around the world."},
      {text:"I rebuilt my health."},
      {text:"I rebuilt my identity."},
      {text:"I rebuilt my relationship with my sons."},
      {text:"I still wanted a family, but that required the right woman."},
    ],
  },
  {
    number:"05", caption:"A new beginning", title:"Another Chance at Fatherhood", image:"about-steve-05-another-chance-at-fatherhood.jpg", alt:"Steve Love and his pregnant partner together outdoors",
    blocks:[
      {text:"After working with a relationship coach, I met a beautiful German woman."},
      {text:"We fell in love quickly."},
      {text:"She told me I was her soulmate."},
      {text:"Then she became pregnant."},
      {text:"After a decade of rebuilding, I was going to have another son and another chance to create the family I had always wanted."},
      {text:"When he was born, we named him Ori."},
      {text:"I had never been happier."},
      {text:"I had a beautiful home, a woman I loved, and a baby boy to raise."},
      {text:"After Ori was three months old, his grandmother came from Germany to help."},
      {text:"Two weeks later, they left with him."},
      {text:"I was devastated."},
      {type:"strong", text:"How the fuck could this happen again?"},
      {text:"I had spent a decade working to ensure I never repeated the life I had already lived."},
      {text:"But there I was, back in family court, fighting to remain a father."},
    ],
  },
  {
    number:"06", caption:"The second fight", title:"The Second Time, I Learned to Lead", image:"about-steve-06-second-time-learned-to-lead.jpg", alt:"Steve Love with two of his sons outside the Travis County family courts facility",
    blocks:[
      {text:"The first time through family court, I depended on an attorney while knowing almost nothing about the battlefield."},
      {text:"The second time, I refused to remain a passenger in my own life."},
      {text:"I was terrified, but I represented myself through the case without an attorney."},
      {text:"I learned how to read the law, build the record, create pressure, and force decisions."},
      {text:"In the beginning, I was my own worst liability, but I knew I would become legally lethal the longer the case continued."},
      {text:"I was accused of being controlling, abusive, and dangerous."},
      {text:"I was placed on supervised visitation for a few hours each week after already raising three sons."},
      {text:"I was shocked that they could do this to a man who had already raised three outstanding sons."},
      {text:"This time, I did more than tell the court I was a good father."},
      {text:"I built the record."},
      {text:"I showed the court who I was as a father and the life I was building for my son."},
      {text:"I kept lawful pressure on the case, built leverage, and forced the issues into the open."},
      {text:"I was relentless in creating legal pressure."},
      {text:"Under that pressure, she made a catastrophic decision and took Ori to Germany in violation of the Texas court orders."},
      {text:"The fight became international."},
      {text:"I pursued his return under the Hague Convention."},
      {text:"Her claims only grew louder."},
      {text:"I won."},
      {text:"She appealed."},
      {text:"I defeated the appeal."},
      {text:"The Texas court appointed me Sole Managing Conservator."},
      {text:"The first time through family court, I knew something was wrong but did not know how to make it right."},
      {text:"The second time, I became the man capable of leading the fight in a way the court could not ignore."},
      {type:"strong", text:"It’s all because of a single question…"},
    ],
  },
  {
    number:"07", caption:"The other side", title:"Who Am I on the Other Side of Impossible?", image:"about-steve-07-other-side-of-impossible.jpg", alt:"Steve Love standing outdoors after training",
    blocks:[
      {text:"The first time through family court, I left believing the courts favored mothers and there was nothing I could do about it."},
      {text:"The second time, I began asking a different question:"},
      {type:"quote", text:"What if this is not only about the court, the mother, the attorney, or the laws?"},
      {type:"quote", text:"What if life is showing me every place I have not yet stood in my full power and authority as a father?"},
      {text:"That does not mean those forces are fair."},
      {text:"It means I am no longer waiting for them to become the solution."},
      {text:"That question led me back to the one that has followed me through every major chapter of my life:"},
      {type:"quote", text:"Who am I on the other side of impossible?"},
      {text:"It stopped me from seeing every challenge as something happening only to me."},
      {text:"I began asking what the situation required me to become."},
    ],
  },
  {
    number:"08", caption:"The framework", title:"Why I Created Fathers Front", image:"about-steve-08-why-i-created-fathers-front.jpg", alt:"Steve Love holding his infant son Ori", fronts:true,
    blocks:[
      {text:"Family court may be where the fight starts."},
      {text:"It does not stay there."},
      {text:"Legal problems, business and income problems, your relationships with women, and your relationship with your kids do not happen separately."},
      {type:"strong", text:"They collide inside the same man."},
      {text:"That is why I created the Four Fronts."},
    ],
  },
];

const fronts = [
  ["01 · LAW","Law","Understand the battlefield, build the record, prepare the case, and work intelligently with attorneys or pro se instead of reacting blindly."],
  ["02 · LEADERSHIP","Leadership","Take command of your decisions, your resources, and the people around you when pressure is highest."],
  ["03 · LOVE","Love","Protect the bond with your children, heal the patterns that contributed to the breakdown, and build relationships worth preserving."],
  ["04 · LIFESTYLE","Lifestyle","Strengthen your body, income, routines, environment, and daily discipline so you can sustain the fight and build what comes next."],
];

function Prose({ blocks }: { blocks: StoryBlock[] }) {
  return <div className="about-editorial-prose">{blocks.map((block, index) => block.type === "quote"
    ? <blockquote key={index}>{block.text}</blockquote>
    : <p className={block.type === "strong" ? "about-strong-line" : undefined} key={index}>{block.text}</p>)}</div>;
}

function Media({ image, alt, left, right }: { image: string; alt: string; left: string; right: string }) {
  return <div className="about-editorial-media"><figure><img src={`/assets/about/${image}`} alt={alt} /></figure><div className="about-image-caption"><span>{left}</span><span>{right}</span></div></div>;
}

export default function AboutPage() {
  return <main><Header /><div className="about-editorial">
    <section className="about-editorial-hero"><div className="about-editorial-hero-inner">
      <div className="about-editorial-hero-copy"><p className="section-kicker">About Steve Love</p><h1>About<br />Steve Love</h1><p className="about-editorial-subhead">I became a father before I knew how to be a man.</p><p className="about-editorial-deck">This is not a highlight reel. It is the lived story behind Fathers Front: fatherhood, addiction, family court, exile, reconstruction, international litigation, and the decision to become impossible to erase.</p></div>
      <Media image="about-steve-intro-with-sons-at-court.jpg" alt="Steve Love with two of his sons at court" left="Fatherhood" right="Austin, Texas" />
    </div></section>
    {chapters.map((chapter) => <section className="about-editorial-story" id={`about-${chapter.number}`} key={chapter.number}><div className="about-editorial-story-inner">
      <Media image={chapter.image} alt={chapter.alt} left={chapter.number} right={chapter.caption} />
      <div className="about-editorial-copy"><p className="about-section-number">{chapter.number}</p><h2>{chapter.title}</h2><Prose blocks={chapter.blocks} />
        {chapter.fronts && <div className="about-fronts">{fronts.map(([index,title,text]) => <article key={title}><span>{index}</span><h3>{title}</h3><p>{text}</p></article>)}</div>}
      </div>
    </div></section>)}
    <section className="about-editorial-finale"><div className="about-editorial-finale-inner"><div className="about-editorial-copy"><p className="about-section-number">09</p><h2>This Is the Work</h2><Prose blocks={[{text:"My story is not about how much I survived."},{text:"It is about what each fight required me to become."},{text:"I am a father of four sons."},{text:"Everything I build begins there."}]} /><div className="about-book-line">My book <em>Stolen Sons</em> tells the story.<br /><em>Family Lawfare</em> is the legal strategy.<br /><br />Fathers Front is the framework for fathers to take command of the fight, rebuild what it has cost them, and forge the future that follows.</div><div className="about-cta-row"><Link className="button ember" href="/work-with-steve">Work With Steve</Link><Link className="button ink" href="/the-framework">Explore the Four Fronts</Link></div></div><Media image="about-steve-09-this-is-the-work.jpg" alt="Portrait of Steve Love seated on a staircase" left="The work" right="Leadership" /></div></section>
  </div><Footer /></main>;
}
