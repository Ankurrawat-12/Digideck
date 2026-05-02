"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { contactMail } from "@/data/deckContent";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const cards = [
  {
    title: "Leasing inquiry",
    body: "Bring square footage needs, category, and timing — we’ll route you to the right conversation.",
    href: contactMail.leasing,
    cta: "Email leasing",
    variant: "primary" as const,
  },
  {
    title: "Sponsorship conversation",
    body: "Share audiences, KPIs, and seasons — build packaging against retail + entertainment adjacency.",
    href: contactMail.sponsorship,
    cta: "Email partnerships",
    variant: "ghost" as const,
  },
  {
    title: "Event booking",
    body: "Send desired dates, footprint, and production needs — start with format and hospitality.",
    href: contactMail.events,
    cta: "Email events",
    variant: "ghost" as const,
  },
];

export function CTASection() {
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
    <section id="contact" className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[78ch]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Final CTA</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--moa-cream)]">
            Put your brand inside the destination.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--moa-cream-muted)] sm:text-lg">
            Lease the space. Own the moment. Build the activation. Meet the audience where they already are.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.title} className="relative flex h-full flex-col p-7">
              <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.5),transparent)] opacity-70" />
              <p className="text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{c.title}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{c.body}</p>
              <div className="mt-7">
                <ButtonLink href={c.href} variant={c.variant} className="w-full">
                  {c.cta}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Card className="flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-[68ch]">
              <p className="text-lg font-semibold tracking-tight text-[var(--moa-cream)]">Download / share deck</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">
                Use native share on mobile, or copy the link for email — no fake submissions, no backend required.
              </p>
            </div>
            <Button type="button" variant="gold" className="w-full sm:w-auto" onClick={() => void shareDeck()}>
              {copied ? (
                <>
                  <Check className="h-4 w-4" aria-hidden />
                  Link copied
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" aria-hidden />
                  Share / copy link
                </>
              )}
            </Button>
          </Card>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-white/40">
          Note: mailto targets route to <span className="font-mono text-white/55">ankurrawat620@gmail.com</span> — subject
          lines distinguish leasing, partnerships, and events. Share falls back to clipboard when Web Share is unavailable.
        </p>
      </div>
    </section>
  );
}
