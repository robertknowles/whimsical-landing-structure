
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
        <p>Drowning in endless ChatGPT messages? Organise your conversations so you never lose a key idea again.</p>
      </div>

      <div className="text-white space-y-4">
        <div className="flex items-start gap-2">
          <span className="half-highlight">Bookmark Key Messages:</span> Save crucial insights—from research notes to code snippets.
        </div>
        <div className="flex items-start gap-2">
          <span className="half-highlight">Highlight Essential Points:</span> Capture takeaways instantly without endless scrolling.
        </div>
        <div className="flex items-start gap-2">
          <span className="half-highlight">Intuitive Organization:</span> Sort your AI content into easy-to-navigate folders.
        </div>
        <div className="flex items-start gap-2">
          <span className="half-highlight">Sticky Notes:</span> Add personal context to your saved conversations.
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;
