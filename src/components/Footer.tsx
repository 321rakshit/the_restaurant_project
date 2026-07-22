import { PlatofyMark } from './PlatofyMark';

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-in">
        <a className="logo" href="#" aria-label="Platofy">
          <PlatofyMark variant="static" size={28} />
          platofy
        </a>
        <span>Building in India 🇮🇳 · © 2026</span>
        <span>+91 93546 37615 · +91 87089 82188 · hi@platofy.ai</span>
      </div>
    </footer>
  );
}
