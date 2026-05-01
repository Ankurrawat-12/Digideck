"use client";

import { navSections } from "@/data/deckContent";
import { cn } from "@/lib/cn";

export function SectionNavigator({ activeId }: { activeId: string }) {
  const active = navSections.find((s) => s.hash === activeId);

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 right-0 top-[2px] z-[85] flex justify-center px-4 md:left-[7rem]",
      )}
    >
      <div className="pointer-events-auto mt-3 mr-0 hidden max-w-[min(680px,calc(100vw-11rem))] flex-1 items-center justify-between gap-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] backdrop-blur-xl md:flex md:mr-4 lg:mr-8">
        <p className="font-semibold uppercase tracking-[0.22em] text-white/45">Now viewing</p>
        <p className="truncate font-medium tracking-tight text-[var(--moa-cream)]">{active?.label ?? "Deck"}</p>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-white/55">
          #{activeId}
        </span>
      </div>
    </div>
  );
}
