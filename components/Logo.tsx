import { site } from "@/lib/site";

/**
 * Placeholder wordmark: a shield with a check, plus the agency name set in the
 * display face. Swap the <svg> for the real logo file when brand assets land —
 * the sizing and layout around it will not need to change.
 */
export default function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const markBg = tone === "light" ? "#ffffff" : "#12294d";
  const markFg = tone === "light" ? "#12294d" : "#ffffff";
  const primary = tone === "light" ? "#ffffff" : "#12294d";
  const secondary = tone === "light" ? "#a7b8d0" : "#55606e";

  return (
    <span
      className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap ${className ?? ""}`}
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M19 2.5 33 7.2v11.4c0 8.1-5.6 15.2-14 17.9-8.4-2.7-14-9.8-14-17.9V7.2L19 2.5Z"
          fill={markBg}
        />
        <path
          d="M12.6 19.3l4.5 4.5 8.3-9"
          stroke={markFg}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-[family-name:var(--dfy-font-display)] text-[1.0625rem] font-bold tracking-[-0.01em]"
          style={{ color: primary }}
        >
          {site.shortName}
        </span>
        <span
          className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]"
          style={{ color: secondary }}
        >
          Insurance Agency
        </span>
      </span>
    </span>
  );
}
