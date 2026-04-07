import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import interiorHero from "@/assets/interior-hero.jpg";
import {
  Building2, Users, Award, Shield, Home, Paintbrush, HardHat,
  CheckCircle2, ArrowRight, Phone, ClipboardList, Ruler, Hammer, Eye, Key,
  Calculator, Star, IndianRupee
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Building2, value: 500, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 1200, suffix: "+", label: "Families Served" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: Shield, value: 10, suffix: " Yr", label: "Structural Warranty" },
];

const projects = [
  { image: project1, title: "Seaside Luxury Villa", location: "Mumbai", sqft: "3,500", type: "Residential" },
  { image: project2, title: "Sky Tower Residences", location: "Pune", sqft: "12,000", type: "Commercial" },
  { image: project3, title: "Skyline Penthouse", location: "Delhi", sqft: "4,200", type: "Luxury" },
  { image: project4, title: "Heritage Estate", location: "Bangalore", sqft: "2,800", type: "Residential" },
];

const whyChoose = [
  { icon: Shield, title: "10-Year Structural Warranty", desc: "Complete peace of mind backed by our comprehensive structural guarantee" },
  { icon: Award, title: "Grade-A Premium Materials", desc: "Only the finest materials from India's most trusted brands" },
  { icon: Users, title: "200+ Expert Professionals", desc: "Architects, engineers, and craftsmen dedicated to perfection" },
  { icon: Eye, title: "Real-Time Project Tracking", desc: "Monitor every milestone from foundation to handover" },
  { icon: CheckCircle2, title: "Guaranteed Timely Delivery", desc: "We honour our commitments — every project, on schedule" },
  { icon: IndianRupee, title: "Transparent Fixed Pricing", desc: "No hidden costs, no surprises — what we quote is what you pay" },
];

const steps = [
  { icon: ClipboardList, title: "Consultation", desc: "Share your vision with our experts" },
  { icon: Ruler, title: "Design", desc: "Custom architectural plans & 3D renders" },
  { icon: Hammer, title: "Construction", desc: "Precision building with quality materials" },
  { icon: Eye, title: "Inspection", desc: "Rigorous multi-stage quality checks" },
  { icon: Key, title: "Handover", desc: "Your dream home, move-in ready" },
];

