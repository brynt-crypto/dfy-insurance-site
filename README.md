# Done For You Insurance Agency — Website

First draft of the marketing site. One long landing page, built for commercial
and contractor insurance buyers aged roughly 30–60+: large type, high contrast,
obvious calls to action, and restrained motion.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (If another project is already using port 3000,
Next will pick 3001 and print the URL it chose.)

```bash
npm run build   # production build — this is what Vercel runs
npm run lint
```

## Where to change things

**All copy and brand data lives in [`lib/site.ts`](lib/site.ts).** The company
name, phone number, address, license number, coverage descriptions, FAQ answers,
and stats are all there. No component has hard-coded text, so renaming the
agency or swapping the phone number is one edit in one file.

Items still using stand-in values are marked with `TODO:` comments:

- Phone number and office address
- License number
- Carrier names in the trust bar
- The 4.8★ review count

**Design tokens live in [`app/globals.css`](app/globals.css)** — colors,
type scale, spacing, radii, shadows. Change a token there and it applies
everywhere. The palette is navy + confident blue, with gold reserved for
rating stars only.

## Structure

```
app/
  layout.tsx      fonts, metadata, nav + footer shell, skip link
  page.tsx        composes the sections in order
  globals.css     design tokens and component classes
components/
  Hero.tsx        headline block over the animated visual
  HeroCanvas.tsx  the animated node network (Canvas 2D, no three.js)
  Nav.tsx  Footer.tsx  ScrollRail.tsx  Logo.tsx
  Reveal.tsx      the single scroll-entrance animation used site-wide
  Counter.tsx     count-up statistic
  CoverageIcon.tsx  hand-drawn line icons
  sections/       TrustBar, Coverages, Industries, WhyUs, Process,
                  QuoteForm, Faq, CtaBand
lib/site.ts       all copy and brand data
```

## Notes for the next pass

- **The quote form is front-end only.** It validates, shows inline errors, and
  displays a success panel, but nothing is sent anywhere yet. Wiring it to a CRM
  or an email endpoint is the next step — see the `TODO` in
  [`components/sections/QuoteForm.tsx`](components/sections/QuoteForm.tsx).
- **Imagery is intentionally absent.** The layout uses the animated hero, icons,
  and type instead of stock photography. Real photos of the team and office
  would strengthen the Why Us and hero sections.
- **The logo is a placeholder** — a shield mark plus the agency name set in
  Sora. Drop the real logo into `components/Logo.tsx` when it exists.

## Accessibility and motion

- Body text is 17px minimum, nothing on the page is below 15px
- Tap targets are at least 44px; buttons are 52px
- Every interactive element has a visible focus ring, including in Windows
  high-contrast mode
- `prefers-reduced-motion` is respected everywhere: the hero canvas renders one
  static frame, scroll reveals become instant, and the counters jump to their
  final values
- The hero animation pauses when scrolled out of view and caps device pixel
  ratio at 2, so it stays cheap on laptops and phones
