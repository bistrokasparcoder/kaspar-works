# Kaspar Works Website — Full Build Prompt

Use this prompt to recreate or continue building the Kaspar Works website from scratch.

---

## Company Overview

**Kaspar Works Inc.** is a software development company based in Newark, DE. We build purpose-driven digital platforms across **faith** and **healthcare**. Our tagline: "We build software that matters."

### Products

1. **Inspired By The Cross** — A spiritual companion iOS app with daily devotionals, scripture library, prayer community, and AI-powered faith chat. Live on the App Store.
   - App Store: https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428
   - Website: https://inspiredbythecross.com

2. **dialysis.live** — A clinical-grade renal health companion for dialysis patients. Tracks treatments, vitals, nutrition, and medications with AI insights. Available on Web, iOS, Android (coming soon).
   - Website: https://dialysis.live

### Contact
- Email: kaspar@kaspar.works
- Website: https://kaspar.works
- Address: 131 Continental Dr, Suite 305, Newark, DE 19713

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite 6
- **Styling**: Tailwind CSS (CDN, configured inline in index.html)
- **Animation**: Framer Motion (scroll-triggered, staggered reveals, page transitions)
- **3D**: Three.js + React Three Fiber + @react-three/drei
- **Icons**: lucide-react
- **Routing**: react-router-dom with AnimatePresence page transitions
- **Fonts**: Sora (display), Inter (body), Playfair Display (editorial italic accent)
- **Form**: formsubmit.co (POST to kaspar@kaspar.works)

---

## Design System

### Aesthetic Direction: Nordic Editorial + 3D

Bold, warm, editorial typography with a single sharp accent color. NOT generic AI aesthetic — no purple gradients, no glassmorphism soup, no Inter-only typography.

### Color Palette (CSS Variables)

**Dark Mode:**
- Background: `#0c0c0e` (warm charcoal, not cold blue-black)
- Surface tiers: `#111114`, `#17171b`, `#1e1e23`, `#27272e`
- Text primary: `#ece8e1` (warm off-white)
- Text secondary: `#9a9590`
- Text muted: `#5c5955`
- Accent: `#c8ff00` (electric lime)

**Light Mode:**
- Background: `#f5f2ed` (warm parchment)
- Surface tiers: `#ece8e1`, `#e2ddd5`, `#d6d0c7`, `#c5bfb5`
- Text primary: `#1a1a1e`
- Text secondary: `#4a4843`
- Text muted: `#8a8680`
- Accent: `#0038ff` (deep blue)

### Typography

- **Headings**: Sora, font-bold, tracking `[-0.04em]`, fluid sizes using `clamp()`
- **Editorial accent**: Playfair Display italic for key words ("matters", "themselves", "Cross", "Purpose", "innovation")
- **Body**: Inter, regular weight
- **Pattern**: Massive display headings (up to 6.5rem) with editorial italic accent words in the accent color

### Component Patterns

- **Section markers**: Accent dot + tracking label + divider line
- **Cards**: `bg-surface-50` with `border-[var(--glass-border)]`, rounded-[1.5rem]
- **3D Tilt Cards**: Perspective tilt on hover (8-12deg), translateZ layering (icons at 30px, titles at 20px, text at 10px), radial glare overlay + edge highlight
- **Buttons**: Primary = accent bg with dark text. Secondary = outlined with muted border
- **Dividers**: `h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent`

### Motion System

- **Page load**: Staggered heading reveal (lines slide up from overflow)
- **Scroll**: FadeUp components with IntersectionObserver, parallax via useScroll/useTransform
- **Cards**: 3D tilt on hover with spring physics
- **Cursor**: Accent-colored dot trail (8 dots with cascading lag)
- **Page transitions**: AnimatePresence with opacity + y-axis fade
- **Scroll progress**: 2px accent bar at top of viewport

---

## 3D Hero Scene (Three.js)

Split layout: text content on the left, 3D scene on the right.

### Scene Contents

1. **Central morphing wireframe** — IcosahedronGeometry(1.2, 2) with real-time vertex displacement using multi-axis sine waves. Accent-colored wireframe. Represents "the product being built."

2. **3 orbital rings** — Flat torus rings at radii 2.2, 3, 3.8. Horizontal plane. Different opacity levels. Accent colored.

