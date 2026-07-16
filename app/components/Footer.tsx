import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><h2>Born in Blood.<br /><em>Forged in Fire.</em></h2></div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/work-with-steve">Work With Steve</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="footer-note">
          <p className="footer-pillars">Love<i>.</i> Law<i>.</i><br />Leadership<i>.</i> Lifestyle<i>.</i></p>
          <div className="footer-social"><a href="https://instagram.com/fathersfront" target="_blank" rel="noreferrer" aria-label="Fathers Front on Instagram"><img src="/assets/social/instagram.svg" alt="" /></a><a href="https://facebook.com/fathersfront" target="_blank" rel="noreferrer" aria-label="Fathers Front on Facebook"><img src="/assets/social/facebook.svg" alt="" /></a><a href="https://youtube.com/@fathersfront" target="_blank" rel="noreferrer" aria-label="Fathers Front on YouTube"><img src="/assets/social/youtube.svg" alt="" /></a></div>
          <span>© 2026 Fathers Front</span>
        </div>
      </div>
    </footer>
  );
}
