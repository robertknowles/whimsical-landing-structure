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
    title: "Save Specific Messages",
    description: "<ul class='space-y-2 list-disc pl-4'><li>Bookmark individual messages or key snippets.</li><li>Save only what matters, without the clutter of entire conversations.</li><li>Quickly access saved insights for reference.</li></ul>",
    vimeoEmbed: true,
    vimeoId: "1041458304",
    align: "left"
  },
  {
    title: "List View",
    description: "Browse your issues and group them by labels, assignees, milestones, and more.",
    vimeoEmbed: true,
    vimeoId: "1041460649",
    align: "right"
  },
  {
    title: "Timeline View",
    description: "Plan your issues by scheduling milestones and see the progress in a timeline.",
    videoUrl: "/placeholder.mp4",
    align: "left"
  },
  {
    title: "Analytics Dashboard",
    description: "Get insights into your team's performance with detailed analytics and reports.",
    videoUrl: "/placeholder.mp4",
    align: "right"
  },
  {
    title: "Collaboration Tools",
    description: "Work together seamlessly with real-time updates and integrated communication tools.",
    videoUrl: "/placeholder.mp4",
    align: "left"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-24">
      {/* Header */}
      <div className="text-center mb-24 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Powerful Features
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Everything you need to manage your projects effectively, all in one place
        </motion.p>
      </div>

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
            <div className={`flex items-center justify-between max-w-7xl mx-auto w-full px-4 ${
              feature.align === "right" ? "flex-row-reverse" : ""
            }`}>
              <div className="max-w-lg space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">{feature.title}</h3>
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