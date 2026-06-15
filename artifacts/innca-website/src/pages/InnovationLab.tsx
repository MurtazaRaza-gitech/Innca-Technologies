import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Code2, Sparkles, Database, Shield } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function InnovationLab() {
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
          Building The Future<br />Through Innovation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Our R&D hub where bold ideas are transformed into production-ready technologies.
        </motion.p>
      </section>

      {/* Areas of Focus */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Areas Of Focus
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code2, title: "Software Solutions", desc: "Enterprise-grade web and mobile applications." },
              { icon: Sparkles, title: "AI-Powered Products", desc: "Integrating machine learning into everyday tools." },
              { icon: Database, title: "Digital Platforms", desc: "Robust architectures for scalable services." },
              { icon: Shield, title: "Emerging Technologies", desc: "Web3, IoT, and next-gen security protocols." }
            ].map((area, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="group p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-white/5 hover:bg-card/50 transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.02]">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Research Philosophy
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "User-Centered Design", "Scalability", "Performance",
              "Simplicity", "Accessibility", "Long-Term Impact"
            ].map((tag, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.05 } }
                }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-medium text-lg hover:border-primary/50 transition-colors cursor-default"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Innovate */}
      <section className="py-32 px-6 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            How We Innovate
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 -z-10" />

            {[
              { step: "01", title: "Research", desc: "Deep diving into the problem space." },
              { step: "02", title: "Experimentation", desc: "Rapid prototyping and validation." },
              { step: "03", title: "Execution", desc: "Building to production-grade standards." }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15 } }
                }}
                className="bg-background border border-white/10 p-8 rounded-2xl text-center shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-xl font-bold text-white shadow-[0_0_30px_rgba(0,203,164,0.3)] mb-6">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
