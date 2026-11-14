import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience & training">
      <ol className="relative space-y-10 border-l border-ink-900/15 pl-8 dark:border-white/15">
        {experience.map((e, i) => (
          <li key={e.org + e.role}>
            <Reveal delay={i * 100}>
              <span
                className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-paper dark:ring-ink-950"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-accent-700 dark:text-accent-400">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{e.role}</h3>
              <p className="text-ink-700 dark:text-slate-400">
                {e.org} · {e.type}
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed text-ink-700 marker:text-accent-500 dark:text-slate-300">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
