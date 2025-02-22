
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
    </motion.div>
  );
};

export default HeroSubtitle;
