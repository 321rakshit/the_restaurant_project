import { useEffect, useState } from 'react';
import { PlatofyMark } from './PlatofyMark';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-in">
        <a className="logo" href="#" aria-label="Platofy">
          <PlatofyMark variant="once" size={28} />
          platofy
        </a>
        <a href="#contact" className="btn btn-primary">Talk to us</a>
      </div>
    </nav>
  );
}
