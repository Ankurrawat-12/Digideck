import type { DeckMetric } from "./metrics";
import { IMAGE, POSTER, VIDEO } from "./mediaAssets";
import { scaleMetrics } from "./metrics";

export type DeckCTA = {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "gold";
};

export type DeckMedia = {
  type: "video" | "image";
  src: string;
  poster?: string;
  alt?: string;
  labelFallback?: string;
};

export type DeckSection = {
  id: string;
  hash: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  metrics?: DeckMetric[];
  media?: DeckMedia;
  ctas?: DeckCTA[];
};

export const navSections: { hash: string; label: string; short: string }[] = [
  { hash: "overview", label: "Opening", short: "Open" },
  { hash: "explore", label: "Explore", short: "Go" },
  { hash: "why-moa", label: "Why MOA", short: "Why" },
  { hash: "retail", label: "Retail", short: "Retail" },
  { hash: "luxury", label: "Luxury", short: "Luxury" },
  { hash: "dining", label: "Dining", short: "Dine" },
  { hash: "momentum", label: "Momentum", short: "Move" },
  { hash: "attractions", label: "Attractions", short: "Play" },
  { hash: "events", label: "Events", short: "Events" },
  { hash: "sponsorship", label: "Sponsor", short: "Partner" },
  { hash: "leasing", label: "Leasing", short: "Lease" },
  { hash: "venues", label: "Venues", short: "Future" },
  { hash: "contact", label: "Contact", short: "Act" },
];

export const heroCopy = {
  eyebrow: "Mall of America Sales Experience",
  title: "America’s Retail City",
  subtitle:
    "A 5.6M sq ft destination where retail, attractions, dining, hotels, and live events move as one commercial engine.",
  ctas: [
    { label: "Explore the Opportunity", href: "#why-moa", variant: "primary" as const },
    { label: "Leasing Paths", href: "#leasing", variant: "ghost" as const },
    { label: "Event Platform", href: "#events", variant: "ghost" as const },
  ],
};

export const objectiveCards: {
  id: string;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    id: "lease",
    title: "I want to lease space",
    description: "Segmented paths — luxury, beauty, dining, entertainment retail, pop-ups, flagships.",
    href: "#leasing",
  },
  {
    id: "sponsor",
    title: "I want to sponsor / activate",
    description: "Partnership tiers, audiences, and activation concepts built for attention.",
    href: "#sponsorship",
  },
  {
    id: "events",
    title: "I want to book an event",
    description: "Formats, capabilities, and a platform engineered for live audiences.",
    href: "#events",
  },
];

