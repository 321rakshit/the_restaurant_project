export function HeroMark() {
  return (
    <div className="signature" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <circle className="big-rim" cx="100" cy="100" r="70" />
        <path className="big-smile" pathLength="1" d="M66 104 Q100 150 134 104" />
        <circle className="big-spoon" cx="66" cy="104" r="12" />
      </svg>
    </div>
  );
}
