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
      ChatGPT is generating more insights than ever- but keeping track is overwhelming. Important ideas get buried, context is lost, and conversations become chaotic. Don't miss your best ideas- <span className="half-highlight">bookmark</span>, <span className="half-highlight">organise</span>, and <span className="half-highlight">retrieve</span> them effortlessly with our browser extension.
    </motion.p>
  );
};

export default HeroSubtitle;