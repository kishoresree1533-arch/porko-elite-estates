import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import constructionHero from "@/assets/construction-hero.jpg";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Standard",
    price: "₹1,699",
    unit: "/sq.ft",
    desc: "Quality construction with reliable materials",
    features: ["RCC Framed Structure", "Standard Cement (ACC/Ultratech)", "Basic Electrical & Plumbing", "Ceramic Tile Flooring", "Standard Doors & Windows"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,899",
    unit: "/sq.ft",
    desc: "Enhanced quality with premium finishes",
    features: ["RCC Framed Structure", "Premium Cement (Ultratech)", "Concealed Wiring (Havells)", "Vitrified Tile Flooring", "Teak Wood Doors", "False Ceiling in Living Area", "Premium Bathroom Fittings"],
    highlight: true,
  },
  {
    name: "Luxury",
    price: "₹2,499",
    unit: "/sq.ft",
    desc: "Uncompromising luxury, finest materials",
    features: ["Advanced RCC Structure", "Premium OPC Cement", "Smart Home Wiring", "Italian Marble Flooring", "Solid Teak Doors & French Windows", "Full False Ceiling", "Jacuzzi & Premium Fixtures", "Landscape Design"],
    highlight: false,
  },
];

const faqs = [
  { q: "What is the typical construction timeline?", a: "A standard 2,000 sq.ft home takes 8-12 months. Premium and luxury packages may take 12-16 months depending on the level of customization and bespoke elements." },
  { q: "Which materials do you use?", a: "We exclusively use Grade-A materials from India's most trusted brands — Ultratech, Havells, Kajaria, Jaquar, and Tata Steel. Quality is never compromised." },
  { q: "Is architectural design included?", a: "Yes. Our in-house architects provide complete architectural design, detailed 3D renders, and structural drawings — included in every package." },
  { q: "What warranty do you offer?", a: "A comprehensive 10-year structural warranty and 1-year warranty on all fittings, fixtures, and finishing work." },
  { q: "Can packages be customised?", a: "Absolutely. Every package is fully customisable. Our team collaborates closely with you to tailor every element to your specific requirements." },
];

const ConstructionPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero
        title="Premium House Construction"
        subtitle="Architecturally refined homes built with uncompromising quality and complete transparency"
        backgroundImage={constructionHero}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Investment" title="Construction Packages" subtitle="Transparent, all-inclusive pricing — choose the tier that matches your vision" />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 ${pkg.highlight ? "border-primary bg-primary/3 relative shadow-xl" : "border-border bg-background"} hover-lift`}>
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-heading font-bold text-primary">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground">{pkg.unit}</span>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button variant={pkg.highlight ? "hero" : "outline"} className="w-full">
                    Get Detailed Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Quality Assurance" title="Trusted Material Partners" subtitle="We partner exclusively with India's finest building material brands" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Ultratech Cement", "Tata Steel", "Havells Wiring", "Kajaria Tiles", "Jaquar Fittings", "Asian Paints"].map((brand) => (
              <div key={brand} className="premium-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" title="Common Questions" subtitle="Everything you need to know about building with Porko" />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-5">
            Begin Your Construction Journey Today
          </h2>
          <p className="text-primary-foreground/50 mb-10 max-w-xl mx-auto leading-relaxed">Receive a comprehensive, obligation-free project estimate from our construction experts</p>
          <Link to="/contact">
            <Button variant="hero-outline" size="xl">Get Free Estimate <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ConstructionPage;
