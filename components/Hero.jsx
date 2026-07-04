"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";

const COMMAND = "whoami";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="relative bg-grid bg-grid mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      <TerminalWindow title="~/mritunjay — zsh — 80x24">
        <p className="font-mono text-sm text-ink-muted">
          <span className="text-success">➜</span>{" "}
          <span className="text-signal">~</span>{" "}
          {typed}
          {!done && <span className="animate-blink">▍</span>}
        </p>

        {done && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <h1 className="font-mono text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              {profile.name}
            </h1>
            <p className="mt-3 font-mono text-sm sm:text-base text-signal">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-ink-muted leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-signal px-4 py-2 font-mono text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
              >
                view projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-signal hover:text-signal"
              >
                get in touch
              </a>
            </div>
          </motion.div>
        )}
      </TerminalWindow>
    </section>
  );
}
