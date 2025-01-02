import { useState } from "react";
import { motion } from "framer-motion";
import FeatureCard from "./features/FeatureCard";
import FeatureVideo from "./features/FeatureVideo";
import FeatureDescription from "./features/FeatureDescription";
import { features } from "./features/featureData";

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          Powerful Features
        </motion.h2>

        <FeatureDescription />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                isSelected={selectedFeature.id === feature.id}
                onClick={() => setSelectedFeature(feature)}
              />
            ))}
          </motion.div>

          {/* Video Display */}
          <FeatureVideo videoId={selectedFeature.vimeoId} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;