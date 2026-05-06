"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { navSections } from "@/data/deckContent";
import { cn } from "@/lib/cn";
import { useDeck } from "./DeckContext";

export function SectionNavigator({ activeId }: { activeId: string }) {
  const deck = useDeck();
  const activeIndex = Math.max(0, navSections.findIndex((s) => s.hash === activeId));
  const prev = navSections[Math.max(0, activeIndex - 1)];
  const current = navSections[activeIndex];
  const next = navSections[Math.min(navSections.length - 1, activeIndex + 1)];

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 right-0 top-[2px] z-[85] flex justify-center px-2 sm:px-4",
      )}
    >
      <div className="pointer-events-auto mt-3 hidden w-[min(98vw,1380px)] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/45 px-5 py-2 text-[11px] backdrop-blur-xl md:flex sm:w-[min(96vw,1380px)]">
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:bg-white/[0.06] hover:text-[var(--moa-cream)] disabled:opacity-40"
          onClick={deck.goPrev}
          aria-label="Previous section"
          disabled={activeIndex <= 0}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        <div className="min-w-0 flex-[1.15] text-center">
          <p className="truncate font-medium tracking-tight text-[var(--moa-cream)]">{current?.label ?? "Deck"}</p>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:bg-white/[0.06] hover:text-[var(--moa-cream)] disabled:opacity-40"
          onClick={deck.goNext}
          aria-label="Next section"
          disabled={activeIndex >= navSections.length - 1}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
