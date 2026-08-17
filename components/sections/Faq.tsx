"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/site";

export default function Faq() {
  // Single-open accordion. First item starts open so the section never reads
  // as an empty list of headings.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="dfy-band dfy-band-soft">
      <div className="dfy-wrap">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal>
            <div>
              <span className="dfy-eyebrow">FAQ</span>
              <h2 className="text-[length:var(--dfy-h2)]">
                Questions we get every week
              </h2>
              <p className="dfy-lead mt-5">
                Straight answers, no sales pitch. If yours is not here, call us
                and ask.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="list-none border-t border-[var(--dfy-hairline)]">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={faq.q}
                    className="border-b border-[var(--dfy-hairline)]"
                  >
                    <h3 className="m-0">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-trigger-${i}`}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left font-[family-name:var(--dfy-font-display)] text-[1.0625rem] font-bold text-[var(--dfy-navy)] transition-colors duration-200 hover:text-[var(--dfy-blue-deep)]"
                      >
                        {faq.q}
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--dfy-hairline)] transition-transform duration-300 ${
                            isOpen ? "rotate-45 bg-[var(--dfy-blue-tint)]" : ""
                          }`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      hidden={!isOpen}
                    >
                      <p className="dfy-measure pb-7 text-[var(--dfy-ink-muted)]">
                        {faq.a}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
