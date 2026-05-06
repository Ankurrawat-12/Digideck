"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "moa_deck_entered";

export function IntroGate({
  open,
  onEnter,
  className,
}: {
  open: boolean;
  onEnter: () => void;
  className?: string;
}) {
  const [hydrated, setHydrated] = useState(false);
  const [autoEntered, setAutoEntered] = useState(false);

  useEffect(() => setHydrated(true), []);

  const previouslyEntered = useMemo(() => {
    if (!hydrated) return false;
    try {
      return window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    if (!open) return;
    if (!previouslyEntered) return;
    if (autoEntered) return;
    setAutoEntered(true);
    // Let the gate paint once (avoids a hydration flash).
    window.setTimeout(() => onEnter(), 60);
  }, [hydrated, open, previouslyEntered, autoEntered, onEnter]);

  if (!open) return null;

  const enter = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    onEnter();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] grid place-items-center bg-[#050506] px-5 py-10 text-[var(--moa-cream)]",
        className,
      )}
    >
      <div className="w-full max-w-[820px]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
          Mall of America
        </p>
        <h1 className="mt-5 text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          Interactive Sales Deck
        </h1>

        <div className="mt-6 grid gap-3 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
          <p className="text-white/75">
            Built for screen-share and standalone viewing. Navigate like a deck: jump sections, use arrow keys, and keep
            the conversation moving.
          </p>
          <p className="text-white/55">
            For best viewing, use a modern browser and rotate your phone if you’re on mobile.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="gold" className="w-full sm:w-auto" onClick={enter}>
            Enter deck
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto bg-black/30 backdrop-blur-xl"
            onClick={enter}
          >
            Skip intro
          </Button>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-[11px] leading-relaxed text-white/55">
          <p className="font-semibold uppercase tracking-[0.22em] text-white/45">Tip</p>
          <p className="mt-2">
            Keyboard: <span className="font-mono text-white/70">←</span> /{" "}
            <span className="font-mono text-white/70">→</span> to move between slides.
          </p>
        </div>
      </div>
    </div>
  );
}

