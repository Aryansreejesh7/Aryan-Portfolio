import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{label}</dt>
      <dd className="mt-1 text-[15px] leading-relaxed text-ink-700 dark:text-slate-300">{children}</dd>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index="01" title="Featured projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-ink-900/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-accent-600/50 dark:border-white/10 dark:bg-ink-900 dark:hover:border-accent-400/50 sm:p-8">
              <p className="font-mono text-xs text-accent-700 dark:text-accent-400">{p.tag}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
              <dl className="mt-6 space-y-5">
                <Row label="Problem">{p.problem}</Row>
                <Row label="Solution">{p.solution}</Row>
                <Row label="What I built">
                  <ul className="list-inside list-disc space-y-1 marker:text-accent-500">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </Row>
                <Row label="My role">{p.role}</Row>
              </dl>
              {p.tech.length > 0 && (
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
