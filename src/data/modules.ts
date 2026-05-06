export type LeasingPathCard = {
  id: string;
  segment: string;
  bestFit: string;
  whyMoa: string;
  activation: string;
  ctaLabel: string;
  mailtoSubject: string;
};

export type SponsorshipTier = {
  id: string;
  title: string;
  summary: string;
  signals: string[];
};

export type ActivationExample = {
  id: string;
  title: string;
  angle: string;
};

export type AudienceSegment = {
  id: string;
  label: string;
  note: string;
};

export type EventFormatCard = {
  id: string;
  title: string;
  pitch: string;
};

export type EventCapabilityCard = {
  id: string;
  title: string;
  detail: string;
};

export type VenueConceptCard = {
  id: string;
  title: string;
  description: string;
  isConcept: boolean;
};

import { IMAGE, POSTER, VIDEO } from "./mediaAssets";

export type AttractionSlide = {
  id: string;
  title: string;
  description: string;
  kind: "image" | "video";
  src: string;
  posterSrc?: string;
  labelFallback: string;
};

export const leasingPaths: LeasingPathCard[] = [
  {
    id: "luxury-fashion",
    segment: "Luxury / Fashion",
    bestFit: "Flagship storytelling, seasonal capsules, appointment-led retail.",
    whyMoa:
      "520+ stores and a tourism-driven calendar mean luxury brands step into a stage — not a corridor.",
    activation: "Court-adjacent reveal moment + weekend residency programming.",
    ctaLabel: "Discuss luxury positioning",
    mailtoSubject: "MOA — Luxury / Fashion leasing inquiry",
  },
  {
    id: "beauty-wellness",
    segment: "Beauty / Wellness",
    bestFit: "Services, diagnostics, rituals, and high-touch discovery.",
    whyMoa:
      "Beauty wins when sessions become itineraries — dining, hotels, and events extend the visit.",
    activation: "Trend week takeover + creator-led masterclasses (illustrative activation concept).",
    ctaLabel: "Discuss beauty / wellness",
    mailtoSubject: "MOA — Beauty / Wellness leasing inquiry",
  },
  {
    id: "fb-dining",
    segment: "F&B / Dining",
    bestFit: "Chef-forward concepts, group dining, and event-adjacent hospitality.",
    whyMoa: "50 restaurants inside a 32M annual visitor destination — food shapes dwell time.",
    activation: "Preview nights tied to concerts or launches (illustrative activation concept).",
    ctaLabel: "Discuss dining concepts",
    mailtoSubject: "MOA — Dining leasing inquiry",
  },
  {
    id: "entertainment-retail",
    segment: "Entertainment Retail",
    bestFit: "Collectibles, experiential picks, fan moments, and family discovery.",
    whyMoa:
      "Nickelodeon Universe, SEA LIFE Minnesota Aquarium, Crayola Experience — visitors arrive for experiences, then circulate retail.",
    activation: "Limited drops timed to attraction peaks (illustrative activation concept).",
    ctaLabel: "Discuss entertainment retail",
    mailtoSubject: "MOA — Entertainment retail inquiry",
  },
  {
    id: "pop-up-seasonal",
    segment: "Pop-Up / Seasonal",
    bestFit: "High narrative velocity — launches, collabs, holiday, cultural moments.",
    whyMoa:
      "300+ events per year — built-in reasons for urgency and repeat visits.",
    activation: "Seasonal courts + weekend hype cycles (illustrative activation concept).",
    ctaLabel: "Discuss pop-up strategy",
    mailtoSubject: "MOA — Pop-up / seasonal inquiry",
  },
  {
    id: "flagship-category",
    segment: "Flagship / Category Leader",
    bestFit: "Market-defining assortment, brand temples, national storytelling.",
    whyMoa:
      "Scale + tourism reach — a flagship here behaves like a destination asset, not a box.",
    activation: "Launch weekend as a ticketed experience add-on (illustrative activation concept).",
    ctaLabel: "Discuss flagship paths",
    mailtoSubject: "MOA — Flagship / category leader inquiry",
  },
];

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: "signature",
    title: "Signature Partner",
    summary: "Year-round presence across retail, attractions, and marquee seasonal beats.",
    signals: ["Cross-property visibility"],
  },
  {
    id: "seasonal",
    title: "Seasonal Campaign Partner",
    summary: "Own a narrative arc — holidays, back-to-school, summer tourism peaks.",
    signals: ["Focused budget efficiency"],
  },
  {
    id: "attraction",
    title: "Attraction / Experience Partner",
    summary: "Activate inside the entertainment spine — families, fans, travelers.",
    signals: ["Experience-led storytelling"],
  },
  {
    id: "event-series",
    title: "Event Series Partner",
    summary: "Attach to recurring programming — music, fashion, culture, community.",
    signals: ["Built-in audiences"],
  },
  {
    id: "pop-up",
    title: "Pop-Up Activation Partner",
    summary: "Fast velocity — launches, collabs, influencer moments, sampling.",
    signals: ["Speed to market", "Court flexibility", "Retail conversion proximity"],
  },
];

