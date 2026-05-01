export type DeckMetric = {
  id: string;
  label: string;
  value: string;
  hint?: string;
};

export const heroMetrics: DeckMetric[] = [
  { id: "visitors", label: "Annual visitors", value: "32M+" },
  { id: "stores", label: "Stores", value: "520+" },
  { id: "events", label: "Annual events", value: "300+" },
  { id: "impact", label: "MN economic impact", value: "$3B+" },
];

export const scaleMetrics: DeckMetric[] = [
  { id: "sqft", label: "Destination scale", value: "5.6M sq ft" },
  { id: "opened", label: "Opened", value: "1992" },
  { id: "dining", label: "Restaurants", value: "50" },
  {
    id: "park",
    label: "Indoor theme park",
    value: "7 acres",
    hint: "Nickelodeon Universe",
  },
];
