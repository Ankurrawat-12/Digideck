# Mall of America — Interactive Sales Experience

**Live URL:** `https://YOUR_DEPLOYMENT.vercel.app` (replace after deploying)

An immersive, non-linear, video-first browser deck built for **live screen-share** and **standalone link** distribution. The experience is engineered like a luxury sales presentation (DigiDeck / keynote energy) — not a generic marketing site.

## Assignment summary

This project demonstrates:

- **Premium visual & UX craft** — cinematic hero, glass panels, restrained gold accenting, large editorial type, generous whitespace.
- **Technical execution** — Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion (restrained), lucide-react, accessible modals, lazy media loading patterns.
- **AI integration (assignment demo)** — an in-deck **Brief Assistant** that routes questions to **curated responses** (clearly labeled — not a live LLM).
- **Storytelling & strategy** — leasing, sponsorship, and events narratives written as a commercial deck.
- **Expandability** — modular data (`deckContent.ts`, `modules.ts`) + composable React modules.

## Tech stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`)
- Framer Motion
- lucide-react
- `@vercel/analytics`

## How to run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

### Windows note (important)

If your folder path contains an apostrophe (like `Assignment's`), some PowerShell wrappers can fail when running commands.
Use these scripts instead:

- `scripts/run-windows.cmd` — install + start dev
- `scripts/check-windows.cmd` — lint + build

## How to build / start production

```bash
pnpm build
pnpm start
```

## Design rationale

The deck optimizes for **evaluators** and **live reps**:

- **Non-linear navigation** — left rail (tablet/desktop), mobile sheet, scroll spy, objective jump cards.
- **Video-first sections** — muted, `playsInline`, poster-first, intersection-gated loading for loops (hero loads eagerly).
- **Luxury restraint** — black void base, warm cream typography, muted goldused sparingly as an accent rail — not “neon luxury”.
- **Motion discipline** — fades, subtle Y reveals, gentle scale from `0.98 → 1`; respects `prefers-reduced-motion`.

## AI tools used

This assignment artifact was developed with AI-assisted editing in Cursor (interactive coding agent). The shipped **Brief Assistant** is an intentional **assignment demo**: keyword-routed copy from `src/data/aiResponses.ts`, labeled in UI as curated — swap for a hosted model + API when approved.

## Asset strategy

Paths are centralized in `src/data/mediaAssets.ts`. Default layout matches the bundled library:

- `public/assets/videos/` — `hero_loop.mp4`, `dining_loop.mp4`, `events_loop.mp4` (extra sections may reuse a loop until you add clips)
- `public/assets/images/` — `hero.png`, `retail.png`, `brand.png`, `expo.png`, `performing.png`, `mall-map-abstract.svg`
- Optional `public/assets/posters/` — if you add JPG posters later, point `POSTER` entries in `mediaAssets.ts` at those files instead of PNGs

Additional clips supported (optional): `deal_moment.mp4`, `dwell_time.mp4`, `leasing.mp4`, `night_event.mp4`, `sseasonal_market.mp4`, `tourism_arrival.mp4`.

The UI **fails gracefully** — missing video falls back to posters + `MediaFallback`, and broken images never flash broken icons.

## Performance strategy

- `next/image` for stills with `sizes` tuned for split layouts
- Video loops: `preload="metadata"`, lazy activation via `IntersectionObserver` (unless `priority` hero)
- Below-the-fold module chunks loaded via `next/dynamic` for Events + Sponsorship modules
- No YouTube iframe until the film modal opens
- Reduced motion fallbacks for scroll behavior + motion-heavy paths

## Expansion architecture

Add content by extending:

- `src/data/deckContent.ts` — section narrative, hashes, CTAs, media paths
- `src/data/modules.ts` — leasing paths, sponsorship tiers, events formats, venue concepts
- `src/data/sources.ts` — traceability notes for verified facts
- `src/components/modules/*` — new modules can be composed into `src/app/page.tsx`

Future routes (`/events`, `/leasing`) can reuse the same data modules without rewriting presentation primitives.

## Known limitations

- Mailto targets use **`@moa-deck.demo`** placeholders — replace before external sends.
- **Film modal** ships without a default YouTube ID — paste `filmFeature.youtubeId` after rights clearance (`src/data/deckContent.ts`).
- Assignment demo assistant is **not** a trained model.

## What I would improve with more time

- Hook the Brief Assistant to an approved LLM API with guardrails + retrieval over official MOA PDFs.
- Add a lightweight CMS hook (e.g., JSON from a headless source) for sales ops edits without redeploys.
- Motion choreography tuned per breakpoint + richer keyboard shortcuts (`[` `]` home/end).
- Replace gradient placeholders with licensable cinematography + optimized AVIF stills.

## Source notes

Verified facts used in copy are labeled for traceability in `src/data/sources.ts`. Confirm **current** figures with Mall of America communications before executive distribution.

Hypothetical venue modules are labeled **Concept module** in UI + data.

---

### Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```
