import { useInView } from '../hooks/useInView';
import { ProductCard } from './ProductCard';
import { QRMotif } from './QRMotif';
import { EqMotif } from './EqMotif';
import { RoadmapCard } from './RoadmapCard';

export function Building() {
  const [headRef, headInView] = useInView<HTMLDivElement>();
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>();

  return (
    <section className="block tint">
      <div className="wrap">
        <div ref={headRef} className={`reveal${headInView ? ' in' : ''}`}>
          <span className="kicker">What we're building</span>
          <h2 className="title">Two products live. More coming.</h2>
        </div>
        <div ref={cardsRef} className={`cards${cardsInView ? ' in' : ''}`}>
          <ProductCard
            motif={<QRMotif />}
            title="Smart QR Menu & Ordering"
            description="Guests scan a QR code, browse your menu, order, and pay — directly. No app, no aggregator commission. Our AI builds your whole digital menu from a photo of your existing one in minutes, and suggests smart add-ons that lift order value."
            forLine="Cafes, restaurants, food outlets, hotel in-room dining, resort outlets."
          />
          <ProductCard
            motif={<EqMotif />}
            title="Guest-Controlled Music"
            description="Let your guests set the vibe. They queue songs to your speakers from their phone, within rules you control. It turns an ordinary visit into something people remember — and nobody else in India is doing it yet."
            forLine="Cafes, lounges, bars, resorts."
          />
          <RoadmapCard />
        </div>
      </div>
    </section>
  );
}
