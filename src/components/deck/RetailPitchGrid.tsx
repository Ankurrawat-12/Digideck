"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { mailtoLeasing } from "@/data/deckContent";
import { retailTenantArchetypes } from "@/data/modules";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function RetailPitchGrid() {
  const reduced = useReducedMotionSafe();

  return (
    <div id="retail-archetypes" className="scroll-mt-28">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[72ch]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Tenant opportunity cards</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--moa-cream)] sm:text-3xl">
            Pick a lane. Open the pitch.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
            Each archetype includes a tailored POV — why it works at MOA, best-fit brands, and an illustrative activation
            concept.
          </p>
        </div>
      </div>

      <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
        {retailTenantArchetypes.map((t, i) => (
          <PitchCard
            key={t.id}
            reduced={reduced}
            index={i}
            tenant={t}
            isLastOdd={retailTenantArchetypes.length % 2 === 1 && i === retailTenantArchetypes.length - 1}
          />
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-white/40">
        Tip: open a card and use the CTA to start a tailored leasing conversation.
      </p>
    </div>
  );
}

function PitchCard({
  tenant,
  index,
  reduced,
  isLastOdd,
}: {
  tenant: (typeof retailTenantArchetypes)[number];
  index: number;
  reduced: boolean;
  isLastOdd: boolean;
}) {
  const id = useId();
  const panelId = `${id}-panel`;
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={cn(isLastOdd && "lg:col-span-2")}
    >
      <Card className="overflow-hidden p-0">
        <button
          type="button"
          className="flex min-h-[132px] w-full items-center justify-between gap-6 px-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(197,163,106,0.55)]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Archetype
            </span>
            <span className="mt-2 block text-xl font-semibold leading-snug tracking-tight text-[var(--moa-cream)]">
              {tenant.title}
            </span>
            <span className="mt-3 block max-w-[72ch] text-sm leading-relaxed text-[var(--moa-cream-muted)] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              {tenant.summary}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-white/55 transition-transform",
              open ? "rotate-180" : "rotate-0",
            )}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/[0.06]"
            >
              <div className="space-y-5 px-6 py-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Why this works</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{tenant.whyWorks}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Best-fit brands</p>
                  <ul className="mt-3 grid gap-2 text-sm text-white/75">
                    {tenant.bestFitBrands.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[rgba(197,163,106,0.85)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Activation idea</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{tenant.activationIdea}</p>
                </div>
                <ButtonLink href={mailtoLeasing(tenant.mailtoSubject)} variant="gold" className="w-full sm:w-auto">
                  {tenant.ctaLabel}
                </ButtonLink>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
