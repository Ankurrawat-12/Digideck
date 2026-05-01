"use client";

import { useMemo, useState, type ReactNode } from "react";
import { navSections, filmFeature } from "@/data/deckContent";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { useSectionKeyboard } from "@/lib/useSectionKeyboard";
import { AmbientBackground } from "./AmbientBackground";
import { BriefAssistant } from "./BriefAssistant";
import { DeckChrome } from "./DeckChrome";
import { FilmModal } from "./FilmModal";
import { NavigationRail } from "./NavigationRail";
import { ProgressIndicator } from "./ProgressIndicator";
import { SectionNavigator } from "./SectionNavigator";
import { StickyDeckCta } from "./StickyDeckCta";

export function DeckShell({ children }: { children: ReactNode }) {
  const sectionIds = useMemo(() => navSections.map((s) => s.hash), []);
  const activeId = useScrollSpy(sectionIds);
  useSectionKeyboard(sectionIds, activeId);

  const [filmOpen, setFilmOpen] = useState(false);
  const [briefOpen, setBriefOpen] = useState(false);

  return (
    <>
      <a
        href="#explore"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to exploration
      </a>

      <AmbientBackground />
      <ProgressIndicator />
      <DeckChrome onOpenFilm={() => setFilmOpen(true)} onOpenBrief={() => setBriefOpen(true)} />
      <NavigationRail activeId={activeId} />
      <SectionNavigator activeId={activeId} />
      <StickyDeckCta />

      <FilmModal
        open={filmOpen}
        onClose={() => setFilmOpen(false)}
        title={filmFeature.title}
        description={filmFeature.description}
        youtubeId={filmFeature.youtubeId}
        localVideo={filmFeature.localVideo}
        poster={filmFeature.poster}
      />
      <BriefAssistant open={briefOpen} onClose={() => setBriefOpen(false)} />

      {children}
    </>
  );
}
