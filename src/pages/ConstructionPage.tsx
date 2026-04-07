import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import constructionHero from "@/assets/construction-hero.jpg";
import { ArrowRight, CheckCircle2, IndianRupee, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Standard",
    price: "₹1,699",
    unit: "/sq.ft",
    features: ["RCC Framed Structure", "Standard Cement (ACC/Ultratech)", "Basic Electrical & Plumbing", "Ceramic Tile Flooring", "Standard Doors & Windows"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,899",
    unit: "/sq.ft",
    features: ["RCC Framed Structure", "Premium Cement (Ultratech)", "Concealed Wiring (Havells)", "Vitrified Tile Flooring", "Teak Wood Doors", "False Ceiling in Living Area", "Premium Bathroom Fittings"],
    highlight: true,
  },
  {
    name: "Luxury",
    price: "₹2,499",
    unit: "/sq.ft",
    features: ["Advanced RCC Structure", "Premium OPC Cement", "Smart Home Wiring", "Italian Marble Flooring", "Solid Teak Doors & French Windows", "Full False Ceiling", "Jacuzzi & Premium Fixtures", "Landscape Design"],
    highlight: false,
  },
];

const faqs = [
  { q: "What is the construction timeline?", a: "Typically 8-12 months for a standard 2,000 sq.ft home. Premium and luxury packages may take 12-16 months depending on customization." },
  { q: "What materials do you use?", a: "We use only Grade-A materials from brands like Ultratech, Havells, Kajaria, Jaquar, and Tata Steel. No compromises on quality." },
  { q: "Do you provide architectural design?", a: "Yes, our in-house architects provide complete architectural design, 3D renders, and structural drawings included in all packages." },
  { q: "Is there a warranty?", a: "We offer a comprehensive 10-year structural warranty and 1-year warranty on all fittings and fixtures." },
  { q: "Can I customize my package?", a: "Absolutely. All packages are customizable. Our team will work with you to tailor every aspect to your preferences." },
];

const ConstructionPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero
        title="House Construction"
        subtitle="Build your dream home with India's most trusted construction company. Premium quality, transparent pricing."
        backgroundImage={constructionHero}
      />

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Pricing" title="Construction Packages" subtitle="Transparent pricing with no hidden charges. Choose the package that fits your vision." />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 ${pkg.highlight ? "border-accent bg-accent/5 relative" : "border-border bg-background"} hover-lift`}>
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    Best Value
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-heading font-bold text-accent">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">{pkg.unit}</span>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button variant={pkg.highlight ? "hero" : "outline"} className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Info */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Quality" title="Premium Materials We Use" subtitle="We partner with India's top building material brands" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Ultratech Cement", "Tata Steel", "Havells Wiring", "Kajaria Tiles", "Jaquar Fittings", "Asian Paints"].map((brand) => (
              <div key={brand} className="bg-background rounded-2xl p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Start Building Your Dream Home Today
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Get a detailed cost estimate for your project — absolutely free</p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Get Free Estimate <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ConstructionPage;
