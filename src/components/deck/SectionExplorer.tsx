"use client";

import { objectiveCards } from "@/data/deckContent";
import { OpportunityCard } from "./OpportunityCard";

export function SectionExplorer() {
  return (
    <section id="explore" className="scroll-mt-28 border-t border-white/[0.06] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[72ch]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Non-linear navigation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--moa-cream)] sm:text-4xl">
            Explore by objective
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--moa-cream-muted)] sm:text-base">
            Jump directly to the module that matches your mandate — leasing, sponsorship, or events.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          {objectiveCards.map((c) => (
            <OpportunityCard key={c.id} title={c.title} description={c.description} href={c.href} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
