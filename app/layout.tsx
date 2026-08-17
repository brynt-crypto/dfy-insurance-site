import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollRail from "@/components/ScrollRail";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Commercial & Contractor Insurance in California`,
  description:
    "Independent California agency placing general liability, workers' compensation, commercial property, builder's risk, and surety bonds. A-rated carriers, same-day certificates, free quotes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-200 rounded-[var(--dfy-radius-sm)] bg-white px-5 py-3 font-semibold text-[var(--dfy-navy)] shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ScrollRail />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
