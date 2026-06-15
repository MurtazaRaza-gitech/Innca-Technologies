import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Code, Brain, Globe, Cpu, Lightbulb, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const titleWords = "Building Technology That Shapes the Future".split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen w-full relative"
    >
      <AuroraBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 pt-20 pb-32">
        <div className="container max-w-5xl mx-auto text-center z-10 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Innovation Lab</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            We build world-class digital products, driven by research and defined by excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/vision" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:scale-105 transition-transform">
              Explore Our Vision
            </Link>
            <Link href="/innovation-lab" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-sm">
              Innovation Lab
            </Link>
            <Link href="/founder" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-sm">
              Meet The Founder
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-sm">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* Why INNCA Exists */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-32 px-6 relative z-10 bg-background/50 backdrop-blur-xl border-t border-white/5"
      >
        <div className="container max-w-4xl mx-auto text-center">
          <p className="italic text-muted-foreground mb-8 text-lg">Why INNCA Exists</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-relaxed mb-12">
            "INNCA Technologies was founded on the belief that creativity, technology, and determination can create solutions that improve lives and redefine industries."
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are not just building software; we are building the foundation for the next generation of global businesses. Our commitment to quality and innovation ensures that every product we launch sets a new standard.
          </p>
        </div>
      </motion.section>

      {/* What We Build */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">Pioneering solutions across the digital landscape.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Software Products", icon: Code, desc: "Scalable, secure, and beautiful applications." },
              { title: "Artificial Intelligence", icon: Brain, desc: "Smart systems that learn and adapt." },
              { title: "Digital Platforms", icon: Globe, desc: "Connected ecosystems for modern businesses." },
              { title: "Emerging Technologies", icon: Cpu, desc: "Exploring the bleeding edge of tech." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-10 h-10 text-primary mb-6 relative z-10" />
                <h3 className="text-xl font-semibold mb-3 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 px-6 bg-secondary/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Approach</h2>
              <p className="text-2xl italic text-muted-foreground leading-relaxed">
                Methodical, user-obsessed, and deeply technical. We don't just write code, we craft experiences that matter.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {['Research', 'Creativity', 'Strategy', 'Expertise'].map((pillar, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary text-xl font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{pillar}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose INNCA */}
      <section className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose INNCA</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: "Innovation First", icon: Lightbulb, desc: "We push boundaries and challenge the status quo." },
              { title: "Long-Term Vision", icon: TrendingUp, desc: "Building sustainable tech that outlasts trends." },
              { title: "User-Centered Thinking", icon: Users, desc: "Every decision starts with the people we serve." },
              { title: "Global Perspective", icon: Globe, desc: "World-class standards from day one." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group p-10 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 flex gap-6"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
