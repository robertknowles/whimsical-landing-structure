import { motion } from "framer-motion";
import { MessageSquare, Highlighter, StickyNote, FolderTree, Navigation } from "lucide-react";
import BenefitCard from "./BenefitCard";

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

const BenefitsGrid = () => {
  return (
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
  );
};

export default BenefitsGrid;