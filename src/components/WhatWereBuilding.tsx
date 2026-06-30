import { colors, layout } from '../tokens';

type Product = {
  title: string;
  description: string;
  forLine: string;
};

const products: Product[] = [
  {
    title: 'Smart QR Menu & Ordering',
    description:
      "Guests scan a QR code, browse your menu on their phone, order, and pay — directly. No app to download, no commission to aggregators. Our AI builds your entire digital menu from a photo of your existing one in minutes, and suggests smart add-ons that lift your order value.",
    forLine: 'Cafes, restaurants, food outlets, hotel in-room dining, resort outlets.',
  },
  {
    title: 'Guest-Controlled Music',
    description:
      "Let your guests set the vibe. They queue songs to your speakers from their phone, within rules you control. It turns an ordinary visit into something people remember — and nobody else in India is doing it yet.",
    forLine: 'Cafes, lounges, bars, resorts.',
  },
];

export function WhatWereBuilding() {
  return (
    <section style={{ background: colors.bgCream, padding: '96px 32px' }}>
      <div style={{ maxWidth: layout.maxWidthFeatures, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px,3.5vw,40px)',
            fontWeight: 800,
            letterSpacing: '-.025em',
            color: colors.textPrimary,
            marginBottom: 8,
          }}
        >
          What we're building.
        </h2>
        <p style={{ fontSize: 14, color: colors.textFaint, marginBottom: 36 }}>
          Two products in development. More coming.
        </p>

        <div className="g-2cards">
          {products.map((p) => (
            <article
              key={p.title}
              style={{
                background: colors.bgWhite,
                border: `1px solid ${colors.border}`,
                borderRadius: 14,
                padding: '28px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: '-.015em',
                  color: colors.textPrimary,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: colors.textSecondary }}>{p.description}</p>
              <p
                style={{
                  marginTop: 'auto',
                  paddingTop: 6,
                  fontSize: 13.5,
                  fontStyle: 'italic',
                  color: colors.textFaint,
                }}
              >
                For: {p.forLine}
              </p>
            </article>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: colors.textFaint,
            marginTop: 56,
            paddingTop: 36,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          These are the first two. We're building more AI tools for the food business — from guest experience to
          operations — one useful thing at a time.
        </p>
      </div>
    </section>
  );
}
