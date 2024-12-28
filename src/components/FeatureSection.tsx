import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import VimeoPlayer from "./VimeoPlayer";

interface Feature {
  title: string;
  description: string;
  videoUrl?: string;
  vimeoEmbed?: boolean;
  vimeoId?: string;
  align: "left" | "right";
}

const features: Feature[] = [
  {
    title: "Message Bookmarking & Highlighting Tool",
    description: "<ul class='space-y-2 list-disc pl-4'><li>Bookmark entire messages via the bookmarking icon.</li><li>Highlight specific sentences and save them directly to a folder using a popup.</li></ul>",
    vimeoEmbed: true,
    vimeoId: "1041458304",
    align: "left"
  },
  {
    title: "Add Context with Sticky Notes",
    description: "<ul class='space-y-2 list-disc pl-4'><li>Annotate saved messages with reminders or extra details.</li><li>Toggle Sticky Notes' visibility to maintain a clean workspace.</li></ul>",
    vimeoEmbed: true,
    vimeoId: "1041460649",
    align: "right"
  },
  {
    title: "Timeline View",
    description: "Plan your issues by scheduling milestones and see the progress in a timeline.",
    vimeoEmbed: true,
    vimeoId: "1041463171",
    align: "left"
  },
  {
    title: "Analytics Dashboard",
    description: "Get insights into your team's performance with detailed analytics and reports.",
    vimeoEmbed: true,
    vimeoId: "1041464413",
    align: "right"
  }
];

const FeatureSection = () => {
  return (
    <section className="pt-0 pb-24">
      {/* Features */}
      <div className="space-y-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col gap-12"
          >
            {/* Content */}
            <div className={`flex items-center justify-between max-w-7xl mx-auto w-full px-8 lg:px-12 ${
              feature.align === "right" ? "flex-row-reverse" : ""
            }`}>
              <div className="max-w-lg space-y-4">
                <h3 className="text-3xl font-bold tracking-tight whitespace-nowrap">{feature.title}</h3>
                <p 
                  className="text-lg text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            </div>

            {/* Video */}
            <div className="w-full">
              <div className="max-w-[90vw] mx-auto rounded-xl glass-dark overflow-hidden">
                {feature.vimeoEmbed && feature.vimeoId ? (
                  <VimeoPlayer videoId={feature.vimeoId} />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[600px] object-cover"
                  >
                    <source src={feature.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;