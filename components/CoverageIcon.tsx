/**
 * Line icons for the coverage cards. Single stroke weight, 24px grid, drawn to
 * match rather than pulled from an icon library — keeps the bundle empty and
 * the set visually consistent.
 */

const common = {
  width: 34,
  height: 34,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function CoverageIcon({ id }: { id: string }) {
  switch (id) {
    case "general-liability":
      return (
        <svg {...common}>
          <path d="M12 3l7.5 2.5v6c0 4.4-3 8.2-7.5 9.5-4.5-1.3-7.5-5.1-7.5-9.5v-6L12 3Z" />
          <path d="M12 8.5v4" />
          <path d="M12 15.5h.01" />
        </svg>
      );
    case "workers-comp":
      return (
        // Hard hat: dome, brim, and the two ribs across the crown.
        <svg {...common}>
          <path d="M6.5 14.5V12a5.5 5.5 0 0 1 11 0v2.5" />
          <path d="M3 14.5h18a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
          <path d="M10 7.2V14.5" />
          <path d="M14 7.2V14.5" />
        </svg>
      );
    case "commercial-property":
      return (
        <svg {...common}>
          <path d="M3.5 10.5 12 4l8.5 6.5" />
          <path d="M5.5 9.8V20h13V9.8" />
          <path d="M10 20v-5.5h4V20" />
        </svg>
      );
    case "commercial-auto":
      return (
        <svg {...common}>
          <path d="M3 14.5h18" />
          <path d="M5 14.5l1.6-5a2 2 0 0 1 1.9-1.4h7a2 2 0 0 1 1.9 1.4l1.6 5" />
          <path d="M4 14.5V18h2.5v-1.2" />
          <path d="M20 14.5V18h-2.5v-1.2" />
          <circle cx="7.5" cy="16.2" r="1.3" />
          <circle cx="16.5" cy="16.2" r="1.3" />
        </svg>
      );
    case "builders-risk":
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <path d="M6 20V9.5l6-4 6 4V20" />
          <path d="M6 13h12" />
          <path d="M10 20v-3.5h4V20" />
          <path d="M12 5.5V3" />
        </svg>
      );
    case "surety-bonds":
      return (
        <svg {...common}>
          <path d="M5 3.5h9.5L19 8v12.5H5V3.5Z" />
          <path d="M14 3.5V8h5" />
          <path d="M8.5 12.5h7" />
          <path d="M8.5 16h4.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
  }
}
