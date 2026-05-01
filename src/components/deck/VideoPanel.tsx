"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { MediaFallback } from "./MediaFallback";

export type VideoPanelProps = {
  src: string;
  poster?: string;
  ariaLabel: string;
  className?: string;
  labelFallback: string;
  hoverBoost?: boolean;
  /** When true, begin loading/playing as soon as mounted (hero). */
  priority?: boolean;
  /** Poster load behavior (important for LCP). */
  posterPriority?: boolean;
  /** Tell the browser how large the poster renders. */
  posterSizes?: string;
  /** Lower quality reduces bytes (especially from PNG → AVIF/WebP). */
  posterQuality?: number;
  /** Delay activation to let main thread settle (improves Lighthouse TBT). */
  deferMs?: number;
  /**
   * If provided, renders a lightweight download hint for low-end devices and improves perceived load.
   * Keep short; used only as a metadata hint.
   */
  fileSizeHint?: string;
};

export function VideoPanel({
  src,
  poster,
  ariaLabel,
  className,
  labelFallback,
  hoverBoost = false,
  priority = false,
  posterPriority,
  posterSizes,
  posterQuality = 60,
  deferMs = 0,
  fileSizeHint,
}: VideoPanelProps) {
  const reduced = useReducedMotionSafe();
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(priority && deferMs <= 0);
  const [posterFailed, setPosterFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const posterIsSvg = Boolean(poster?.endsWith(".svg"));

  useEffect(() => {
    if (!priority || reduced) return;
    if (deferMs <= 0) {
      setActive(true);
      return;
    }
    const t = window.setTimeout(() => setActive(true), deferMs);
    return () => window.clearTimeout(t);
  }, [deferMs, priority, reduced]);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root || reduced || priority) return;

    let cancelTimeout: number | null = null;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        if (deferMs <= 0) {
          setActive(true);
          return;
        }
        cancelTimeout = window.setTimeout(() => setActive(true), deferMs);
      },
      { root: null, rootMargin: "140px", threshold: 0.08 },
    );

    io.observe(root);
    return () => {
      if (cancelTimeout) window.clearTimeout(cancelTimeout);
      io.disconnect();
    };
  }, [deferMs, priority, reduced]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced || !active || videoFailed) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        /* autoplay policies — muted loop should succeed; ignore */
      }
    };
    void tryPlay();
  }, [active, reduced, videoFailed]);

  if (reduced || videoFailed) {
    return (
      <div className={cn("relative h-full min-h-[240px] w-full overflow-hidden rounded-2xl", className)}>
        {poster && !posterFailed ? (
          <Image
            src={poster}
            alt=""
            aria-hidden
            fill
            unoptimized={posterIsSvg}
            className="object-cover"
            sizes={posterSizes ?? "(max-width: 768px) 100vw, 50vw"}
            quality={posterQuality}
            priority={posterPriority ?? priority}
            onError={() => setPosterFailed(true)}
          />
        ) : (
          <MediaFallback label={labelFallback} className="h-full rounded-2xl" />
        )}
        <span className="sr-only">{ariaLabel}</span>
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className={cn(
        "group relative h-full min-h-[240px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black",
        hoverBoost && "transition-transform duration-700 ease-out group-hover:scale-[1.01]",
        className,
      )}
    >
      {!active || videoFailed ? (
        poster && !posterFailed ? (
          <Image
            src={poster}
            alt=""
            aria-hidden
            fill
            unoptimized={posterIsSvg}
            className="object-cover"
            sizes={posterSizes ?? "(max-width: 768px) 100vw, 50vw"}
            quality={posterQuality}
            priority={posterPriority ?? false}
            onError={() => setPosterFailed(true)}
          />
        ) : (
          <MediaFallback label={labelFallback} className="h-full rounded-none border-0" />
        )
      ) : null}

      {active && !videoFailed ? (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500",
            hoverBoost && "group-hover:brightness-[1.03]",
          )}
          draggable={false}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          poster={poster && !posterFailed ? poster : undefined}
          aria-label={ariaLabel}
          data-size={fileSizeHint}
          onError={() => setVideoFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_45%)]" />
    </div>
  );
}
