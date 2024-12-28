import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VimeoPlayer from "./VimeoPlayer";
import { Plus, Minus } from "lucide-react";

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
        className="container mx-auto"
      >
        <Tabs defaultValue="bookmarking" className="w-full space-y-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs Navigation */}
            <div className="lg:w-1/3">
              <TabsList className="flex flex-col w-full bg-background/5 p-2 h-auto gap-2">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="group w-full h-[32px] flex items-center justify-between glass hover:bg-white/20 data-[state=active]:bg-white/20 px-6 py-2 text-sm whitespace-normal text-left rounded-md transition-all duration-200"
                  >
                    <span className="flex-grow font-semibold text-white/90">{feature.title}</span>
                    <span className="ml-2 opacity-70">
                      <Plus className="h-4 w-4 group-data-[state=inactive]:block group-data-[state=active]:hidden" />
                      <Minus className="h-4 w-4 group-data-[state=inactive]:hidden group-data-[state=active]:block" />
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Description Container */}
            <div className="lg:w-2/3 flex items-center">
              {features.map((feature) => (
                <TabsContent
                  key={feature.id}
                  value={feature.id}
                  className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                >
                  <ul className="space-y-4 text-left list-none">
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
                </TabsContent>
              ))}
            </div>
          </div>

          {/* Video Container */}
          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
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