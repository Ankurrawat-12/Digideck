"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { leasingPaths } from "@/data/modules";
import { mailtoLeasing } from "@/data/deckContent";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { DeckViewport } from "@/components/deck/DeckViewport";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

export function LeasingSlide() {
  const reduced = useReducedMotionSafe();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = leasingPaths.length;
  const p = leasingPaths[Math.min(total - 1, Math.max(0, idx))];

  const subtitle = useMemo(() => {
    return [
      "Pick a segment. Each lane ends in a ready-to-send inquiry — designed like a real pipeline.",
      "Auto-playing segments — hover to pause.",
    ];
  }, []);

  useEffect(() => {
    if (paused) return;
    if (reduced) return;
    if (total <= 1) return;
    const t = window.setInterval(() => setIdx((v) => (v + 1) % total), 5200);
    return () => window.clearInterval(t);
  }, [paused, reduced, total]);

  return (
    <DeckViewport
      eyebrow="Leasing paths"
      title="Segmented like a real pipeline."
      subtitle={subtitle}
      left={
        <div
          className="grid h-full min-h-0 grid-rows-[1fr,auto] gap-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <motion.div
            key={p.id}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="min-h-0 bg-transparent p-6 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{p.segment}</p>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 font-mono text-[11px] text-white/60 backdrop-blur-xl">
                  {idx + 1}/{total}
                </span>
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Best-fit concept</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.bestFit}</p>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Why MOA works</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.whyMoa}</p>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Suggested activation</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.activation}</p>

              <div className="mt-6">
                <ButtonLink href={mailtoLeasing(p.mailtoSubject)} variant="gold" className="w-full">
                  {p.ctaLabel}
                </ButtonLink>
              </div>
            </Card>
          </motion.div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] text-white/35">{paused ? "Paused" : "Auto"}</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="bg-white/0 px-4 py-2.5 text-[12px] border-white/15 text-[var(--moa-cream-muted)] hover:bg-white/5 hover:border-white/25 hover:text-[var(--moa-cream)]"
                onClick={() => setIdx((v) => (v - 1 + total) % total)}
              >
                Prev
              </Button>
              <Button
                variant="outline"
                className="bg-white/0 px-4 py-2.5 text-[12px] border-white/15 text-[var(--moa-cream-muted)] hover:bg-white/5 hover:border-white/25 hover:text-[var(--moa-cream)]"
                onClick={() => setIdx((v) => (v + 1) % total)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      }
    />
  );
}

