import dynamic from "next/dynamic";
import { sections } from "@/data/deckContent";
import { DeckShell } from "@/components/deck/DeckShell";
import { HeroIntro } from "@/components/deck/HeroIntro";
import { SectionExplorer } from "@/components/deck/SectionExplorer";
import { StorySection } from "@/components/deck/StorySection";

const EventsModule = dynamic(() => import("@/components/modules/EventsModule").then((m) => m.EventsModule), {
  loading: () => <div className="h-28 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const SponsorshipModule = dynamic(() => import("@/components/modules/SponsorshipModule").then((m) => m.SponsorshipModule), {
  loading: () => <div className="h-28 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const WhyMoaGrid = dynamic(() => import("@/components/deck/WhyMoaGrid").then((m) => m.WhyMoaGrid), {
  loading: () => <div className="h-40 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const RetailPitchGrid = dynamic(() => import("@/components/deck/RetailPitchGrid").then((m) => m.RetailPitchGrid), {
  loading: () => <div className="h-40 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const AttractionCarousel = dynamic(() => import("@/components/deck/AttractionCarousel").then((m) => m.AttractionCarousel), {
  loading: () => <div className="h-40 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const LeasingModule = dynamic(() => import("@/components/modules/LeasingModule").then((m) => m.LeasingModule), {
  loading: () => <div className="h-40 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const VenueModule = dynamic(() => import("@/components/modules/VenueModule").then((m) => m.VenueModule), {
  loading: () => <div className="h-40 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

const CTASection = dynamic(() => import("@/components/deck/CTASection").then((m) => m.CTASection), {
  loading: () => <div className="h-40 rounded-2xl bg-white/[0.03] motion-safe:animate-pulse" aria-hidden />,
});

function sectionById(id: string) {
  const s = sections.find((x) => x.id === id);
  if (!s) throw new Error(`Missing deck section: ${id}`);
  return s;
}

export default function Home() {
  return (
    <DeckShell>
      <main>
        <HeroIntro />
        <SectionExplorer />

        <StorySection section={sectionById("why-moa")} belowFold={<WhyMoaGrid />} />
        <StorySection section={sectionById("retail")} belowFold={<RetailPitchGrid />} />
        <StorySection section={sectionById("luxury")} mediaSide="left" />
        <StorySection section={sectionById("dining")} />
        <StorySection section={sectionById("momentum")} mediaSide="left" />
        <StorySection section={sectionById("attractions")} belowFold={<AttractionCarousel />} />
        <StorySection section={sectionById("events")} belowFold={<EventsModule />} />
        <StorySection section={sectionById("sponsorship")} belowFold={<SponsorshipModule />} />

        <LeasingModule />
        <VenueModule />
        <CTASection />

        <footer className="border-t border-white/[0.06] py-12 text-center text-[11px] leading-relaxed text-white/35">
          Mall of America — interactive sales experience (assignment build). Mailto CTAs route to{" "}
          <span className="font-mono text-white/55">ankurrawat620@gmail.com</span>; subject lines distinguish leasing,
          partnerships, and events.
        </footer>
      </main>
    </DeckShell>
  );
}
