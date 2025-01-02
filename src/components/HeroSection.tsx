import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";
import VimeoPlayer from "./VimeoPlayer";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-32 md:pt-40 md:pb-48 lg:pt-48 lg:pb-64 min-h-screen relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-left order-1 lg:order-1"
          >
            <HeroTitle />
            <HeroSubtitle />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4 relative mt-6 md:mt-8"
            >
              <LaunchingSoonButton />
            </motion.div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            className="w-full flex items-center justify-center order-2 lg:order-2"
          >
            <div className="w-full">
              <VimeoPlayer videoId="1043309138" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;