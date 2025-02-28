
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="pricing" className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="space-y-8 md:space-y-12"
      >
        {/* Pricing Header */}
        <div className="text-center space-y-3 md:space-y-4">
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Choose the plan that's right for you
          </motion.p>
        </div>

        {/* Pricing Boxes */}
        <motion.div
          variants={fadeUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {/* Free Plan */}
          <div className="glass-card hover-card bg-[#E5DEFF]/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Free</h3>
            <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">$0</div>
            <p className="text-sm md:text-base text-muted-foreground mb-6">Perfect for getting started</p>
            
            <ul className="space-y-3 mb-6 text-sm md:text-base">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Create up to 5 folders for organizing messages</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Use 1 sticky note per folder</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Limited access to Canvas feature (one active canvas)</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Basic navigation tools</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Sync folders across 2 devices</span>
              </li>
            </ul>
            
            <Button className="w-full glass hover:bg-white/20 text-white">Get Started</Button>
          </div>

          {/* Paid Plan */}
          <div className="glass-card hover-card bg-[#FFDEE2]/10 relative overflow-hidden">
            <div className="absolute -right-10 top-5 bg-emerald-500 text-white px-10 py-1 rotate-45 text-sm font-semibold">
              POPULAR
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Premium</h3>
            <div className="text-3xl md:text-4xl font-bold mb-2">$10</div>
            <div className="text-sm text-muted-foreground mb-4">AUD/month</div>
            <div className="text-sm font-medium mb-6">or $60 AUD one-time payment (lifetime access)</div>
            
            <ul className="space-y-3 mb-6 text-sm md:text-base">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Create unlimited folders</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Use unlimited sticky notes per folder</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Full access to Canvas feature (unlimited canvases)</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Advanced layouts (essay structures, flowcharts)</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Drag-and-drop message organization</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Advanced navigation with keyword search</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>Priority customer support</span>
              </li>
            </ul>
            
            <Button className="w-full glass hover:bg-white/20 text-white">Get Premium</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
