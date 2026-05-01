"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";

export function StickyDeckCta() {
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setContactVisible(Boolean(e?.isIntersecting)), {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (contactVisible) return null;

  return (
    <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[80] hidden md:block">
      <div className="pointer-events-auto">
        <Button
          type="button"
          variant="gold"
          className="shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
          onClick={() => scrollToSection("contact")}
        >
          Start a conversation
        </Button>
      </div>
    </div>
  );
}
