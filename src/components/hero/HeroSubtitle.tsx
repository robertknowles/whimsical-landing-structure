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
      <span className="half-highlight">Effortlessly Bookmark ChatGPT's best ideas</span>
      <span className="half-highlight">Pin Sticky Notes to capture and organise your thoughts</span>
      <span className="half-highlight">Use Folders for seamless organisation and productivity</span>
    </motion.p>
  );
};

export default HeroSubtitle;