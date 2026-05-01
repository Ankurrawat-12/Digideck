"use client";

import { motion } from "framer-motion";
import { Plane, Globe2, Link2, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { IMAGE } from "@/data/mediaAssets";
import { Card } from "@/components/ui/Card";
import { DeckImage } from "./DeckImage";

const blocks = [
  {
    icon: Sparkles,
    title: "Built as a destination, not a shopping center",
    body: "Retail behaves differently when the visit is intentional — attractions, dining, hotels, and events shape the trip.",
  },
  {
    icon: Plane,
    title: "Minutes from MSP airport",
    body: "Connectivity matters for talent, teams, retail launches, and national programming fly-ins.",
  },
  {
    icon: Globe2,
    title: "Tourism engine with national and international reach",
    body: "One of the top tourist destinations in the United States — scale that behaves like a campaign channel.",
  },
  {
    icon: Link2,
    title: "One connected ecosystem",
    body: "Retail + attractions + hotels + events — JW Marriott and Radisson Blu connected/nearby for hospitality continuity.",
  },
];

export function WhyMoaGrid() {
  const reduced = useReducedMotionSafe();
  const levels = useMemo(
    () => [
      { id: "l1", label: "Level 1", src: IMAGE.moaMapLevel1 },
      { id: "l2", label: "Level 2", src: IMAGE.moaMapLevel2 },
      { id: "l3", label: "Level 3", src: IMAGE.moaMapLevel3 },
      { id: "l4", label: "Level 4", src: IMAGE.moaMapLevel4 },
    ],
    [],
  );
  const [activeLevel, setActiveLevel] = useState(levels[0]?.id ?? "l1");
  const active = levels.find((l) => l.id === activeLevel) ?? levels[0];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <motion.div
        className="lg:col-span-5"
        initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="relative overflow-hidden p-0">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-auto lg:min-h-[320px]">
            <DeckImage
              src={active?.src ?? IMAGE.mallMapAbstract}
              alt="Mall of America wayfinding map by level"
              labelFallback="Wayfinding map"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={false}
              className="object-contain bg-[#070708] opacity-95"
            />
          </div>
          <div className="border-t border-white/10 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">Wayfinding map</p>
              <div className="flex flex-wrap items-center gap-2">
                {levels.map((l) => {
                  const on = l.id === activeLevel;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      className={
                        on
                          ? "rounded-full border border-[rgba(197,163,106,0.45)] bg-[rgba(197,163,106,0.10)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--moa-cream)]"
                          : "rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 hover:border-white/20 hover:text-white/80"
                      }
                      aria-pressed={on}
                      onClick={() => setActiveLevel(l.id)}
                    >
                      {l.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--moa-cream-muted)]">
              Switch levels to show circulation and adjacency — useful when discussing placement, anchors, and activation zones.
            </p>
          </div>
        </Card>
      </motion.div>

      <div className="grid gap-4 lg:col-span-7">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="flex gap-4 p-5 sm:p-6">
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <b.icon className="h-5 w-5 text-[rgba(197,163,106,0.95)]" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold tracking-tight text-[var(--moa-cream)]">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--moa-cream-muted)]">{b.body}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
