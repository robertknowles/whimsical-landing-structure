import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bookmark, StickyNote, FolderTree, Chrome } from "lucide-react";

const HeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      icon: Bookmark,
      title: "Save Key Snippets",
      description: (<>
        <span className="text-emerald-500">Bookmark</span> entire messages or use our <span className="text-emerald-500">Highlighting Tool</span> to capture specific sentences with precision.
      </>),
    },
    {
      icon: StickyNote,
      title: "Add Context",
      description: (<>
        Pin <span className="text-emerald-500">Sticky Notes</span> to messages to annotate them with reminders or insights.
      </>),
    },
    {
      icon: FolderTree,
      title: "Stay Organised",
      description: (<>
        Group saved messages and sticky notes into an intuitive <span className="text-emerald-500">Folder Structure</span> for easy access.
      </>),
    }
  ];

  return (
    <section className="container mx-auto px-4 pt-16 pb-48">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
        >
          A browser extension<br />
          to <span className="text-emerald-500">organise insights</span><br />
          in <span className="text-white">ChatGPT</span>
        </motion.h1>
        
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto"
        >
          Transform endless ChatGPT conversations into clear, actionable insights
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          variants={fadeUpVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="glass-card hover-card"
            >
              <benefit.icon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap gap-4 justify-center relative"
        >
          <div className="relative inline-block">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative opacity-50 text-lg px-8 py-3"
              disabled
            >
              <Chrome className="w-8 h-8 mr-2" />
              Add to Browser
            </Button>
            <motion.div
              initial={{ opacity: 0, rotate: -10, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-4 py-0.5 rounded-full text-white text-sm font-medium rotate-[-10deg] shadow-lg"
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