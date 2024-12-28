import { motion } from "framer-motion";
import { MessageSquare, Highlighter, StickyNote, FolderTree, Navigation } from "lucide-react";
import BenefitCard from "./hero/BenefitCard";
import LaunchingSoonButton from "./hero/LaunchingSoonButton";

const HeroSection = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Message Bookmarking",
      description: "Bookmark entire messages to save key moments.",
    },
    {
      icon: Highlighter,
      title: "Highlighting Tool",
      description: "Highlight specific sentences with precision.",
    },
    {
      icon: StickyNote,
      title: "Sticky Notes",
      description: "Pin notes to messages for reminders or insights.",
    },
    {
      icon: FolderTree,
      title: "Folder System",
      description: "Organize messages and notes into folders.",
    },
    {
      icon: Navigation,
      title: "Navigation",
      description: "Jump back to original messages easily.",
    }
  ];

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
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
        >
          Turn ChatGPT <br />
          overload into <span className="text-emerald-500">organized</span>,<br />
          <span className="text-white">actionable insights</span>
        </motion.h1>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto"
        >
          A browser extension to save specific messages, highlight key moments, and organise ideas- in your endless chatGPT conversation
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[800px] mx-auto">
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
          
          {/* Bottom row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[532px] mx-auto">
            {benefits.slice(3, 5).map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
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