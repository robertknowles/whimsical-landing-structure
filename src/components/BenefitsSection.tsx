
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const comparisonItems = [
    {
      gptWorkspace: "Bookmark specific messages and highlights",
      others: "Save entire chat channels only"
    },
    {
      gptWorkspace: "Add contextual notes to any message",
      others: "No way to highlight specific insights"
    },
    {
      gptWorkspace: "Organize with folders and quick navigation",
      others: "Limited organization capabilities"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
        >
          How We Compare
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-dark rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 text-center">
              <div className="bg-emerald-500/20 p-4 md:p-6 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-emerald-500">GPT Workspace</h3>
              </div>
              <div className="bg-[#ea384c]/20 p-4 md:p-6 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-[#ea384c]">Other ChatGPT Extensions</h3>
              </div>
            </div>
            
            {/* Table Body */}
            {comparisonItems.map((item, index) => (
              <div key={index} className="grid grid-cols-2 border-b border-white/10 last:border-b-0">
                <div className="p-4 md:p-6 flex items-center">
                  <span className="mr-3 text-emerald-500">✓</span>
                  <span>{item.gptWorkspace}</span>
                </div>
                <div className="p-4 md:p-6 flex items-center border-l border-white/10">
                  <span className="mr-3 text-[#ea384c]">✗</span>
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
