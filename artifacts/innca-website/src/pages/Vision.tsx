import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Vision() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen w-full relative"
    >
      <div className="absolute inset-0 h-[600px] overflow-hidden -z-10">
        <AuroraBackground />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Our Vision
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium"
        >
          To be the catalyst for the next era of technological advancement, creating solutions that are as elegant as they are powerful.
        </motion.p>
      </section>

      {/* A Vision Beyond Products */}
      <section className="py-24 px-6 relative z-10">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Vision Beyond Products</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just want to build software. We want to shape the digital fabric of tomorrow. We believe that technology should:
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              "Empower human potential, not replace it.",
              "Be accessible, intuitive, and beautifully designed.",
              "Scale responsibly and sustainably.",
              "Solve real problems with profound elegance."
            ].map((point, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { delay: i * 0.1 } }
                }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(0,203,164,0.8)]" />
                <p className="text-xl md:text-2xl font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-24 px-6 bg-card/20 relative z-10">
        <div className="container mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold mb-12 text-center"
          >
            Strategic Priorities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Product Innovation", desc: "Building what hasn't been built." },
              { title: "AI Integration", desc: "Intelligent systems across all verticals." },
              { title: "Global Expansion", desc: "Reaching beyond borders." },
              { title: "Sustainable Growth", desc: "Scaling with integrity." }
            ].map((priority, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="p-8 rounded-2xl bg-background/50 border border-white/10 text-center group hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-2">{priority.title}</h3>
                <p className="text-muted-foreground">{priority.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Success Means */}
      <section className="py-32 px-6 relative z-10">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold mb-8"
          >
            What Success Means To Us
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-16"
          >
            Success isn't just about revenue; it's about impact, quality, and legacy.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { value: "100%", label: "Quality Focus" },
              { value: "0", label: "Compromises" },
              { value: "Global", label: "Reach" },
              { value: "Infinite", label: "Potential" },
              { value: "Future", label: "Proof" }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1, type: "spring" } }
                }}
                className="px-8 py-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md"
              >
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
