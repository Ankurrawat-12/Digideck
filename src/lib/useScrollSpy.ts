"use client";

import { useEffect, useState } from "react";

/**
 * Pick the active nav section using scroll position (sticky-nav pattern):
 * the active id is the **last** section (in document order) whose top edge has
 * crossed above a viewport marker line.
 *
 * IntersectionObserver-only spy breaks here because callbacks receive **changed**
 * entries per batch, not a full snapshot of all sections — the hero often never
 * “wins” updates and OPEN stays highlighted.
 */
export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const markerY = Math.max(120, window.innerHeight * 0.26);
        let current = sectionIds[0] ?? "";

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top <= markerY) current = id;
        }

        setActiveId((prev) => (prev === current ? prev : current));
      });
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [...sectionIds, "__scrollspy__"]);

  return activeId;
}
