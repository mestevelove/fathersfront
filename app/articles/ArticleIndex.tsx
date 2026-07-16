"use client";
import Link from "next/link";
import { useState } from "react";
import { articles } from "./article-data";

const filters = ["All", "Law", "Love", "Leadership", "Legacy"] as const;

export function ArticleIndex() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? articles : articles.filter((article) => article.pillar === active);
  return <>
    <div className="article-filters" aria-label="Filter articles by category">
      {filters.map((filter) => <button className={active === filter ? "active" : ""} onClick={() => setActive(filter)} key={filter}>{filter}</button>)}
    </div>
    <div className="article-index-grid">
      {visible.map((article, index) => <Link className="article-index-card" href={`/articles/${article.slug}`} key={article.slug}>
        <div><span>{article.pillar}</span><b>0{index + 1}</b></div><h2>{article.title}</h2><p>{article.deck}</p><small>{article.readTime} <i>Read →</i></small>
      </Link>)}
    </div>
  </>;
}
