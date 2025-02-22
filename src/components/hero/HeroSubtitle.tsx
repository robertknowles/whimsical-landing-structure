
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
        <p>Lost scrolling through endless ChatGPT messages? Struggling to stay on track and keep your train of thought?</p>
      </div>

      <div className="text-white">
        <span className="half-highlight">Bookmark or Highlight:</span> Save key snippets- from research notes to code.<br/>
        <span className="half-highlight">Pin Sticky Notes:</span> Attach personal context and keep your train of thought.<br/>
        <span className="half-highlight">Ready-Made Workspaces:</span> Organise projects, from essays to research and code.<br/>
        <span className="half-highlight">Message Navigation:</span> Quickly jump back to original messages for full context.<br/>
        <span className="half-highlight">Folder Organisation:</span> Sort your AI content into easy-to-navigate folders.
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;
