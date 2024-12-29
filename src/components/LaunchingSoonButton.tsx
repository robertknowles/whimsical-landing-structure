import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const LaunchingSoonButton = () => {
  return (
    <div className="relative inline-block">
      <Button
        size="lg"
        style={{ backgroundColor: 'rgb(196,250,228)', opacity: 0.5 }}
        className="text-black font-semibold shadow-lg hover:shadow-[rgb(196,250,228)]/20 transition-all duration-300 relative text-lg px-8 py-3"
        disabled
      >
        <Chrome className="w-8 h-8 mr-2" />
        Add to Browser
      </Button>
      <motion.div
        initial={{ opacity: 0, rotate: -10, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-3 py-0.5 rounded-full text-white text-xs font-medium rotate-[-10deg] shadow-lg"
      >
        launching soon!
      </motion.div>
    </div>
  );
};

export default LaunchingSoonButton;