export default function TerminalWindow({ title, children, className = "" }) {
  return (
    <div className={`terminal-chrome overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-bg-raised">
        <span className="dot bg-danger/70" />
        <span className="dot bg-signal/70" />
        <span className="dot bg-success/70" />
        {title && (
          <span className="ml-2 font-mono text-xs text-ink-muted">{title}</span>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
