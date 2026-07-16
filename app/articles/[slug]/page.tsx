import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { articles, getArticle } from "../article-data";
import styles from "../article-styles.module.css";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getArticle(slug); if (!article) notFound();
  return <main className={`${styles.articlePage} ${styles.v01}`}><Header /><article>
    <header className={styles.articleHero}><div className={styles.heroInner}><p className={styles.issue}>FIELD NOTE <b>/01</b> · {article.pillar.toUpperCase()}</p><h1>{article.title}</h1><p className={styles.deck}>{article.deck}</p><div className={styles.byline}><span>BY STEVE LOVE</span><span>{article.readTime.toUpperCase()}</span><span>{article.pillar.toUpperCase()}</span></div></div></header>
    <div className={styles.articleBody}><aside className={styles.rail}><span>01</span><p>THE DOSSIER</p><div/><p>{article.pillar === "Law" ? <>EDUCATIONAL<br/>NOT LEGAL ADVICE</> : <>FOUR FRONTS<br/>ONE FATHER</>}</p></aside><div className={styles.story}>
      <p className={styles.lede}>{article.lede}</p><blockquote>“{article.quote}”</blockquote>
      {article.sections.map((section,index)=><section key={section.heading}><span className={styles.sectionNo}>0{index+1}</span><h2>{section.heading}</h2><p>{section.body}</p>{article.pull&&index===2&&<div className={styles.pull}>{article.pull.split("\n").map((line)=><span key={line}>{line}<br/></span>)}</div>}</section>)}
      <div className={styles.disclaimer}><strong>Important:</strong> This article provides general educational information and is not legal, tax, financial, or therapeutic advice. Decisions are fact-specific; consult qualified professionals familiar with your circumstances.</div>
      <Link className="text-link dark-link back-home" href="/articles">← All articles</Link>
    </div></div>
  </article><Footer /></main>;
}