const services = [
  { icon: HardHat, title: "Construction", desc: "End-to-end residential and commercial construction with uncompromising quality standards", link: "/construction" },
  { icon: Paintbrush, title: "Interior Design", desc: "Bespoke interior solutions that transform spaces into refined, functional masterpieces", link: "/interiors" },
  { icon: Home, title: "Real Estate", desc: "Handpicked premium properties in India's most coveted addresses", link: "/estate" },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

const StatItem = ({ icon: Icon, value, suffix, label }: { icon: any; value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <Icon className="w-7 h-7 text-primary-foreground/40 mx-auto mb-3" />
      <div className="text-4xl font-heading font-bold text-primary-foreground mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-primary-foreground/50 tracking-wide">{label}</div>
    </div>
  );
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container-custom py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary/70 border border-primary/10 text-[11px] font-semibold tracking-[0.2em] uppercase mb-8">
                India's Most Trusted Builder
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-foreground leading-[1.08] mb-6">
                We Craft<br />
                Architecturally Refined<br />
                <span className="text-primary">Living Spaces</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed">
                Uncompromising quality. Transparent pricing. Your vision, meticulously brought to life by India's finest construction professionals.
              </p>
              <div className="flex items-center gap-6 mb-10 p-5 rounded-2xl bg-secondary/80 border border-border/50">
                <div className="text-center">
                  <div className="flex items-center justify-center text-2xl font-heading font-bold text-foreground">
                    <IndianRupee className="w-5 h-5" />1,899
                  </div>
                  <span className="text-[11px] text-muted-foreground tracking-wide">per sq.ft</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">456+</div>
                  <span className="text-[11px] text-muted-foreground tracking-wide">Packages</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">10 Yr</div>
                  <span className="text-[11px] text-muted-foreground tracking-wide">Warranty</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Get Free Consultation <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Lead Form */}
            <div className="animate-slide-in-right">
              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">Book Your Consultation</h3>
                <p className="text-sm text-muted-foreground mb-8">Share your details — our expert will connect within 2 hours</p>
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <select className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all">
                    <option>Select Service</option>
                    <option>House Construction</option>
                    <option>Interior Design</option>
                    <option>Real Estate</option>
                    <option>Renovation</option>
                  </select>
                  <Button variant="hero" size="lg" className="w-full mt-2">
                    Book Free Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="navy-section py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src={heroImage} alt="Porko Construction premium home" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={1920} height={1080} />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-heading font-bold">15+</div>
                <div className="text-sm text-primary-foreground/60">Years of Trust</div>
              </div>
            </div>
            <div>
              <SectionHeading badge="Our Legacy" title="A Tradition of Building Excellence" subtitle="We don't merely construct buildings — we craft enduring homes with meticulous attention to detail, premium materials, and an unwavering commitment to your vision." center={false} />
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Premium Grade-A Materials", "Award-Winning Architects", "On-Time Guaranteed Delivery", "10-Year Structural Warranty"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Discover Our Story <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Portfolio" title="Precision-Crafted Projects" subtitle="A curated showcase of our finest residential and commercial endeavours across India" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group premium-card overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={800} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      <span className="text-primary-foreground/70 text-xs tracking-widest uppercase">{project.type}</span>
                      <h3 className="font-heading font-bold text-primary-foreground text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground text-lg">{project.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                    <span className="text-sm font-medium text-primary">{project.sqft} sq.ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="default" size="lg">View All Projects <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Calculator CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-primary-foreground/60" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Estimate Your Construction Investment
              </h3>
              <p className="text-primary-foreground/50 max-w-lg text-lg leading-relaxed">
                Get a detailed, transparent cost breakdown for your project — no obligations, no hidden charges.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="The Porko Difference" title="Why Discerning Clients Choose Us" subtitle="We set the benchmark for quality, transparency, and client satisfaction in Indian construction" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <div key={i} className="premium-card p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Our Process" title="Five Steps to Your Dream Home" subtitle="A refined, transparent journey from vision to reality" />
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 text-center relative">
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-5 relative">
                  <step.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1.5">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tracking */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading badge="Technology" title="Real-Time Project Intelligence" subtitle="Monitor every phase of your construction journey with our proprietary tracking platform — from foundation to finishing." center={false} />
              <div className="flex flex-col gap-5 mb-10">
                {["Live progress dashboards with milestone tracking", "HD photo & video documentation at every stage", "Material procurement & quality verification", "Budget tracking with real-time cost transparency"].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="default" size="lg">Learn More <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="premium-card p-4">
              <img src={interiorHero} alt="Live tracking dashboard" className="w-full rounded-xl" loading="lazy" width={1920} height={1080} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Services" title="Comprehensive Construction Solutions" subtitle="Three pillars of excellence, one trusted partner" />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} to={service.link} className="group">
                <div className="premium-card p-10 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="Voices of Trust" subtitle="Hear from families who chose Porko for their most important investment" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Homeowner, Mumbai", text: "Porko crafted our dream villa with exceptional finesse. The transparency and quality throughout the journey gave us absolute confidence." },
              { name: "Priya Sharma", role: "Homeowner, Pune", text: "From the first consultation to final handover, every detail was handled with precision. The interiors surpassed every expectation." },
              { name: "Amit Patel", role: "Investor, Delhi", text: "A thoroughly professional team with an unwavering commitment to quality. On-time delivery and premium materials — highly recommend." },
            ].map((t, i) => (
              <div key={i} className="premium-card p-8">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">"{t.text}"</p>
                <div className="pt-6 border-t border-border">
                  <div className="font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Your Vision Deserves<br />Uncompromising Excellence
          </h2>
          <p className="text-lg text-primary-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Begin your journey with a complimentary consultation. No obligations — just expert guidance for your most important investment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="ghost" size="xl" className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/5">
                <Phone className="w-5 h-5" /> Call Us Directly
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
