import { experience, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function LogEntry({ heading, sub, period, points, meta }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-bg" />
      <span className="absolute left-[4.5px] top-4 bottom-[-2rem] w-px bg-border last:hidden" />
      <p className="font-mono text-xs text-ink-faint">{period}</p>
      <h3 className="mt-1 font-mono text-base font-medium text-ink">
        {heading}
      </h3>
      <p className="font-mono text-xs text-signal">{sub}</p>
      {meta && <p className="mt-1 font-mono text-xs text-ink-muted">{meta}</p>}
      {points && (
        <ul className="mt-3 space-y-1.5">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-muted leading-relaxed">
              <span className="text-signal">›</span>
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="git log --oneline" title="Experience & Education" />
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        <div className="space-y-10">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            experience
          </p>
          {experience.map((e) => (
            <LogEntry
              key={e.org}
              heading={e.role}
              sub={e.org}
              period={e.period}
              points={e.points}
            />
          ))}
        </div>
        <div className="space-y-10">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
            education
          </p>
          {education.map((ed) => (
            <LogEntry
              key={ed.school}
              heading={ed.degree}
              sub={ed.school}
              period={ed.period}
              meta={ed.meta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
