"use client";

import { motion } from "framer-motion";
import { venueConcepts } from "@/data/modules";
import { IMAGE } from "@/data/mediaAssets";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DeckImage } from "@/components/deck/DeckImage";

export function VenueModule() {
  const reduced = useReducedMotionSafe();

  return (
    <section
      id="venues"
      className="bg-transparent pt-[max(5.5rem,env(safe-area-inset-top))] pb-[max(4.5rem,env(safe-area-inset-bottom))] md:pt-28 md:pb-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="max-w-[72ch] lg:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Future expansion</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.85rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-[var(--moa-cream)]">
              Venue concepts — architecture-ready.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
              Concept modules are labeled clearly. This section is about proving the architecture — not implying confirmed
              builds.
            </p>

            <div className="mt-6 grid gap-2 text-[11px] text-white/55">
              <p>
                <span className="font-semibold text-white/70">Why it matters:</span> venues unlock new revenue motions —
                booking, sponsorship packaging, and premium hospitality.
              </p>
              <p>
                <span className="font-semibold text-white/70">What ships next:</span> capacity, pricing bands, availability,
                and a booking flow.
              </p>
            </div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.55)] lg:col-span-7"
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[16/7] w-full">
              <DeckImage
                src={IMAGE.expoConcept}
                alt="Venue concept visual"
                labelFallback="Venue concept"
                sizes="(max-width: 768px) 100vw, 900px"
                priority={false}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.9))]" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">Concept preview</p>
                <p className="mt-2 max-w-[60ch] text-base font-semibold tracking-tight text-[var(--moa-cream)] sm:text-lg">
                  Dedicated venue pages can become clickable sales modules — built like a deck, not a brochure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {venueConcepts.map((v, i) => (
            <motion.div
              key={v.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: reduced ? 0 : 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                className={cn(
                  "relative h-full bg-transparent p-6 border-white/15 hover:border-white/25 hover:bg-white/[0.02] transition-colors",
                )}
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.55),transparent)] opacity-70" />
                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{v.title}</p>
                  {v.isConcept ? (
                    <Badge className="shrink-0 text-[9px] text-white/70">Concept module</Badge>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{v.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
