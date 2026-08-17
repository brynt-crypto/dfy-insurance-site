import Logo from "@/components/Logo";
import { coverages, nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--dfy-navy)] pt-16 pb-10 text-[var(--dfy-ink-on-navy-muted)]">
      <div className="dfy-wrap">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="dfy-measure mt-5 text-[length:var(--dfy-small)]">
              {site.tagline} Independent agency placing commercial and
              contractor coverage for California businesses since{" "}
              {site.foundedYear}.
            </p>
            <address className="mt-6 not-italic text-[length:var(--dfy-small)]">
              {site.address}
              <br />
              <a
                href={site.phoneHref}
                className="mt-2 inline-block font-semibold !text-white no-underline"
              >
                {site.phone}
              </a>
              <br />
              <a
                href={`mailto:${site.email}`}
                className="!text-[var(--dfy-blue-bright)]"
              >
                {site.email}
              </a>
            </address>
          </div>

          <nav aria-label="Coverages">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] !text-white">
              Coverages
            </h2>
            <ul className="mt-5 flex list-none flex-col gap-3">
              {coverages.map((coverage) => (
                <li key={coverage.id}>
                  <a
                    href="#coverages"
                    className="text-[length:var(--dfy-small)] !text-[var(--dfy-ink-on-navy-muted)] no-underline transition-colors duration-200 hover:!text-white"
                  >
                    {coverage.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] !text-white">
              Company
            </h2>
            <ul className="mt-5 flex list-none flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[length:var(--dfy-small)] !text-[var(--dfy-ink-on-navy-muted)] no-underline transition-colors duration-200 hover:!text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#quote"
                  className="text-[length:var(--dfy-small)] !text-[var(--dfy-ink-on-navy-muted)] no-underline transition-colors duration-200 hover:!text-white"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
            <p className="mt-7 text-[length:var(--dfy-small)]">{site.hours}</p>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--dfy-hairline-navy)] pt-7 text-[length:var(--dfy-small)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.license}.
          </p>
          <p>
            Coverage descriptions are general summaries. Actual terms are
            governed by the issued policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
