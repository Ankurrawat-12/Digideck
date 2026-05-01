/**
 * Curated keyword routing for the in-deck "Brief Assistant" demo.
 * Labeled in UI as assignment demo — not a live LLM.
 */
export type AiReply = {
  keywords: string[];
  reply: string;
};

export const aiIntro =
  "Assignment demo: curated responses keyed to leasing, sponsorship, and events. Swap for a live model behind an API when approved.";

export const aiReplies: AiReply[] = [
  {
    keywords: ["lease", "leasing", "store", "retail", "space", "sqft", "square"],
    reply:
      "Leasing at MOA behaves like joining a city sector: 520+ stores, attractions that lengthen visits, and 300+ events per year that manufacture urgency. Use Leasing Paths for luxury, beauty, dining, entertainment retail, pop-ups, and flagships — each card includes a suggested activation frame.",
  },
  {
    keywords: ["sponsor", "sponsorship", "brand", "partner", "activation"],
    reply:
      "Sponsorship here is attention logistics: tourism, families, Gen Z, fashion and beauty missions, entertainment seekers, and regional weekender rhythm. Tiers range from signature presence to fast pop-up velocity — build packages around courts, attractions, and seasonal campaigns.",
  },
  {
    keywords: ["event", "concert", "launch", "fashion", "celebrity", "fan"],
    reply:
      "The event platform is built on intentional traffic — 32M annual visitors and a programming spine with premieres, music, fashion, and fan experiences. Capability cards cover audiences, courts, hospitality adjacency (JW Marriott / Radisson Blu), retail proximity, and social amplification.",
  },
  {
    keywords: ["visit", "visitor", "tourism", "airport", "msp"],
    reply:
      "MOA is positioned as one of the top tourist destinations in the United States, minutes from MSP. Pair that reach with a 5.6M sq ft ecosystem — retail, dining, hotels, attractions, and live events — so trips behave like itineraries, not errands.",
  },
  {
    keywords: ["nick", "theme park", "aquarium", "crayola", "attraction"],
    reply:
      "Attractions are the differentiator: a 7-acre indoor Nickelodeon Universe, SEA LIFE Minnesota Aquarium, Crayola Experience, plus dining and live programming. Experiences pull visits — retail captures them on the way in, through, and out.",
  },
];

export function matchAiReply(query: string): string {
  const q = query.trim().toLowerCase();
  if (!q) return "Ask about leasing paths, sponsorship tiers, event formats, or tourism reach — I’ll route you to the closest curated brief.";
  for (const row of aiReplies) {
    if (row.keywords.some((k) => q.includes(k))) return row.reply;
  }
  return "For numbers and verified positioning, use the metrics strip and Sources list in the README. For next steps, jump to Leasing, Sponsorship, or Events — each module is written like a live sales tool.";
}
