
import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <NavigationMenu />
      <div className="flex justify-center pt-20 pb-4">
        <img 
          src="/lovable-uploads/da9c96ed-e76c-456c-88ac-3db8e2de639c.png" 
          alt="TidyMind Logo" 
          className="h-16 md:h-20"
        />
      </div>
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
