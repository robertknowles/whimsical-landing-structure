import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

const FeatureCard = ({ id, title, description, icon: Icon, isSelected, onClick }: FeatureCardProps) => {
  return (
    <motion.div
      key={id}
      className={`glass-card cursor-pointer transition-all duration-300 ${
        isSelected ? "bg-white/20" : ""
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4">
        <Icon className="w-6 h-6" />
        <div className="text-left">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;