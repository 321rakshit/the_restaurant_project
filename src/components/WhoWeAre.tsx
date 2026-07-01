import { useInView } from '../hooks/useInView';

export function WhoWeAre() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="block band">
      <svg className="band-logo" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle className="rim" cx="32" cy="32" r="27" />
        <path className="smile" d="M20 35 Q32 47 44 35" />
        <circle className="spoon" cx="20" cy="35" r="4.4" />
      </svg>
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`} style={{ position: 'relative' }}>
        <span className="kicker">Who we are</span>
        <h2 className="title">The AI team you don't have in-house.</h2>
        <p>
          We're a small team that understands three things well: AI, technology, and product. We're not a big
          software company, and we don't sell bloated systems — we pay close attention to where AI is genuinely
          useful, and build practical products that fit how food businesses already work.
        </p>
        <p>
          <b>
            We do the hard part of understanding the technology, so you get tools that simply make your business
            better.
          </b>
        </p>
      </div>
    </section>
  );
}
