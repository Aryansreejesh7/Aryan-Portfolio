import Section from "./Section";
import Reveal from "./Reveal";
import { certifications, education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education & certifications">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-xl border border-ink-900/10 bg-white p-6 dark:border-white/10 dark:bg-ink-900 sm:p-8">
            <p className="font-mono text-xs text-accent-700 dark:text-accent-400">{education.period}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-2 text-ink-700 dark:text-slate-300">{education.school}</p>
            <p className="text-ink-700 dark:text-slate-400">{education.university}</p>
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="h-full rounded-xl border border-ink-900/10 bg-white p-6 dark:border-white/10 dark:bg-ink-900 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight">Certifications</h3>
            <ul className="mt-4 space-y-3 text-ink-700 dark:text-slate-300">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
