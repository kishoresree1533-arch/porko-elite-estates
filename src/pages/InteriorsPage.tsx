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
  { name: "Essential", price: "₹8 Lakh", features: ["Living Room Design", "2 Bedroom Interiors", "Modular Kitchen", "Basic Lighting"], popular: false },
  { name: "Premium", price: "₹15 Lakh", features: ["Full Home Design", "Premium Materials", "False Ceiling", "Smart Lighting", "Wardrobes", "Accent Walls"], popular: true },
  { name: "Luxury", price: "₹25 Lakh+", features: ["Bespoke Design", "Italian Marble", "Home Automation", "Designer Furniture", "Landscape Design", "Art Curation"], popular: false },
];

const gallery = [
  { image: interiorHero, title: "Modern Living Room" },
  { image: project3, title: "Luxury Bedroom" },
  { image: heroHome, title: "Kitchen Design" },
  { image: interiorHero, title: "Bathroom Suite" },
];

const InteriorsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Luxury Interior Design"
        subtitle="Transform your space into a masterpiece with our award-winning interior design team"
        backgroundImage={interiorHero}
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="What We Offer" title="Interior Design Services" subtitle="Complete home interior solutions tailored to your lifestyle" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sofa, title: "Living Spaces", desc: "Elegant and functional living room designs" },
              { icon: Lamp, title: "Bedroom Design", desc: "Restful sanctuaries tailored to your style" },
              { icon: PaintBucket, title: "Kitchen & Bath", desc: "Modern modular kitchens and luxury bathrooms" },
              { icon: Sparkles, title: "Smart Homes", desc: "Integrated home automation solutions" },
            ].map((s, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-8 hover-lift group text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-colors">
                  <s.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Portfolio" title="Our Interior Gallery" />
          <div className="grid sm:grid-cols-2 gap-6">
            {gallery.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden h-72 lg:h-96">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h3 className="text-background font-heading font-bold text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Packages" title="Interior Design Packages" subtitle="Choose the package that suits your vision and budget" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 ${pkg.popular ? "border-accent bg-accent/5 relative" : "border-border bg-background"} hover-lift`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{pkg.name}</h3>
                <div className="text-3xl font-heading font-bold text-accent mb-6">{pkg.price}</div>
                <div className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
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

      {/* CTA */}
      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Let's Design Your Dream Interior
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Book a free design consultation with our experts today</p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Book Consultation <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default InteriorsPage;
