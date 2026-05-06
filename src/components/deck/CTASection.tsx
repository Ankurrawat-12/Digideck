"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, CalendarDays, Check, Handshake, Share2 } from "lucide-react";
import { contactMail } from "@/data/deckContent";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

const cards = [
  {
    title: "Leasing inquiry",
    body: "Bring square footage needs, category, and timing — we’ll route you to the right conversation.",
    href: contactMail.leasing,
    cta: "Start leasing inquiry",
    variant: "primary" as const,
    icon: Building2,
  },
  {
    title: "Sponsorship conversation",
    body: "Share audiences, KPIs, and seasons — build packaging against retail + entertainment adjacency.",
    href: contactMail.sponsorship,
    cta: "Start partnership brief",
    variant: "ghost" as const,
    icon: Handshake,
  },
  {
    title: "Event booking",
    body: "Send desired dates, footprint, and production needs — start with format and hospitality.",
    href: contactMail.events,
    cta: "Request event availability",
    variant: "ghost" as const,
    icon: CalendarDays,
  },
];

export function CTASection() {
  const reduced = useReducedMotionSafe();
  const [copied, setCopied] = useState(false);

  async function shareDeck() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Mall of America — Sales Experience",
          text: "Interactive sales deck — Mall of America",
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* user cancelled share sheet — ignore */
    }
  }

  return (
    <section
      id="contact"
      className="bg-transparent pt-[max(5.5rem,env(safe-area-inset-top))] pb-[max(4.5rem,env(safe-area-inset-bottom))] md:pt-28 md:pb-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div
          className="max-w-[78ch]"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Final CTA</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--moa-cream)]">
            Put your brand inside the destination.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--moa-cream-muted)] sm:text-lg">
            Lease the space. Own the moment. Build the activation. Meet the audience where they already are.
          </p>
        </motion.div>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduced ? undefined : { y: -3 }}
            >
            <Card className="relative flex h-full flex-col bg-transparent p-6 border-white/15 hover:border-white/25 hover:bg-white/[0.02]">
              <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.5),transparent)] opacity-70" />
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">CTA</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{c.title}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/35 text-white/70 backdrop-blur-xl">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{c.body}</p>
              <div className="mt-7">
                <ButtonLink href={c.href} variant={c.variant} className="w-full">
                  {c.cta}
                </ButtonLink>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-[11px] text-white/55 backdrop-blur-xl">
          <p className="min-w-0 truncate">
            Share: native share on mobile, clipboard on desktop.
          </p>
          <Button
            type="button"
            variant="outline"
            className="bg-white/0 px-4 py-2.5 text-[12px] border-white/15 text-[var(--moa-cream-muted)] hover:bg-white/5 hover:border-white/25 hover:text-[var(--moa-cream)]"
            onClick={() => void shareDeck()}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden />
                Copied
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" aria-hidden />
                Share / copy
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
