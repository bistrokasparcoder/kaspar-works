---
name: add-section
description: Add a new section to the Kaspar Works website
---

# Add Section

When adding a new section to the website:

## Design Rules
1. **Dark theme only** — use `bg-surface`, `bg-surface-50`, or gradient from surface colors. Never light backgrounds.
2. **Glassmorphism cards** — use `glass` or `glass-strong` classes for card containers.
3. **Card glow** — add `card-glow` class to interactive cards for hover border effect.
4. **Typography** — headings use `font-display` (Sora), body uses `font-sans` (Inter).
5. **Border radius** — use `rounded-[1.25rem]` to `rounded-[2rem]` for cards and containers.
6. **Ambient depth** — add subtle gradient orbs (`bg-indigo-600/[0.04] blur-[100px]`) and `bg-grid-dark` pattern.
7. **Noise texture** — already applied globally, no need to add per-section.

## Animation Rules
1. **Scroll reveal** — wrap content blocks in elements with `sr` class. Stagger children with `sr-delay-1` through `sr-delay-8`.
2. **Hover effects** — cards should `hover:scale-[1.02]` or `hover:-translate-y-1` with `transition-all duration-300`.
3. **Floating elements** — use `animate-float` or `animate-float-delayed` for decorative UI previews.
4. **Glowing halos** — use `animate-glow-pulse` on background blobs behind visual elements.

## Structure
1. Create component in `components/Sections/YourSection.tsx`
2. Add to `pages/Home.tsx` in the desired position
3. Give the section an `id` attribute for navbar scroll targeting
4. Use the standard pattern:

```tsx
<section id="your-section" className="py-32 relative overflow-hidden">
  {/* Background layers */}
  <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />
  <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <div className="text-center max-w-3xl mx-auto mb-20 sr">
      <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-4">Label</h2>
      <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Title</p>
    </div>
    {/* Content */}
  </div>
</section>
```
