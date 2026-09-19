import type { SVGProps } from "react";

/**
 * Minimal line-art icon set. Stroke-based to match the editorial, illustrated feel.
 */
const paths: Record<string, React.ReactNode> = {
  plan: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4M8 14h3M8 17h6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="9" r="2.4" />
      <path d="M12 6.6c0-2 1.4-3.6 3.2-3.6.9 1.2.6 3.4-.8 4.4M12 6.6c0-2-1.4-3.6-3.2-3.6-.9 1.2-.6 3.4.8 4.4M14.4 9c2 0 3.6 1.4 3.6 3.2-1.2.9-3.4.6-4.4-.8M9.6 9c-2 0-3.6 1.4-3.6 3.2 1.2.9 3.4.6 4.4-.8" />
      <path d="M12 13v8M12 18c-1.5 0-2.8-.8-3.5-2M12 16.5c1.5 0 2.8-.8 3.5-2" />
    </>
  ),
  venue: (
    <>
      <path d="M3 21h18M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6M9.5 11h.01M14.5 11h.01" />
    </>
  ),
  catering: (
    <>
      <path d="M4 11h16a8 8 0 0 1-16 0Z" />
      <path d="M12 8V6M9.5 19h5M8 8c0-1 .8-1.6 2-1.6M16 8c0-1-.8-1.6-2-1.6" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="7" width="12" height="10" rx="2" />
      <path d="m15 11 6-3.5v9L15 13" />
    </>
  ),
  sound: (
    <>
      <path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10v4" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </>
  ),
  guests: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.5-3.5 2.7-5.5 5.5-5.5s5 2 5.5 5.5" />
      <path d="M15.5 5.4a3.2 3.2 0 0 1 0 5.9M17.5 14.9c1.7.8 2.7 2.6 3 5.1" />
    </>
  ),
  travel: (
    <>
      <path d="M8 20h8M12 20v-4" />
      <path d="M6 16 4 10c4-3 12-3 16 0l-2 6z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  box: (
    <>
      <path d="m3 8 9-4 9 4-9 4z" />
      <path d="M3 8v8l9 4 9-4V8M12 12v8" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowLeft: <path d="M20 12H5m6 6-6-6 6-6" />,
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
      <path d="M9 8.5c-.6 1.8.4 4.2 2 5.6 1.4 1.2 3.4 1.9 4.6 1.2.5-.3.6-.9.3-1.4-.3-.4-1.2-.9-1.7-.7-.4.1-.6.6-1 .5-.9-.2-2.1-1.3-2.5-2.2-.2-.4.3-.7.4-1.1.1-.5-.2-1.4-.6-1.8-.4-.4-1.2-.4-1.5-.1Z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.8" r="2.2" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 4c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6Z" />
      <path d="M19 15.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z" />
    </>
  ),
  knot: (
    <>
      <path d="M8.5 12c-2.5 0-4-1.4-4-3.2C4.5 6.9 6 5.5 8 5.5c3.5 0 4.5 4 4.5 6.5s1 6.5 4 6.5c1.9 0 3-1.4 3-3.2 0-1.9-1.5-3.3-3.5-3.3" />
      <path d="M8.5 12c2 0 3.5-1.4 3.5-3.3 0-1.8-1.1-3.2-3-3.2" />
      <path d="M15.5 12c-2.5 0-4 2.9-4 4.4" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.6-7-9.7C5 7.5 7 5.5 9.4 5.5c1.6 0 2.6.9 2.6 2 0-1.1 1-2 2.6-2C17 5.5 19 7.5 19 10.3c0 5.1-7 9.7-7 9.7Z" />
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 11 5 19 5c0 8-4 14-14 14Z" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  wave: <path d="M3 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 2 1.5 3 .8M3 9.5c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 2 1.5 3 .8" />,
  mountain: <path d="m3 19 6-11 4 7 2.5-4L21 19z" />,
  home: (
    <>
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 22,
  strokeWidth = 1.3,
  className = "",
  ...rest
}: { name: string; size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}
