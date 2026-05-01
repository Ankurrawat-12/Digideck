"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

export function ModuleCard({
  title,
  subtitle,
  children,
  defaultOpen = false,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const reduced = useReducedMotionSafe();
  const id = useId();
  const panelId = `${id}-panel`;
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl", className)}>
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(197,163,106,0.55)]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="min-w-0">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Module
          </span>
          <span className="mt-2 block text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{title}</span>
          {subtitle ? <span className="mt-2 block text-sm leading-relaxed text-[var(--moa-cream-muted)]">{subtitle}</span> : null}
        </span>
        <ChevronDown
          className={cn("mt-1 h-5 w-5 shrink-0 text-white/55 transition-transform", open ? "rotate-180" : "rotate-0")}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06]"
          >
            <div className="px-5 py-5 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
