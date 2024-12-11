import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Browser } from "lucide-react";

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto px-4 pt-20 pb-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={fadeUpVariants}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-sm font-medium mx-auto"
        >
          Introducing Our New Platform
        </motion.div>
        
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
        >
          Supercharged Development Experience
        </motion.h1>
        
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Build faster and smarter with our next-generation development platform. Experience seamless integration, powerful tools, and enhanced productivity.
        </motion.p>
        
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            className="glass hover:bg-white/20"
          >
            <Browser className="mr-2 h-4 w-4" /> Add to Browser
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;