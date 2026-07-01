import type { ReactNode } from 'react';

type Props = {
  motif: ReactNode;
  title: string;
  description: string;
  forLine: string;
};

export function ProductCard({ motif, title, description, forLine }: Props) {
  return (
    <article className="card">
      <div className="card-motif">{motif}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="for">{forLine}</div>
    </article>
  );
}
