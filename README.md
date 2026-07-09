# SMG Surfaces & Appliances — Master 90cm Range Cooker landing page

A premium, conversion-focused landing page for the **Bertazzoni Master 90cm Range
Cooker (Single Oven, Dual Fuel)**, built with Next.js (App Router), React, Tailwind
CSS, shadcn/ui-style components and Framer Motion.

The design uses the **pure black-and-white brand palette (#FFFFFF / #000000)** with an
achromatic grey ramp for hairlines and muted text — consistent with the main SMG
Surfaces site, but more editorial and interactive.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18+.

## Structure (built to port into Elementor later)

```
app/
  layout.tsx            Fonts (Playfair Display + Inter), metadata
  page.tsx              Section composition, order, providers
  globals.css           Tokens, material swatches, cursor, reduced-motion
lib/
  product.ts            SINGLE SOURCE OF TRUTH — copy, price, specs, FAQ, etc.
  utils.ts              cn() + formatGBP()
components/
  ui/                   Button, Badge, Card, Accordion, Tabs (shadcn-style)
  shared/               motion toolkit, custom cursor, scroll progress,
                        SVG range cooker, add-to-cart button, icons
  providers/            SelectionProvider (finish + services shared state)
  sections/             One file per page section (trust bar → footer)
```

Every section is a self-contained component — copy lives in `lib/product.ts`, so a
future WordPress/Elementor rebuild can map each `sections/*` file to a widget and pull
text from the same data shape.

## Interaction / motion system

All motion is centralised in `components/shared/motion.tsx` and **respects
`prefers-reduced-motion`** (plus a global CSS fallback that disables animation):

- `Reveal`, `StaggerGroup/Item` — smooth scroll reveals
- `Spotlight` — cursor-follow glow + hover-lift on cards
- `Magnetic` — magnetic buttons (desktop / fine-pointer only)
- `ParallaxY` — scroll parallax
- `CountUp` — animated spec/stat numbers
- `CustomCursor` — blend-mode ring cursor (desktop only)
- `ScrollProgress` — top reading-progress bar
- Trust bar marquee, animated finish shimmer, layout-animated cooking-mode selector

Magnetic effects and the custom cursor auto-disable on touch devices, so mobile stays
fast and tap-friendly.

## ⚠️ Before publishing — replace these placeholders

**Images / visuals**
- [ ] **Product photography** — the hero, lifestyle, finish-summary and final-CTA
      visuals use an SVG placeholder cooker (`components/shared/range-cooker.tsx`).
      Replace with real photos, ideally **one image per finish** (Matt Black, Matt
      White, Stainless Steel) so the finish selector can swap the real product shot.
- [ ] **Lifestyle / in-kitchen photo** — optional real kitchen shot for the
      "centrepiece of the kitchen" section (`sections/lifestyle.tsx`).
- [ ] **Matching range hood & backsplash** imagery, if you want to show them.
- [ ] **Favicon / OG share image** (currently none set beyond metadata text).

**Contact & policy details** (search the codebase for `Placeholder` / `[ ... ]`)
- [ ] Phone number — `lib/product.ts` → `phoneDisplay` / `phoneHref`
      (currently `0161 000 0000`).
- [ ] Showroom address & contact email — `sections/site-footer.tsx`.
- [ ] Delivery lead times & coverage — `sections/delivery-support.tsx`.
- [ ] Warranty / returns terms — `sections/delivery-support.tsx`.
- [ ] Company registration / VAT details — `sections/site-footer.tsx`.

**Commerce wiring**
- [ ] **Add to Cart** — `components/shared/add-to-cart-button.tsx` currently shows a
      local "Added to basket" confirmation. Wire its `onClick` to your real
      cart/checkout (or the WooCommerce add-to-cart action).
- [ ] Confirm price, RRP and optional-service prices in `lib/product.ts`.

**Copy check**
- [ ] Review all copy for accuracy — no fake reviews, stock counts or guarantees are
      included by design; keep it that way.
