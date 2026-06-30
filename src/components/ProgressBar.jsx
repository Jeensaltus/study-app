export default function ProgressBar({ value, color = "#378ADD", label }) {
  return (
    <div className="space-y-1.5">
      {label ? (
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
          <span>{label}</span>
          <span className="font-semibold" style={{ color }}>{value}%</span>
        </div>
      ) : null}
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/70">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${Math.max(0, Math.min(100, value))}%`,
            background: `linear-gradient(90deg, ${color}, ${color}dd, ${color}88)`,
            backgroundSize: '200% 100%',
          }}
        >
          <div className="h-full w-full rounded-full animate-gradient opacity-30"
            style={{
              background: `linear-gradient(90deg, transparent, white, transparent)`,
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
