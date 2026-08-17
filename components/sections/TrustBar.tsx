import Reveal from "@/components/Reveal";
import { trustBar } from "@/lib/site";

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="var(--dfy-gold)">
          <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9L12 2.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="border-b border-[var(--dfy-hairline)] bg-[var(--dfy-paper)] py-10">
      <div className="dfy-wrap">
        <Reveal>
          <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <p className="text-[length:var(--dfy-small)] font-semibold uppercase tracking-[0.1em] text-[var(--dfy-ink-muted)]">
                {trustBar.intro}
              </p>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
                {trustBar.carriers.map((carrier) => (
                  <li
                    key={carrier}
                    className="font-[family-name:var(--dfy-font-display)] text-[1.0625rem] font-bold tracking-[-0.01em] text-[#8f9bab] transition-colors duration-300 hover:text-[var(--dfy-navy)]"
                  >
                    {carrier}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 rounded-[var(--dfy-radius-md)] border border-[var(--dfy-hairline)] bg-[var(--dfy-paper-soft)] px-6 py-4">
              <div>
                <span className="font-[family-name:var(--dfy-font-display)] text-[2rem] font-bold leading-none text-[var(--dfy-navy)]">
                  {trustBar.rating.score}
                </span>
                <span className="text-[length:var(--dfy-small)] font-semibold text-[var(--dfy-ink-muted)]">
                  /{trustBar.rating.outOf}
                </span>
              </div>
              <div>
                <Stars />
                <p className="mt-1 text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]">
                  {trustBar.rating.count} client reviews
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
