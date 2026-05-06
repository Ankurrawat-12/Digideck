"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { DeckSection } from "@/data/deckContent";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";
import { MetricStrip } from "./MetricStrip";
import { DeckImage } from "./DeckImage";
import { VideoPanel } from "./VideoPanel";

export function StorySection({
  section,
  mediaSide = "right",
  children,
  belowFold,
  variant = "scroll",
  showMedia = true,
}: {
  section: DeckSection;
  mediaSide?: "left" | "right";
  children?: ReactNode;
  belowFold?: ReactNode;
  variant?: "scroll" | "deck";
  showMedia?: boolean;
}) {
  const reduced = useReducedMotionSafe();
  const media = section.media;
  const deckMode = variant === "deck";

  const mediaNode =
    media?.type === "video" ? (
      <VideoPanel
        src={media.src}
        poster={media.poster}
        ariaLabel={media.alt ?? section.title}
        labelFallback={media.labelFallback ?? section.title}
        hoverBoost
      />
    ) : media?.type === "image" ? (
      <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-2xl border border-white/10">
        <DeckImage
          src={media.src}
          alt={media.alt ?? section.title}
          labelFallback={media.labelFallback ?? section.title}
          sizes="(max-width: 768px) 100vw, 44vw"
          priority={false}
        />
      </div>
    ) : null;

  return (
    <section
      id={section.hash}
      className={cn(
        "bg-transparent",
        variant === "scroll"
          ? "scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
          : "pt-[max(5.5rem,env(safe-area-inset-top))] pb-[max(4.5rem,env(safe-area-inset-bottom))] md:pt-28 md:pb-20",
      )}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className={cn("grid items-stretch gap-10 lg:gap-14", showMedia ? "lg:grid-cols-12" : "")}>
          <motion.div
            className={cn(
              "self-start",
              showMedia ? "lg:col-span-5" : "lg:col-span-12",
              mediaSide === "left" ? "lg:order-2" : "lg:order-1",
            )}
            initial={reduced ? false : { opacity: 0, y: 14, scale: 0.99 }}
            whileInView={deckMode || reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            animate={deckMode ? { opacity: 1, y: 0, scale: 1 } : undefined}
            viewport={deckMode ? undefined : { once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {section.eyebrow ? <Badge className="mb-5">{section.eyebrow}</Badge> : null}
            <h2 className="text-[clamp(1.85rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--moa-cream)]">
              {section.title}
            </h2>
            {section.subtitle ? (
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{section.subtitle}</p>
            ) : null}
            {section.body ? (
              <p className="mt-5 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">{section.body}</p>
            ) : null}

            {section.metrics?.length ? (
              <div className="mt-7">
                <MetricStrip metrics={section.metrics} />
              </div>
            ) : null}

            {section.ctas?.length ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {section.ctas.map((c) => (
                  <Button
                    key={c.label}
                    variant={c.variant ?? "ghost"}
                    onClick={() => scrollToSection(c.href)}
                  >
                    {c.label}
                  </Button>
                ))}
              </div>
            ) : null}

            {children ? <div className="mt-10">{children}</div> : null}
          </motion.div>

          {showMedia ? (
            <motion.div
              className={cn(
                "self-stretch lg:col-span-7",
                mediaSide === "left" ? "lg:order-1" : "lg:order-2",
              )}
              initial={reduced ? false : { opacity: 0, y: 14, scale: 0.99 }}
              whileInView={deckMode || reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              animate={deckMode ? { opacity: 1, y: 0, scale: 1 } : undefined}
              viewport={deckMode ? undefined : { once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.55, delay: reduced ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {mediaNode}
            </motion.div>
          ) : null}
        </div>

        {belowFold ? (
          <div className="mt-14 border-t border-white/[0.06] pt-14 sm:mt-16 sm:pt-16">{belowFold}</div>
        ) : null}
      </div>
    </section>
  );
}
