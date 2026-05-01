"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { attractionSlides } from "@/data/modules";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { DeckImage } from "./DeckImage";
import { VideoPanel } from "./VideoPanel";

const AUTO_ADVANCE_MS = 5200;

export function AttractionCarousel() {
  const reduced = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const slides = useMemo(() => attractionSlides, []);
  const total = slides.length;
  const active = slides[(index + total) % total];

  useEffect(() => {
    if (reduced || paused || total <= 1) return;
    const id = window.setInterval(() => {
      setDir(1);
      setIndex((v) => (v + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced, total]);

  const pauseProps = {
    onPointerEnter: () => setPaused(true),
    onPointerLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
    },
  };

  return (
    <div className="mt-10">
      <div className="max-w-[72ch]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">High-energy attraction lane</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--moa-cream)] sm:text-3xl">
          Retail + entertainment = longer dwell time
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
          Visitors arrive for named attractions — then shop, dine, and stay inside the ecosystem.
        </p>
      </div>

      <div className="mt-8" {...pauseProps}>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Attraction highlights"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
        >
          <div className="relative aspect-[16/9] w-full">
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={active.id}
                custom={dir}
                className="absolute inset-0"
                initial={reduced ? false : { opacity: 0, x: dir === 1 ? 18 : -18, scale: 0.995 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, x: dir === 1 ? -18 : 18, scale: 0.995 }}
                transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                {active.kind === "video" ? (
                  <VideoPanel
                    src={active.src}
                    poster={active.posterSrc}
                    priority={false}
                    ariaLabel={active.title}
                    labelFallback={active.labelFallback}
                    className="h-full w-full rounded-none border-0"
                  />
                ) : (
                  <DeckImage
                    src={active.src}
                    alt={active.title}
                    labelFallback={active.labelFallback}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    priority={false}
                    className="object-cover"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.05))]" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-4 border-t border-white/[0.08] p-6 sm:grid-cols-[1fr,auto] sm:items-center">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Slide {index + 1} / {total}
              </p>
              <h4 className="mt-2 text-lg font-semibold tracking-tight text-[var(--moa-cream)]">{active.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{active.description}</p>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <button
                type="button"
                aria-label="Previous slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white/75 backdrop-blur-xl transition-colors hover:bg-black/55 hover:text-white"
                onClick={() => {
                  setDir(-1);
                  setIndex((v) => (v - 1 + total) % total);
                }}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white/75 backdrop-blur-xl transition-colors hover:bg-black/55 hover:text-white"
                onClick={() => {
                  setDir(1);
                  setIndex((v) => (v + 1) % total);
                }}
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 px-6 pb-6">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to slide ${i + 1}: ${s.title}`}
                aria-current={i === index ? "true" : undefined}
                className={
                  i === index
                    ? "h-1.5 w-8 rounded-full bg-[rgba(197,163,106,0.85)]"
                    : "h-1.5 w-6 rounded-full bg-white/15 hover:bg-white/25"
                }
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
