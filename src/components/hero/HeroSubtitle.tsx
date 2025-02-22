
import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl text-left"
    >
      <div className="mb-6">
        <p>Drowning in endless ChatGPT messages? Organise your conversations so you never lose a key idea again.</p>
      </div>

      <div className="text-white space-y-3">
        <p className="font-semibold mb-3 text-sm md:text-base">How AI power users save every breakthrough:</p>
        <div className="flex items-start gap-2 text-sm md:text-base">
          <span className="half-highlight">Bookmark Key Messages:</span> Save crucial insights—from research notes to code snippets.
        </div>
        <div className="flex items-start gap-2 text-sm md:text-base">
          <span className="half-highlight">Highlighting Tool:</span> Capture essential sentences instantly without endless scrolling.
        </div>
        <div className="flex items-start gap-2 text-sm md:text-base">
          <span className="half-highlight">Intuitive Organisation:</span> Sort your AI content into easy-to-navigate folders.
        </div>
        <div className="flex items-start gap-2 text-sm md:text-base">
          <span className="half-highlight">Sticky Notes:</span> Add personal context to your saved conversations.
        </div>
        <div className="flex items-start gap-2 text-sm md:text-base">
          <span className="half-highlight">Workspaces & Templates:</span> Jump-start any project—whether you're writing essays, conducting research, or developing code—with ready-made structures that adapt to your workflow.
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;
