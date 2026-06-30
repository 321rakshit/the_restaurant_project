import { colors, layout } from '../tokens';

export function Hero() {
  return (
    <section style={{ background: colors.bgCream, padding: '96px 32px 88px' }}>
      <div style={{ maxWidth: layout.maxWidthContent, margin: '0 auto', textAlign: 'left' }}>
        <div
          className="anim1"
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: colors.textMuted,
            marginBottom: 24,
          }}
        >
          A new platform for Indian restaurants. In development.
        </div>

        <h1
          className="anim2"
          style={{
            fontSize: 'clamp(34px,5vw,54px)',
            fontWeight: 800,
            letterSpacing: '-.025em',
            lineHeight: 1.15,
            color: colors.textPrimary,
            marginBottom: 26,
          }}
        >
          We're building software that lets restaurants take direct orders, payments, and bookings from their guests'
          phones — without paying 25–30% to aggregators.
        </h1>

        <p
          className="anim3"
          style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: colors.textSecondary,
            maxWidth: 640,
            marginBottom: 36,
          }}
        >
          Platofy is for cafe, restaurant, hotel, and resort operators in India who are tired of Zomato and Swiggy
          commissions, manual paper menus, and digital tools that weren't built for how India actually dines. We're
          starting with the basics — QR ordering, UPI payments, GST billing — and layering AI on top to do the things
          existing software doesn't: instant menu digitization from a photo, smart upsells, and a few things you
          haven't seen before.
        </p>

        <div
          className="anim4"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 20,
            marginBottom: 22,
          }}
        >
          <a
            href="#waitlist"
            className="btn-primary"
            style={{
              background: colors.accent,
              color: colors.bgWhite,
              fontSize: 15,
              fontWeight: 700,
              padding: '14px 26px',
              borderRadius: 10,
            }}
          >
            Join the waitlist
          </a>
          <a
            href="#contact"
            className="text-link"
            style={{ fontSize: 15, fontWeight: 600, color: colors.textPrimary }}
          >
            Talk to us →
          </a>
        </div>

        <p className="anim4" style={{ fontSize: 13.5, color: colors.textFaint }}>
          Pre-product. Building now. Looking for 10 design-partner restaurants in Bangalore, Mumbai, Delhi, and Goa.
        </p>
      </div>
    </section>
  );
}
