import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        className="container mx-auto px-4"
      >
        <Tabs defaultValue="bookmarking" className="w-full space-y-8">
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <TabsList className="h-auto flex-wrap gap-2 bg-background/5 p-2 md:flex-nowrap">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 text-sm md:text-base whitespace-normal text-center min-h-[44px]"
                >
                  {feature.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content */}
          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="space-y-8 focus-visible:outline-none focus-visible:ring-0"
            >
              {/* Description Container */}
              <div className="max-w-2xl mx-auto px-6">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 text-left text-primary">
                  {feature.title}
                </h3>
                
                {/* Description List */}
                <ul className="space-y-4 text-left min-h-[120px] list-none">
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
              <div className="max-w-[90vw] mx-auto rounded-xl glass-dark overflow-hidden">
                <VimeoPlayer videoId={feature.vimeoId} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
};

export default FeatureSection;