import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return (
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto flex flex-col gap-2"
    >
      <span>Effortlessly <span className="half-highlight">Bookmark</span> ChatGPT's best ideas</span>
      <span>Pin <span className="half-highlight">Sticky Notes</span> to capture and organise your thoughts</span>
      <span>Use <span className="half-highlight">Folders</span> for seamless organisation and productivity</span>
    </motion.p>
  );
};

export default HeroSubtitle;