
import { motion } from "framer-motion";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";
import VimeoPlayer from "./VimeoPlayer";
import { ChevronDown, Bookmark, StickyNote, Grid, Navigation, Folder } from "lucide-react";

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
            <div className="flex flex-col items-start mb-2">
              <img 
                src="/lovable-uploads/0f7a5e80-5336-4242-af48-d6018ec901fd.png" 
                alt="TidyMind Logo" 
                className="w-48 h-48 mb-2"
              />
            </div>
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

        {/* Features Table - Full Width */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          className="mt-24 w-full"
        >
          <div className="grid grid-cols-5 gap-4 mb-8 text-center">
            <div className="space-y-4">
              <Bookmark className="w-6 h-6 text-white mx-auto" />
              <div className="text-emerald-500 font-medium">Bookmark or Highlight</div>
            </div>
            <div className="space-y-4">
              <StickyNote className="w-6 h-6 text-white mx-auto" />
              <div className="text-emerald-500 font-medium">Pin Sticky Notes</div>
            </div>
            <div className="space-y-4">
              <Grid className="w-6 h-6 text-white mx-auto" />
              <div className="text-emerald-500 font-medium">Ready-Made Workspaces</div>
            </div>
            <div className="space-y-4">
              <Navigation className="w-6 h-6 text-white mx-auto" />
              <div className="text-emerald-500 font-medium">Message Navigation</div>
            </div>
            <div className="space-y-4">
              <Folder className="w-6 h-6 text-white mx-auto" />
              <div className="text-emerald-500 font-medium">Folder Organisation</div>
            </div>
            
            <div className="text-white text-sm">Save key snippets- from research notes to code</div>
            <div className="text-white text-sm">Attach personal context and keep your train of thought</div>
            <div className="text-white text-sm">Organise projects, from essays to research and code</div>
            <div className="text-white text-sm">Quickly jump back to original messages for full context</div>
            <div className="text-white text-sm">Sort your AI content into easy-to-navigate folders</div>
          </div>
        </motion.div>
      </div>

      {/* Bouncing Arrow */}
      <motion.div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-12 h-12 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
