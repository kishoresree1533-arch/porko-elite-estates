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

const stats = [
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "1200+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "10 Yr", label: "Warranty" },
];

const projects = [
  { image: project1, title: "Luxury Villa", location: "Mumbai", sqft: "3,500" },
  { image: project2, title: "Sky Towers", location: "Pune", sqft: "12,000" },
  { image: project3, title: "Skyline Penthouse", location: "Delhi", sqft: "4,200" },
  { image: project4, title: "Heritage Homes", location: "Bangalore", sqft: "2,800" },
];

const whyChoose = [
  { icon: Shield, title: "10-Year Warranty", desc: "Complete peace of mind with our industry-leading warranty" },
  { icon: Award, title: "Premium Materials", desc: "Only the finest materials from trusted brands" },
  { icon: Users, title: "Expert Team", desc: "200+ skilled professionals dedicated to excellence" },
  { icon: Eye, title: "Live Tracking", desc: "Track your construction progress in real-time" },
  { icon: CheckCircle2, title: "On-Time Delivery", desc: "We guarantee timely project completion" },
  { icon: IndianRupee, title: "No Hidden Costs", desc: "Transparent pricing with no surprises" },
];

const steps = [
  { icon: ClipboardList, title: "Consultation", desc: "Share your vision" },
  { icon: Ruler, title: "Design", desc: "Custom floor plans" },
  { icon: Hammer, title: "Construction", desc: "Quality building" },
  { icon: Eye, title: "Inspection", desc: "Quality checks" },
  { icon: Key, title: "Handover", desc: "Move in ready" },
];

const services = [
  { icon: HardHat, title: "Construction", desc: "End-to-end house construction with premium quality materials", link: "/construction" },
  { icon: Paintbrush, title: "Interiors", desc: "Luxury interior design that transforms spaces into masterpieces", link: "/interiors" },
  { icon: Home, title: "Real Estate", desc: "Premium properties in prime locations across India", link: "/estate" },
];

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container-custom py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase mb-6">
                #1 Construction Company
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
                Best House<br />
                Construction<br />
                <span className="text-accent">Company</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4 max-w-lg">
                Build your dream home with India's most trusted construction company. Premium quality at transparent prices.
              </p>
              <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-secondary">
                <div className="text-center">
                  <div className="flex items-center justify-center text-2xl font-heading font-bold text-foreground">
                    <IndianRupee className="w-5 h-5" />1,899
                  </div>
                  <span className="text-xs text-muted-foreground">per sq.ft</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">456+</div>
                  <span className="text-xs text-muted-foreground">Packages</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-foreground">10 Yr</div>
                  <span className="text-xs text-muted-foreground">Warranty</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="lg">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Lead Form */}
            <div className="animate-slide-in-right">
              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Get Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-6">Fill in your details and our expert will call you</p>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
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
      <section className="navy-section py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={heroImage} alt="Porko Construction premium home" className="rounded-3xl shadow-2xl w-full" loading="lazy" width={1920} height={1080} />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-heading font-bold">15+</div>
                <div className="text-sm">Years of Trust</div>
              </div>
            </div>
            <div>
              <SectionHeading badge="About Us" title="Building Excellence Since 2010" subtitle="We don't just build structures — we craft lifelong homes with uncompromising quality and transparent pricing." center={false} />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Premium Materials", "Expert Engineers", "On-Time Delivery", "10-Year Warranty"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Our Projects" title="Crafted With Precision" subtitle="Explore our portfolio of premium residential and commercial projects across India" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group bg-background rounded-2xl overflow-hidden shadow-lg hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground text-lg">{project.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                    <span className="text-sm font-medium text-accent">{project.sqft} sq.ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="default" size="lg">View All Projects <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Calculator CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-navy-dark rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <Calculator className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-3">
                Calculate Your Construction Cost
              </h3>
              <p className="text-primary-foreground/70 max-w-lg">
                Get an instant estimate for your dream home. No hidden charges, transparent pricing.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Estimate <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Why Choose Us" title="The Porko Advantage" subtitle="We set the industry standard for quality, transparency, and customer satisfaction" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 hover-lift group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Our Process" title="5 Simple Steps to Your Dream Home" />
          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-accent" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tracking */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading badge="Technology" title="Track Your Project Live" subtitle="Monitor every phase of your construction from anywhere with our real-time tracking dashboard." center={false} />
              <div className="flex flex-col gap-4 mb-8">
                {["Real-time progress updates", "Photo & video documentation", "Material tracking", "Budget monitoring"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="default" size="lg">Learn More</Button>
              </Link>
            </div>
            <div className="bg-background rounded-3xl shadow-2xl p-6">
              <div className="rounded-2xl overflow-hidden">
                <img src={interiorHero} alt="Live tracking dashboard" className="w-full rounded-2xl" loading="lazy" width={1920} height={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Our Services" title="Complete Construction Solutions" />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link key={i} to={service.link} className="group">
                <div className="bg-secondary rounded-2xl p-8 hover-lift h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
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
          <SectionHeading badge="Testimonials" title="What Our Clients Say" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Homeowner, Mumbai", text: "Porko built our dream villa with exceptional quality. The entire process was smooth and transparent." },
              { name: "Priya Sharma", role: "Homeowner, Pune", text: "From design to handover, everything was perfect. The interiors exceeded our expectations completely." },
              { name: "Amit Patel", role: "Investor, Delhi", text: "Professional team, premium materials, and on-time delivery. Highly recommend Porko Construction." },
            ].map((t, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Get a free consultation and cost estimate from our experts today. No obligations, just great advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="hero-outline" size="xl">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
