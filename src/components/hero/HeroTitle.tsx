import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <motion.h1
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gradient leading-tight"
    >
      Turn ChatGPT message overload <br className="hidden sm:block" />
      into <span className="text-emerald-500">organised, actionable insights</span>
    </motion.h1>
  );
};

export default HeroTitle;