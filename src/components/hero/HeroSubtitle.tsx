import { motion } from "framer-motion";

const HeroSubtitle = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto"
    >
      <span className="half-highlight">
        Don't let ideas get buried—bookmark, organise, and retrieve effortlessly.
      </span>

      <p className="mt-4">
        ChatGPT generates more insights than ever, but keeping track is overwhelming. Ideas get buried, context gets lost, and conversations become chaotic. With our browser extension, you can save key messages, highlight important snippets, and stay organised for seamless productivity.
      </p>
    </motion.div>
  );
};

export default HeroSubtitle;