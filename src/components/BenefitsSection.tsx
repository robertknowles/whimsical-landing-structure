import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Competitor Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card bg-[#ea384c]/10 border-[#ea384c]/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#ea384c]">Other Tools</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                Save entire chat channels only
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                No way to highlight specific insights
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                Limited organization capabilities
              </li>
            </ul>
          </motion.div>

          {/* Our App Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card bg-emerald-500/10 border-emerald-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-500">Our Extension</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                Bookmark specific messages and highlights
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                Add contextual notes to any message
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                Organize with folders and quick navigation
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;