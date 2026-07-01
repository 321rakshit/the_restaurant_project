# Platofy — Final Aesthetic & Motion Handoff (React)

## What this is
A visual + motion upgrade for the existing Platofy landing page (React / Next.js + Tailwind). The **content and section order are already correct and must not change** — this pass only changes how it looks and moves. Two files are provided:

1. **`platofy-final-prototype.html`** — the definitive, working reference. Every colour, font, size, SVG, animation and timing in it is the spec. **When in doubt, match the prototype exactly.**
2. This document — the React implementation guide + must-keep details.

The prototype is plain HTML/CSS/JS; your job is to reproduce its exact look and behaviour in the React codebase as clean, reusable components.

---

## Hard rules (do not break)
- No stock photos, no fake app screenshots/mockups, no invented stats, no pricing tiers, no fake customer logos/testimonials, no waitlist form.
- Keep all existing copy and section order: **Nav → Hero → What we do → What we're building (3 cards) → Who we are (dark) → Let's talk → Footer.**
- Contact links exactly: phone `tel:+919354637615`, WhatsApp `https://wa.me/919354637615`, email `mailto:hi@platofy.ai`.
- Mobile-first. Respect `prefers-reduced-motion`. Keep visible keyboard focus states.

---

## Stack & approach
- Keep the existing **Next.js + Tailwind** setup.
- Implement the animations as **CSS keyframes** (they animate SVG `stroke-dashoffset` and transforms — pure CSS is the most reliable approach and matches the prototype). Put keyframes/utility classes in a global stylesheet (e.g. `app/globals.css`). framer-motion is optional and only worth it for the scroll reveals; a tiny `useInView` hook (below) avoids the dependency.
- Build the **logo as one reusable component** with a `variant` prop. Build each **card motif** as a small component.
- Map all design tokens into `tailwind.config` + CSS variables so nothing is hard-coded ad hoc.

---

## 1. Fonts
Use `next/font/google`:
- **Bricolage Grotesque** (weights 500/600/700) → display face: logo wordmark, all headings (h1/h2), card titles. CSS var `--font-display`.
- **Inter** (weights 400/500/600) → body/UI. CSS var `--font-body`.

Map into Tailwind `theme.extend.fontFamily`: `display: ['var(--font-display)', 'sans-serif']`, `sans: ['var(--font-body)', 'system-ui', 'sans-serif']`.

Heading treatment: `letter-spacing:-0.02em`, `line-height:1.02–1.05`. Hero h1 `clamp(2.6rem,6.2vw,4.6rem)`. Section h2 `clamp(2rem,4.4vw,3.1rem)`. Body `line-height:1.6`.

## 2. Colour tokens
Define as CSS variables on `:root` (in globals.css) **and** map into `tailwind.config` `theme.extend.colors` so you can use `bg-cream`, `text-ink`, `text-terra`, etc.
```
--cream:#FAF7F2    cream       page background
--surface:#FFFEFB  surface     cards
--clay:#F1E8D9     clay        tinted section bg (products)
--sand:#E9DDC9     sand        motif fills / dividers
--line:#E4D8C4     line        borders
--line-soft:#EDE3D3 line-soft
--ink:#17140F      ink         text + dark band bg
--ink-soft:#615A4E ink-soft    secondary text
--terra:#C2410C    terra       primary accent (CTAs, logo, highlights)
--terra-2:#E2712F  terra-2     lighter accent (gradients, on-dark)
--terra-deep:#8F2D08 terra-deep
--sage:#4D7C5F     sage        the "live" status dot only
```
Also define the shared easing: `--ease: cubic-bezier(.22,1,.36,1)` and use it everywhere.

**Section background rhythm (must keep):** cream (hero) → cream (what we do) → **clay** (products) → **ink/dark** (who we are) → cream (contact) → cream (footer).

---

## 3. The logo — `<PlatofyMark>` component
A **spoon-smile plate**: outline circle (plate rim), an upward smile arc, and a filled dot at the left end of the smile (a spoon). The rim is **always static and fully visible**; only the **smile draws** (left→right) and then the **spoon pops**.

### JSX (base SVG — note `pathLength`, `className`, camelCase attrs)
```jsx
function PlatofyMark({ variant = 'static', size = 28, className = '' }) {
  // variant: 'once' (draw once on mount) | 'loop' (gentle repeat) | 'static'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
         className={`plate plate--${variant} ${className}`} aria-hidden="true">
      <circle className="rim"   cx="32" cy="32" r="27" />
      <path   className="smile" pathLength="1" d="M20 35 Q32 47 44 35" />
      <circle className="spoon" cx="20" cy="35" r="4.4" />
    </svg>
  );
}
```
Give the logo an accessible name where it acts as a link/home (e.g. wrap with `aria-label="Platofy"`).

