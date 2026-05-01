"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { MediaFallback } from "./MediaFallback";

export function DeckImage({
  src,
  alt,
  labelFallback,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  labelFallback: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <MediaFallback label={labelFallback} className={className} />;
  }

  const isSvg = src.endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      priority={priority}
      unoptimized={isSvg}
      draggable={false}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
