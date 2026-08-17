import Reveal from "@/components/Reveal";
import { industries } from "@/lib/site";

export default function Industries() {
  return (
    <section id="industries" className="dfy-band">
      <div className="dfy-wrap">
        <Reveal>
          <div className="dfy-measure">
            <span className="dfy-eyebrow">Industries</span>
            <h2 className="text-[length:var(--dfy-h2)]">
              We write the classes other agencies pass on
            </h2>
            <p className="dfy-lead mt-5">
              Roofing, framing, and anything working at height are hard to place
              in California. That is exactly the work we have spent two decades
              learning how to market.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-1 gap-[clamp(14px,1.5vw,24px)] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal as="li" key={industry.name} delay={(i % 4) * 0.05}>
              <div className="group h-full rounded-[var(--dfy-radius-md)] border border-[var(--dfy-hairline)] bg-[var(--dfy-paper)] p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(30,111,217,0.4)] hover:bg-[var(--dfy-blue-tint)] hover:shadow-[var(--dfy-shadow-card)]">
                <h3 className="text-[1.0625rem] font-bold">{industry.name}</h3>
                <p className="mt-2 text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]">
                  {industry.note}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-9 text-[length:var(--dfy-small)] text-[var(--dfy-ink-muted)]">
            Do not see your trade? We place most commercial classes.{" "}
            <a href="#quote" className="font-semibold">
              Tell us what you do
            </a>{" "}
            and we will find the market.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