export const sponsorshipActivations: ActivationExample[] = [
  { id: "beauty-week", title: "Beauty trend week", angle: "Runways, tutorials, retail drops — timed like a cultural moment." },
  { id: "trophy-tour", title: "Sports trophy tour", angle: "Fan lines + photo stages + adjacent merchandising heat." },
  { id: "premiere", title: "Entertainment premiere", angle: "Queues become retail journeys — energy carries past the red rope." },
  { id: "holiday", title: "Family holiday world", angle: "Seasonal spectacle that behaves like a destination campaign." },
  { id: "creator-day", title: "Creator / influencer day", angle: "Meet-and-greets that behave like live content studios." },
];

export const sponsorshipAudiences: AudienceSegment[] = [
  { id: "tourism", label: "Tourism", note: "National and international travelers seeking iconic Minnesota experiences." },
  { id: "families", label: "Families", note: "Attraction-led itineraries with multi-hour dwell patterns." },
  { id: "gen-z", label: "Gen Z", note: "Social-first discovery — events, drops, entertainment adjacency." },
  { id: "fashion-beauty", label: "Fashion / beauty shoppers", note: "Retail missions amplified by launches and cultural programming." },
  { id: "entertainment", label: "Entertainment seekers", note: "Fans and experience-first visitors circulating retail naturally." },
  { id: "day-trips", label: "Regional day-trippers", note: "Weekend rhythm — dining + attractions + shopping as one trip." },
];

export const eventFormats: EventFormatCard[] = [
  { id: "launch", title: "Product launch", pitch: "Controlled spectacle — queues, reveals, and retail conversion in one arc." },
  { id: "celebrity", title: "Celebrity appearance", pitch: "Attention compounds when fans move through a complete ecosystem." },
  { id: "concert", title: "Concert / live performance", pitch: "Energy that behaves like a festival — with hospitality and retail adjacent." },
  { id: "corporate", title: "Corporate event", pitch: "Scale venues + premium hospitality — JW Marriott and Radisson Blu nearby." },
  { id: "fan-xp", title: "Fan experience", pitch: "Interactive rituals — photo, merch, community, repeat visits." },
  { id: "seasonal", title: "Seasonal activation", pitch: "Own a calendar moment — tourism peaks become brand peaks." },
  { id: "fashion", title: "Fashion / beauty event", pitch: "Runway gravity — appointment culture + immediate retail capture." },
];

export const eventCapabilities: EventCapabilityCard[] = [
  { id: "audience", title: "Built-in audience", detail: "32M annual visitors — intentional traffic, not accidental drift." },
  { id: "courts", title: "Courts & activation zones", detail: "Multiple formats — from intimate previews to show-scale moments." },
  { id: "hospitality", title: "Hospitality access", detail: "Connected/nearby hotels support talent, VIPs, and multi-day productions." },
  { id: "retail", title: "Retail adjacency", detail: "520+ stores — momentum continues after the applause." },
  { id: "media", title: "Media & social amplification", detail: "Live audiences generate content — plan for cameras, creators, and PR beats." },
];

