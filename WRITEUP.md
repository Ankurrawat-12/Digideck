# Mall of America Interactive Sales Deck — Design Write-Up

## 1. Project Intent

The goal was not to ship a conventional marketing website. I built a browser-based **interactive sales deck**—something a rep can drive live on a screen-share or send as a standalone link so the prospect can explore on their own time. The audience is **prospective tenants, sponsors, and event partners**: people evaluating Mall of America as a commercial platform, not casual shoppers browsing hours.

## 2. Design Rationale

**Visual direction.** The experience opens with a **cinematic hero**—immediate scale and atmosphere before any dense copy. The palette is a **premium black base with warm gold accents** (used sparingly so it reads as refinement, not decoration). I took cues from **luxury retail presentations**, **Apple- and Tesla-style** restraint, and tools like **DigiDeck**: large editorial typography, **minimal chrome**, and **video-first sections** that carry emotion faster than static grids.

**Interaction model.** Navigation is **non-linear**: objectives and sections can be reached from multiple paths (rail, mobile sheet, in-content jumps) so the deck matches how real sales conversations branch—leasing vs. sponsorship vs. events—rather than forcing a single scroll-only funnel. Flows are **objective-based**: each journey maps to a commercial outcome.

**Why structure around outcomes.** Mall of America is sold through distinct motions—**leasing**, **sponsorship**, **events**, **activations**, and **venue expansion** stories. The deck mirrors that reality so evaluators find the proof they need without wading through irrelevant lanes.

## 3. Storytelling Strategy

The narrative is built to **establish scale and emotional impact first**, then **prove why MOA is meaningfully different** from a typical mall narrative. From there, the deck surfaces **retail, luxury, dining, attractions, events, sponsorship, and leasing** as parallel threads, each with a clear point of view. It closes with **direct business CTAs**—the kind of handoff a rep actually needs on a call.

Throughout, the story positions Mall of America as a **destination platform**: traffic, culture, and partnerships layered on top of square footage—not “just” a shopping center.

## 4. AI Usage

I used AI **pragmatically and transparently**:

- **Visual exploration** — faster iteration on layout, hierarchy, and motion ideas before locking patterns in code.
- **Concept imagery and short video loops** — where official production libraries were not available for this assignment, AI-assisted or AI-generated assets stand in as **concept visuals**, clearly in the spirit of a pitch deck, not as verified documentary photography.
- **Copy** — drafts and variants in a sales-deck register; everything was edited for tone, accuracy boundaries, and consistency with sourced facts where cited.
- **Engineering** — scaffolding for component structure, UI polish, and refactors; I kept ownership of architecture decisions and integration.
- **Documentation** — README drafting and iteration so setup and intent stay clear for reviewers.

**Important:** AI-generated or AI-assisted visuals are **supporting and illustrative**. They are not presented as authenticated MOA production assets or as factual claims beyond what is explicitly sourced.

## 5. Technical Approach

The stack is **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for restrained motion. Content lives in **modular, data-driven sections** with **reusable presentation components**, so adding a new chapter is closer to extending configuration than rewriting the page.

Media is **local and optimized** where possible, with **lazy loading** and poster-first video patterns so the first impression stays crisp without blocking the whole thread. Layout is **responsive with a desktop/tablet-first** bias—matching how this deck is actually presented.

The app is deployed on **Vercel**. The architecture is intentionally boring in the right ways: static-feeling delivery, room to grow into **deeper leasing paths**, **sponsorship calculators**, **venue booking flows**, and **rep-specific tools** without a ground-up rewrite.

## 6. Performance Considerations

**Compressed local video loops** and **poster images** keep loops readable without giant autoplay tax. **Lazy loading** and **dynamic imports** for heavier modules reduce initial work. There is **no heavy map API** and **no backend dependency** for core viewing—fewer moving parts for a review artifact and a faster path to “open link, present.” The experience avoids **iframe-heavy first paint** (e.g., deferring embedded players until needed). The result is a **clean build** and a deployment story that stays simple to maintain.

## 7. What I Would Improve With More Time

- Swap **concept visuals** for **final, approved Mall of America production assets** (still and motion).
- Layer in **real tenant and category data** where appropriate for credibility.
- Build a **deeper floor-by-floor opportunity map** for leasing and activation storytelling.
- Add **PDF export or a “leave-behind” mode** for offline forwarding.
- Integrate **CRM or contact capture** so leads don’t die in a generic mailto.
- Add **analytics on section engagement** to inform what reps should rehearse.
- Ship **personalized deck variants** (tenant vs. sponsor vs. event producer) with tailored entry points and proof points.

---

*This write-up is optional context for evaluators; the shipped README covers setup, assets, and technical notes.*
