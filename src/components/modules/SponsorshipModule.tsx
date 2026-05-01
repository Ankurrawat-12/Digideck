"use client";

import { motion } from "framer-motion";
import { sponsorshipActivations, sponsorshipAudiences, sponsorshipTiers } from "@/data/modules";
import { contactMail } from "@/data/deckContent";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { VIDEO, POSTER } from "@/data/mediaAssets";
import { VideoPanel } from "@/components/deck/VideoPanel";

export function SponsorshipModule() {
  const reduced = useReducedMotionSafe();

  return (
    <div className="space-y-10">
      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="max-w-[72ch] lg:col-span-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Sponsorship module</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--moa-cream)] sm:text-3xl">
            Tiers, activations, and audience logic
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
            Designed to sell: clear tiering, clear audiences, and activation concepts that feel inevitable.
          </p>
        </div>
        <div className="lg:col-span-5">
          <VideoPanel
            src={VIDEO.tourismArrival}
            poster={POSTER.sponsorship}
            ariaLabel="Tourism arrival highlight loop"
            labelFallback="Tourism arrival"
            hoverBoost
            className="min-h-[240px]"
          />
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Partnership tiers</p>
        <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-2">
          {sponsorshipTiers.map((t, i) => {
            const isLastOdd = sponsorshipTiers.length % 2 === 1 && i === sponsorshipTiers.length - 1;
            return (
            <motion.div
              key={t.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={cn(isLastOdd && "lg:col-span-2")}
            >
              <Card className="relative h-full p-6">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.65),transparent)] opacity-70" />
                <p className="text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{t.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{t.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-white/75">
                  {t.signals.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[rgba(197,163,106,0.85)]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Example activations</p>
          <div className="mt-4 grid auto-rows-fr gap-3">
            {sponsorshipActivations.map((a, i) => (
              <motion.div
                key={a.id}
                initial={reduced ? false : { opacity: 0, y: 10, scale: 0.99 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="relative flex h-full flex-col p-5">
                  <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.45),transparent)] opacity-70" />
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{a.title}</p>
                    <Badge className="shrink-0 text-[9px]">Concept</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                    {a.angle}
                  </p>
                  <div className="mt-auto pt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Illustrative activation concept
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Audience logic</p>
          <div className="mt-4 grid auto-rows-fr gap-3">
            {sponsorshipAudiences.map((a, i) => (
              <motion.div
                key={a.id}
                initial={reduced ? false : { opacity: 0, y: 10, scale: 0.99 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="relative flex h-full flex-col p-5">
                  <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.45),transparent)] opacity-70" />
                  <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">{a.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                    {a.note}
                  </p>
                  <span className="mt-auto pt-3" aria-hidden />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 grid gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-[1fr,auto] sm:items-center">
        <p className="text-sm text-[var(--moa-cream-muted)]">
          Package naming is directional — tune to your pricing architecture.
        </p>
        <ButtonLink href={contactMail.sponsorship} variant="primary" className="w-full sm:w-auto">
          Build a sponsorship package
        </ButtonLink>
      </div>
    </div>
  );
}
