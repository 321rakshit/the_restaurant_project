import { useInView } from '../hooks/useInView';

export function WhatWeDo() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="block">
      <div ref={ref} className={`wrap reveal${inView ? ' in' : ''}`}>
        <span className="kicker">What we do</span>
        <h2 className="title">The bridge between AI and your business.</h2>
        <p className="what-body">
          AI is changing what's possible for businesses everywhere — but almost none of it has reached the food
          industry that needs it most. <b>We understand AI, technology, and product.</b> We figure out where AI can
          genuinely help a food business, then build it into a simple product that just works. No jargon, no bloat,
          no long contracts.
        </p>
      </div>
    </section>
  );
}
