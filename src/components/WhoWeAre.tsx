import { colors, layout } from '../tokens';

export function WhoWeAre() {
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
            marginBottom: 28,
          }}
        >
          Who we are.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: colors.textSecondary }}>
            We're a small team that understands three things well: AI, technology, and product. We're not a big
            software company, and we don't sell bloated systems. We pay close attention to where AI is genuinely
            useful, and we build practical products that fit into how food businesses already work.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: colors.textSecondary }}>
            Think of us as the AI and tech team that restaurants, cafes, and food businesses don't have in-house — but
            should. We do the hard part of understanding the technology, so you get tools that simply make your
            business better.
          </p>
        </div>
      </div>
    </section>
  );
}
