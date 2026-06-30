import { layout } from './tokens';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { WhyThisMatters } from './components/WhyThisMatters';
import { WhatWereBuilding } from './components/WhatWereBuilding';
import { WhoWereFor } from './components/WhoWereFor';
import { ContactNote } from './components/ContactNote';
import { WaitlistForm } from './components/WaitlistForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: layout.navHeight }}>
        <Hero />
        <WhyThisMatters />
        <WhatWereBuilding />
        <WhoWereFor />
        <ContactNote />
        <WaitlistForm />
        <Footer />
      </main>
    </>
  );
}
