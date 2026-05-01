import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur-xl transition-colors",
        className,
      )}
      {...props}
    />
  );
}
