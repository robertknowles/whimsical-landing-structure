
import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return <motion.div variants={{
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }} className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl text-left">
      <div className="mb-4">
        <p>Struggling to keep track of ChatGPT's most valuable responses?</p>
        <p className="mt-2">Tired of endlessly scrolling just to uncover that breakthrough insight?</p>
      </div>

      <div className="text-white space-y-2">
        <p className="font-semibold mb-2 text-sm md:text-base">Stop losing your most valuable ideas in the clutter.</p>
        <ul className="space-y-1">
          <li className="flex items-start gap-2 text-sm md:text-base">
            <span className="text-muted-foreground mt-1">•</span>
            <div>
              <span className="half-highlight">Bookmark Key Messages:</span> Save crucial insights—from research notes to code snippets.
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base">
            <span className="text-muted-foreground mt-1">•</span>
            <div>
              <span className="half-highlight">Highlighting Tool:</span> Capture essential sentences instantly without endless scrolling.
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base">
            <span className="text-muted-foreground mt-1">•</span>
            <div>
              <span className="half-highlight">Intuitive Organisation:</span> Sort your AI content into easy-to-navigate folders.
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base">
            <span className="text-muted-foreground mt-1">•</span>
            <div>
              <span className="half-highlight">Sticky Notes:</span> Add personal context to your saved conversations.
            </div>
          </li>
          <li className="flex items-start gap-2 text-sm md:text-base">
            <span className="text-muted-foreground mt-1">•</span>
            <div>
              <span className="half-highlight">Workspaces & Templates:</span> Jump-start any project—whether you're writing essays, conducting research, or developing code—with ready-made structures that adapt to your workflow.
            </div>
          </li>
        </ul>
      </div>
    </motion.div>;
};

export default HeroSubtitle;