3. **11 agents walking the rings** — Mix of 3 robot types and humans:
   - **Robot A (Round Bot)**: Sphere head with curved visor, cylinder body, antenna with glowing tip
   - **Robot B (Angular Bot)**: Octahedron head with eye slit, tapered cone body, blade arms
   - **Robot C (Drone Bot)**: Dome head with eye ring, disc body, hover ring, no legs
   - **Humans**: Sphere head, capsule body and limbs, neutral gray color
   - Robots are accent-colored, humans are neutral gray
   - Each agent bobs and sways while walking
   - Inner ring: 3 agents (clockwise), middle: 4 agents (counter-clockwise), outer: 4 agents (clockwise)

4. **Data particles** — 120 points distributed in space, slowly rotating

5. **Mouse-reactive camera** — Camera position lerps toward mouse pointer for parallax

### Mobile Behavior
On mobile, the 3D scene becomes an absolute background behind the text with a semi-transparent overlay for readability. On desktop (lg:), it's a side-by-side split.

---

## Page Structure

### Home (`/`)
1. **Hero** — Split layout. Left: badge, massive heading with staggered reveal, subtitle, CTA buttons. Right: 3D scene. Below: contact form
2. **About** — Bento grid with 3D tilt cards (header card, vision, approach, heart for impact)
3. **Scroll Marquee** — Two rows of oversized typography scrolling in opposite directions (scroll-driven)
4. **Products** — Two large editorial cards linking to /inspired and /dialysis. Numbered (01, 02). Screenshots with scroll parallax. 3D tilt + glare
5. **Mission** — Section heading, 3 pillar cards (Innovation, Impact, Connection), capabilities pills

### Apps (`/apps`)
Portfolio page with both products as large showcase cards with screenshots and CTA buttons

### Inspired (`/inspired`)
Full product page: hero with massive typography + phone mockup, 4 feature cards (3D tilt), quote section, download CTA

### Dialysis (`/dialysis`)
Full product page: hero with desktop + mobile mockups, 4 feature cards (3D tilt), mission quote, visit CTA

---

## Key Files

```
index.html          — Tailwind config, CSS variables, all custom styles, fonts, JSON-LD schema
App.tsx             — Router, theme toggle, scroll-to-top, scroll reveal observer, cursor trail, page loader, scroll progress
components/
  Scene3D.tsx       — Three.js scene (robots, humans, core, rings, particles, camera)
  ScrollMarquee.tsx — Scroll-driven horizontal text marquee
  ui/TiltCard.tsx   — Reusable 3D tilt card with glare + edge highlight
  motion/index.tsx  — Framer Motion primitives (FadeUp, BlurIn, Stagger, etc.)
  Layout/
    Navbar.tsx      — Floating pill navbar, theme toggle, mobile menu
    Footer.tsx      — Links, contact info, accent-colored hover
  Sections/
    Hero.tsx        — Split hero with 3D scene
    About.tsx       — Bento grid with 3D tilt cards and scroll parallax
    Products.tsx    — Editorial product cards with parallax screenshots
    Mission.tsx     — Mission pillars + capabilities
  Contact/
    NaturalForm.tsx — Multi-step form (name → interest → email → details)
pages/
  Home.tsx          — Composes all homepage sections
  AppsPage.tsx      — Portfolio page
  InspiredPage.tsx  — Inspired By The Cross detail page
  DialysisPage.tsx  — dialysis.live detail page
```

---

## Important Rules

- Dark theme is the default. Light theme toggled via class on `<html>`
- ALL colors use CSS variables — never hardcode hex values for theme-dependent colors
- Use `var(--text-primary)`, `var(--text-secondary)`, `var(--text-muted)` for text
- Use `var(--accent)` for accent color, `var(--accent-soft)` for subtle accent backgrounds
- Use `var(--glass-border)` and `var(--glass-border-strong)` for borders
- Use `bg-surface`, `bg-surface-50`, etc. for backgrounds (mapped to CSS vars)
- Do NOT add "HIPAA Compliant" claims to dialysis.live
- Do NOT add user count claims unless verified
- Do NOT use emojis in the UI
- All images have alt text and loading="lazy" (except above-fold)
- Tailwind config is inline in index.html (CDN approach)
- 3D scene is lazy-loaded and wrapped in Suspense
- JSON-LD structured data in index.html for Organization, WebSite, and SoftwareApplication schemas
