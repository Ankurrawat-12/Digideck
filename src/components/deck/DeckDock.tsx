"use client";

import { Clapperboard, MessageSquareText, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useDeck } from "./DeckContext";

export function DeckDock({
  onOpenFilm,
  onOpenBrief,
  className,
}: {
  onOpenFilm: () => void;
  onOpenBrief: () => void;
  className?: string;
}) {
  const { setActiveId } = useDeck();

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-0 right-0 z-[96] hidden justify-center px-2 sm:px-4 md:flex",
        className,
      )}
    >
      <div className="flex w-[min(98vw,1380px)] justify-center sm:w-[min(96vw,1380px)]">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/45 p-2 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
          <Button
            type="button"
            variant="outline"
            className="bg-white/0 px-4 py-2.5 text-[12px] border-white/15 text-[var(--moa-cream-muted)] hover:bg-white/5 hover:border-white/25 hover:text-[var(--moa-cream)]"
            onClick={onOpenFilm}
          >
            <Clapperboard className="h-4 w-4" aria-hidden />
            Film
          </Button>

          <Button
            type="button"
            variant="outline"
            className="bg-white/0 px-4 py-2.5 text-[12px] border-white/15 text-[var(--moa-cream-muted)] hover:bg-white/5 hover:border-white/25 hover:text-[var(--moa-cream)]"
            onClick={onOpenBrief}
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Brief assistant
          </Button>

          <div className="mx-1 h-7 w-px bg-white/10" aria-hidden />

          <Button
            type="button"
            variant="gold"
            className="px-4 py-2.5 text-[12px]"
            onClick={() => setActiveId("contact", { source: "cta" })}
          >
            <MessageSquareText className="h-4 w-4" aria-hidden />
            Start a conversation
          </Button>
        </div>
      </div>
    </div>
  );
}

