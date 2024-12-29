import { useState, useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showScroll, setShowScroll] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScroll(scrollPosition < 100);
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <NavigationMenu />
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div className="snap-start h-screen relative">
          <HeroSection />
          <AnimatePresence>
            {showScroll && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/90"
              >
                <span className="text-sm font-medium">Scroll Down</span>
                <ChevronDown size={36} strokeWidth={2.5} className="animate-bounce" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`transition-opacity duration-500 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <FeatureSection />
          </div>
          <PricingSection />
          <FAQSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;