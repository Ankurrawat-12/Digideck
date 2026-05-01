"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { scrollToSection } from "@/lib/scrollToSection";
import { cn } from "@/lib/cn";

export function OpportunityCard({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href: string;
  className?: string;
}) {
  const reduced = useReducedMotionSafe();

  return (
    <motion.button
      type="button"
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(197,163,106,0.55)]",
        className,
      )}
      initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => scrollToSection(href)}
    >
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Explore by objective
          </p>
          <ArrowUpRight
            className="mt-0.5 h-5 w-5 shrink-0 text-white/45 transition-colors group-hover:text-[rgba(197,163,106,0.95)]"
            aria-hidden
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[var(--moa-cream)]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{description}</p>
        <div className="mt-auto pt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45 transition-colors group-hover:text-white/70">
            Jump to section
          </p>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 [background:radial-gradient(700px_circle_at_20%_0%,rgba(197,163,106,0.12),transparent_55%)]" />
    </motion.button>
  );
}
