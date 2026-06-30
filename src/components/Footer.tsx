import { colors, layout } from '../tokens';
import { LinkedInIcon } from './icons';

export function Footer() {
  return (
    <footer
      style={{
        background: colors.bgCream,
        borderTop: `1px solid ${colors.borderFooter}`,
        padding: '36px 32px',
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidthNav,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.03em', color: colors.textPrimary }}>
            platofy
          </span>
          <span style={{ fontSize: 13, color: colors.textFaint }}>Building in India 🇮🇳</span>
          <span style={{ fontSize: 13, color: colors.textFaint }}>© 2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <a href="tel:+919354637615" className="footer-link" style={{ fontSize: 13.5, color: colors.textMuted }}>
            +91 93546 37615
          </a>
          <a href="mailto:hi@platofy.ai" className="footer-link" style={{ fontSize: 13.5, color: colors.textMuted }}>
            hi@platofy.ai
          </a>
          <a href="#" className="footer-link" aria-label="LinkedIn" style={{ color: colors.textMuted }}>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
