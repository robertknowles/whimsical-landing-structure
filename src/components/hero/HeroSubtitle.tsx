
import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-xl md:text-2xl text-muted-foreground space-y-4 text-left max-w-2xl"
    >
      <ul className="space-y-3">
        <li>
          <span className="text-emerald-500">Bookmark or Highlight:</span> Save key snippets- from research notes to code.
        </li>
        <li>
          <span className="text-emerald-500">Pin Sticky Notes:</span> Attach personal context and keep your train of thought.
        </li>
        <li>
          <span className="text-emerald-500">Ready-Made Workspaces:</span> Organise projects, from essays to research and code.
        </li>
        <li>
          <span className="text-emerald-500">Message Navigation:</span> Quickly jump back to original messages for full context.
        </li>
        <li>
          <span className="text-emerald-500">Folder Organisation:</span> Sort your AI content into easy-to-navigate folders.
        </li>
      </ul>
    </motion.div>
  );
};

export default HeroSubtitle;
