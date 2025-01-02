import { motion } from "framer-motion";

const FeatureDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-lg md:text-xl text-muted-foreground mb-16 text-left"
    >
      <p>
        ChatGPT is generating greater insights than ever. Struggling to stay organised means missing out on them. Unlike tools that only save entire chat channels, we go deeper- allowing users to save, organise, and retrieve specific ideas effortlessly.
      </p>
    </motion.div>
  );
};

export default FeatureDescription;