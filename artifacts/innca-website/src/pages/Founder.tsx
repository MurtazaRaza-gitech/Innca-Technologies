import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Founder() {
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
          className="text-5xl md:text-7xl font-bold"
        >
          Meet The Founder
        </motion.h1>
      </section>

      {/* Founder Card */}
      <section className="py-12 px-6 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center md:items-start"
          >
            <div className="shrink-0 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-xl opacity-30" />
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-background shadow-2xl relative z-10">
                <AvatarImage src="https://drive.google.com/uc?export=view&id=1vKw81k19cLKaXE2iwLKMtW0xOa2yisn3" alt="Malik Muhammad Shehram" className="object-cover" />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent font-bold">MS</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Malik Muhammad Shehram</h2>
              <p className="text-xl text-primary font-medium mb-8">Founder & Chief Executive Officer</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With a deep passion for technology and an uncompromising standard for quality, Malik founded INNCA Technologies to build the next generation of digital products. His vision is rooted in the belief that great software is indistinguishable from magic, and that Pakistani engineering can compete on the highest global stages.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 text-xl md:text-2xl font-medium italic bg-gradient-to-r from-primary/10 to-transparent rounded-r-xl">
                "Every breakthrough begins as an idea. The future belongs to those willing to build it."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Vision */}
      <section className="py-24 px-6 relative z-10">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h3 className="text-3xl font-bold mb-8">A Vision for Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              At INNCA, the goal has never been just to start a company. The goal is to build an institution. We operate with a fundamental belief that details matter, that design is how it works, and that technology should serve humanity seamlessly. Malik's leadership ensures that every product we ship carries this DNA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-24 px-6 bg-white/[0.02] relative z-10 border-t border-white/5">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12"
          >
            Areas of Expertise
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Entrepreneurship", "Product Strategy", "Technology Innovation",
              "Business Development", "Leadership", "Emerging Technologies", "Artificial Intelligence"
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: i * 0.05 } }
                }}
                className="px-6 py-3 rounded-full bg-card border border-white/10 font-medium text-lg shadow-lg hover:border-primary/50 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
