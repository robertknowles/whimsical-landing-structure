import { motion } from "framer-motion";
import { Grid, DollarSign, HelpCircle, Download, Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FAQSection from "@/components/FAQSection";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Index = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Menu Bar */}
      <Menubar className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-4 glass border-none">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <Grid className="mr-2 h-4 w-4 text-emerald-500" />
            Features
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <DollarSign className="mr-2 h-4 w-4 text-emerald-500" />
            Pricing
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <HelpCircle className="mr-2 h-4 w-4 text-emerald-500" />
            FAQ
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <Download className="mr-2 h-4 w-4 text-emerald-500" />
            Download
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="glass-card hover-card"
            >
              <feature.icon className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <div className="container mx-auto px-4">
        <FeatureSection />
      </div>

      {/* Pricing Section */}
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

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>© 2024 Your Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Code,
    title: "Modern Development",
    description: "Write better code with modern tools and frameworks designed for today's development needs.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure and caching system.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Rest easy with enterprise-grade security features and compliance standards built-in.",
  },
];

export default Index;