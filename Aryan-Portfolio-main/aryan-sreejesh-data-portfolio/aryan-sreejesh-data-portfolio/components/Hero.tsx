import { profile, toolkit } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-600/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-700 dark:border-accent-400/30 dark:text-accent-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            {profile.status}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 font-mono text-base text-accent-700 dark:text-accent-400 sm:text-lg">
            {profile.level} {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700 dark:text-slate-300">{profile.headline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn-ghost">
              Contact me
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Resume (PDF)
            </a>
          </div>
        </div>

        {/* Query-style card: a nod to the SQL work, listing the real toolkit */}
        <div
          className="rounded-xl border border-ink-900/10 bg-white shadow-sm dark:border-white/10 dark:bg-ink-900"
          aria-label="Toolkit summary"
        >
          <div className="flex items-center gap-1.5 border-b border-ink-900/10 px-4 py-3 dark:border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="ml-3 font-mono text-xs text-slate-500">toolkit.sql</span>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-6">
            <code>
              <span className="text-accent-700 dark:text-accent-400">SELECT</span> skill{"\n"}
              <span className="text-accent-700 dark:text-accent-400">FROM</span> toolkit{"\n"}
              <span className="text-accent-700 dark:text-accent-400">WHERE</span> role = &apos;data_analyst&apos;;
            </code>
          </pre>
          <ul className="border-t border-ink-900/10 font-mono text-[13px] dark:border-white/10">
            {toolkit.map((t, i) => (
              <li
                key={t}
                className="flex gap-4 border-b border-ink-900/5 px-5 py-2 transition hover:bg-accent-500/10 dark:border-white/5"
              >
                <span className="w-4 text-slate-400">{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="px-5 py-3 font-mono text-xs text-slate-500">{toolkit.length} rows</p>
        </div>
      </div>
    </section>
  );
}
