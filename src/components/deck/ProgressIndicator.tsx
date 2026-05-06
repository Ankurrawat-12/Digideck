"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ProgressIndicator({ index, total }: { index: number; total: number }) {
  const reduced = useReducedMotion();

  if (reduced) return null;

  const progress = total <= 1 ? 0 : Math.min(1, Math.max(0, index / (total - 1)));

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[90] h-[2px] bg-white/[0.06]">
      <motion.div
        className="h-full origin-left bg-[linear-gradient(90deg,rgba(197,163,106,0.25),rgba(197,163,106,0.85),rgba(255,255,255,0.35))]"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
