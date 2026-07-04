"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const statusStyles = {
  running: {
    color: "text-signal",
    dot: "bg-signal",
    icon: CircleDot,
    label: "running",
  },
  success: {
    color: "text-success",
    dot: "bg-success",
    icon: CheckCircle2,
    label: "passed",
  },
};

function ProjectCard({ project, index }) {
  const status = statusStyles[project.status];
  const Icon = status.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="terminal-chrome p-5 sm:p-6 transition-colors hover:border-signal/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
            run / {project.period}
          </div>
          <h3 className="mt-2 font-mono text-lg font-medium text-ink">
            {project.name}
          </h3>
        </div>
        <span
          className={`flex items-center gap-1 rounded-full border border-border px-2.5 py-1 font-mono text-[11px] ${status.color}`}
        >
          <Icon size={12} />
          {status.label}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-xs text-ink-muted leading-relaxed">
            <span className="text-signal">›</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-border-soft bg-bg-raised px-2 py-0.5 font-mono text-[11px] text-ink-faint"
          >
            {s}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-ink-muted transition-colors hover:text-signal"
      >
        view source
        <ArrowUpRight size={13} />
      </a>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading command="pipeline status --all" title="Projects" />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
