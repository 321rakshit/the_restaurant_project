# Platofy Landing Page

An AI &amp; tech enablement company for the food business. Two products live; more coming.

**Live:** https://the-restaurant-project-olive.vercel.app/

## Stack

- **React 18** + **TypeScript** — component-based UI.
- **Vite 5** — dev server and production bundler. Build output: `dist/`.
- **Plain CSS with variables** — the whole design system (colours, easing, fonts, keyframes) lives in `src/global.css` under `:root` custom properties. Components apply semantic class names; there is no CSS-in-JS and no Tailwind. This keeps the visual contract in one file so tokens can be renamed globally.

There is no waitlist form. All conversion points are direct contact (call / WhatsApp / email) — see `src/contact.ts` for the single source of truth for those links.

## Project layout

```
index.html              Vite entry — mounts <App /> into #root; loads Bricolage Grotesque + Inter via Google Fonts
src/
  main.tsx              React root + global stylesheet import
  App.tsx               Page composition + adds body.loaded on mount for the hero load sequence
  global.css            Tokens, keyframes, section styles, reveal transitions, prefers-reduced-motion
  contact.ts            Single source of truth for phone / WhatsApp / email links
  hooks/
    useInView.ts        IntersectionObserver-based reveal trigger
  components/
    PlatofyMark.tsx     Reusable spoon-smile mark; variant: 'once' | 'loop' | 'static'
    HeroMark.tsx        Larger version of the mark for the hero signature
    Nav.tsx             Sticky, translucent, adds .scrolled after 8px scroll
    Hero.tsx
    WhatWeDo.tsx
    Building.tsx        Wraps the three product cards
    ProductCard.tsx     Generic card shell (motif + title + copy + For: line)
    QRMotif.tsx         6×6 grid, seeded from the prototype
    EqMotif.tsx         9 gradient bars with per-bar animation delays
    RoadmapCard.tsx     Dashed border, "On the roadmap" badge, concentric-rings motif
    WhoWeAre.tsx        Dark band with faint decorative mark echo bleeding off the right
    Contact.tsx
    Footer.tsx
```

## Motion system

- Hero elements fade + rise in on mount, staggered via `body.loaded` in `global.css`.
- The word "food business." underlines itself with a scaleX(0→1) transform 1s after load.
- Section content uses the `useInView` hook + a `.reveal` / `.reveal.in` class pair, animating once on first intersection.
- Product cards stagger in with `nth-child` delays on the parent `.cards.in`.
- The `<PlatofyMark>` logo takes a `variant` prop: `once` (draw and hold, used in nav), `loop` (gentle repeat — reserved for future use), `static` (final state, used in footer + the dark-band echo). The hero uses `<HeroMark>` (larger geometry, its own `bigSmile`/`bigSpoon` keyframes) which loops.
- QR grid non-anchor cells flicker on card hover; equalizer bars sway at idle and dance on hover; roadmap-card rings emerge continuously with a pulsing plus in the centre.
- `@media (prefers-reduced-motion: reduce)` disables all animations and pins the mark, underline, reveals, and card entrances to their final state.

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

Implemented from `.design-handoff/v2/platofy-final-prototype.html` — the definitive visual/motion reference. The accompanying `.design-handoff/v2/Platofy-React-Handoff.md` documents token names, keyframes, and the mark's variant behaviour. The earlier bundle in `.design-handoff/plato-ai-landing-page/` is kept for reference but is superseded by v2.
