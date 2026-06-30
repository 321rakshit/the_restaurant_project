import type { ReactNode } from 'react';
import { colors, layout } from '../tokens';
import { GridIcon, MenuIcon, MusicIcon } from './icons';

type Feature = {
  icon: ReactNode;
  title: string;
  body: ReactNode;
};

const features: Feature[] = [
  {
    icon: <GridIcon />,
    title: 'Direct ordering',
    body: (
      <>
        QR code on the table or in the hotel room. Guest scans, sees your menu, orders, pays via UPI. Order goes
        straight to your kitchen. No app downloads, no aggregator cuts. Works for dine-in, in-room dining, and resort
        multi-outlet ordering.
      </>
    ),
  },
  {
    icon: <MenuIcon />,
    title: 'AI menu setup',
    body: (
      <>
        Photograph your existing paper menu. Our AI extracts the dishes, prices, categories, and veg/non-veg markers —
        and builds your digital menu in minutes instead of days.
      </>
    ),
  },
  {
    icon: <MusicIcon />,
    title: 'A music feature unlike anything in India',
    body: (
      <>
        We're working on letting guests queue songs to your speaker system from their phone. Owner sets the catalog
        and rules. Optional, built for cafes and lounges where ambience matters.{' '}
        <em style={{ color: colors.textFaint }}>Still in design; licensing in progress.</em>
      </>
    ),
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
        <p style={{ fontSize: 14, color: colors.textFaint, marginBottom: 52 }}>
          V1, in development. Shipping to design partners first.
        </p>

        <div className="g-3">
          {features.map((f) => (
            <article key={f.title}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  border: `1.5px solid ${colors.accentRing}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: '-.01em',
                  color: colors.textPrimary,
                  marginBottom: 10,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.72, color: colors.textMuted }}>{f.body}</p>
            </article>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: colors.textFaint,
            marginTop: 60,
            paddingTop: 36,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          We're not trying to replace Petpooja or Restroworks. Platofy sits on top of whatever billing you use today.
        </p>
      </div>
    </section>
  );
}
