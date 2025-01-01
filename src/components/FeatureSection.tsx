import { useState } from "react";
import { motion } from "framer-motion";
import VimeoPlayer from "./VimeoPlayer";
import { MessageSquare, Highlighter, StickyNote, FolderTree, Navigation } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  vimeoId: string;
}

const features: Feature[] = [
  {
    id: "bookmarking",
    title: "Message Bookmarking",
    description: "Bookmark entire messages and save directly to folders.",
    icon: MessageSquare,
    vimeoId: "1041458304"
  },
  {
    id: "highlighting",
    title: "Highlighting Tool",
    description: "Highlight specific sentences for quick reference.",
    icon: Highlighter,
    vimeoId: "1041460649"
  },
  {
    id: "sticky-notes",
    title: "Sticky Notes",
    description: "Add context to saved messages with customizable sticky notes.",
    icon: StickyNote,
    vimeoId: "1041463171"
  },
  {
    id: "folders",
    title: "Folder Organization",
    description: "Create and manage folders to group related messages and notes.",
    icon: FolderTree,
    vimeoId: "1041464413"
  },
  {
    id: "navigation",
    title: "Smart Navigation",
    description: "Preview saved messages instantly with a single click.",
    icon: Navigation,
    vimeoId: "1041464413"
  }
];

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Powerful Features
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              const isSelected = selectedFeature.id === feature.id;
              
              return (
                <motion.div
                  key={feature.id}
                  className={`glass-card cursor-pointer transition-all duration-300 ${
                    isSelected ? "bg-white/20" : ""
                  }`}
                  onClick={() => setSelectedFeature(feature)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-6 h-6" />
                    <div className="text-left">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Video Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center"
          >
            <div className="w-full">
              <VimeoPlayer videoId={selectedFeature.vimeoId} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;