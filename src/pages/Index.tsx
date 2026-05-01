import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import WhyChooseSection from "@/components/WhyChooseSection";
import DueDiligenceSection from "@/components/DueDiligenceSection";
import heroImage from "@/assets/hero-home.jpg";
import aboutImageV1 from "@/assets/about-image.jpg";
import constructionHeroV1 from "@/assets/construction-hero.png";
import engineersSunsetV1 from "@/assets/engineers-sunset.png";
import luxuryLivingRoomV1 from "@/assets/luxury_living_room.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import industrialComplex from "@/assets/industrial-complex.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heritageHomes from "@/assets/heritage-homes.jpg";
import property1V1 from "@/assets/property-1.jpg";
import property2V1 from "@/assets/property-2.jpg";
import property3V1 from "@/assets/property-3.jpg";
import skylinePenthouse from "@/assets/skyline-penthouse.jpg";
import luxuryMansionExteriorV1 from "@/assets/luxury_mansion_exterior.png";
import interiorHero from "@/assets/interior-hero.jpg";
import estateHero from "@/assets/estate-hero.jpg";
import constructionHero from "@/assets/construction-hero.jpg";
import step1Img from "@/assets/step1-consultation.png";
import step2Img from "@/assets/step2-design.png";
import step3Img from "@/assets/step3-approval.png";
import step4Img from "@/assets/step4-construction.png";
import step5Img from "@/assets/step5-handover.png";
import AccordGallery from "@/components/AccordGallery";
import TrendingProjects from "@/components/TrendingProjects";
import modernApartmentNew from "@/assets/modern-apartment-new.jpg";
import lakeViewVillasNew from "@/assets/lake-view-villas-new.jpg";
import {
  Building2, Users, Award, Shield, Home, Paintbrush, HardHat,
  CheckCircle2, ArrowRight, Phone, Eye,
  Calculator, Star, IndianRupee, Instagram, Facebook, Search
} from "lucide-react";
import BookNowSection from "@/components/BookNowSection";

const projects = [
  { imageUrl: property1V1, title: "Seaside Luxury Villa", location: "Chennai", sqft: "3,500", type: "Residential" },
  { imageUrl: modernApartmentNew, title: "Modern Apartment", location: "Coimbatore", sqft: "12,000", type: "Commercial" },
  { imageUrl: skylinePenthouse, title: "Skyline Penthouse", location: "Madurai", sqft: "4,200", type: "Luxury" },
  { imageUrl: heritageHomes, title: "Heritage Homes", location: "Trichy", sqft: "2,800", type: "Residential" },
  { imageUrl: project1, title: "Azure Heights", location: "Salem", sqft: "5,100", type: "Luxury" },
  { imageUrl: industrialComplex, title: "Industrial Complex", location: "Tiruppur", sqft: "120,000", type: "Commercial" },
  { imageUrl: project3, title: "Oasis Botanica", location: "Erode", sqft: "4,800", type: "Residential" },
  { imageUrl: lakeViewVillasNew, title: "Lake View Villas", location: "Vellore", sqft: "8,500", type: "Luxury" },
];

const steps = [
  { img: step1Img, title: "Discuss Your Vision", desc: "We sit with you, understand your needs, budget and lifestyle to craft the perfect brief for your dream home." },
  { img: step2Img, title: "Plan & Design", desc: "Our architects prepare detailed drawings, 3D renders and a transparent, fixed-price quote — no hidden surprises." },
  { img: step3Img, title: "Approve & Begin", desc: "You review, approve the plan and contract, and we break ground with a clear project timeline in hand." },
  { img: step4Img, title: "Build with Quality", desc: "Our skilled team constructs your home using Grade-A materials with regular quality checks and live progress updates." },
  { img: step5Img, title: "Inspect & Handover", desc: "A thorough final inspection is conducted together. Once you're satisfied, we hand over the keys to your new home." },
];

const services = [
  { icon: HardHat, title: "Construction", desc: "End-to-end residential and commercial construction with uncompromising quality standards", link: "/construction" },
  { icon: Paintbrush, title: "Interior Design", desc: "Bespoke interior solutions that transform spaces into refined, functional masterpieces", link: "/interiors" },
  { icon: Home, title: "Real Estate", desc: "Handpicked premium properties in India's most coveted addresses", link: "/estate" },
];

