"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { navSections, sections } from "@/data/deckContent";
import { cn } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { IMAGE, POSTER, VIDEO } from "@/data/mediaAssets";
import { HeroIntro } from "./HeroIntro";
import { SectionExplorer } from "./SectionExplorer";
import { StorySection } from "./StorySection";
import { useDeck } from "./DeckContext";
import { LeasingSlide } from "./slides/LeasingSlide";
import { EventsSlide } from "./slides/EventsSlide";
import { SponsorshipSlide } from "./slides/SponsorshipSlide";
import { RetailSlide } from "./slides/RetailSlide";
import { DiningSlide } from "./slides/DiningSlide";
import { DeckFrame } from "./DeckFrame";

const WhyMoaGrid = dynamic(() => import("./WhyMoaGrid").then((m) => m.WhyMoaGrid));
const VenueModule = dynamic(() => import("@/components/modules/VenueModule").then((m) => m.VenueModule));
const CTASection = dynamic(() => import("./CTASection").then((m) => m.CTASection));

function sectionById(id: string) {
  const s = sections.find((x) => x.id === id);
  if (!s) throw new Error(`Missing deck section: ${id}`);
  return s;
}

function SlideFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("h-[100dvh] w-full overflow-hidden", className)}>
      <div className="mx-auto h-full w-full max-w-[1400px] px-0 md:px-0">{children}</div>
    </div>
  );
}

export function DeckPlayer() {
  const reduced = useReducedMotionSafe();
  const { activeId, goNext, goPrev } = useDeck();

  const slideKey = activeId;
  const idx = useMemo(() => Math.max(0, navSections.findIndex((s) => s.hash === activeId)), [activeId]);

  // Reset slide scroll position on change (keeps it deck-like).
  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!scrollEl) return;
    scrollEl.scrollTo({ top: 0, behavior: "auto" });
  }, [scrollEl, slideKey]);

  const slide = useMemo(() => {
    switch (activeId) {
      case "overview":
        return (
          <SlideFrame>
            <DeckFrame>
              <HeroIntro className="min-h-full" />
            </DeckFrame>
          </SlideFrame>
        );
      case "explore":
        return (
          <SlideFrame>
            <DeckFrame>
              <SectionExplorer className="h-full" />
            </DeckFrame>
          </SlideFrame>
        );
      case "why-moa":
        return (
          <SlideFrame className="bg-transparent">
            <DeckFrame backgroundSrc={IMAGE.moaExterior} backgroundClassName="opacity-[0.92]">
              <StorySection section={sectionById("why-moa")} belowFold={<WhyMoaGrid />} variant="deck" showMedia={false} />
            </DeckFrame>
          </SlideFrame>
        );
      case "retail":
        return (
          <SlideFrame>
            <DeckFrame backgroundVideoSrc={VIDEO.retail} backgroundVideoPoster={POSTER.retail} backgroundClassName="opacity-[0.9]">
              <RetailSlide />
            </DeckFrame>
          </SlideFrame>
        );
      case "luxury":
        return (
          <SlideFrame>
            <DeckFrame backgroundSrc={IMAGE.luxuryRetail} backgroundClassName="opacity-[0.92]">
              <StorySection section={sectionById("luxury")} mediaSide="left" variant="deck" showMedia={false} />
            </DeckFrame>
          </SlideFrame>
        );
      case "dining":
        return (
          <SlideFrame>
            <DeckFrame
              backgroundVideoSrc={VIDEO.dining}
              backgroundVideoPoster={POSTER.dining}
              backgroundClassName="opacity-[0.9]"
            >
              <DiningSlide />
            </DeckFrame>
          </SlideFrame>
        );
      case "momentum":
        return (
          <SlideFrame>
            <DeckFrame
              backgroundVideoSrc={VIDEO.dealMoment}
              backgroundVideoPoster={POSTER.hero}
              backgroundClassName="opacity-[0.9]"
            >
              <StorySection section={sectionById("momentum")} mediaSide="left" variant="deck" showMedia={false} />
            </DeckFrame>
          </SlideFrame>
        );
      case "attractions":
        return (
          <SlideFrame>
            <DeckFrame
              backgroundVideoSrc={VIDEO.attractions}
              backgroundVideoPoster={POSTER.attractions}
              backgroundClassName="opacity-[0.9]"
            >
              <StorySection
                section={sectionById("attractions")}
                variant="deck"
                showMedia={false}
              />
            </DeckFrame>
          </SlideFrame>
        );
      case "events":
        return (
          <SlideFrame>
            <DeckFrame
              backgroundVideoSrc={VIDEO.events}
              backgroundVideoPoster={POSTER.events}
              backgroundClassName="opacity-[0.9]"
            >
              <EventsSlide />
            </DeckFrame>
          </SlideFrame>
        );
      case "sponsorship":
        return (
          <SlideFrame>
            <DeckFrame
              backgroundVideoSrc={VIDEO.sponsorship}
              backgroundVideoPoster={POSTER.sponsorship}
              backgroundClassName="opacity-[0.9]"
            >
              <SponsorshipSlide />
            </DeckFrame>
          </SlideFrame>
        );
      case "leasing":
        return (
          <SlideFrame>
            <DeckFrame
              backgroundVideoSrc={VIDEO.leasing}
              backgroundVideoPoster={POSTER.retail}
              backgroundClassName="opacity-[0.9]"
            >
              <LeasingSlide />
            </DeckFrame>
          </SlideFrame>
        );
      case "venues":
        return (
          <SlideFrame>
            <DeckFrame>
              <VenueModule />
            </DeckFrame>
          </SlideFrame>
        );
      case "contact":
        return (
          <SlideFrame>
            <DeckFrame
              className="h-[min(86dvh,900px)]"
              backgroundVideoSrc={VIDEO.cta}
              backgroundVideoPoster={POSTER.hero}
              backgroundClassName="opacity-[0.85]"
            >
              <CTASection />
              <footer className="border-t border-white/[0.06] py-10 text-center text-[11px] leading-relaxed text-white/35">
                Mall of America — interactive sales deck (assignment build).
              </footer>
            </DeckFrame>
          </SlideFrame>
        );
      default:
        return (
          <SlideFrame>
            <DeckFrame>
              <HeroIntro className="min-h-full" />
            </DeckFrame>
          </SlideFrame>
        );
    }
  }, [activeId]);

  return (
    <div
      ref={setScrollEl}
      className="fixed inset-0 z-[20] overflow-hidden bg-transparent"
      aria-label={`Deck slide ${idx + 1} of ${navSections.length}`}
      onTouchStart={(e) => {
        const t = e.touches?.[0];
        if (!t) return;
        (e.currentTarget as HTMLDivElement).dataset.touchX = String(t.clientX);
        (e.currentTarget as HTMLDivElement).dataset.touchY = String(t.clientY);
      }}
      onTouchEnd={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        const startX = Number(el.dataset.touchX ?? "0");
        const startY = Number(el.dataset.touchY ?? "0");
        const t = e.changedTouches?.[0];
        if (!t) return;
        const dx = t.clientX - startX;
        const dy = t.clientY - startY;
        const absX = Math.abs(dx);
        const absY = Math.abs(dy);
        // Horizontal swipe to change slides; vertical gestures keep natural scroll.
        if (absX < 70 || absX < absY * 1.35) return;
        if (dx < 0) goNext();
        else goPrev();
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slideKey}
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10, scale: 0.995 }}
          transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          {slide}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

