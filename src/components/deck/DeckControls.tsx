"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { navSections } from "@/data/deckContent";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useDeck } from "./DeckContext";

export function DeckControls({ className }: { className?: string }) {
  const { activeId, orderedIds, goNext, goPrev } = useDeck();
  const idx = Math.max(0, orderedIds.indexOf(activeId));
  const label = navSections.find((s) => s.hash === activeId)?.label ?? "Deck";

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 right-0 z-[92] flex justify-center px-4",
        className,
      )}
    >
      <div className="pointer-events-auto flex w-full max-w-[720px] items-center justify-between gap-3 rounded-full border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-xl">
        <Button variant="outline" className="px-4" onClick={goPrev} aria-label="Previous slide">
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </Button>

        <div className="min-w-0 text-center">
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            {idx + 1}/{orderedIds.length}
          </p>
          <p className="truncate text-[12px] font-medium tracking-tight text-[var(--moa-cream)]">{label}</p>
        </div>

        <Button variant="outline" className="px-4" onClick={goNext} aria-label="Next slide">
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}