export const sections: DeckSection[] = [
  {
    id: "why-moa",
    hash: "why-moa",
    eyebrow: "Destination thesis",
    title: "This is not foot traffic. It’s destination demand.",
    body: "Mall of America behaves like a small city: retail, entertainment, dining, hospitality, and year-round programming in one place. Brands don’t just get discovered — they get chosen.",
    metrics: scaleMetrics,
    media: {
      type: "image",
      src: IMAGE.moaExterior,
      alt: "Mall of America exterior visual",
      labelFallback: "Destination exterior",
    },
    ctas: [
      { label: "See the retail engine", href: "#retail-archetypes", variant: "primary" },
      { label: "Jump to sponsorship", href: "#sponsorship", variant: "ghost" },
    ],
  },
  {
    id: "retail",
    hash: "retail",
    eyebrow: "Retail platform",
    title: "Retail powered by intent, not convenience.",
    body: "With 520+ stores and an attraction-led visitor base, MOA creates longer visits and repeatable peaks. That’s where flagship storytelling, drops, and experiential retail convert.",
    media: {
      type: "video",
      src: VIDEO.retail,
      poster: POSTER.retail,
      labelFallback: "Retail atmosphere",
    },
    ctas: [
      { label: "Explore tenant archetypes", href: "#retail-archetypes", variant: "primary" },
      { label: "Luxury thesis", href: "#luxury", variant: "ghost" },
    ],
  },
  {
    id: "luxury",
    hash: "luxury",
    eyebrow: "Premium experience",
    title: "A flagship can become a moment — not just a store.",
    body: "Premium retail succeeds when environment, audience, and experience align. MOA gives brands the scale to build immersive launches, limited drops, appointment-led experiences, and cultural retail moments.",
    media: {
      type: "image",
      src: IMAGE.luxuryRetail,
      alt: "Luxury retail environment",
      labelFallback: "Luxury retail",
    },
    ctas: [{ label: "Design a flagship moment", href: "#leasing", variant: "gold" }],
  },
  {
    id: "dining",
    hash: "dining",
    eyebrow: "Dining & lifestyle",
    title: "Dining is part of the journey — and the revenue arc.",
    body: "Food is not an afterthought. It extends dwell time, anchors group visits, supports events, and turns a shopping trip into a full-day itinerary. With 50 restaurants, F&B behaves as lifestyle — not a corridor convenience.",
    media: {
      type: "video",
      src: VIDEO.dining,
      poster: POSTER.dining,
      labelFallback: "Dining & hospitality",
    },
    ctas: [{ label: "Sponsor culinary moments", href: "#sponsorship", variant: "ghost" }],
  },
  {
    id: "momentum",
    hash: "momentum",
    eyebrow: "Commercial momentum",
    title: "From first impression to signed deal — fast.",
    body: "MOA is an attention engine: arrivals, dwell, and high-energy moments that push audiences into retail, dining, and partnerships — with clear next steps for decision-makers.",
    media: {
      type: "video",
      src: VIDEO.dealMoment,
      poster: POSTER.hero,
      labelFallback: "Deal moment",
    },
    ctas: [
      { label: "See leasing paths", href: "#leasing", variant: "primary" },
      { label: "See partnership tiers", href: "#sponsorship", variant: "ghost" },
    ],
  },
  {
    id: "attractions",
    hash: "attractions",
    eyebrow: "Attractions & entertainment",
    title: "Entertainment changes the economics of retail.",
    body: "Attractions create intentional visits. Families, travelers, fans, and groups arrive for experiences — Nickelodeon Universe, SEA LIFE Minnesota Aquarium, Crayola Experience, dining, and live events — and move through a retail ecosystem while they are there.",
    media: {
      type: "video",
      src: VIDEO.attractions,
      poster: POSTER.attractions,
      labelFallback: "Attractions energy",
    },
    ctas: [{ label: "Book an activation", href: "#events", variant: "primary" }],
  },
  {
    id: "events",
    hash: "events",
    eyebrow: "Live platform",
    title: "A live audience platform hiding in plain sight.",
    body: "Product launches, celebrity appearances, fan events, fashion moments, and community programming turn the property into a stage brands can step onto. More than 300 events per year — momentum you can plan against.",
    media: {
      type: "video",
      src: VIDEO.events,
      poster: POSTER.events,
      labelFallback: "Events & energy",
    },
    ctas: [{ label: "Start an event conversation", href: "#contact", variant: "gold" }],
  },
  {
    id: "sponsorship",
    hash: "sponsorship",
    eyebrow: "Partnerships",
    title: "Partnerships with built-in attention.",
    body: "MOA lets brands activate where audiences already gather — across retail, entertainment, tourism, dining, hotels, seasonal moments, and cultural programming.",
    media: {
      type: "video",
      src: VIDEO.sponsorship,
      poster: POSTER.sponsorship,
      labelFallback: "Partnership canvas",
    },
    ctas: [{ label: "Build a sponsorship package", href: "#contact", variant: "primary" }],
  },
];

export const contactMail = {
  leasing: "mailto:leasing@moa-deck.demo?subject=Mall%20of%20America%20%E2%80%94%20Leasing%20Inquiry",
  sponsorship:
    "mailto:partnerships@moa-deck.demo?subject=Mall%20of%20America%20%E2%80%94%20Sponsorship%20Conversation",
  events: "mailto:events@moa-deck.demo?subject=Mall%20of%20America%20%E2%80%94%20Event%20Booking",
  general: "mailto:hello@moa-deck.demo?subject=Mall%20of%20America%20%E2%80%94%20Sales%20Deck",
};

export function mailtoLeasing(subject: string) {
  return `mailto:leasing@moa-deck.demo?subject=${encodeURIComponent(subject)}`;
}

/** Replace with production recipients before sending externally — demo placeholders. */
export const contactNote =
  "Demo mailto targets use @moa-deck.demo — swap in official routing before external use.";

export const filmFeature = {
  title: "Mall of America Destination Film",
  eyebrow: "Watch Film",
  description: "A cinematic look at the scale, energy, and commercial opportunity of Mall of America.",
  youtubeId: "7rqxb0BICj8",
  localVideo: "/assets/videos/hero-moa.mp4",
  poster: "/assets/posters/hero-poster.jpg",
} satisfies {
  title: string;
  eyebrow: string;
  description: string;
  youtubeId?: string;
  localVideo?: string;
  poster?: string;
};
