"use client";

import { motion } from "framer-motion";
import { ChevronDown, VolumeX } from "lucide-react";
import { heroCopy } from "@/data/deckContent";
import { VIDEO, POSTER } from "@/data/mediaAssets";
import { heroMetrics } from "@/data/metrics";
import { scrollToSection } from "@/lib/scrollToSection";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MetricStrip } from "./MetricStrip";
import { VideoPanel } from "./VideoPanel";
import { RotatingSubcopy } from "./RotatingSubcopy";

export function HeroIntro({ className }: { className?: string }) {
  const reduced = useReducedMotionSafe();

  return (
    <section
      id="overview"
      className={cn("relative min-h-[100dvh] overflow-hidden", className)}
      aria-label="Cinematic opening"
    >
      <div className="absolute inset-0">
        <VideoPanel
          priority
          src={VIDEO.hero}
          poster={POSTER.hero}
          posterPriority
          posterSizes="100vw"
          posterQuality={55}
          ariaLabel="Muted cinematic preview of Mall of America"
          labelFallback="Hero film"
          className="min-h-[100dvh] rounded-none border-0"
          // Let poster become the LCP; start video right after.
          deferMs={650}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.72)_55%,rgba(0,0,0,0.92))]" />
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1200px] flex-col justify-end px-5 pb-[max(3.25rem,env(safe-area-inset-bottom))] pt-28 sm:px-8 lg:px-10 lg:pb-[max(5rem,env(safe-area-inset-bottom))] lg:pt-32">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{heroCopy.eyebrow}</Badge>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md">
            <VolumeX className="h-3.5 w-3.5" aria-hidden />
            Muted preview — autoplay safe for screen share
          </span>
        </div>

        <motion.h1
          className="mt-7 max-w-[18ch] text-[clamp(2.6rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--moa-cream)]"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroCopy.title}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[62ch] text-base leading-relaxed text-[var(--moa-cream-muted)] sm:text-lg"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <RotatingSubcopy
            lines={[
              heroCopy.subtitle,
              "A deck built for live calls: cinematic intro, non-linear journeys, and clear CTAs for leasing, sponsorship, and events.",
            ]}
            intervalMs={4600}
          />
        </motion.p>

        <motion.div
          className="mt-10"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <MetricStrip metrics={heroMetrics} variant="hero" />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroCopy.ctas.map((c) => (
            <Button
              key={c.label}
              variant={c.variant ?? "primary"}
              className="w-full sm:w-auto"
              onClick={() => scrollToSection(c.href)}
            >
              {c.label}
            </Button>
          ))}
        </motion.div>

        <motion.button
          type="button"
          className="mt-14 inline-flex items-center gap-2 self-start text-left text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white/80"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 0.35, duration: reduced ? 0 : 0.6 }}
          onClick={() => scrollToSection("#explore")}
        >
          Explore non-linear
          <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
        </motion.button>
      </div>
    </section>
  );
}
