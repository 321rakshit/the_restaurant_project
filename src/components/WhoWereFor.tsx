import { colors, layout } from '../tokens';

type Audience = { label: string; body: string };

const audiences: Audience[] = [
  {
    label: 'Cafes and restaurants.',
    body: 'Independent operators and small chains who want direct orders, control over guest data, and a way off paper menus — without a multi-year POS contract.',
  },
  {
    label: 'Hotels.',
    body: 'Properties that want in-room dining guests will actually use — scan, order, charge to the room or pay by UPI. Works alongside your PMS.',
  },
  {
    label: 'Resorts and multi-outlet properties.',
    body: 'One platform across every F&B outlet — restaurant, pool bar, banquet.',
  },
];

export function WhoWereFor() {
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
            marginBottom: 48,
          }}
        >
          Who we're for.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {audiences.map((a) => (
            <p key={a.label} style={{ fontSize: 17, lineHeight: 1.75, color: colors.textSecondary }}>
              <span style={{ fontWeight: 700, color: colors.textPrimary }}>{a.label}</span> {a.body}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
