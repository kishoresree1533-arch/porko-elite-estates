import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ChevronRight } from "lucide-react";



const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">

      {/* Decorative top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.008] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Main Footer Content */}
      <div className="container-custom pt-20 pb-10 relative z-20">

        {/* Top CTA Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 mb-16 border-b border-white/[0.1]">
          <div>
            <p className="text-[10px] font-black text-sky-300 uppercase tracking-[0.4em] mb-3">Start Your Journey</p>
            <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tighter leading-tight text-white">
              Build Something <span className="text-sky-300 italic italic-serif font-black">Extraordinary</span>
            </h3>
          </div>
          <Link
            to="/cost-calculator"
            className="group flex items-center gap-4 bg-sky-500 hover:bg-sky-400 border border-sky-400 hover:border-sky-300 text-white hover:text-slate-900 transition-all duration-500 rounded-2xl px-8 py-5 font-black text-xs uppercase tracking-[0.3em] whitespace-nowrap"
          >
            Get Free Estimate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">


            <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-xs font-medium">
              Engineering precision meets luxury aesthetics. We build the spatial foundations for your greatest legacies — one masterpiece at a time.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <div className="flex flex-col gap-3">
                <a href="mailto:porkoestate@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold">porkoestate@gmail.com</span>
                </a>
                <a href="mailto:porkoconstruction@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold">porkoconstruction@gmail.com</span>
                </a>
                <a href="mailto:Porkoconstructionestate@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold">Porkoconstructionestate@gmail.com</span>
                </a>
              </div>
              <a href="tel:+917695940400" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold">+91 76959 40400</span>
              </a>
              <a href="tel:+918667741994" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold">+91 86677 41994</span>
              </a>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-sky-300 uppercase tracking-widest mb-1">Corporate Office</div>
                    <span className="text-[11px] font-bold leading-relaxed">163, ELANGOVAN STREET, K.K NAGAR, Salamedu, Viluppuram, Tamil Nadu 605103</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-sky-300 uppercase tracking-widest mb-1">Chennai Office</div>
                    <span className="text-[11px] font-bold leading-relaxed">Plot no: 28 & 29, Moovendar nagar, Numbal, Kattupakkam, Chennai - 600077</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com/porko_construction_estate?igsh=MTlsdDk1aTRndTl2YQ==" },
                { icon: Facebook, href: "https://www.facebook.com/share/18KPyXmvZD/" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 text-white/70 hover:text-white transition-all duration-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-black text-sky-300 uppercase tracking-[0.4em] mb-8">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Construction", path: "/construction" },
                { label: "Joint Venture", path: "/joint-venture" },
                { label: "Estate", path: "/estate" },
                { label: "Interiors", path: "/interiors" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex items-center gap-3 text-white/80 hover:text-white focus:text-white active:text-white text-sm font-semibold transition-all duration-300 group"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[9px] font-black text-sky-300 uppercase tracking-[0.4em] mb-8">Services</h4>
            <div className="flex flex-col gap-4">
              {[
                "Architectural Design",
                "Luxury Residential",
                "Commercial Build",
                "Premium Interiors",
                "Plan Approval",
                "Cost Estimation",
              ].map((item) => (
                <span key={item} className="text-white/75 text-sm font-medium hover:text-white transition-colors cursor-default">{item}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[9px] font-black text-sky-300 uppercase tracking-[0.4em] mb-8">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Cost Calculator", path: "/cost-calculator" },
                { label: "Start a Project", path: "/contact" },
                { label: "View Portfolio", path: "/projects" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/30 focus:border-white/30 active:border-white/30 transition-all duration-500"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="text-xs font-black text-white/70 group-hover:text-white group-focus:text-white group-active:text-white uppercase tracking-widest transition-colors">{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white group-focus:text-white group-active:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                </Link>
              ))}

              {/* Trust Badge */}
              <div className="mt-6 p-5 rounded-2xl bg-sky-500/10 border border-sky-400/30">
                <div className="text-[8px] font-black text-sky-300 uppercase tracking-[0.4em] mb-2">Est. 2010</div>
                <div className="text-sm font-black text-white leading-tight">15+ Years of<br />Architectural Excellence</div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">500+ Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[9px] font-black text-white/50 uppercase tracking-[0.35em]">
            <span>© 2026 Porko Elite Estates</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>All Rights Reserved</span>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span className="hidden md:block">Viluppuram, India</span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[9px] font-black text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
