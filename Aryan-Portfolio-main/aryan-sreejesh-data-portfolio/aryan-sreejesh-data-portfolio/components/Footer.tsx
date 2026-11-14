import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 font-mono text-xs text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition hover:text-accent-700 dark:hover:text-accent-400">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
