import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, X } from "lucide-react";

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
          Join the Waitlist
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
          className="flex flex-wrap gap-4 justify-center relative"
        >
          <div className="relative inline-block">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative opacity-50"
              disabled
            >
              <Chrome className="mr-2 h-4 w-4" /> Add to Browser
            </Button>
            <X className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-red-500 stroke-[3]" />
            <motion.div
              initial={{ opacity: 0, rotate: -10, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium rotate-[-10deg] shadow-lg"
            >
              launching soon!
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;