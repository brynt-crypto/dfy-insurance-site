import Reveal from "@/components/Reveal";
import { ctaBand, site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--dfy-navy-900)] py-20">
      {/* Static glow, echoing the hero without a second canvas on the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(70% 120% at 78% 30%, rgba(62,144,240,0.32) 0%, rgba(30,111,217,0.12) 42%, rgba(11,27,51,0) 72%)",
        }}
      />
      <div className="dfy-wrap relative">
        <Reveal>
          <div className="flex flex-col items-start gap-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="dfy-measure">
              <h2 className="text-[length:var(--dfy-display-l)] !text-white">
                {ctaBand.headline}
              </h2>
              <p className="mt-4 text-[length:var(--dfy-body-l)] text-[var(--dfy-ink-on-navy-muted)]">
                {ctaBand.body}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="#quote" className="dfy-btn dfy-btn--primary">
                Get a Free Quote
              </a>
              <a href={site.phoneHref} className="dfy-btn dfy-btn--on-navy">
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
