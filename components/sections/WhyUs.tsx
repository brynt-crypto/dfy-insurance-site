import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { whyUs } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="why-us" className="dfy-band dfy-band-navy">
      <div className="dfy-wrap">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <div>
              <span className="dfy-eyebrow">{whyUs.eyebrow}</span>
              <h2 className="text-[length:var(--dfy-h2)]">{whyUs.headline}</h2>
              <p className="dfy-lead mt-5">{whyUs.body}</p>

              <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {whyUs.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="m-0">
                      <span className="block font-[family-name:var(--dfy-font-display)] text-[2.5rem] font-bold leading-none text-white">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </span>
                      <span className="mt-2.5 block text-[length:var(--dfy-small)] text-[var(--dfy-ink-on-navy-muted)]">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <ul className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2">
            {whyUs.points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={(i % 2) * 0.07}>
                <div className="h-full rounded-[var(--dfy-radius-md)] border border-[var(--dfy-hairline-navy)] bg-[rgba(255,255,255,0.04)] p-7 transition-colors duration-300 hover:border-[rgba(62,144,240,0.55)] hover:bg-[rgba(255,255,255,0.07)]">
                  <h3 className="text-[1.125rem]">{point.title}</h3>
                  <p className="mt-3 text-[length:var(--dfy-small)] text-[var(--dfy-ink-on-navy-muted)]">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
