import { colors, layout } from '../tokens';

export function WhatWeDo() {
  return (
    <section
      style={{
        background: colors.bgWhite,
        padding: '96px 32px',
        borderTop: `1px solid ${colors.borderSoft}`,
      }}
    >
      <div style={{ maxWidth: layout.maxWidthContent, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px,3.5vw,40px)',
            fontWeight: 800,
            letterSpacing: '-.025em',
            color: colors.textPrimary,
            marginBottom: 22,
          }}
        >
          What we do.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.75, color: colors.textSecondary }}>
          AI is changing what's possible for businesses everywhere — but almost none of it has reached the food
          industry that needs it most. We understand AI, technology, and product. We figure out where AI can genuinely
          help a food business, then build it into a simple product that just works. No jargon, no bloat, no long
          contracts.
        </p>
      </div>
    </section>
  );
}
