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
        The only browser extension designed to <span className="half-highlight">bookmark specific messages</span>, <span className="half-highlight">pin contextual notes</span>, <span className="half-highlight">organise and navigate ideas seamlessly</span>.
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;