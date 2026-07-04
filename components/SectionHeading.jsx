export default function SectionHeading({ command, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-signal mb-2">
        <span className="text-ink-faint">mritunjay@devhq</span>
        <span className="text-ink-faint">:~$ </span>
        {command}
      </p>
      <h2 className="font-mono text-2xl sm:text-3xl font-medium tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}
