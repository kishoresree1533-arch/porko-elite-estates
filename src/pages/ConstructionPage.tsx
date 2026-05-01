import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ConstructionSupervision from "@/components/ConstructionSupervision";
import MaterialGradeShowcase from "@/components/MaterialGradeShowcase";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import constructionHeroImg from "@/assets/Cityscape Under Construction.jpg";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Standard",
    price: "₹1,999",
    unit: "/sq.ft",
    desc: "Quality construction with reliable materials",
    features: ["RCC Framed Structure", "Standard Cement (ACC/Ultratech)", "Basic Electrical & Plumbing", "Ceramic Tile Flooring", "Standard Doors & Windows"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹2,299",
    unit: "/sq.ft",
    desc: "Enhanced quality with premium finishes",
    features: ["RCC Framed Structure", "Premium Cement (Ultratech)", "Concealed Wiring (Havells)", "Vitrified Tile Flooring", "Teak Wood Doors", "False Ceiling in Living Area", "Premium Bathroom Fittings"],
    highlight: true,
  },
  {
    name: "Luxury",
    price: "₹2,699",
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
        backgroundImage={constructionHeroImg}
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

      <ConstructionSupervision />

      <MaterialGradeShowcase />

      <section className="section-padding bg-[#F8FAFC] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <div className="container-custom relative z-10 transition-all duration-1000">
          <SectionHeading badge="Quality Assurance" title="Trusted Material Partners" subtitle="We partner exclusively with India's finest building material brands to ensure your home lasts for generations" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["Ultratech Cement", "Tata Steel", "Havells Wiring", "Kajaria Tiles", "Jaquar Fittings", "Asian Paints"].map((brand) => (
              <div key={brand} className="card-3d-effect group">
                <div className="bg-primary rounded-3xl p-8 text-center border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] group-hover:border-white/20 transition-all h-full flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-inner relative z-10">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white tracking-tight relative z-10">{brand}</span>
                  <div className="mt-3 w-8 h-1 bg-[#D4AF37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 relative z-10" />
                </div>
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

      <CTASection 
        title="Begin Your Construction Legacy"
        subtitle="Receive a comprehensive, obligation-free project estimate from India's finest construction experts."
        ctaText="Get Free Estimate"
      />
    </Layout>
  );
};

export default ConstructionPage;
