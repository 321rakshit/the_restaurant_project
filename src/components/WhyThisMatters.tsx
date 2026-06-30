import { colors, layout } from '../tokens';

type Reason = { num: string; text: string };

const reasons: Reason[] = [
  { num: '01', text: 'Aggregator commissions are 18–28% base, often 25–35% effective after platform fees and ads.' },
  { num: '02', text: 'Zomato and Swiggy raised their per-order platform fee to ₹17.58 in March 2026 — a 19.2% hike.' },
  {
    num: '03',
    text: 'Restaurants below ₹7.5 cr turnover get no GST input tax credit on the 5% they collect — a permanent margin drag.',
  },
  { num: '04', text: "Aggregators control customer identity. Restaurants can't market to their own guests directly." },
];

export function WhyThisMatters() {
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
            marginBottom: 18,
          }}
        >
          Why this matters now.
        </h2>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: colors.textSecondary,
            marginBottom: 36,
          }}
        >
          Indian restaurants operate on 5–12% net margins. The economics of running one are quietly getting worse.
        </p>

        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            borderTop: `1px solid ${colors.border}`,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {reasons.map((r) => (
            <li
              key={r.num}
              style={{
                padding: '20px 0',
                borderBottom: `1px solid ${colors.border}`,
                display: 'flex',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: colors.accent,
                  flexShrink: 0,
                  width: 20,
                }}
              >
                {r.num}
              </span>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: colors.textPrimary }}>{r.text}</p>
            </li>
          ))}
        </ul>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: colors.textSecondary,
            marginTop: 32,
          }}
        >
          We think the answer isn't another billing system. It's a new layer that sits on top of whatever a restaurant
          uses today and gives them back direct customer relationships, margin, and modern tools.
        </p>
      </div>
    </section>
  );
}
