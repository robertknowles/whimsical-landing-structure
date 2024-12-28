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
      "Toggle visibility to maintain a clean workspace while keeping your annotations handy."
    ],
    vimeoId: "1041460649"
  },
  {
    id: "folders",
    title: "Folder Organization",
    description: [
      "Create and manage folders to group related messages and notes.",
      "Use our drag-and-drop interface for seamless organization of your saved content."
    ],
    vimeoId: "1041463171"
  },
  {
    id: "navigation",
    title: "Smart Navigation",
    description: [
      "Preview saved messages instantly.",
      "Jump to original chat locations with a single click.",
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
              {/* Description - Above video */}
              <div className="max-w-2xl mx-auto text-center mb-8">
                <ul className="space-y-2 list-disc text-left inline-block text-lg text-muted-foreground">
                  {feature.description.map((point, index) => (
                    <li key={index}>{point}</li>
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