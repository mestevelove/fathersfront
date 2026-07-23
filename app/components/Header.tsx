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
          <div className="mobile-menu-heading"><span>Main Menu</span><b>V.73</b></div>
          <Link href="/">Home</Link><Link href="/books">Books</Link><Link href="/articles">Articles</Link>
          <Link href="/speaking">Speaking</Link>
          <div className="nav-dropdown">
            <Link href="/about" className="nav-dropdown-label">About</Link>
            <div className="nav-submenu">
              <Link href="/about">About Steve</Link>
              <Link href="/the-framework">The Framework</Link>
            </div>
          </div>
          <Link className="nav-cta" href="/work-with-steve">Work With Steve</Link>
        </nav>
        <span className="site-version" aria-label="Site version 73">V.73</span>
      </div>
    </header>
  );
}
