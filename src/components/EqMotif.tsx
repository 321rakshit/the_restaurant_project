export function EqMotif() {
  return (
    <div className="eq" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}
