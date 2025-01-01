import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";
import VimeoPlayer from "./VimeoPlayer";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-left"
          >
            <HeroTitle />
            <HeroSubtitle />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4 relative mt-8"
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
            className="w-full"
          >
            <div className="glass-dark rounded-xl overflow-hidden">
              <VimeoPlayer videoId="1043309138" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;