"use client";

import { motion } from "framer-motion";
import { leasingPaths } from "@/data/modules";
import { mailtoLeasing } from "@/data/deckContent";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { VIDEO, POSTER } from "@/data/mediaAssets";
import { VideoPanel } from "@/components/deck/VideoPanel";

export function LeasingModule() {
  const reduced = useReducedMotionSafe();

  return (
    <section
      id="leasing"
      className="bg-transparent pt-[max(5.5rem,env(safe-area-inset-top))] pb-[max(4.5rem,env(safe-area-inset-bottom))] md:pt-28 md:pb-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Leasing paths</p>
            <h2 className="mt-4 text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--moa-cream)]">
              Segmented like a real pipeline.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
              Every lane ends in action: category fit, why MOA wins, activation concept, and a ready-to-send inquiry.
            </p>
          </div>

          <div className="lg:col-span-6">
            <VideoPanel
              src={VIDEO.leasing}
              poster={POSTER.retail}
              ariaLabel="Leasing highlights loop"
              labelFallback="Leasing highlight"
              hoverBoost
              className="min-h-[260px] sm:min-h-[320px]"
              priority={false}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {leasingPaths.map((p, i) => (
            <motion.div
              key={p.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">{p.segment}</p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-[var(--moa-cream)]">Best-fit concept</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.bestFit}</p>

                <p className="mt-5 text-sm font-semibold tracking-tight text-[var(--moa-cream)]">Why MOA works</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.whyMoa}</p>

                <p className="mt-5 text-sm font-semibold tracking-tight text-[var(--moa-cream)]">Suggested activation</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{p.activation}</p>

                <div className="mt-6">
                  <ButtonLink href={mailtoLeasing(p.mailtoSubject)} variant="gold">
                    {p.ctaLabel}
                  </ButtonLink>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
