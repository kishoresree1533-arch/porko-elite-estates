import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import interiorHero from "@/assets/interior-hero.jpg";
import project3 from "@/assets/project-3.jpg";
import heroHome from "@/assets/hero-home.jpg";
import { ArrowRight, CheckCircle2, Sofa, Lamp, PaintBucket, Sparkles } from "lucide-react";

const packages = [
  { name: "Essential", price: "₹8 Lakh", desc: "Thoughtfully designed essentials", features: ["Living Room Design", "2 Bedroom Interiors", "Modular Kitchen", "Basic Lighting"], popular: false },
  { name: "Premium", price: "₹15 Lakh", desc: "Elevated living, refined detail", features: ["Full Home Design", "Premium Materials", "False Ceiling", "Smart Lighting", "Wardrobes", "Accent Walls"], popular: true },
  { name: "Luxury", price: "₹25 Lakh+", desc: "Bespoke luxury, no compromises", features: ["Bespoke Design", "Italian Marble", "Home Automation", "Designer Furniture", "Landscape Design", "Art Curation"], popular: false },
];

const gallery = [
  { image: interiorHero, title: "Contemporary Living Room" },
  { image: project3, title: "Master Bedroom Suite" },
  { image: heroHome, title: "Gourmet Kitchen" },
  { image: interiorHero, title: "Spa Bathroom" },
];

const InteriorsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Bespoke Interior Design"
        subtitle="Spaces that reflect your taste — designed with precision, crafted with passion"
        backgroundImage={interiorHero}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Services" title="Interior Design Excellence" subtitle="Complete home interior solutions tailored to your lifestyle and vision" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sofa, title: "Living Spaces", desc: "Elegant, functional rooms designed for modern living" },
              { icon: Lamp, title: "Bedroom Design", desc: "Restful sanctuaries tailored to your personal style" },
              { icon: PaintBucket, title: "Kitchen & Bath", desc: "Premium modular kitchens and luxury bathrooms" },
              { icon: Sparkles, title: "Smart Homes", desc: "Seamless home automation and intelligent lighting" },
            ].map((s, i) => (
              <div key={i} className="premium-card p-8 group text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Portfolio" title="Design Gallery" subtitle="A glimpse into spaces we've transformed" />
          <div className="grid sm:grid-cols-2 gap-8">
            {gallery.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden h-72 lg:h-96 shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <h3 className="text-primary-foreground font-heading font-bold text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Investment" title="Interior Design Packages" subtitle="Select the tier that aligns with your vision and lifestyle" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 ${pkg.popular ? "border-primary bg-primary/3 relative shadow-xl" : "border-border bg-background"} hover-lift`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                <div className="text-3xl font-heading font-bold text-primary mb-8">{pkg.price}</div>
                <div className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-5">
            Transform Your Space Into a Masterpiece
          </h2>
          <p className="text-primary-foreground/50 mb-10 max-w-xl mx-auto leading-relaxed">Book a complimentary design consultation with our award-winning team</p>
          <Link to="/contact">
            <Button variant="hero-outline" size="xl">Book Consultation <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default InteriorsPage;
