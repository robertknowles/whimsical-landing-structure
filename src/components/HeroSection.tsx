import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-24 pb-48">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-[1600px] mx-auto text-center"
      >
        <HeroTitle />
        <HeroSubtitle />
        
        {/* Video Placeholder */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="max-w-4xl mx-auto my-16"
        >
          <div className="glass-dark rounded-xl overflow-hidden aspect-video">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Video Placeholder
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-wrap gap-4 justify-center relative"
        >
          <LaunchingSoonButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;