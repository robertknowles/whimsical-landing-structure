
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
  verified?: boolean;
  className?: string;
}

const Testimonial = ({ name, text, verified = true, className = "" }: TestimonialProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover-card ${className}`}
    >
      <p className="mb-4 text-sm md:text-base">{text}</p>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-medium mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          {verified && (
            <div className="flex items-center text-xs text-muted-foreground">
              <svg viewBox="0 0 24 24" className="w-3 h-3 mr-1 text-emerald-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75 12.75L10 15.25L16.25 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Verified review
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Daniel",
      text: "As a busy professional juggling multiple projects, Easy Folders has been a life saver!",
      className: "md:mt-0"
    },
    {
      name: "Manuel",
      text: "Great extension. Just what I was looking. All of my chats in a nice and neat overview.",
      className: "md:mt-16"
    },
    {
      name: "Sidney",
      text: "This extension has changed the game for me, my biggest qualm with ChatGPT has been the lack of organization, and with this extension its made organizing things so intuitive (and colorful).",
      className: "md:mt-8"
    },
    {
      name: "Josh",
      text: "This is exactly what I have been looking for! I can finally organize my chats into meaningful categories using folders. Purchased lifetime and being able to access my folders on multiple machines is well worth it. One of the best organization tools for ChatGPT for sure",
      className: "md:mt-24"
    },
    {
      name: "Helen",
      text: "A great tool for ChatGPT power users.",
      className: "md:mt-12"
    },
    {
      name: "Paul",
      text: "Easy Folders is a must-have extension for anyone who values organization.",
      className: "md:mt-20"
    },
    {
      name: "Paulo",
      text: "This extension has revolutionized my use of ChatGPT by introducing an incredibly simple yet effective way to organize conversations into folders.",
      className: "md:mt-16"
    },
    {
      name: "Maggie",
      text: "Super clean, really easy to use. I would recommend this to anyone looking to clean up their chats without adding MORE clutter. The ability to colour code and add subfolders is a nice touch. If I could give it 6 stars... I would.",
      className: "md:mt-28"
    },
    {
      name: "David",
      text: "Easy Folders has been the find of a year!",
      className: "md:mt-4"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="space-y-8 md:space-y-12"
      >
        {/* Section Header */}
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join thousands of satisfied users who love Easy Folders
          </motion.p>
        </div>

        {/* Testimonial Grid - Waterfall Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              className={testimonial.className}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
