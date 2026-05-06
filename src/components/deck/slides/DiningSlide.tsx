"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/deckContent";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DeckViewport } from "@/components/deck/DeckViewport";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

function diningSection() {
  const s = sections.find((x) => x.id === "dining");
  if (!s) throw new Error("Missing dining section");
  return s;
}

export function DiningSlide() {
  const reduced = useReducedMotionSafe();
  const s = diningSection();

  const subtitle = useMemo(() => {
    return [
      "F&B isn’t support — it’s itinerary glue that extends dwell, anchors groups, and supports events.",
      "Dwell time, group visits, and event adjacency — packaged into sponsor-ready culinary moments.",
    ];
  }, []);

  const points = useMemo(
    () => [
      { k: "Dwell", v: "Longer visits → more conversion opportunities" },
      { k: "Groups", v: "Food anchors multi-person itineraries" },
      { k: "Events", v: "Programming creates predictable peaks" },
      { k: "Sponsorship", v: "Culinary moments are brand-friendly by default" },
    ],
    [],
  );

  return (
    <DeckViewport
      eyebrow={s.eyebrow ?? "Dining & lifestyle"}
      title={s.title}
      subtitle={subtitle}
      left={
        <div className="grid h-full min-h-0 grid-rows-[1fr,auto] gap-5">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {points.map((p, i) => (
              <motion.div
                key={p.k}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : 0.06 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="h-full bg-transparent p-5 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">{p.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.v}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
          >
            <motion.div whileHover={reduced ? undefined : { scale: 1.02 }} whileTap={reduced ? undefined : { scale: 0.99 }}>
              <Button
                variant="outline"
                className="bg-white/0 text-[12px] px-4 py-2.5 border-white/25 text-[var(--moa-cream)] hover:bg-white/5 hover:border-white/35"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("deck:navigate", { detail: { id: "sponsorship" } }))
                }
              >
                Sponsor culinary moments
              </Button>
            </motion.div>
            <motion.div whileHover={reduced ? undefined : { scale: 1.02 }} whileTap={reduced ? undefined : { scale: 0.99 }}>
              <Button
                variant="outline"
                className="bg-white/0 text-[12px] px-4 py-2.5 border-white/15 text-[var(--moa-cream-muted)] hover:bg-white/5 hover:border-white/25 hover:text-[var(--moa-cream)]"
                onClick={() => window.dispatchEvent(new CustomEvent("deck:navigate", { detail: { id: "events" } }))}
              >
                Tie to event peaks
              </Button>
            </motion.div>
          </motion.div>
        </div>
      }
    />
  );
}

