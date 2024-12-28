import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import BenefitsGrid from "./hero/BenefitsGrid";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="w-full max-w-[1600px] mx-auto text-center py-8 md:py-12 lg:py-16 flex flex-col items-center justify-center"
      >
        <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px]">
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
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;