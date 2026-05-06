"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { filmFeature, navSections } from "@/data/deckContent";
import { useSectionKeyboard } from "@/lib/useSectionKeyboard";
import { AmbientBackground } from "./AmbientBackground";
import { BriefAssistant } from "./BriefAssistant";
import { DeckChrome } from "./DeckChrome";
import { DeckProvider } from "./DeckContext";
import { DeckDock } from "./DeckDock";
import { FilmModal } from "./FilmModal";
import { ProgressIndicator } from "./ProgressIndicator";
import { SectionNavigator } from "./SectionNavigator";

export function DeckShell({ children }: { children: ReactNode }) {
  const orderedIds = useMemo(() => navSections.map((s) => s.hash), []);
  // Important: keep the first render deterministic for SSR hydration.
  // We sync to the URL hash after mount.
  const [activeId, setActiveIdState] = useState<string>("overview");

  const setActiveId = (id: string) => {
    if (!orderedIds.includes(id)) return;
    setActiveIdState(id);
    if (typeof window !== "undefined") {
      const nextHash = `#${id}`;
      if (window.location.hash !== nextHash) window.history.pushState(null, "", nextHash);
    }
  };

  const goNext = () => {
    const idx = Math.max(0, orderedIds.indexOf(activeId));
    const next = orderedIds[Math.min(orderedIds.length - 1, idx + 1)];
    setActiveId(next);
  };

  const goPrev = () => {
    const idx = Math.max(0, orderedIds.indexOf(activeId));
    const prev = orderedIds[Math.max(0, idx - 1)];
    setActiveId(prev);
  };

  useSectionKeyboard(orderedIds, activeId, (id) => setActiveId(id));

  useEffect(() => {
    // Initial hash sync after hydration.
    const raw = window.location.hash?.slice(1);
    if (raw && orderedIds.includes(raw)) setActiveIdState(raw);

    const onHash = () => {
      const raw = window.location.hash?.slice(1);
      if (raw && orderedIds.includes(raw)) setActiveIdState(raw);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [orderedIds]);

  useEffect(() => {
    const onNavigate = (e: Event) => {
      const ce = e as CustomEvent<{ id?: string }>;
      const id = ce.detail?.id;
      if (!id) return;
      setActiveId(id);
    };
    window.addEventListener("deck:navigate", onNavigate as EventListener);
    return () => window.removeEventListener("deck:navigate", onNavigate as EventListener);
  }, [orderedIds]);

  const [filmOpen, setFilmOpen] = useState(false);
  const [briefOpen, setBriefOpen] = useState(false);

  const activeIndex = Math.max(0, orderedIds.indexOf(activeId));

  return (
    <DeckProvider value={{ orderedIds, activeId, setActiveId, goNext, goPrev }}>
      <a
        href="#explore"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to exploration
      </a>

      <AmbientBackground />
      <ProgressIndicator index={activeIndex} total={orderedIds.length} />
      <div className="md:hidden">
        <DeckChrome onOpenFilm={() => setFilmOpen(true)} onOpenBrief={() => setBriefOpen(true)} />
      </div>
      <SectionNavigator activeId={activeId} />
      <DeckDock onOpenFilm={() => setFilmOpen(true)} onOpenBrief={() => setBriefOpen(true)} />

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
    </DeckProvider>
  );
}
