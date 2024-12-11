import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ArrowRight, Code, Zap, Shield } from "lucide-react";

const Index = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-sm font-medium"
          >
            Introducing Our New Platform
          </motion.div>
          
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
          >
            Supercharged Development Experience
          </motion.h1>
          
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Build faster and smarter with our next-generation development platform. Experience seamless integration, powerful tools, and enhanced productivity.
          </motion.p>
          
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="glass hover:bg-white/20"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-dark"
            >
              <Github className="mr-2 h-4 w-4" /> View on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
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

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
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