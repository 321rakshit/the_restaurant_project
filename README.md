# Platofy Landing Page

An AI &amp; tech enablement company for the food business. Two products in development; more on the way.

**Live:** https://the-restaurant-project-olive.vercel.app/

## Stack

- **React 18** + **TypeScript** — component-based UI, type-safe props and state.
- **Vite 5** — dev server and production bundler. Build output: `dist/`.
- **Plain CSS** — global resets, animations, and `:hover` transitions live in `src/global.css`; section-level styling lives in component inline `style={{}}` objects so each component owns its own visual contract. Design tokens (colors, layout widths) are centralized in `src/tokens.ts`.

There is no waitlist form. All conversion points are direct contact (call / WhatsApp / email) — see `src/contact.ts` for the single source of truth for those links.

## Project layout

```
index.html              Vite entry — minimal shell, mounts <App /> into #root
src/
  main.tsx              React root + global stylesheet import
  App.tsx               Page composition
  global.css            Resets, font defaults, grid utilities, fadeUp animation
  tokens.ts             Design tokens (colors, layout widths)
  contact.ts            Single source of truth for phone / WhatsApp / email links
  components/
    icons.tsx           Shared SVG icon components
    Nav.tsx
    Hero.tsx
    WhatWeDo.tsx
    WhatWereBuilding.tsx
    WhoWeAre.tsx
    LetsTalk.tsx
    Footer.tsx
```

## Local development

```
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + produce dist/
npm run preview  # serve dist/ locally to sanity-check the build
```

## Deployment

Hosted on Vercel via the Git integration — every push auto-deploys (production from the default branch, previews from feature branches). Vercel auto-detects the Vite framework; build command `npm run build`, output directory `dist`. Custom domain (`platofy.ai`) is not yet wired up.

## Source design

Implemented from the Claude Design handoff in `.design-handoff/plato-ai-landing-page/project/Platofy Landing Page.dc.html`. The handoff bundle is kept in-tree as the visual source of truth — any redesign should round-trip through it.
