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
      Chat GPT is generating more insights than ever- but keeping track of them is overwhelming. Important ideas get buried, context gets lost and conversations become chaotic. <span className="half-highlight">Bookmark</span>, <span className="half-highlight">organise</span> and <span className="half-highlight">retrieve</span> your key insights effortlessly with our browser extension.
    </motion.p>
  );
};

export default HeroSubtitle;