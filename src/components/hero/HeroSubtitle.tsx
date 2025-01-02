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
      <div className="text-white">
        The only browser extension designed to <span className="half-highlight">bookmark specific messages</span>, <span className="half-highlight">pin contextual notes</span>, <span className="half-highlight">organise and navigate ideas seamlessly</span>.
      </div>

      <div className="mt-8">
        <p>Lost scrolling through endless ChatGPT messages? Struggling to stay on track and keep your train of thought? Overwhelmed by the sheer volume of ideas?</p>
        <p className="mt-4">ChatGPT is generating greater insights than ever. Struggling to stay organised means missing out on them. Unlike tools that only save entire chat channels, we go deeper- allowing users to save, organise, and retrieve specific ideas effortlessly.</p>
      </div>
    </motion.div>
  );
};

export default HeroSubtitle;