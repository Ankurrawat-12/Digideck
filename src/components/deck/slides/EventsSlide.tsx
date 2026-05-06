"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { eventCapabilities, eventFormats } from "@/data/modules";
import { contactMail } from "@/data/deckContent";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { DeckViewport } from "@/components/deck/DeckViewport";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

const PAGES = ["Formats", "Capabilities"] as const;
type Page = (typeof PAGES)[number];

export function EventsSlide() {
  const reduced = useReducedMotionSafe();
  const [pageIdx, setPageIdx] = useState(0);
  const page = PAGES[Math.min(PAGES.length - 1, Math.max(0, pageIdx))] as Page;
  const [paused, setPaused] = useState(false);

  const subtitle = useMemo(
    () => [
      "Designed for reps: pick a format, confirm capabilities, then move directly into a booking conversation.",
      "This slide is paged (Formats / Capabilities) so it stays clean on calls—no scroll, no clutter.",
    ],
    [],
  );

  useEffect(() => {
    if (paused) return;
    if (reduced) return;
    const t = window.setInterval(() => setPageIdx((v) => (v + 1) % PAGES.length), 5200);
    return () => window.clearInterval(t);
  }, [paused, reduced]);

  return (
    <DeckViewport
      eyebrow="Events module"
      title="Formats, capabilities, and next steps"
      subtitle={subtitle}
      left={
        <div
          className="grid h-full min-h-0 grid-rows-[1fr,auto] gap-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="min-h-0 overflow-hidden">
            {page === "Formats" ? (
              <div className="grid gap-3 md:grid-cols-2">
                {eventFormats.slice(0, 4).map((f) => (
                  <motion.div
                    key={f.id}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="bg-transparent p-4 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
                      <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{f.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{f.pitch}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
                {eventCapabilities.slice(0, 4).map((c) => (
                  <motion.div
                    key={c.id}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="bg-transparent p-4 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
                      <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{c.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{c.detail}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr,auto] sm:items-center">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-2 font-mono text-[11px] text-white/60 backdrop-blur-xl">
                {pageIdx + 1}/{PAGES.length} · {page}
              </span>
              <span className="text-[11px] text-white/35">{paused ? "Paused" : "Auto"}</span>
            </div>
            <ButtonLink href={contactMail.events} variant="gold" className="w-full sm:w-auto">
              Start an event conversation
            </ButtonLink>
          </div>
        </div>
      }
    />
  );
}


