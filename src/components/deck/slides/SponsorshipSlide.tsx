"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { sponsorshipActivations, sponsorshipAudiences, sponsorshipTiers } from "@/data/modules";
import { contactMail } from "@/data/deckContent";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { DeckViewport } from "@/components/deck/DeckViewport";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

const PAGES = ["Tiers", "Activations", "Audiences"] as const;
type Page = (typeof PAGES)[number];

export function SponsorshipSlide() {
  const reduced = useReducedMotionSafe();
  const [pageIdx, setPageIdx] = useState(0);
  const page = PAGES[Math.min(PAGES.length - 1, Math.max(0, pageIdx))] as Page;
  const [paused, setPaused] = useState(false);

  const subtitle = useMemo(
    () => [
      "Tiers, audiences, and activation ideas — built to move a partnership forward.",
      "Auto-playing pages to keep the deck clean on calls.",
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
      eyebrow="Sponsorship module"
      title="Partnerships with built-in attention."
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
            {page === "Tiers" ? (
              <div className="grid gap-3 md:grid-cols-2">
                {sponsorshipTiers.slice(0, 4).map((t) => (
                  <motion.div
                    key={t.id}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="bg-transparent p-4 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
                      <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{t.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{t.summary}</p>
                      <ul className="mt-3 grid gap-2 text-sm text-white/70">
                        {t.signals.slice(0, 2).map((s) => (
                          <li key={s} className="flex gap-2">
                            <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[rgba(197,163,106,0.85)]" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : page === "Activations" ? (
              <div className="grid gap-3 md:grid-cols-2">
                {sponsorshipActivations.slice(0, 4).map((a) => (
                  <motion.div
                    key={a.id}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="bg-transparent p-4 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{a.title}</p>
                        <Badge className="shrink-0 text-[9px]">Concept</Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{a.angle}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-2">
                {sponsorshipAudiences.slice(0, 4).map((a) => (
                  <motion.div
                    key={a.id}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Card className="bg-transparent p-4 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
                      <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{a.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{a.note}</p>
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
            <ButtonLink href={contactMail.sponsorship} variant="primary" className="w-full sm:w-auto">
              Build a sponsorship package
            </ButtonLink>
          </div>
        </div>
      }
    />
  );
}

