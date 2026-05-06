"use client";

import { Clapperboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DeckChrome({
  onOpenFilm,
  onOpenBrief,
}: {
  onOpenFilm: () => void;
  onOpenBrief: () => void;
}) {
  return (
    <div className="fixed right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-[96] flex flex-col items-end gap-2 sm:right-6 sm:top-6">
      <Button
        type="button"
        variant="outline"
        className="bg-black/45 px-3 py-2 text-[12px] backdrop-blur-xl md:px-5 md:text-[13px]"
        onClick={onOpenFilm}
        aria-label="Open film"
      >
        <Clapperboard className="h-4 w-4 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Film</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="bg-black/45 px-3 py-2 text-[12px] backdrop-blur-xl md:px-5 md:text-[13px]"
        onClick={onOpenBrief}
        aria-label="Open brief assistant"
      >
        <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Brief assistant</span>
      </Button>
    </div>
  );
}
