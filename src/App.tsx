import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { Building } from './components/Building';
import { WhoWeAre } from './components/WhoWeAre';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <WhatWeDo />
      <Building />
      <WhoWeAre />
      <Contact />
      <Footer />
    </>
  );
}
