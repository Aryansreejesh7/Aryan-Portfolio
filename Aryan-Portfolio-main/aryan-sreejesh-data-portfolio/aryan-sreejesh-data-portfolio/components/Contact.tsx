import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "aryansreejesh", href: profile.linkedin },
  { label: "Location", value: profile.location, href: undefined as string | undefined },
];

export default function Contact() {
  return (
    <Section id="contact" index="06" title="Let's talk">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-700 dark:text-slate-300">
          I&apos;m looking for an entry-level Data Analyst role. If you have an opening or want to discuss my work, I&apos;d
          be glad to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            Email me
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Resume (PDF)
          </a>
        </div>
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="rounded-xl border border-ink-900/10 bg-white p-5 dark:border-white/10 dark:bg-ink-900"
            >
              <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{it.label}</dt>
              <dd className="mt-1 break-words">
                {it.href ? (
                  <a
                    href={it.href}
                    {...(it.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="transition hover:text-accent-700 dark:hover:text-accent-400"
                  >
                    {it.value}
                  </a>
                ) : (
                  it.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
