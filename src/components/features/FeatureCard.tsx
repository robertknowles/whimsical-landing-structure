import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  expandedDetails: string[];
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

const FeatureCard = ({ 
  id, 
  title, 
  description, 
  expandedDetails = [], // Provide default empty array
  icon: Icon, 
  isSelected, 
  onClick 
}: FeatureCardProps) => {
  return (
    <motion.div
      key={id}
      className={`glass-card cursor-pointer transition-all duration-300 ${
        isSelected ? "bg-white/20" : ""
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <Icon className="w-6 h-6 mt-1 flex-shrink-0" />
        <div className="text-left flex-grow">
          <h3 className="font-semibold mb-2 text-emerald-400">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          
          <AnimatePresence>
            {isSelected && expandedDetails && expandedDetails.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mt-4 text-sm text-muted-foreground">
                  {expandedDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
            isSelected ? "rotate-180" : ""
          }`} 
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;