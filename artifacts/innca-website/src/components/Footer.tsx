import { Link } from "wouter";
import { SiWhatsapp } from "react-icons/si";
import { Mail, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/30 backdrop-blur-md mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                INNCA Technologies
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-md">
              Building innovative technology for a smarter and more connected future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/our-story" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/vision" className="hover:text-primary transition-colors">Vision</Link></li>
              <li><Link href="/innovation-lab" className="hover:text-primary transition-colors">Innovation Lab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/m-shehram-6a706639b/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/+923127641850" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a href="mailto:innca.tech@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              Pakistan
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 INNCA Technologies. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
