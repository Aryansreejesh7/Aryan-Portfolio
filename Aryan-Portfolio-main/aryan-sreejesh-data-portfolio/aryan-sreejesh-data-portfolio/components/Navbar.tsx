"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-paper/80 backdrop-blur dark:border-white/10 dark:bg-ink-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-accent-600 dark:text-accent-400">&gt;</span> {profile.name.toLowerCase().replace(" ", ".")}
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-accent-700 dark:hover:text-accent-400">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="rounded-md border border-ink-900/15 px-3 py-1.5 font-mono text-xs dark:border-white/15"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-ink-900/10 px-5 py-3 text-sm dark:border-white/10 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
