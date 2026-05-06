"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { RotatingSubcopy } from "./RotatingSubcopy";

export function DeckViewport({
  eyebrow,
  title,
  subtitle,
  left,
  right,
  footer,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string | string[];
  left: React.ReactNode;
  right?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotionSafe();

  return (
    <section className={cn("h-full w-full", className)}>
      <div className="h-full px-4 pt-[max(4.75rem,env(safe-area-inset-top))] pb-[max(2.75rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-[max(5.75rem,env(safe-area-inset-top))] sm:pb-[max(3.5rem,env(safe-area-inset-bottom))] lg:px-10 lg:pt-28 lg:pb-16">
        <motion.div
          className="mx-auto flex h-full max-w-[1200px] flex-col"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="shrink-0">
            {eyebrow ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">{eyebrow}</p>
            ) : null}
            <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.85rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--moa-cream)]">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
                <RotatingSubcopy lines={subtitle} />
              </p>
            ) : null}
          </header>

          <div className={cn("mt-6 grid min-h-0 flex-1 gap-4 sm:mt-8 sm:gap-6", right ? "lg:grid-cols-12 lg:gap-10" : "")}>
            <motion.div
              className={cn("min-h-0", right ? "lg:col-span-6" : "")}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {left}
            </motion.div>
            {right ? (
              <motion.div
                className="min-h-0 lg:col-span-6"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {right}
              </motion.div>
            ) : null}
          </div>

          {footer ? <div className="mt-6 shrink-0">{footer}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}

