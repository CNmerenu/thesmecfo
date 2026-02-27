import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Differentiator from "@/components/Differentiator";
import Opportunity from "@/components/Opportunity";
import Services from "@/components/Services";
import About from "@/components/About";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import HowItWorks from "@/components/HowItWorks";
import Resources from "@/components/Resources";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Differentiator />
      <Opportunity />
      <WhatSetsUsApart />
      <HowItWorks />
      <Services />
      <About />
      <Resources />
      <Newsletter />
      <CTA />
    </>
  );
}
