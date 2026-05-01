import { cn } from "@/lib/cn";

export function MediaFallback({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(197,163,106,0.18),transparent_55%),linear-gradient(145deg,#121216,#070708)]",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      <div className="relative px-8 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--moa-cream-muted)]">
          Asset placeholder
        </p>
        <p className="mt-3 text-sm font-medium tracking-tight text-[var(--moa-cream)]">{label}</p>
        <p className="mt-2 text-xs leading-relaxed text-white/45">
          Drop media into <span className="text-white/65">/public/assets</span> — no code changes required.
        </p>
      </div>
    </div>
  );
}
