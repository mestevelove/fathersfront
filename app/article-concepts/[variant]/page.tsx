import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { sections, variants } from "../article-copy";
import styles from "../styles.module.css";

export function generateStaticParams(){ return variants.map(([variant])=>({variant})); }

export default async function ArticleVariant({params}:{params:Promise<{variant:string}>}){
  const {variant}=await params; const index=variants.findIndex(([id])=>id===variant); if(index<0) notFound();
  const name=variants[index][1]; const next=variants[(index+1)%variants.length][0];
  return <main className={`${styles.articlePage} ${styles[`v${variant}`]}`}><Header />
    <article>
      <header className={styles.articleHero}><div className={styles.heroInner}><p className={styles.issue}>FIELD NOTE <b>/{variant}</b> · THE HAGUE DOSSIER</p><h1>When Your Child Crosses a Border</h1><p className={styles.deck}>A father’s field guide to the Hague Convention return process—and the discipline required when family conflict becomes international litigation.</p><div className={styles.byline}><span>BY STEVE LOVE</span><span>12 MINUTE READ</span><span>LAW</span></div></div></header>
      <div className={styles.articleBody}><aside className={styles.rail}><span>{variant}</span><p>{name}</p><div /><p>EDUCATIONAL<br/>NOT LEGAL ADVICE</p></aside><div className={styles.story}>
        <p className={styles.lede}>When a child is taken across an international border, a father’s first instinct is often to argue the entire history of the family. The Hague Convention asks a narrower question: where should the custody fight happen?</p>
        <blockquote>“The return case is about jurisdiction and restoration—not a final custody award.”</blockquote>
        {sections.map((section,i)=><section key={section.title}><span className={styles.sectionNo}>0{i+1}</span><h2>{section.title}</h2><p>{section.text}</p>{i===2&&<div className={styles.pull}>ACT EARLY.<br/>BUILD QUIETLY.<br/>DOCUMENT EVERYTHING.</div>}</section>)}
        <div className={styles.disclaimer}><strong>Important:</strong> This article provides general educational information and is not legal advice. Hague Convention cases are fact-specific and time-sensitive. Consult qualified counsel in the relevant jurisdictions.</div>
      </div></div>
    </article>
    <nav className={styles.reviewNav}><Link href="/article-concepts">All 10 concepts</Link><span>Concept {variant}: {name}</span><Link href={`/article-concepts/${next}`}>Next concept →</Link></nav><Footer />
  </main>
}
