import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { variants } from "./article-copy";
import styles from "./styles.module.css";

export default function ArticleConceptsIndex() {
  return <main><Header /><section className={styles.indexHero}><div className="shell"><p className="eyebrow"><span />Article design review</p><h1>Ten ways to carry the record.</h1><p>One article. Ten editorial systems. Choose the voice that should define Fathers Front writing.</p></div></section><section className={styles.indexGrid}><div className="shell"><div className={styles.conceptGrid}>{variants.map(([id,name])=><Link href={`/article-concepts/${id}`} key={id} className={styles.conceptCard}><span>{id}</span><h2>{name}</h2><p>Open concept <b>→</b></p></Link>)}</div></div></section><Footer /></main>;
}
