import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { ScrollText } from "lucide-react";

const Index = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <NavigationMenu />
      <HeroSection />
      <div className="container mx-auto px-4">
        <FeatureSection />
      </div>
      <PricingSection />
      <FAQSection />
      <Footer />
      
      {showScroll && (
        <div className="fixed bottom-8 right-8 animate-bounce text-white/80 hover:text-white transition-colors">
          <ScrollText size={24} />
        </div>
      )}
    </div>
  );
};

export default Index;