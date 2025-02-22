
import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <motion.h1
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-4xl md:text-6xl font-bold mb-6 text-gradient text-left"
    >
      Organise ChatGPT's <br />
      <span className="text-emerald-500">Best Insights</span>
    </motion.h1>
  );
};

export default HeroTitle;
