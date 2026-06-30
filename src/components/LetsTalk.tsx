import { colors, layout } from '../tokens';
import { contact } from '../contact';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './icons';

const linkStyle = {
  fontSize: 17,
  fontWeight: 700,
  color: colors.textOnDarkStrong,
} as const;

export function LetsTalk() {
  return (
    <section id="contact" style={{ background: colors.bgDark, padding: '110px 32px' }}>
      <div style={{ maxWidth: layout.maxWidthNote, margin: '0 auto' }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: colors.accentOnDark,
            marginBottom: 22,
          }}
        >
          Get in touch
        </div>

        <h2
          style={{
            fontSize: 'clamp(28px,3.5vw,40px)',
            fontWeight: 800,
            letterSpacing: '-.025em',
            color: colors.textOnDarkStrong,
            marginBottom: 22,
          }}
        >
          Let's talk.
        </h2>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.75,
            color: colors.textOnDark,
            marginBottom: 36,
          }}
        >
          If you run a restaurant, cafe, food business, or resort — or you're just curious about what AI could do for
          you — reach out. No forms, no sales process. Talk to us directly.
        </p>

        <div
          style={{
            border: `1px solid ${colors.borderDark}`,
            borderRadius: 14,
            padding: '28px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <PhoneIcon />
            <a href={contact.phoneHref} className="text-link" style={linkStyle}>
              Call: {contact.phoneDisplay}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <WhatsAppIcon />
            <a
              href={contact.whatsappHref}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              WhatsApp: {contact.phoneDisplay}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <MailIcon />
            <a href={contact.emailHref} className="text-link" style={linkStyle}>
              Email: {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
