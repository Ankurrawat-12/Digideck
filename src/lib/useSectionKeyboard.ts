"use client";

import { useEffect, useRef } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export function useSectionKeyboard(orderedIds: string[], activeId: string) {
  const activeRef = useRef(activeId);

  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }

      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;

      e.preventDefault();
      const order = orderedIds;
      const current = activeRef.current;
      const idx = Math.max(0, order.indexOf(current));
      const nextIdx = e.key === "ArrowDown" ? Math.min(order.length - 1, idx + 1) : Math.max(0, idx - 1);
      const id = order[nextIdx];
      scrollToSection(`#${id}`);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [orderedIds]);
}
