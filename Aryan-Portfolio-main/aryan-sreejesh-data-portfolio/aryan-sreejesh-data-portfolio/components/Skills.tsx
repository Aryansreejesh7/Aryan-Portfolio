import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 80} className="h-full">
            <div className="h-full rounded-xl border border-ink-900/10 bg-white p-6 transition duration-200 hover:border-accent-600/50 dark:border-white/10 dark:bg-ink-900 dark:hover:border-accent-400/50">
              <h3 className="font-semibold tracking-tight">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
