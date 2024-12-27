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
          A browser extension<br />
          to <span className="text-emerald-500">organise insights</span><br />
          in <span className="text-white">ChatGPT</span>
        </motion.h1>
        
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto"
        >
          Transform endless ChatGPT conversations into clear, actionable insights
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 max-w-[1400px] mx-auto"
        >
          {benefits.slice(0, 3).map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-[1000px] mx-auto"
        >
          {benefits.slice(3, 5).map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
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