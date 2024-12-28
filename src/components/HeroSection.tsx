import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import BenefitsGrid from "./hero/BenefitsGrid";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-[1600px] mx-auto text-center py-8 md:py-12 lg:py-16"
      >
        <HeroTitle />
        <HeroSubtitle />
        <BenefitsGrid />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-wrap gap-4 justify-center relative mt-8 md:mt-12"
        >
          <LaunchingSoonButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;