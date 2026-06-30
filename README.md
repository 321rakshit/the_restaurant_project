# Platofy Landing Page

A new platform for Indian restaurants. Direct orders, payments, and bookings — without 25–30% aggregator commissions.

**Live:** https://the-restaurant-project-olive.vercel.app/

`index.html` is the landing page. It is a single self-contained static file (HTML + inline CSS + a few lines of vanilla JS for the waitlist form's submitted state). Open it directly in a browser or serve it with any static host.

## Deployment

Hosted on Vercel via the Git integration — every push to this repo's branches auto-deploys (production builds from the default branch, previews from feature branches like `claude/*`). Vercel detects the static `index.html` at the repo root with no build step. Custom domain (`platofy.ai`) is not yet wired up.

## Local preview

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Source design

Implemented from the Claude Design handoff in `.design-handoff/plato-ai-landing-page/project/Platofy Landing Page.dc.html`.
