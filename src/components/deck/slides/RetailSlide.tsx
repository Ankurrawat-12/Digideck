"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/deckContent";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DeckViewport } from "@/components/deck/DeckViewport";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

function retailSection() {
  const s = sections.find((x) => x.id === "retail");
  if (!s) throw new Error("Missing retail section");
  return s;
}

export function RetailSlide() {
  const reduced = useReducedMotionSafe();
  const s = retailSection();

  const subtitle = useMemo(() => {
    return [
      s.body ?? "Retail powered by intent — with clear lanes for flagships, pop-ups, and experiential moments.",
      "Designed as a call-friendly slide: concise thesis, clear selling points, and fast next steps.",
    ];
  }, [s.body]);

  return (
    <DeckViewport
      eyebrow={s.eyebrow ?? "Retail platform"}
      title={s.title}
      subtitle={subtitle}
      left={
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-5"
        >
          <Card className="p-7">
            <p className="text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
              Use this lane when the conversation is about <span className="text-white/80">flagships</span>,{" "}
              <span className="text-white/80">drops</span>, and{" "}
              <span className="text-white/80">experiential retail</span> — then pivot into a category-specific pitch.
            </p>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Why it sells</p>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
                {[
                  "Attraction-led itineraries drive longer visits and repeatable peaks.",
                  "Flagship storytelling + drops convert when audiences arrive with intent.",
                  "Clear next steps: pick a lane → open a pitch → send inquiry.",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[rgba(197,163,106,0.85)]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <Button
                variant="ghost"
                onClick={() => window.dispatchEvent(new CustomEvent("deck:navigate", { detail: { id: "luxury" } }))}
              >
                Luxury thesis
              </Button>
            </div>
          </Card>
        </motion.div>
      }
    />
  );
}

