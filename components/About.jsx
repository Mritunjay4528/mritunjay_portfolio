import { about } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="cat about.md" title="About" />
      <div className="max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-ink-muted">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
