import { motion } from "framer-motion";
import { Lightbulb, RefreshCw, Target, Clock, BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const timelineData = [
  { year: "2024", title: "The Inception", desc: "INNCA Technologies is founded in Pakistan with a mission to build world-class tech." },
  { year: "2025", title: "Building the Foundation", desc: "Establishing our core team, initial product lineup, and research frameworks." },
  { year: "2026", title: "Global Expansion", desc: "Scaling our platforms and extending our reach to international markets." },
  { year: "Beyond", title: "Continuous Innovation", desc: "Pushing boundaries in AI and emerging tech for decades to come." }
];

const lessons = [
  { icon: Lightbulb, title: "Ideas Need Execution", text: "Brilliance without execution is just a thought." },
  { icon: RefreshCw, title: "Iterate Relentlessly", text: "Perfection is a process, not a starting point." },
  { icon: Target, title: "Focus on Impact", text: "Build things that genuinely improve lives." },
  { icon: Clock, title: "Think Long-Term", text: "Short-term wins shouldn't compromise long-term vision." },
  { icon: BookOpen, title: "Never Stop Learning", text: "The tech landscape shifts; we must shift with it." },
];

export default function OurStory() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen w-full relative"
    >
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          From Vision To Venture
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          The story of how a relentless pursuit of excellence birthed a new kind of technology company.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10 w-full">
        <div className="relative">
          {/* Animated Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2"
          />

          <div className="space-y-24">
            {timelineData.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-12 h-12 absolute left-6 md:left-1/2 -translate-x-1/2 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,203,164,0.4)]">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-bold mb-4 border border-primary/30">
                      {item.year}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.desc}</p>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lessons We Believe In */}
      <section className="py-32 px-6 bg-secondary/20 relative z-10 mt-12">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Lessons We Believe In</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-colors"
              >
                <lesson.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">{lesson.title}</h3>
                <p className="text-muted-foreground">{lesson.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
