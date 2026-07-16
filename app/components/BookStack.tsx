"use client";

import { useEffect, useRef, useState } from "react";

export function BookStack() {
  const [familyFront, setFamilyFront] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = stackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.28;
      if (rect.top < trigger && rect.bottom > 0) setFamilyFront(true);
      else if (rect.top > window.innerHeight * 0.48) setFamilyFront(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={stackRef}
      className={`book-stack${familyFront ? " family-front" : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Switch the featured book cover"
      onClick={() => setFamilyFront((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFamilyFront((value) => !value);
        }
      }}
      onMouseEnter={() => setFamilyFront(true)}
      onMouseLeave={() => setFamilyFront(false)}
    >
      <figure className="book-card book-back"><img src="/assets/family-lawfare.png" alt="Family Lawfare book cover" /></figure>
      <figure className="book-card book-front"><img src="/assets/stolen-sons.png" alt="Stolen Sons book cover" /></figure>
      <span className="book-switch-note">Click or tap to switch</span>
    </div>
  );
}
