"use client";

import { useEffect, useRef } from "react";

export function useSectionKeyboard(
  orderedIds: string[],
  activeId: string,
  onNavigate: (id: string) => void,
) {
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

      if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      e.preventDefault();
      const order = orderedIds;
      const current = activeRef.current;
      const idx = Math.max(0, order.indexOf(current));
      const forward = e.key === "ArrowDown" || e.key === "ArrowRight";
      const nextIdx = forward ? Math.min(order.length - 1, idx + 1) : Math.max(0, idx - 1);
      const id = order[nextIdx];
      onNavigate(id);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [orderedIds, onNavigate]);
}
