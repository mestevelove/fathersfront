import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-dispatch">
          <p className="footer-dispatch-kicker">Weekly field note</p>
          <h2>The Fathers Front Dispatch</h2>
          <p>A weekly field note for fathers and builders under pressure.</p>
          <form className="footer-dispatch-form">
            <label className="sr-only" htmlFor="footer-dispatch-email">Email address</label>
            <input id="footer-dispatch-email" name="email" type="email" autoComplete="email" placeholder="Email address" required />
            <button type="submit">Join the Dispatch</button>
          </form>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/work-with-steve">Work With Steve</Link>
          <Link href="/about">About</Link>
          <Link href="/the-framework">The Framework</Link>
        </div>
        <div className="footer-note">
          <p className="footer-pillars">Love<i>.</i> Law<i>.</i><br />Leadership<i>.</i> Lifestyle<i>.</i></p>
          <div className="footer-social">
            <a href="https://instagram.com/fathersfront" target="_blank" rel="noreferrer" aria-label="Fathers Front on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle className="social-fill" cx="17.4" cy="6.8" r="1.1" /></svg></a>
            <a href="https://facebook.com/fathersfront" target="_blank" rel="noreferrer" aria-label="Fathers Front on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path className="social-fill" d="M13.7 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.5-.1-1.4-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.5V13h2.8v8h3.4Z" /></svg></a>
            <a href="https://youtube.com/@fathersfront" target="_blank" rel="noreferrer" aria-label="Fathers Front on YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="4" /><path className="social-fill" d="m10 9 6 3-6 3V9Z" /></svg></a>
          </div>
          <span>© 2026 Fathers Front</span>
        </div>
      </div>
    </footer>
  );
}
