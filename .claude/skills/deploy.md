---
name: deploy
description: Build and prepare the Kaspar Works site for deployment
---

# Deploy

## Build
```bash
npm run build
```

Output goes to `dist/`. Verify with:
```bash
npm run preview
```

## Pre-deploy Checklist
1. Run `npm run build` — must complete with zero errors
2. Check the `dist/index.html` renders correctly
3. Verify all screenshots exist in `public/`:
   - `screenhot-inspired-by-the-cross1.png`
   - `inspired-web-screenshot.png`
   - `dialysis-web-screenshot.png`
   - `dialysis-mobile-screenshot.png`
4. Verify `public/robots.txt` and `public/sitemap.xml` exist
5. Check no `.env` or API keys are exposed in the build output

## Environment
- `GEMINI_API_KEY` must be set for the chat widget to work
- The key is injected via Vite's `define` in `vite.config.ts`

## Hosting
- Static site — deploy `dist/` to any static host
- SPA routing — configure host to serve `index.html` for all routes (needed for `/apps` route)
