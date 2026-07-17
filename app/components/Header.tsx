"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Fathers Front home"><span className="brand-fathers">Fathers</span><span className="brand-front">Front</span></Link>
        <button className={open ? "menu-toggle is-open" : "menu-toggle"} onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
          <span /><span /><span />
        </button>
        <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          <div className="mobile-menu-heading"><span>Main Menu</span><b>V.58</b></div>
          <Link href="/">Home</Link><Link href="/books">Books</Link><Link href="/articles">Articles</Link>
          <Link href="/speaking">Speaking</Link><Link href="/about">About</Link><Link className="nav-cta" href="/work-with-steve">Work With Steve</Link>
        </nav>
        <span className="site-version" aria-label="Site version 58">V.58</span>
      </div>
    </header>
  );
}
