"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { process } from "@/lib/site";

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="dfy-band dfy-band-soft">
      <div className="dfy-wrap">
        <Reveal>
          <div className="dfy-measure">
            <span className="dfy-eyebrow">{process.eyebrow}</span>
            <h2 className="text-[length:var(--dfy-h2)]">{process.headline}</h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* The connecting line draws itself in as the section enters view. */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-[2px] bg-[var(--dfy-hairline)] lg:left-0 lg:top-[27px] lg:h-[2px] lg:w-full md:block"
          >
            <motion.div
              className="h-full w-full origin-top bg-[var(--dfy-blue)] lg:origin-left"
              // Same markup either way — only the duration changes — so the
              // server and client render identically. See Reveal.tsx.
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: reduceMotion ? 0 : 1.1,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            />
          </div>

          <ol className="relative grid list-none grid-cols-1 gap-10 md:gap-12 lg:grid-cols-4 lg:gap-8">
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.09}>
                <div className="flex gap-5 lg:flex-col lg:gap-0">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--dfy-blue)] bg-[var(--dfy-paper)] font-[family-name:var(--dfy-font-display)] text-[1.25rem] font-bold text-[var(--dfy-blue-deep)]">
                    {i + 1}
                  </span>
                  <div className="lg:mt-7 lg:pr-6">
                    <h3 className="text-[1.125rem]">{step.title}</h3>
                    <p className="mt-3 text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
