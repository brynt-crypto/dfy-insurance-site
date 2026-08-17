import HeroCanvas from "@/components/HeroCanvas";
import { hero, site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--dfy-navy-900)]"
    >
      {/* The animated visual fills the band; the scrim inside it darkens the
          left edge so the headline keeps contrast on every frame. */}
      <HeroCanvas
        focus={{ x: 0.62, y: 0.46 }}
        scrim="left"
        glow={0.95}
        className="absolute inset-0 -z-10 h-full w-full"
      />

      <div className="dfy-wrap relative flex min-h-[clamp(520px,74vh,880px)] flex-col justify-center py-[clamp(72px,9vw,150px)]">
        <div className="max-w-[46rem]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-[var(--dfy-radius-pill)] border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.07)] px-4 py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-[var(--dfy-blue-bright)] backdrop-blur-sm">
            {hero.eyebrow}
          </p>

          <h1 className="text-[length:var(--dfy-display-xl)] font-bold !text-white">
            {hero.headline}
          </h1>

          <p className="dfy-measure mt-6 text-[length:var(--dfy-body-l)] text-[var(--dfy-ink-on-navy)]">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={hero.primaryCta.href} className="dfy-btn dfy-btn--primary">
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="dfy-btn dfy-btn--on-navy"
            >
              {/* The label is dropped on narrow screens so the phone number
                  never breaks across two lines inside the button. */}
              <span className="hidden sm:inline">
                {hero.secondaryCta.label} ·{" "}
              </span>
              <span className="sm:hidden">Call </span>
              {site.phone}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {hero.trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[length:var(--dfy-small)] font-medium text-[var(--dfy-ink-on-navy-muted)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--dfy-blue-bright)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
