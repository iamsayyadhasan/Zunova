import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { BusinessProblems } from "@/components/home/BusinessProblems";
import { WebAndMobileSolutions } from "@/components/home/WebAndMobileSolutions";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { TechArchitecture } from "@/components/home/TechArchitecture";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactCta } from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 2: STRONG HERO WITH SIGNATURE GSAP ANIMATION */}
      <HeroSection />

      {/* SECTION 3: SERVICE OVERVIEW WITH STAGGERED SCROLL REVEAL */}
      <ServicesPreview />

      {/* SECTION 4: BUSINESS PROBLEMS WE ADDRESS */}
      <BusinessProblems />

      {/* SECTION 5: WEB AND MOBILE SOLUTIONS SHOWCASE */}
      <WebAndMobileSolutions />

      {/* SECTION 6: SELECTED WORK / PORTFOLIO */}
      <PortfolioPreview />

      {/* SECTION 7: HOW WE WORK */}
      <ProcessSection />

      {/* SECTION 8: WHY WORK WITH ZUNOVA TECH */}
      <PrinciplesSection />

      {/* SECTION 9: TECHNOLOGY AND ARCHITECTURE */}
      <TechArchitecture />

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* SECTION 11: STRONG FINAL CTA */}
      <ContactCta />
    </div>
  );
}
