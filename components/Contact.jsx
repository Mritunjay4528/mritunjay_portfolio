import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="mail --compose" title="Get in touch" />
      <TerminalWindow title="~/mritunjay — new message">
        <p className="text-ink-muted leading-relaxed max-w-lg">
          Open to internships, collaborations, and interesting backend or ML
          problems. The fastest way to reach me is email — I check it more
          often than I'd like to admit.
        </p>
        <div className="mt-6 flex flex-col gap-3 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-ink transition-colors hover:text-signal"
          >
            <Mail size={16} className="text-signal" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink transition-colors hover:text-signal"
          >
            <Github size={16} className="text-signal" />
            github.com/Mritunjay4528
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink transition-colors hover:text-signal"
          >
            <Linkedin size={16} className="text-signal" />
            linkedin.com/in/mritunjay
          </a>
        </div>
      </TerminalWindow>
    </section>
  );
}
