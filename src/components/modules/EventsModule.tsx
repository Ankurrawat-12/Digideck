"use client";

import { motion } from "framer-motion";
import { eventCapabilities, eventFormats } from "@/data/modules";
import { contactMail } from "@/data/deckContent";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { VIDEO, POSTER } from "@/data/mediaAssets";
import { VideoPanel } from "@/components/deck/VideoPanel";

export function EventsModule() {
  const reduced = useReducedMotionSafe();

  return (
    <div className="space-y-10">
      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="max-w-[72ch] lg:col-span-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Events module</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--moa-cream)] sm:text-3xl">
            Formats, capabilities, and next steps
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
            Built for reps: pick a format, confirm capabilities, then move directly into a booking conversation.
          </p>
        </div>
        <div className="lg:col-span-5">
          <VideoPanel
            src={VIDEO.nightEvent}
            poster={POSTER.events}
            ariaLabel="Night event highlight loop"
            labelFallback="Night event"
            hoverBoost
            className="min-h-[240px]"
          />
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Event formats</p>
        <div className="mt-4 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {eventFormats.map((f, i) => {
            const isLastOddMd = eventFormats.length % 2 === 1 && i === eventFormats.length - 1;
            const isLastSingleXl = eventFormats.length % 3 === 1 && i === eventFormats.length - 1;
            return (
            <motion.div
              key={f.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={cn(isLastOddMd && "md:col-span-2", isLastSingleXl && "xl:col-span-3")}
            >
              <Card className="relative h-full p-6">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.5),transparent)] opacity-70" />
                <p className="text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{f.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{f.pitch}</p>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Capability cards</p>
        <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-2">
          {eventCapabilities.map((c, i) => {
            const isLastOdd = eventCapabilities.length % 2 === 1 && i === eventCapabilities.length - 1;
            return (
            <motion.div
              key={c.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={cn(isLastOdd && "lg:col-span-2")}
            >
              <Card className="relative h-full p-6">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(197,163,106,0.5),transparent)] opacity-70" />
                <p className="text-base font-semibold tracking-tight text-[var(--moa-cream)]">{c.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{c.detail}</p>
              </Card>
            </motion.div>
          )})}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--moa-cream-muted)]">Ready to brief producers and talent teams?</p>
        <ButtonLink href={contactMail.events} variant="gold">
          Start an event conversation
        </ButtonLink>
      </div>
    </div>
  );
}
