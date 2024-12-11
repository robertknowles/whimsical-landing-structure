import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  videoUrl: string;
  align: "left" | "right";
}

const features: Feature[] = [
  {
    title: "Board View",
    description: "Manage your issues in a real-time automated kanban board with a drag and drop interface.",
    videoUrl: "/placeholder.mp4", // Replace with actual video URL
    align: "left"
  },
  {
    title: "List View",
    description: "Browse your issues and group them by labels, assignees, milestones, and more.",
    videoUrl: "/placeholder.mp4", // Replace with actual video URL
    align: "right"
  },
  {
    title: "Timeline View",
    description: "Plan your issues by scheduling milestones and see the progress in a timeline.",
    videoUrl: "/placeholder.mp4", // Replace with actual video URL
    align: "left"
  },
  {
    title: "Analytics Dashboard",
    description: "Get insights into your team's performance with detailed analytics and reports.",
    videoUrl: "/placeholder.mp4", // Replace with actual video URL
    align: "right"
  },
  {
    title: "Collaboration Tools",
    description: "Work together seamlessly with real-time updates and integrated communication tools.",
    videoUrl: "/placeholder.mp4", // Replace with actual video URL
    align: "left"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-24 space-y-32">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex items-center gap-12 ${
            feature.align === "right" ? "flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold tracking-tight">{feature.title}</h3>
            <p className="text-lg text-muted-foreground">{feature.description}</p>
            <button className="group flex items-center text-primary hover:text-primary/80 transition-colors">
              Learn more{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Video */}
          <div className="flex-1 rounded-xl glass-dark overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={feature.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default FeatureSection;