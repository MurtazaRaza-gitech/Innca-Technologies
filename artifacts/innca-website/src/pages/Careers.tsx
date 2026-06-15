import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { TrendingUp, Lightbulb, Heart, Target, Code, Brain, PenTool, Megaphone, Briefcase, FlaskConical } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Careers() {
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
          Join The Journey
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          We are looking for builders, thinkers, and visionaries to help us shape the future of technology.
        </motion.p>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Why Work With Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Growth Opportunities", desc: "Accelerate your career in a fast-paced startup environment." },
              { icon: Lightbulb, title: "Innovation Culture", desc: "Your ideas matter. We encourage experimentation." },
              { icon: Heart, title: "Meaningful Impact", desc: "Build products that real people use and love." },
              { icon: Target, title: "Long-Term Vision", desc: "We're not building for a quick exit. We're building to last." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Of Opportunity */}
      <section className="py-24 px-6 bg-card/20 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Areas Of Opportunity
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "Software Engineering" },
              { icon: Brain, title: "Artificial Intelligence" },
              { icon: PenTool, title: "Product Design" },
              { icon: Megaphone, title: "Marketing" },
              { icon: Briefcase, title: "Business Development" },
              { icon: FlaskConical, title: "Research & Innovation" }
            ].map((area, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.05 } }
                }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-white/5 hover:border-accent/50 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  <area.icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">{area.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-32 px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="inline-block p-[2px] rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient"
        >
          <div className="px-10 py-6 rounded-full bg-background backdrop-blur-xl">
            <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              We're growing. Stay tuned for open positions.
            </h2>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
