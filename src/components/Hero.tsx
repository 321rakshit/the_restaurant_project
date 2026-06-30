import { colors, layout } from '../tokens';
import { contact } from '../contact';

const ctaBase = {
  fontSize: 15,
  fontWeight: 700,
  padding: '14px 22px',
  borderRadius: 10,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

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
          An AI &amp; tech enablement company for the food business
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
          We bring AI and modern tech to the food business.
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
          We're the AI and tech team that food businesses don't have in-house — but should. Platofy builds simple,
          practical AI products that help restaurants, cafes, and food businesses run smarter — and we translate the
          technology so the people running them don't have to.
        </p>

        <div
          className="anim4"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 22,
          }}
        >
          <a
            href={contact.phoneHref}
            className="btn-primary"
            style={{ ...ctaBase, background: colors.accent, color: colors.bgWhite }}
          >
            Call us
          </a>
          <a
            href={contact.whatsappHref}
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...ctaBase, color: colors.accent }}
          >
            WhatsApp us
          </a>
          <a
            href={contact.emailHref}
            className="btn-outline"
            style={{ ...ctaBase, color: colors.accent }}
          >
            Email us
          </a>
        </div>

        <p className="anim4" style={{ fontSize: 13.5, color: colors.textFaint }}>
          Two products in development. More on the way.
        </p>
      </div>
    </section>
  );
}
