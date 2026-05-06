"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

export function RotatingSubcopy({
  lines,
  intervalMs = 4200,
  className,
}: {
  lines: string[] | string;
  intervalMs?: number;
  className?: string;
}) {
  const reduced = useReducedMotionSafe();
  const items = useMemo(() => (Array.isArray(lines) ? lines : [lines]).filter(Boolean), [lines]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = window.setInterval(() => setIdx((v) => (v + 1) % items.length), intervalMs);
    return () => window.clearInterval(t);
  }, [items.length, intervalMs]);

  const active = items[Math.min(items.length - 1, Math.max(0, idx))] ?? "";

  return (
    <span className={cn("relative inline-block min-h-[1.65em]", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${idx}:${active}`}
          className="block"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
          transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {active}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