const HomePage = () => {
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Consultation Booked!", {
      description: "Our high-end architectural expert will contact you within 2 hours.",
    });
  };

  return (
    <Layout>
      {/* Premium Hero Section - Precisely matching the reference image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5 bg-black">
        {/* Background with advanced gradient and cinematic zoom */}
        <div className="absolute inset-0">
          <img
            src={constructionHeroV1}
            alt="Premium architectural estate by Porko"
            className="w-full h-full object-cover transition-transform duration-[10s] scale-105"
          />
          {/* Consistent overlay for cinematic feel */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center pointer-events-none text-left">
          <div className="animate-fade-up max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white drop-shadow-2xl">
              Where <br />
              <span className="text-white italic italic-serif">Construction</span>
              <br />
              Meets Estate
            </h1>
            
            <p className="font-body text-lg md:text-xl text-white/80 max-w-3xl mb-12 font-light leading-relaxed pointer-events-auto">
              Crafting architectural masterpieces and managing the world's most 
              exclusive estates. Experience the synergy of fine engineering and 
              luxury sales.
            </p>

            <div className="flex flex-wrap gap-8 items-center justify-start pointer-events-auto">
              <Link to="/projects">
                <Button className="bg-[#F5A800] hover:bg-[#FFBE2E] text-gray-900 font-bold text-xs tracking-[0.2em] uppercase rounded-full px-12 py-7 transition-all duration-300 shadow-[0_0_35px_rgba(245,168,0,0.45)] hover:shadow-[0_0_50px_rgba(245,168,0,0.65)] border-0 hover:scale-105 hover:-translate-y-1">
                   Explore Collections
                </Button>
              </Link>
              <div className="flex flex-col gap-4">
                <Link to="/estate" className="text-white hover:text-[#D4AF37] transition-all text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-3 group">
                  View Estate Listings <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/interiors" className="text-white hover:text-[#D4AF37] transition-all text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-3 group">
                  View Interiors Listings <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Book Now Section */}
      <BookNowSection />

      {/* Trending Projects Section */}
      <TrendingProjects />

      {/* Trust Stats */}
      <StatsSection />

      {/* Why Choose Us - Moved higher for better conversion */}
      <WhyChooseSection />

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src={aboutImageV1} alt="Porko Construction premium home" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={1920} height={1080} />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-heading font-bold">15+ years</div>
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
          <AccordGallery items={projects} />

        </div>
      </section>

      {/* Cost Calculator CTA */}
      <section className="py-12 bg-background overflow-hidden">
        <div className="container-custom">
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-[#050A1B] p-10 lg:p-16 border border-white/5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 -translate-x-1/3 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left flex-1 max-w-2xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.25em]">Precision Estimation</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Estimate Your <br className="hidden lg:block" />
                  <span className="text-white/30 italic font-serif">Masterpiece</span>
                </h3>
                <p className="text-white/40 text-base lg:text-lg leading-relaxed font-medium">
                  Receive a comprehensive, transparent investment roadmap for your vision — engineered for peak quality and zero hidden costs.
                </p>
              </div>
              
              <div className="flex flex-col items-center lg:items-end gap-6 min-w-[280px]">
                <Link to="/cost-calculator" className="w-full sm:w-auto">
                  <Button variant="cta" className="w-full sm:w-auto text-base h-auto py-5 px-10 bg-white text-primary hover:bg-[#F2F2F2] transition-all duration-500 rounded-xl shadow-[0_20px_60px_-10px_rgba(255,255,255,0.15)] flex items-center justify-center gap-4 group/btn">
                    Access Cost Engine 
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <div className="flex items-center gap-6">
                  {[
                    { label: "Transparent", icon: IndianRupee },
                    { label: "Direct", icon: Shield }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/30">
                      <item.icon className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
      <section className="py-8 sm:py-10 lg:py-12 bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="Voices of Trust" subtitle="Hear from families who chose Porko for their most important investment" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Srineevasan", role: "Homeowner, Chennai", text: "Construction quality is good. Working with the Porko team was an amazing experience. Everything went so well and swiftly, from planning to final execution. The team made sure every detail was taken care of from beginning to end and was highly professional and ready to answer any queries. The employees performed an excellent job as well." },
              { name: "Vijayalakshmi", role: "Homeowner, Coimbatore", text: "Exceptional craftsmanship and attention to detail. The entire process was transparent and smooth. From architect consultation to interior finishes, every phase was executed flawlessly. The team's dedication to quality is truly commendable. Highly satisfied with the final outcome." },
              { name: "Karthik Murthy", role: "Property Investor, Madurai", text: "Outstanding reliability and professionalism. Working with Porko Elite Estates has been a delightful experience. They delivered our project on schedule with premium quality materials and skilled workmanship. Their team is responsive, knowledgeable, and genuinely committed to client satisfaction. Absolutely recommend them." },
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
      {/* Due Diligence Guide Section */}
      <DueDiligenceSection />

      {/* Premium Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 border-t border-border relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <SectionHeading badge="Connect With Us" title="Follow Our Journey" subtitle="Stay updated with our latest projects, design inspirations, and exclusive behind-the-scenes content" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Instagram */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-white/20 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#f09433] to-[#dc2743] group-hover:scale-110 transition-transform duration-500">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  
                  <span className="text-sm font-semibold text-[#dc2743] uppercase tracking-widest mb-4">Instagram</span>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1">@porko_construction_estate</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Official Profile</p>
                  
                  <a href="https://www.instagram.com/porko_construction_estate?igsh=MTlsdDk1aTRndTl2YQ==" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#f09433] to-[#dc2743] hover:shadow-lg hover:shadow-red-500/50 text-white font-bold py-3 rounded-full px-6 uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <Instagram className="w-4 h-4" />
                    Follow Us
                  </a>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1877F2] to-[#0A66C2] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-white/20 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1877F2] to-[#0A66C2]" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0A66C2] group-hover:scale-110 transition-transform duration-500">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  
                  <span className="text-sm font-semibold text-[#1877F2] uppercase tracking-widest mb-4">Facebook</span>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-1">Porko Elite Estates</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Official Page</p>
                  
                  <a href="https://www.facebook.com/share/18KPyXmvZD/" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#1877F2] to-[#0A66C2] hover:shadow-lg hover:shadow-blue-500/50 text-white font-bold py-3 rounded-full px-6 uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <Facebook className="w-4 h-4" />
                    Like Page
                  </a>
                </div>
              </div>
            </div>

            {/* Google Business */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-white/20 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-white dark:bg-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  
                  <span className="text-sm font-semibold text-[#4285F4] uppercase tracking-widest mb-4">Google Business</span>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-1">Porko Construction</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Top Rated Agency</p>
                  
                  <a href="https://share.google/GNcXrRbQXJGk4gbS8" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:shadow-lg hover:shadow-blue-500/50 text-white font-bold py-3 rounded-full px-6 uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    <Search className="w-4 h-4" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />



    </Layout>
  );
};

export default HomePage;
