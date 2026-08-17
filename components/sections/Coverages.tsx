import CoverageIcon from "@/components/CoverageIcon";
import Reveal from "@/components/Reveal";
import { coverages } from "@/lib/site";

export default function Coverages() {
  return (
    <section id="coverages" className="dfy-band dfy-band-soft">
      <div className="dfy-wrap">
        <Reveal>
          <div className="dfy-measure">
            <span className="dfy-eyebrow">Coverages</span>
            <h2 className="text-[length:var(--dfy-h2)]">
              The policies California businesses actually get asked for
            </h2>
            <p className="dfy-lead mt-5">
              Most of our clients carry three or four of these together. Hover
              any card to see what it covers, or start a quote and we will tell
              you which ones your operation genuinely needs.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid list-none grid-cols-1 gap-[clamp(20px,2vw,32px)] md:grid-cols-2 lg:grid-cols-3">
          {coverages.map((coverage, i) => (
            <Reveal as="li" key={coverage.id} delay={(i % 3) * 0.07}>
              <article className="dfy-card dfy-card--interactive group flex h-full flex-col">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-[var(--dfy-radius-md)] bg-[var(--dfy-blue-tint)] text-[var(--dfy-blue-deep)] transition-colors duration-300 group-hover:bg-[var(--dfy-blue)] group-hover:text-white">
                  <CoverageIcon id={coverage.id} />
                </span>

                <h3 className="text-[length:var(--dfy-h3)]">{coverage.title}</h3>

                <p className="mt-3 text-[var(--dfy-ink-muted)]">
                  {coverage.summary}
                </p>

                {/* Detail list stays in the DOM for screen readers and keyboard
                    users; the animation only affects sighted mouse users. */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[420ms] ease-[var(--dfy-ease)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-5 text-[length:var(--dfy-small)] font-bold uppercase tracking-[0.1em] text-[var(--dfy-navy)]">
                      What it covers
                    </p>
                    <ul className="mt-3 flex list-none flex-col gap-2">
                      {coverage.covers.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--dfy-blue)"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            className="mt-1 shrink-0"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#quote"
                  className="mt-6 inline-flex items-center gap-2 self-start pt-1 text-[0.9375rem] font-bold text-[var(--dfy-blue-deep)] no-underline"
                >
                  Quote {coverage.title}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
