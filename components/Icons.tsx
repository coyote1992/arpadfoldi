// A handful of line icons, drawn to match the site's hairlines (1.6 px strokes, round caps).
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowRight = ({ className = "i-arrow-r" }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = ({ className = "i-arrow-ur" }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const Phone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
  </svg>
);
export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);
export const Pin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const Calendar = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);
export const Camera = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <rect x="3" y="6.5" width="13" height="11" rx="2" />
    <path d="m16 10.5 5-3v9l-5-3" />
  </svg>
);
export const Drop = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M12 3.5s6 6.4 6 10.5a6 6 0 0 1-12 0c0-4.1 6-10.5 6-10.5Z" />
  </svg>
);
export const Car = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M5 16.5V12l2-5h10l2 5v4.5M3.5 12h17M6 16.5v2M18 16.5v2" />
    <circle cx="7.5" cy="14" r=".6" />
    <circle cx="16.5" cy="14" r=".6" />
  </svg>
);
export const Download = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);
export const Child = ({ className }: P) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...base}>
    <circle cx="12" cy="6" r="2.5" />
    <path d="M7 11.5 12 10l5 1.5M12 10v5.5m0 0-3 5m3-5 3 5" />
  </svg>
);

/** The club's mark: a clay ball with a light seam, used beside the wordmark. */
export const BallMark = ({ className }: P) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
    <circle cx="20" cy="20" r="18.5" fill="var(--clay)" />
    <path d="M6.2 9.6c6.4 4.1 9.4 9.7 8.9 16.6M33.8 30.4c-6.4-4.1-9.4-9.7-8.9-16.6" fill="none" stroke="#f4ede3" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);
