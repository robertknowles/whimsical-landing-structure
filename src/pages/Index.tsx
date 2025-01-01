import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <NavigationMenu />
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;