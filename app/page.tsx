import Hero from "@/components/Hero";
import Coverages from "@/components/sections/Coverages";
import CtaBand from "@/components/sections/CtaBand";
import Faq from "@/components/sections/Faq";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import QuoteForm from "@/components/sections/QuoteForm";
import TrustBar from "@/components/sections/TrustBar";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Coverages />
      <Industries />
      <WhyUs />
      <Process />
      <QuoteForm />
      <Faq />
      <CtaBand />
    </>
  );
}
