"use client";

import { motion } from "framer-motion";
import { venueConcepts } from "@/data/modules";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ModuleCard } from "@/components/deck/ModuleCard";

export function VenueModule() {
  const reduced = useReducedMotionSafe();

  return (
    <section id="venues" className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[72ch]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Future expansion</p>
          <h2 className="mt-4 text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--moa-cream)]">
            Venue concepts — architecture-ready.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
            Hypothetical modules are labeled clearly — they demonstrate expandability without implying confirmed builds.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {venueConcepts.map((v, i) => (
            <motion.div
              key={v.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full p-6">
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

        <div className="mt-12">
          <ModuleCard
            title="Expandability pattern"
            subtitle="New venues and sponsorship lanes ship as data + a module — without rewriting the deck shell."
            defaultOpen={false}
          >
            Keep sections declarative in <span className="font-mono text-white/70">deckContent.ts</span> and structured
            lists in <span className="font-mono text-white/70">modules.ts</span>. When requirements grow, add optional routes
            under <span className="font-mono text-white/70">src/app</span> while preserving this single-scroll reviewer path.
          </ModuleCard>
        </div>
      </div>
    </section>
  );
}
