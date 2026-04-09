# Kaspar Works Inc. — Website

## Project Overview
Portfolio website for Kaspar Works Inc., a product studio building purpose-driven platforms across faith, healthcare, and wellness. Showcases Inspired By The Cross, dialysis.live, and Ullam.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build**: Vite 6
- **Styling**: Tailwind CSS (CDN, configured inline in `index.html`)
- **Animation**: Framer Motion (spring physics, scroll-triggered, staggered reveals, page transitions)
- **Icons**: lucide-react
- **Routing**: react-router-dom (BrowserRouter) with AnimatePresence page transitions
- **AI Chat**: Google Gemini API (`@google/genai`)
- **Form**: formsubmit.co (POST to kaspar@kaspar.works)
- **Fonts**: Sora (display/headings) + Inter (body) via Google Fonts

## Design System
- **Theme**: Dark mode — base `#050508`, glassmorphism cards, indigo/blue/purple accent palette
- **Typography**: `font-display` (Sora) for headings, `font-sans` (Inter) for body
- **Border radius**: 1.25rem–2rem (`rounded-[1.25rem]` to `rounded-[2rem]`)
- **Glass utilities**: `.glass` (subtle) and `.glass-strong` (prominent) — defined in `index.html <style>`
- **Card hover**: `.card-glow` CSS class adds gradient border on hover
- **Buttons**: `.btn-sweep` CSS class adds light sweep on hover
- **Cursor glow**: Smooth lerp-based mouse follower in `App.tsx`

## Motion System (`components/motion/index.tsx`)
Reusable Framer Motion primitives — always prefer these over raw CSS animations:
- `<FadeUp>` — scroll-triggered fade + slide up (IntersectionObserver)
- `<ScaleIn>` — scroll-triggered scale + fade reveal
- `<BlurIn>` — scroll-triggered blur + fade entrance
- `<Stagger>` + `<StaggerItem>` — staggered children animations
- `<GlowCard>` — spring-physics hover lift + scale on cards
- `<MagneticButton>` — spring-physics hover + tap micro-interactions
- `<FloatingElement>` — continuous float/bob animation
- `<Parallax>` — scroll-driven parallax via `useScroll`/`useTransform`
- `<TextReveal>` — word-by-word text reveal animation

## Architecture
```
index.html          # Tailwind config, global CSS, fonts, design tokens
index.tsx           # React entry point
App.tsx             # Router, AnimatePresence page transitions, cursor glow
pages/
  Home.tsx          # Composes all homepage sections
  AppsPage.tsx      # Full apps portfolio page
components/
  motion/
    index.tsx       # Reusable Framer Motion primitives (FadeUp, Stagger, GlowCard, etc.)
  Layout/
    Navbar.tsx      # Sticky dark glass navbar, spring-animated sliding pill
    Footer.tsx      # Glass dark footer with staggered reveals
  Sections/
    Hero.tsx        # Full-screen hero with parallax blobs, floating previews, embedded form
    About.tsx       # Bento grid about section with staggered GlowCards
    Flagship.tsx    # Inspired By The Cross showcase
    Dialysis.tsx    # dialysis.live showcase
    Mission.tsx     # Mission pillars + capabilities grid
    Apps.tsx        # Full portfolio page content
  Contact/
    NaturalForm.tsx # Multi-step contact form (4 steps)
    ContactModal.tsx# AnimatePresence modal with spring physics
  Chat/
    ChatWidget.tsx  # Floating AI chat widget (Gemini)
  ui/
    Button.tsx      # motion.button with spring hover/tap
services/
  geminiService.ts  # Gemini AI integration
types.ts            # Shared TypeScript interfaces
```

## Commands
- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build

## Key Conventions
- All styling via Tailwind utility classes — no separate CSS files (except global styles in `index.html`)
- Dark theme everywhere — never use light backgrounds (`bg-white`, `bg-slate-50`, etc.)
- Use `glass` or `glass-strong` classes for card backgrounds, not solid colors
- Use motion primitives from `components/motion/` for all scroll/hover animations
- Use `font-display` for headings (`h1`, `h2`, section titles)
- Use `card-glow` CSS class on interactive cards for hover border glow
- Use `<GlowCard>` for spring-physics hover lift on cards
- Use `<MagneticButton>` or `motion.button` with `whileHover`/`whileTap` for buttons
- Color accents per product: indigo/purple (Inspired By The Cross), emerald/teal (dialysis.live), lavender/rose (Ullam)
- Icons from `lucide-react` only
- CSS keyframe animations (in Tailwind config) for background effects (blob, breathe, glow-pulse)
- Framer Motion for all user-facing/interactive animations
- Environment variable: `GEMINI_API_KEY` for chat widget

## Important Notes
- Tailwind config is inline in `index.html` `<script>` tag (CDN approach), not in `tailwind.config.js`
- Import map in `index.html` maps React/dependencies to CDN for dev; Vite bundles for production
- Screenshots in `/public/`: `screenhot-inspired-by-the-cross1.png`, `inspired-web-screenshot.png`, `dialysis-web-screenshot.png`, `dialysis-mobile-screenshot.png`
- Do NOT add "HIPAA Compliant" claims to dialysis.live sections
- Do NOT add user count claims (e.g., "Joined by X users") unless verified