/**
 * Paths match assets under `public/assets/`:
 * - Videos: `videos/*.mp4` (underscore names from your library)
 * - Stills: `images/*.png` + `mall-map-abstract.svg`
 *
 * Extra clips are optional — wire them into modules for richer pacing.
 */

export const VIDEO = {
  hero: "/assets/videos/hero_loop.mp4",
  cta: "/assets/videos/cta.mp4",
  retail: "/assets/videos/retail_1_loop.mp4",
  attractions: "/assets/videos/attractions_loop.mp4",
  events: "/assets/videos/events_loop.mp4",
  dining: "/assets/videos/dining_loop.mp4",
  sponsorship: "/assets/videos/brand_loop.mp4",
  dealMoment: "/assets/videos/deal_moment.mp4",
  dwellTime: "/assets/videos/dwell_time.mp4",
  leasing: "/assets/videos/leasing.mp4",
  nightEvent: "/assets/videos/night_event.mp4",
  seasonalMarket: "/assets/videos/seasonal_market.mp4",
  tourismArrival: "/assets/videos/tourism_arrival.mp4",
} as const;

/** Poster frames — your PNG stills (no separate poster folder required). */
export const POSTER = {
  hero: "/assets/images/hero.png",
  retail: "/assets/images/retail.png",
  attractions: "/assets/images/expo.png",
  events: "/assets/images/performing.png",
  dining: "/assets/images/brand.png",
  sponsorship: "/assets/images/sponsorship.png",
} as const;

export const IMAGE = {
  moaExterior: "/assets/images/moa-exterior.png",
  luxuryRetail: "/assets/images/moa-interior-atrium.png",
  interiorAtrium: "/assets/images/moa-interior-atrium.png",
  nickelodeon: "/assets/images/expo.png",
  seaLife: "/assets/images/retail.png",
  diningLifestyle: "/assets/images/hero.png",
  eventsCrowd: "/assets/images/performing.png",
  connectedHotels: "/assets/images/brand.png",
  mallMapAbstract: "/assets/images/mall-map-abstract.svg",
  moaMapLevel1: "/assets/images/map/Level-1.png",
  moaMapLevel2: "/assets/images/map/Level-2.png",
  moaMapLevel3: "/assets/images/map/Level-3.png",
  moaMapLevel4: "/assets/images/map/Level-4.png",
  brandActivation: "/assets/images/brand.png",
  expoConcept: "/assets/images/expo.png",
  performingArtsConcept: "/assets/images/performing.png",
  sponsorshipStill: "/assets/images/sponsorship.png",
} as const;
