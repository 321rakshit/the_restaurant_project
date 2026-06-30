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

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.accent}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 12a8.5 8.5 0 01-12.6 7.45L3.5 20.5l1.07-4.32A8.5 8.5 0 1120.5 12z" />
      <path d="M9 9.5c.2 1.5 1.4 3.6 2.8 4.7 1.4 1.1 3.5 1.6 4 1.4l.9-1.4-2-1.1-1 1c-1-.3-2.1-1.2-2.8-2.3l.9-1L11 9.1 9.6 8.6 9 9.5z" />
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
