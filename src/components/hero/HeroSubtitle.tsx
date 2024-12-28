import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return (
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto"
    >
      A browser extension to <span className="half-highlight">save specific messages</span>,{" "}
      <span className="half-highlight">highlight key moments</span>, and{" "}
      <span className="half-highlight">organise ideas</span>- in your endless chatGPT
      conversation
    </motion.p>
  );
};

export default HeroSubtitle;