---
name: add-product
description: Add a new product showcase to the Kaspar Works website
---

# Add Product Showcase

When adding a new product to the website:

## Steps
1. Create `components/Sections/ProductName.tsx`
2. Add to `pages/Home.tsx` between existing product sections
3. Add to `components/Sections/Apps.tsx` portfolio page
4. Add link in `components/Layout/Footer.tsx` products list
5. Optionally add to navbar if it becomes a main nav item

## Template

Follow the existing pattern from Flagship/Dialysis/CricketBolt:

### Section Structure
- **Badge** — status indicator (Live / Coming Soon) with ping dot animation
- **Title** — large `font-display` heading with product-specific gradient text color
- **Tagline** — short subtitle
- **Description** — 1-2 sentences
- **Platform badges** — Web/iOS/Android pills
- **Feature grid** — 2x2 grid of features with icons
- **CTA button** — gradient button matching product accent color
- **Visual mockup** — browser/phone mockup with screenshots or simulated UI

### Color Convention
Each product has a unique accent color:
- Inspired By The Cross: `indigo/purple`
- dialysis.live: `emerald/teal`
- CricketBolt: `lime/green`
- Pick a NEW distinct accent for the new product

### Visual Side Elements
- Glowing halo behind mockup: `animate-glow-pulse`
- Floating stats/notification cards: `animate-float`, `glass-strong`, `card-glow`
- Browser mockup: glass-strong container with dots header bar

### Animation
- Wrap content blocks in `sr` with staggered `sr-delay-N`
- Mockup container gets `sr sr-delay-2`
- Hover scale on mockups: `hover:scale-[1.02] transition-transform duration-700`

## Content Rules
- Do NOT add unverified user count claims
- Do NOT add compliance claims (HIPAA, SOC2, etc.) unless confirmed
- Keep descriptions factual and concise
