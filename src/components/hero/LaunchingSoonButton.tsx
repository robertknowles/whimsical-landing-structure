import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";

const LaunchingSoonButton = () => {
  return (
    <div className="relative flex justify-center w-full mt-12">
      <Button
        size="lg"
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative opacity-50 text-xl px-12 py-6 h-auto"
        disabled
      >
        <Chrome className="w-10 h-10 mr-3" />
        Add to Browser
      </Button>
      <motion.div
        initial={{ opacity: 0, rotate: -10, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium rotate-[-10deg] shadow-lg"
      >
        launching soon!
      </motion.div>
    </div>
  );
};

export default LaunchingSoonButton;