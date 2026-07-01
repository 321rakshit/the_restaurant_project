export function RoadmapCard() {
  return (
    <article className="card next">
      <div className="next-motif">
        <svg viewBox="0 0 92 92" fill="none" aria-hidden="true">
          <circle className="np a" cx="46" cy="46" r="42" />
          <circle className="np b" cx="46" cy="46" r="42" />
          <circle className="np c" cx="46" cy="46" r="42" />
          <line className="plus" x1="46" y1="34" x2="46" y2="58" />
          <line className="plus" x1="34" y1="46" x2="58" y2="46" />
        </svg>
      </div>
      <span className="badge-soon">On the roadmap</span>
      <h3>And more, soon.</h3>
      <p>
        We're building the next set of AI tools for food businesses — from kitchen and operations to guest experience,
        feedback, and analytics. One useful product at a time.
      </p>
      <div className="for">Built with our early partners. Want to shape what's next? Talk to us.</div>
    </article>
  );
}