export const attractionSlides: AttractionSlide[] = [
  {
    id: "nick",
    title: "Nickelodeon Universe",
    description: "A 7-acre indoor theme park — families arrive for rides, characters, and energy that fills the day.",
    kind: "video",
    src: VIDEO.attractions,
    posterSrc: POSTER.attractions,
    labelFallback: "Attractions loop",
  },
  {
    id: "sealife",
    title: "SEA LIFE Minnesota Aquarium",
    description: "An attraction rhythm that pulls intentional visits — then circulates guests through retail and dining.",
    kind: "image",
    src: IMAGE.expoConcept,
    labelFallback: "Expo visual",
  },
  {
    id: "crayola",
    title: "Crayola Experience",
    description: "Hands-on family discovery — the kind of dwell that turns a trip into an itinerary.",
    kind: "image",
    src: IMAGE.brandActivation,
    labelFallback: "Brand activation still",
  },
  {
    id: "tourism",
    title: "Tourism-driven demand",
    description: "Trips behave like itineraries — experiences first, retail conversion naturally follows.",
    kind: "image",
    src: IMAGE.moaExterior,
    labelFallback: "Destination exterior",
  },
  {
    id: "event-energy",
    title: "Event energy",
    description: "Live programming creates peaks — retail and dining catch momentum.",
    kind: "video",
    src: VIDEO.events,
    posterSrc: POSTER.events,
    labelFallback: "Events loop",
  },
  {
    id: "partner-moments",
    title: "Partner moments",
    description: "Brand experiences land inside a live audience engine.",
    kind: "video",
    src: VIDEO.sponsorship,
    posterSrc: POSTER.sponsorship,
    labelFallback: "Partnership loop",
  },
];

export const venueConcepts: VenueConceptCard[] = [
  {
    id: "performing-arts",
    title: "Performing arts / live stage concept",
    description: "A programmable stage spine for residencies, concerts, and premium ticketing adjacency — concept module.",
    isConcept: true,
  },
  {
    id: "expo",
    title: "Expo / convention activation concept",
    description: "Modular floors for showcases, auto reveals, and partner villages — concept module.",
    isConcept: true,
  },
  {
    id: "immersion-suite",
    title: "Brand immersion suite",
    description: "Private storytelling rooms + guided retail journeys — concept module.",
    isConcept: true,
  }
];

export type RetailTenantArchetype = {
  id: string;
  title: string;
  summary: string;
  whyWorks: string;
  bestFitBrands: string[];
  activationIdea: string;
  ctaLabel: string;
  mailtoSubject: string;
};

export const retailTenantArchetypes: RetailTenantArchetype[] = [
  {
    id: "luxury-flagship",
    title: "Luxury flagship",
    summary: "Temple retail with narrative control — pace, privacy, prestige.",
    whyWorks: "Tourism + events create predictable spikes — luxury thrives on intentional arrivals.",
    bestFitBrands: ["Fashion maisons", "Jewelry houses", "Beauty maisons"],
    activationIdea: "Private evening + limited court reveal (illustrative activation concept).",
    ctaLabel: "Talk flagship strategy",
    mailtoSubject: "MOA — Luxury flagship discussion",
  },
  {
    id: "category-leader",
    title: "Category leader",
    summary: "Market-defining assortment with demo culture and education.",
    whyWorks: "Attractions extend visits — your specialists get more sessions per trip.",
    bestFitBrands: ["Electronics", "Athletic", "Home innovation"],
    activationIdea: "Launch weekend tied to a live performance window (illustrative activation concept).",
    ctaLabel: "Talk category leadership",
    mailtoSubject: "MOA — Category leader discussion",
  },
  {
    id: "pop-up-seasonal",
    title: "Pop-up / seasonal",
    summary: "Velocity retail — fast narrative, limited windows, social heat.",
    whyWorks: "300+ events per year — calendar hooks without building a permanent campaign alone.",
    bestFitBrands: ["Collabs", "DTC breakouts", "Seasonal concepts"],
    activationIdea: "Weekend residency + creator walkthrough (illustrative activation concept).",
    ctaLabel: "Talk seasonal velocity",
    mailtoSubject: "MOA — Pop-up / seasonal discussion",
  },
  {
    id: "entertainment-retail",
    title: "Entertainment retail",
    summary: "Fan moments and collectibles — retail as part of the experience.",
    whyWorks: "Nickelodeon Universe and companion attractions pull motivated, high-intent audiences daily.",
    bestFitBrands: ["Licensed goods", "Toys & hobbies", "Interactive merchandise"],
    activationIdea: "Timed drops aligned to attraction peaks (illustrative activation concept).",
    ctaLabel: "Talk entertainment retail",
    mailtoSubject: "MOA — Entertainment retail discussion",
  },
  {
    id: "fb-concept",
    title: "F&B concept",
    summary: "Not a food court moment — a dining destination inside a destination.",
    whyWorks: "50 restaurants — food is itinerary glue for groups, tourists, and event nights.",
    bestFitBrands: ["Chef brands", "Elevated casual", "Treatments & desserts"],
    activationIdea: "Chef counter-series paired with event previews (illustrative activation concept).",
    ctaLabel: "Talk dining placement",
    mailtoSubject: "MOA — Dining concept discussion",
  },
];
