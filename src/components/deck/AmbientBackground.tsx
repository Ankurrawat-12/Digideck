"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

export function AmbientBackground() {
  const reduced = useReducedMotionSafe();

  // Avoid scroll-linked animation work on low-power / reduced-motion.
  if (reduced) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#050506]" />
        <div className="absolute -top-[40%] left-[-20%] h-[90vh] w-[90vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(197,163,106,0.14),transparent_62%)] blur-3xl" />
        <div className="absolute -bottom-[45%] right-[-25%] h-[95vh] w-[95vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,140,255,0.08),transparent_62%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.72))]" />
      </div>
    );
  }

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });
  const y1 = useTransform(smooth, [0, 1], ["0%", reduced ? "0%" : "-8%"]);
  const y2 = useTransform(smooth, [0, 1], ["0%", reduced ? "0%" : "10%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050506]" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[40%] left-[-20%] h-[90vh] w-[90vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(197,163,106,0.14),transparent_62%)] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-[45%] right-[-25%] h-[95vh] w-[95vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,140,255,0.08),transparent_62%)] blur-3xl"
      />
      <div className="absolute inset-0 hidden opacity-[0.055] md:block [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.72))]" />
    </div>
  );
}
