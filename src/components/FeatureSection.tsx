import { motion } from "framer-motion";
import VimeoPlayer from "./VimeoPlayer";

interface Feature {
  id: string;
  title: string;
  description: string[];
  vimeoId: string;
}

const features: Feature[] = [
  {
    id: "bookmarking",
    title: "Message Bookmarking & Highlighting",
    description: [
      "Bookmark entire messages and save directly to folders.",
      "Highlight specific sentences for quick reference.",
      "Keep track of important information with our intuitive bookmarking system."
    ],
    vimeoId: "1041458304"
  },
  {
    id: "sticky-notes",
    title: "Sticky Notes",
    description: [
      "Add context to saved messages with customizable sticky notes.",
      "Toggle sticky note visibility for a clean workspace.",
      "Organize and manage your thoughts efficiently."
    ],
    vimeoId: "1041460649"
  },
  {
    id: "folders",
    title: "Folder Organization",
    description: [
      "Create and manage folders to group related messages and notes.",
      "Use our drag-and-drop interface for seamless organization.",
      "Keep your content structured and easily accessible."
    ],
    vimeoId: "1041463171"
  },
  {
    id: "navigation",
    title: "Smart Navigation",
    description: [
      "Preview saved messages instantly with a single click.",
      "Jump to original chat locations seamlessly.",
      "Navigate your bookmarks and notes effortlessly."
    ],
    vimeoId: "1041464413"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto space-y-32"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Text Content */}
            <div className="lg:w-1/3 text-left space-y-6">
              <h3 className="text-2xl font-bold text-gradient">{feature.title}</h3>
              <ul className="space-y-4 list-none">
                {feature.description.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-start text-muted-foreground text-base leading-relaxed pl-4 relative"
                  >
                    <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Container */}
            <div className="lg:w-2/3">
              <div className="glass-dark rounded-xl overflow-hidden">
                <VimeoPlayer videoId={feature.vimeoId} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;