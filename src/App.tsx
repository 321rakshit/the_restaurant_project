import { layout } from './tokens';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { WhatWereBuilding } from './components/WhatWereBuilding';
import { WhoWeAre } from './components/WhoWeAre';
import { LetsTalk } from './components/LetsTalk';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: layout.navHeight }}>
        <Hero />
        <WhatWeDo />
        <WhatWereBuilding />
        <WhoWeAre />
        <LetsTalk />
        <Footer />
      </main>
    </>
  );
}
