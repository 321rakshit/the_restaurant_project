import type { SVGProps } from 'react';
import { colors } from '../tokens';

type IconProps = SVGProps<SVGSVGElement>;

export function LogoMark(props: IconProps) {
  return (
    <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true" {...props}>
      <circle cx="15" cy="15" r="13" stroke={colors.accent} strokeWidth="2" />
      <circle cx="15" cy="15" r="5.5" fill={colors.accent} />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke={colors.accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="5" height="5" />
      <rect x="9" y="2" width="5" height="5" />
      <rect x="2" y="9" width="5" height="5" />
      <path d="M9 9h2v2h2v2h-2v-2h-2z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke={colors.accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="12" height="12" rx="1.5" />
      <path d="M5 6h6M5 9h4" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke={colors.accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 10V4l8-1.5v6.5M3 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke={colors.accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
      {...props}
    >
      <path d="M3.5 2.5h3l1.5 4-2 1.5a10 10 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.5 1.5C8.5 17 1 9.5 1 4A1.5 1.5 0 012.5 2.5z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke={colors.accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="3.5" width="14" height="11" rx="1.5" />
      <path d="M2.5 4.5l6 5 6-5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 9l4 4 7-8"
        stroke={colors.successGreen}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
