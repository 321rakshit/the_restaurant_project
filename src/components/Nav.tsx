import { colors, layout } from '../tokens';
import { LogoMark } from './icons';

export function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: colors.navBg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.borderNav}`,
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidthNav,
          margin: '0 auto',
          height: layout.navHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `0 ${layout.pageGutter}px`,
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8 }} aria-label="Platofy home">
          <LogoMark />
          <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.03em', color: colors.textPrimary }}>
            platofy
          </span>
        </a>
        <a
          href="#waitlist"
          className="btn-primary"
          style={{
            background: colors.accent,
            color: colors.bgWhite,
            fontSize: 14,
            fontWeight: 600,
            padding: '9px 20px',
            borderRadius: 8,
          }}
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
