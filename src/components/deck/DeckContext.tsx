"use client";

import { createContext, useContext } from "react";

export type DeckNavigateOptions = {
  source?: "nav" | "cta" | "keyboard" | "hash";
};

export type DeckContextValue = {
  orderedIds: string[];
  activeId: string;
  setActiveId: (id: string, opts?: DeckNavigateOptions) => void;
  goNext: () => void;
  goPrev: () => void;
};

const DeckContext = createContext<DeckContextValue | null>(null);

export function DeckProvider({
  value,
  children,
}: {
  value: DeckContextValue;
  children: React.ReactNode;
}) {
  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}

export function useDeck() {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used within DeckProvider");
  return ctx;
}

