import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="space-y-12"
      >
        {/* Pricing Header */}
        <div className="text-center space-y-4">
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Choose the plan that's right for you
          </motion.p>
        </div>

        {/* Pricing Boxes */}
        <motion.div
          variants={fadeUpVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* Starter Plan */}
          <div className="glass-card hover-card bg-[#E5DEFF]/10">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-6">$0</div>
            <p className="text-muted-foreground mb-6">Perfect for getting started</p>
            <Button className="w-full glass hover:bg-white/20">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="glass-card hover-card bg-[#FFDEE2]/10">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-6">$29</div>
            <p className="text-muted-foreground mb-6">For growing teams</p>
            <Button className="w-full glass hover:bg-white/20">Get Started</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-card hover-card bg-[#D3E4FD]/10">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">$99</div>
            <p className="text-muted-foreground mb-6">For large organizations</p>
            <Button className="w-full glass hover:bg-white/20">Contact Sales</Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;