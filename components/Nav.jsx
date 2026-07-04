"use client";

import { useState, useEffect } from "react";
import { nav, profile } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-bg/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink">
          <span className="text-ink-faint">~/</span>
          {profile.handle}
        </a>
        <ul className="hidden sm:flex items-center gap-6 font-mono text-xs text-ink-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-signal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeHref}
          download
          className="font-mono text-xs rounded-md border border-border px-3 py-1.5 text-ink transition-colors hover:border-signal hover:text-signal"
        >
          ./resume
        </a>
      </nav>
    </header>
  );
}
