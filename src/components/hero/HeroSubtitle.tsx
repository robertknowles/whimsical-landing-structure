
import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-left"
    >
      <div className="mb-8">
        <p>Struggling to keep track of ChatGPT's most valuable responses? Tired of endlessly scrolling just to uncover that breakthrough insight?</p>
      </div>

      <div className="text-white">
        <span className="text-emerald-500">Bookmark or Highlight:</span> Save key snippets- from research notes to code.<br/>
        <span className="text-emerald-500">Pin Sticky Notes:</span> Attach personal context and keep your train of thought.<br/>
        <span className="text-emerald-500">Ready-Made Workspaces:</span> Organise projects, from essays to research and code.<br/>
        <span className="text-emerald-500">Message Navigation:</span> Quickly jump back to original messages for full context.<br/>
        <span className="text-emerald-500">Folder Organisation:</span> Sort your AI content into easy-to-navigate folders.
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;
