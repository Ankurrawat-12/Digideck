"use client";

import { objectiveCards } from "@/data/deckContent";
import { cn } from "@/lib/cn";
import { OpportunityCard } from "./OpportunityCard";

export function SectionExplorer({ className }: { className?: string }) {
  return (
    <section
      id="explore"
      className={cn("bg-transparent h-[100dvh]", className)}
    >
      <div className="mx-auto max-w-[1200px] h-full px-5 pt-[max(5.75rem,env(safe-area-inset-top))] pb-[max(3.5rem,env(safe-area-inset-bottom))] sm:px-8 lg:px-10 lg:pt-28 lg:pb-16 flex flex-col">
        <div className="max-w-[72ch]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Non-linear navigation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--moa-cream)] sm:text-4xl">
            Explore by objective
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
            Jump directly to the module that matches your mandate — leasing, sponsorship, or events.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3 flex-1">
          {objectiveCards.map((c) => (
            <OpportunityCard key={c.id} title={c.title} description={c.description} href={c.href} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
