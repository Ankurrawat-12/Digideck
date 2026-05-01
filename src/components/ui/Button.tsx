import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "ghost" | "gold" | "outline";

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(197,163,106,0.55)] active:translate-y-[0.5px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--moa-cream)] text-[var(--moa-ink)] hover:bg-white border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
  ghost:
    "bg-white/5 text-[var(--moa-cream)] border border-white/15 hover:bg-white/10 hover:border-white/25",
  gold:
    "bg-[linear-gradient(135deg,rgba(197,163,106,0.35),rgba(197,163,106,0.12))] text-[var(--moa-cream)] border border-[rgba(197,163,106,0.45)] hover:border-[rgba(197,163,106,0.65)]",
  outline:
    "bg-transparent text-[var(--moa-cream-muted)] border border-white/10 hover:text-[var(--moa-cream)] hover:border-white/20",
};

export function buttonLinkClassName(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseClassName, variants[variant], className);
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        baseClassName,
        "disabled:pointer-events-none disabled:opacity-40",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant }) {
  return <a className={buttonLinkClassName(variant, className)} {...props} />;
}
