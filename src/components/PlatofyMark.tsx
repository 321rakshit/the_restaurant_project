type Variant = 'once' | 'loop' | 'static';

type Props = {
  variant?: Variant;
  size?: number;
  className?: string;
};

export function PlatofyMark({ variant = 'static', size = 28, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`plate plate--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <circle className="rim" cx="32" cy="32" r="27" />
      <path className="smile" pathLength="1" d="M20 35 Q32 47 44 35" />
      <circle className="spoon" cx="20" cy="35" r="4.4" />
    </svg>
  );
}
