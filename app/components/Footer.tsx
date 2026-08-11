"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type DispatchStatus = "idle" | "submitting" | "success" | "error";

export function Footer() {
  const [dispatchStatus, setDispatchStatus] = useState<DispatchStatus>("idle");

  async function subscribeToDispatch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = window.location.hostname === "localhost"
      ? "http://localhost:8787/api/dispatch"
      : "/api/dispatch";

    setDispatchStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          email: data.get("email"),
          website: data.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("Dispatch subscription failed");
      }

      form.reset();
      setDispatchStatus("success");
    } catch {
      setDispatchStatus("error");
    }
  }

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-dispatch">
          <p className="footer-dispatch-kicker">Weekly field note</p>
          <h2>The Fathers Front Dispatch</h2>
          <p>A weekly field note for fathers who are fighting, fortifying and forging their family&apos;s future.</p>
          <form className="footer-dispatch-form" onSubmit={subscribeToDispatch}>
            <label className="sr-only" htmlFor="footer-dispatch-first-name">First name</label>
            <input
              id="footer-dispatch-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="First name"
              disabled={dispatchStatus === "success"}
            />
            <label className="sr-only" htmlFor="footer-dispatch-email">Email address</label>
            <input
              id="footer-dispatch-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              required
              disabled={dispatchStatus === "success"}
            />
            <div className="footer-dispatch-honeypot" aria-hidden="true">
              <label htmlFor="footer-dispatch-website">Website</label>
              <input id="footer-dispatch-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" disabled={dispatchStatus === "submitting" || dispatchStatus === "success"}>
              {dispatchStatus === "submitting"
                ? "Sending..."
                : dispatchStatus === "success"
                  ? "Received — Welcome to the Front"
                  : "Join the Dispatch"}
            </button>
          </form>
          <p className={`footer-dispatch-status${dispatchStatus === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
            {dispatchStatus === "error" ? "Something went wrong. Please try again." : ""}
          </p>
        </div>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/donate">Donate</Link>
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
