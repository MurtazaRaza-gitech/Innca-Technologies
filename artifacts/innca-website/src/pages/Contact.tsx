import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { Mail, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll be in touch with you shortly.",
      });
      form.reset();
    }, 1000);
  }

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
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Let's Build Something Meaningful
        </motion.h1>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-6 relative z-10 pb-32">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name <span className="text-muted-foreground font-normal">(Optional)</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary resize-none" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-full py-6 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:scale-[1.02] transition-transform text-white"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/m-shehram-6a706639b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#0A66C2]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">LinkedIn</h4>
                    <p className="text-muted-foreground text-sm">Connect with us</p>
                  </div>
                </a>

                <a href="https://wa.me/+923127641850" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">Chat directly</p>
                  </div>
                </a>

                <a href="http://mail.google.com/mail/u/0/?fs=1&to=innca.tech@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group sm:col-span-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-muted-foreground text-sm">innca.tech@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">We welcome:</h3>
                <ul className="space-y-4">
                  {[
                    "Partnerships & Collaborations",
                    "Investment Discussions",
                    "Business Opportunities",
                    "Media Inquiries",
                    "Professional Networking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
