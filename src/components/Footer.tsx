import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-heading font-bold text-accent-foreground text-lg">
                P
              </div>
              <div>
                <span className="font-heading font-bold text-lg block">Porko</span>
                <span className="text-background/60 text-xs block">Construction & Estate</span>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Building dreams into reality with premium construction, elegant interiors, and prime real estate solutions.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Estate", "Interiors", "Construction", "Projects", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-background/60 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {["House Construction", "Interior Design", "Real Estate", "Renovation", "Architecture", "Project Management"].map((item) => (
                <span key={item} className="text-background/60 text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/60 text-sm">123 Construction Ave, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-background/60 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-background/60 text-sm">info@porkoconstruction.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © 2026 Porko Construction & Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-background/40 text-sm hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-background/40 text-sm hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
