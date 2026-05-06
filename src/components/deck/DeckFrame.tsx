"use client";

import { cn } from "@/lib/cn";

export function DeckFrame({
  children,
  className,
  backgroundSrc,
  backgroundVideoSrc,
  backgroundVideoPoster,
  backgroundClassName,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundSrc?: string;
  backgroundVideoSrc?: string;
  backgroundVideoPoster?: string;
  backgroundClassName?: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center px-2 py-4 sm:px-6 sm:py-10">
      <div
        className={cn(
          "relative h-[92dvh] w-[98vw] overflow-hidden rounded-[22px] border border-white/10 bg-black/35 shadow-[0_60px_180px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:h-[min(86dvh,860px)] sm:w-[min(96vw,1380px)] sm:rounded-[28px]",
          className,
        )}
      >
        {backgroundVideoSrc ? (
          <div className={cn("absolute inset-0", backgroundClassName)} aria-hidden>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={backgroundVideoSrc}
              poster={backgroundVideoPoster}
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            />
            <div className="deck-breathe absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62),rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.86))]" />
          </div>
        ) : backgroundSrc ? (
          <div className={cn("absolute inset-0", backgroundClassName)} aria-hidden>
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${backgroundSrc})` }}
            />
            <div className="deck-breathe absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.70)_45%,rgba(0,0,0,0.82))]" />
          </div>
        ) : null}
        <div className="relative h-full w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

