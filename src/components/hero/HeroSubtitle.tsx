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
      <div className="text-white">
        The only extension to <span className="half-highlight">bookmark specific messages</span>, <span className="half-highlight">pin contextual notes</span> and <span className="half-highlight">navigate effortlessly</span>.
      </div>

      <div className="mt-8 space-y-4">
        <p>ChatGPT generates more insights than ever, but keeping track is overwhelming.</p>
        <p>Important ideas get buried, context is lost, and conversations turn chaotic.</p>
        <p>Unlike other tools that only save entire chat channels, our extension gives you precision and control.</p>
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;