### CSS (globals.css) — copy these keyframes & variant rules
```css
.plate .rim   { fill:none; stroke:var(--terra); stroke-width:2.4; }
.plate .smile { fill:none; stroke:var(--terra); stroke-width:2.4; stroke-linecap:round;
                stroke-dasharray:1; stroke-dashoffset:1; }
.plate .spoon { fill:var(--terra); transform-box:fill-box; transform-origin:center;
                transform:scale(0); opacity:0; }

/* draw once on mount, then hold */
.plate--once .smile { animation:smileDraw 0.85s var(--ease) 0.15s forwards; }
.plate--once .spoon { animation:spoonPop 0.45s var(--ease) 0.9s forwards; }
@keyframes smileDraw { to { stroke-dashoffset:0; } }
@keyframes spoonPop  { to { transform:scale(1); opacity:1; } }

/* gentle continuous loop (hero mark) */
.plate--loop .smile { animation:smileCycle 4.5s var(--ease) infinite; }
.plate--loop .spoon { animation:spoonCycle 4.5s var(--ease) infinite; }
@keyframes smileCycle {
  0%{stroke-dashoffset:1;opacity:1} 24%{stroke-dashoffset:0}
  84%{stroke-dashoffset:0;opacity:1} 93%{opacity:0} 100%{stroke-dashoffset:1;opacity:0}
}
@keyframes spoonCycle {
  0%{transform:scale(0);opacity:0} 30%{transform:scale(0);opacity:0}
  39%{transform:scale(1.22);opacity:1} 47%{transform:scale(1)}
  84%{opacity:1} 93%{opacity:0} 100%{opacity:0}
}

/* static: always show final drawn state */
.plate--static .smile { stroke-dashoffset:0; }
.plate--static .spoon { transform:none; opacity:1; }
```

### Where each variant goes (FINAL decision)
- **Nav logo → `variant="once"`** (draws once on load, then holds).
- **Hero signature → `variant="loop"`** (the one gently-living element on the page).
- **Footer logo → `variant="static"`.**
- **Dark-band decorative echo → `variant="static"`**, rendered large and faint (opacity ~0.12), bleeding off the right edge, recoloured to `--terra-2` on the dark bg.

### Small-size / favicon
Thicken strokes as size drops so it stays legible: stroke-width ~4.4 at 48px, ~5–6 at 24px (scale the numbers, or ship a dedicated favicon SVG with `stroke-width` ~4.5 on the 64 viewBox). Generate a favicon from the mark.

## 4. Hero signature — `<HeroMark>`
The same spoon-smile scaled large, as the hero's focal visual on the right. Rim static; **smile loops gently** (`variant="loop"`), spoon pops within the loop. Use the `.big-*` sizing from the prototype (viewBox `0 0 200 200`, r=70 rim, smile `d="M66 104 Q100 150 134 104"`, spoon r=12, stroke-width 3.4). On mobile it stacks **above** the copy (`order:-1`) at `max-width:260px`. Mark it `aria-hidden`.

---

## 5. Motion system
1. **Hero load sequence:** eyebrow → h1 → lead → CTAs → caption fade-and-rise in, staggered (~0.12s steps). In React, trigger by adding a `loaded` state on mount (`useEffect(()=>setLoaded(true),[])`) and gate the transitions on it, OR run them as CSS keyframes on mount. Match the prototype's easing/delays.
2. **Headline underline:** the words "food business." get a terracotta underline that wipes in (scaleX 0→1) after the headline settles.
3. **Scroll reveals:** each section fades + rises in once when it enters view. Use a small hook:
```jsx
function useInView(threshold=0.14){
  const ref=useRef(null); const [inView,setInView]=useState(false);
  useEffect(()=>{ const el=ref.current; if(!el) return;
    const io=new IntersectionObserver(([e])=>{ if(e.isIntersecting){setInView(true); io.disconnect();} },{threshold});
    io.observe(el); return ()=>io.disconnect();
  },[threshold]);
  return [ref,inView];
}
```
Apply a `.reveal` class and add `.in` when `inView`. Product cards **stagger** in (nth-child delays as in prototype).
4. **Nav:** sticky, translucent, `backdrop-filter:blur(12px)`; bottom border fades in after scrollY>8 (track with a scroll listener → `scrolled` state/class).
5. **Buttons:** hover lifts `translateY(-2px)` + terracotta shadow (primary) or border/text turn terracotta (ghost).
6. **"Live" dot:** sage dot in the hero caption pulses (`pulse-live` keyframes).
7. **Reduced motion:** copy the prototype's `@media (prefers-reduced-motion:reduce)` block wholesale — it disables all animations and forces the logo/underline/reveals to their final state (smile fully drawn, spoon shown). Verify the mark still looks complete.

---

