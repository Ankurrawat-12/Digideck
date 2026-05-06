"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function DeckPager({
  index,
  total,
  onPrev,
  onNext,
  className,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}) {
  const label = useMemo(() => `${index + 1}/${total}`, [index, total]);

  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <Button variant="outline" onClick={onPrev} className="px-4">
        <ChevronLeft className="h-4 w-4" aria-hidden />
        Prev
      </Button>
      <div className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[11px] font-semibold tracking-[0.22em] text-white/55 backdrop-blur-xl">
        {label}
      </div>
      <Button variant="outline" onClick={onNext} className="px-4">
        Next
        <ChevronRight className="h-4 w-4" aria-hidden />
      </Button>
    </div>
  );
}

