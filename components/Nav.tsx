"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape so keyboard users are never trapped.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-100 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-[var(--dfy-hairline)] bg-white/95 shadow-[0_2px_16px_rgba(11,27,51,0.08)] backdrop-blur-sm"
          : "border-transparent bg-white",
      )}
    >
      <div className="dfy-wrap flex items-center justify-between gap-6 py-3.5">
        <a href="#top" className="no-underline" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-[var(--dfy-radius-sm)] px-3.5 py-2.5 text-[0.9375rem] font-semibold text-[var(--dfy-navy)] no-underline transition-colors duration-200 hover:bg-[var(--dfy-blue-tint)] hover:text-[var(--dfy-blue-deep)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[0.9375rem] font-bold text-[var(--dfy-navy)] no-underline transition-colors duration-200 hover:text-[var(--dfy-blue-deep)] md:flex"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
            </svg>
            {site.phone}
          </a>

          <a href="#quote" className="dfy-btn dfy-btn--primary hidden sm:inline-flex">
            Get a Free Quote
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-[var(--dfy-radius-sm)] border border-[var(--dfy-hairline)] text-[var(--dfy-navy)] lg:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-[var(--dfy-hairline)] bg-white lg:hidden"
        >
          <ul className="dfy-wrap flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-[var(--dfy-hairline)] py-4 text-[1.0625rem] font-semibold text-[var(--dfy-navy)] no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-3 py-5">
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="dfy-btn dfy-btn--primary"
              >
                Get a Free Quote
              </a>
              <a href={site.phoneHref} className="dfy-btn dfy-btn--outline">
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