## 6. Sections (match prototype markup/spacing)
- **Nav:** left = `<PlatofyMark variant="once"/>` + "platofy" wordmark (link home); right = "Talk to us" button (terracotta) linking to `#contact`.
- **Hero:** two-column grid (`1.15fr .85fr`). Left = eyebrow, h1 (with underlined "food business."), lead, three CTA links (**Call us** `tel:`, **WhatsApp us** `wa.me`, **Email us** `mailto:` — Call is solid terracotta, other two ghost), caption with pulsing live dot. Right = `<HeroMark/>`.
- **What we do:** kicker + h2 + one prose paragraph (`max-width:60ch`), on cream.
- **What we're building (clay bg):** kicker + h2, then **three cards** (below).
- **Who we are (dark band):** full-bleed `--ink`, cream text, terra-2 kicker; faint large static logo echo bleeding off the right.
- **Let's talk:** kicker + h2 + short paragraph, then a bordered **contact box** with two rows (phone/WhatsApp, email), each a small terracotta line-icon linking to the exact targets.
- **Footer:** static logo + "platofy", "Building in India 🇮🇳 · © 2026", "+91 93546 37615 · hi@platofy.ai", top border `--line`.

## 7. Product cards (3) + motifs
Cards: `--surface` bg, 20px radius, 1px `--line` border. Hover: lift `translateY(-6px)` + terracotta border + soft shadow. Stagger-reveal on scroll. Each has a 92px-tall motif on top.

- **Card 1 — Smart QR Menu & Ordering → `<QRMotif/>`:** a 6×6 grid. Corner "anchor" squares dark (`--ink`), a seeded set of terracotta "on" squares, rest `--sand`; on card-hover the non-anchor squares flicker. Generate cells in React with `useMemo` using the exact seed sets from the prototype (`on = {2,5,11,14,17,20,23,26,29,8,12,33}`, `anchors = {0,1,6,7,4,5,10,11,24,25,30,31}`).
- **Card 2 — Guest-Controlled Music → `<EqMotif/>`:** 9 terracotta-gradient bars with fixed varied heights forming a waveform, a gentle idle sway, and a full dance on hover (`eqidle`/`eqbar` keyframes + per-bar delays as in prototype). Always visible at rest.
- **Card 3 — "And more, soon." (roadmap) → `<RoadmapCard/>`:** visually distinct — **dashed terracotta border**, clay→surface gradient bg, an "On the roadmap" pill badge, and a motif of concentric rings emerging outward with a pulsing terracotta "+" in the centre. Copy exactly as in prototype; its italic `.for` line doubles as a soft CTA ("Want to shape what's next? Talk to us.").

Card copy (verbatim):
- **Smart QR Menu & Ordering** — "Guests scan a QR code, browse your menu, order, and pay — directly. No app, no aggregator commission. Our AI builds your whole digital menu from a photo of your existing one in minutes, and suggests smart add-ons that lift order value." · *For: Cafes, restaurants, food outlets, hotel in-room dining, resort outlets.*
- **Guest-Controlled Music** — "Let your guests set the vibe. They queue songs to your speakers from their phone, within rules you control. It turns an ordinary visit into something people remember — and nobody else in India is doing it yet." · *For: Cafes, lounges, bars, resorts.*
- **And more, soon.** — "We're building the next set of AI tools for food businesses — from kitchen and operations to guest experience, feedback, and analytics. One useful product at a time." · *For: Built with our early partners. Want to shape what's next? Talk to us.*

---

## 8. Suggested component structure
```
components/
  PlatofyMark.tsx     // logo, variant: 'once'|'loop'|'static', size
  Nav.tsx
  Hero.tsx            // + HeroMark (PlatofyMark loop, large)
  WhatWeDo.tsx
  Building.tsx        // section wrapper (clay bg) + cards
    QRMotif.tsx
    EqMotif.tsx
    ProductCard.tsx
    RoadmapCard.tsx
  WhoWeAre.tsx        // dark band + faint static mark echo
  Contact.tsx
  Footer.tsx
  hooks/useInView.ts
app/globals.css       // tokens, keyframes, reveal + reduced-motion rules
tailwind.config.ts    // colors + fontFamily mapping
```

## 9. Responsive
- ≤980px: product cards → single column.
- ≤860px: hero → single column; HeroMark moves above copy (`order:-1`, `max-width:260px`); h1 shrinks (`clamp(2.3rem,9vw,3.2rem)`).
- Verify at 375px. Every hover-only effect must have a sensible resting state (the EQ sways at idle; the QR is legible without hover).

## 10. Accessibility / quality floor
- `prefers-reduced-motion` fully respected (final states shown, no animation).
- Visible `:focus-visible` outline in terracotta (`outline:2px solid var(--terra); outline-offset:3px`).
- Decorative SVGs (`HeroMark`, dark-band echo, card motifs) `aria-hidden="true"`.
- Logo link carries an accessible name ("Platofy").
- Lighthouse: keep 90+; the animations are CSS-only and cheap.

## 11. Deliverable
Reproduce `platofy-final-prototype.html` exactly in the React app: tokens in Tailwind/config, logo + motifs as reusable components, motion via the CSS keyframes above + the `useInView` hook. Do not add libraries beyond what's needed. Redeploy and share the preview URL.
