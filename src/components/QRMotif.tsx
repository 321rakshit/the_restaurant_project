import { useMemo } from 'react';

const ANCHOR_INDICES = new Set([0, 1, 6, 7, 4, 5, 10, 11, 24, 25, 30, 31]);
const ON_INDICES = new Set([2, 5, 11, 14, 17, 20, 23, 26, 29, 8, 12, 33]);

export function QRMotif() {
  const cells = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => {
        if (ANCHOR_INDICES.has(i)) return 'anchor';
        if (ON_INDICES.has(i)) return 'on';
        return '';
      }),
    [],
  );

  return (
    <div className="qr" aria-hidden="true">
      {cells.map((cls, i) => (
        <i key={i} className={cls} />
      ))}
    </div>
  );
}
