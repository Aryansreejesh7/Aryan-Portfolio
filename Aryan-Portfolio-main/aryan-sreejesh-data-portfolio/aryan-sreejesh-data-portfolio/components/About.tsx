import Section from "./Section";
import Reveal from "./Reveal";
import { about, languages, profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" index="02" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-ink-700 dark:text-slate-300">
          {about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Reveal>
        <Reveal delay={100}>
          <dl className="space-y-5 rounded-xl border border-ink-900/10 bg-white p-6 dark:border-white/10 dark:bg-ink-900">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Based in</dt>
              <dd className="mt-1">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Languages</dt>
              <dd className="mt-1">{languages.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">Looking for</dt>
              <dd className="mt-1">Entry-level Data Analyst role</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
