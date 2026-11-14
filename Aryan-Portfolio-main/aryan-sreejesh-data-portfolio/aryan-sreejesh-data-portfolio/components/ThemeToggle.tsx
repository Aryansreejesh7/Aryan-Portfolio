"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* storage unavailable: theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md border border-ink-900/15 px-3 py-1.5 font-mono text-xs transition hover:border-accent-600 hover:text-accent-700 dark:border-white/15 dark:hover:border-accent-400 dark:hover:text-accent-400"
    >
      {dark ? "light" : "dark"}
    </button>
  );
}
