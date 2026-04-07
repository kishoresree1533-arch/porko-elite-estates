import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10 flex items-center justify-center font-heading font-bold text-background text-lg">
                P
              </div>
              <div>
                <span className="font-heading font-bold text-lg block tracking-wide">Porko</span>
                <span className="text-background/40 text-[10px] block tracking-widest uppercase">Construction & Estate</span>
              </div>
            </div>
            <p className="text-background/50 text-sm leading-relaxed mb-6">
              Crafting architecturally refined living spaces with uncompromising quality and meticulous attention to detail since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-6 text-background/80">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Estate", "Interiors", "Construction", "Projects", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-background/50 hover:text-background text-sm transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-6 text-background/80">Services</h4>
            <div className="flex flex-col gap-3">
              {["House Construction", "Interior Design", "Real Estate", "Renovation", "Architecture", "Project Management"].map((item) => (
                <span key={item} className="text-background/50 text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-6 text-background/80">Contact</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/40 shrink-0 mt-0.5" />
                <span className="text-background/50 text-sm">123 Construction Ave, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/40 shrink-0" />
                <span className="text-background/50 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/40 shrink-0" />
                <span className="text-background/50 text-sm">info@porkoconstruction.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/30 text-sm">
            © 2026 Porko Construction & Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-background/30 text-sm hover:text-background/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-background/30 text-sm hover:text-background/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
