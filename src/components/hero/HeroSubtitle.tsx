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
        The only extension to bookmark specific messages, pin contextual notes and navigate effortlessly.
      </span>

      <p className="mt-8">
        ChatGPT generates more insights than ever, but keeping track is overwhelming. Important ideas get buried, context is lost, and conversations turn chaotic. Unlike other tools that only save entire chat channels, our extension gives you precision and control.
      </p>
    </motion.div>
  );
};

export default HeroSubtitle;