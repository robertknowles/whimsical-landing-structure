import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide to begin using our platform.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for your convenience.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on all our plans so you can test out all features before committing.",
    },
  ];

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
        {/* FAQ Header */}
        <div className="text-center space-y-4">
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Everything you need to know about our platform
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          variants={fadeUpVariants}
          className="max-w-3xl mx-auto glass-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;