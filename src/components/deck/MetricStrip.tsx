"use client";

import { motion } from "framer-motion";
import type { DeckMetric } from "@/data/metrics";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";

export function MetricStrip({
  metrics,
  variant = "deck",
  className,
}: {
  metrics: DeckMetric[];
  variant?: "deck" | "hero";
  className?: string;
}) {
  const reduced = useReducedMotionSafe();

  return (
    <div
      className={cn(
        variant === "hero"
          ? "grid grid-cols-2 items-stretch gap-3 sm:grid-cols-4 lg:gap-4"
          : "grid grid-cols-2 items-stretch gap-3 lg:gap-4",
        className,
      )}
    >
      {metrics.map((m, i) => (
        <motion.div
          key={m.id}
          initial={reduced ? false : { opacity: 0, y: 10, scale: 0.98 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "grid grid-rows-[auto,1fr,auto] rounded-2xl border border-white/10 backdrop-blur-xl",
            variant === "hero"
              ? "min-h-[104px] bg-black/35 p-4 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
              : "min-h-[132px] bg-white/[0.035] p-4",
          )}
        >
          <p
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.22em]",
              variant === "hero" ? "text-white/60" : "text-[var(--moa-cream-muted)]",
            )}
          >
            {m.label}
          </p>
          <MetricValue value={m.value} variant={variant} />
          {m.hint ? (
            <p className="pt-2 text-xs leading-relaxed text-white/45">{m.hint}</p>
          ) : (
            <span aria-hidden />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function MetricValue({ value, variant }: { value: string; variant: "deck" | "hero" }) {
  const parts = value.trim().split(/\s+/);
  const hasSuffix = parts.length > 1;
  const main = hasSuffix ? parts[0] : value;
  const suffix = hasSuffix ? parts.slice(1).join(" ") : "";

  return (
    <div className={cn("flex min-w-0 flex-col justify-center", variant === "hero" ? "pt-2" : "pt-2")}>
      <div className="flex flex-col gap-1 leading-none">
        <span
          className={cn(
            "font-semibold tracking-tight text-[var(--moa-cream)]",
            variant === "hero" ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl",
          )}
        >
          {main}
        </span>
        {suffix ? (
          <span
            className={cn(
              "font-semibold tracking-[0.02em] text-white/70",
              variant === "hero" ? "text-xs sm:text-sm" : "text-sm sm:text-base",
            )}
          >
            {suffix}
          </span>
        ) : null}
      </div>
    </div>
  );
}
