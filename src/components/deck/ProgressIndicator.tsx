"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export function ProgressIndicator() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[90] h-[2px] bg-white/[0.06]">
      <motion.div
        className="h-full origin-left bg-[linear-gradient(90deg,rgba(197,163,106,0.25),rgba(197,163,106,0.85),rgba(255,255,255,0.35))]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
