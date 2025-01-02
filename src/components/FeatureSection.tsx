import { useState } from "react";
import { motion } from "framer-motion";
import FeatureCard from "./features/FeatureCard";
import FeatureVideo from "./features/FeatureVideo";
import FeatureDescription from "./features/FeatureDescription";
import { features } from "./features/featureData";

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8"
        >
          Tools to Simplify Your Workflow
        </motion.h2>

        <FeatureDescription />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4 order-1"
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                isSelected={selectedFeature?.id === feature.id}
                onClick={() => setSelectedFeature(selectedFeature?.id === feature.id ? null : feature)}
              />
            ))}
          </motion.div>

          {/* Video Display */}
          <div className="lg:sticky lg:top-24 order-2 mb-8 lg:mb-0">
            <FeatureVideo videoId={selectedFeature?.vimeoId || features[0].vimeoId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;