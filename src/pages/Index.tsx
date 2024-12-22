import NavigationMenu from "@/components/NavigationMenu";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
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
    </div>
  );
};

export default Index;