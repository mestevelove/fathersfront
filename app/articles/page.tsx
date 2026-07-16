import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArticleIndex } from "./ArticleIndex";

export default function ArticlesPage() {
  return <main><Header /><section className="page-identifier cream-section"><div className="shell"><p className="section-kicker">Articles</p></div></section><section className="articles-index cream-section"><div className="shell"><div className="articles-index-head articles-index-simple"><p>Field notes across Law, Love, Leadership, and Legacy for men building through consequential seasons.</p></div><ArticleIndex /></div></section><Footer /></main>;
}
