"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/deckContent";
import { cn } from "@/lib/cn";
import { useDeck } from "./DeckContext";

export function NavigationRail({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false);
  const deck = useDeck();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        aria-label="Deck sections"
        className="fixed bottom-4 left-1/2 z-[95] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/55 px-2 py-2 backdrop-blur-xl md:hidden"
      >
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--moa-cream)]"
          onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          <Menu className="h-4 w-4" aria-hidden />
          Nav
        </button>
      </nav>

      <nav
        aria-label="Deck sections"
        className="deck-scrollbar-hide fixed left-4 top-1/2 z-[95] hidden max-h-[min(72vh,620px)] w-[84px] -translate-y-1/2 flex-col gap-0.5 overflow-x-hidden overflow-y-auto rounded-2xl border border-white/10 bg-black/45 px-2 py-2 backdrop-blur-xl md:flex"
      >
        {navSections.map((s) => {
          const active = activeId === s.hash;
          return (
            <button
              key={s.hash}
              type="button"
              onClick={() => deck.setActiveId(s.hash, { source: "nav" })}
              className={cn(
                "relative w-full rounded-xl px-1.5 py-2 text-left text-[9px] font-semibold uppercase leading-snug tracking-[0.08em] transition-colors",
                active ? "text-[var(--moa-cream)]" : "text-white/45 hover:text-white/75",
              )}
              title={s.label}
              aria-current={active ? "true" : undefined}
            >
              {active ? (
                <span className="absolute inset-y-1.5 left-0 w-[2px] rounded-full bg-[rgba(197,163,106,0.85)]" />
              ) : null}
              <span className="block pl-2">{s.short}</span>
            </button>
          );
        })}
      </nav>

      {open ? (
        <div className="fixed inset-0 z-[110] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[78dvh] overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0b0b0c] p-5 pb-8 shadow-[0_-40px_120px_rgba(0,0,0,0.65)]">
            <div className="mx-auto mb-5 h-1 w-12 shrink-0 rounded-full bg-white/20" aria-hidden />
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold tracking-tight text-[var(--moa-cream)]">Navigate</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="mt-4 grid gap-2">
              {navSections.map((s) => (
                <button
                  key={s.hash}
                  type="button"
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    activeId === s.hash
                      ? "border-[rgba(197,163,106,0.45)] bg-[rgba(197,163,106,0.08)] text-[var(--moa-cream)]"
                      : "border-white/10 bg-white/[0.03] text-white/75 hover:border-white/20",
                  )}
                  onClick={() => {
                    deck.setActiveId(s.hash, { source: "nav" });
                    setOpen(false);
                  }}
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    Jump to
                  </span>
                  <span className="mt-1 block font-medium tracking-tight">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
