import { colors, layout } from '../tokens';
import { MailIcon, PhoneIcon } from './icons';

const PHONE = '+91 93546 37615';
const PHONE_HREF = 'tel:+919354637615';
const EMAIL = 'hi@platofy.ai';

export function ContactNote() {
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
          A note from us
        </div>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.78,
            color: colors.textOnDark,
            marginBottom: 40,
          }}
        >
          We're a small team building Platofy out of India. We've spent the last few months talking to cafe owners,
          hotel managers, and resort F&B teams across the country. The pattern is the same everywhere: the technology
          they use was built for a different era, and the economics they sign up for with delivery apps quietly crush
          their margins. We don't think the answer is another POS. We think there's a missing layer — something that
          gives restaurants direct relationships with their guests, modern tools for the dining experience itself, and
          a way to claw back margin without ripping out everything they already use. We're early. The product is being
          built now. If you run a restaurant, cafe, or hotel in India and any of this sounds right, we'd genuinely
          love to talk to you.
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
            <a
              href={PHONE_HREF}
              className="text-link"
              style={{ fontSize: 18, fontWeight: 700, color: colors.textOnDarkStrong }}
            >
              Call or WhatsApp: {PHONE}
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <MailIcon />
            <a
              href={`mailto:${EMAIL}`}
              className="text-link"
              style={{ fontSize: 18, fontWeight: 700, color: colors.textOnDarkStrong }}
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
