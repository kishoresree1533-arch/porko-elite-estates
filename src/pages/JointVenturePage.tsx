import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Handshake, Building2, ShieldCheck, MapPin,
  FileText, Home, Phone, ChevronDown, ChevronUp, CheckCircle2,
  Zap, TrendingUp, HardHat, Users
} from "lucide-react";
import { useState } from "react";

const STAGES = [
  {
    icon: MapPin,
    title: "Initial Meeting",
    desc: "We visit your plot, discuss expectations, and evaluate the development potential.",
  },
  {
    icon: FileText,
    title: "Legal & Feasibility",
    desc: "Analysis of zoning, FSI rules, and title documents to establish project parameters.",
  },
  {
    icon: Handshake,
    title: "JV Agreement",
    desc: "Transparent discussion of ratio, timelines, and material specs in a binding contract.",
  },
  {
    icon: Building2,
    title: "Design & Build",
    desc: "Managing full funding, approvals, and construction with uncompromising quality.",
  },
  {
    icon: Home,
    title: "Handover",
    desc: "Formal transfer of your share of the developed property with full documentation.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Zap,
    title: "Zero Investment",
    desc: "We handle 100% of construction costs, approvals, and management. You stay stress-free.",
  },
  {
    icon: TrendingUp,
    title: "Higher Property Value",
    desc: "Developed property significantly increases your asset value compared to raw land.",
  },
  {
    icon: HardHat,
    title: "Expert Site Management",
    desc: "Qualified site engineers monitor precision and compliance every single day.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Warranty",
    desc: "Peace of mind with a written 15-year warranty on all structural components.",
  },
];

const DEMAND_AREAS = [
  "Velachery", "Madipakkam", "Pallikaranai", "Keelkattalai", "Medavakkam",
  "Nanmangalam", "Chromepet", "Pallavaram", "Tambaram", "Perungalathur",
  "Porur", "Ramapuram", "Valasaravakkam", "Mugalivakkam", "Manapakkam",
  "Kolapakkam", "Gerugambakkam", "Thoraipakkam", "Sholinganallur", "Karapakkam",
  "Navalur", "Thalambur", "Siruseri", "Semmancheri", "Perumbakkam"
];

const REQUIREMENTS = [
  "Plot size of 1,200 sq.ft or above",
  "Good road access (min 20-ft road)",
  "Located in developing residential area",
  "Clear and undisputed land documents",
  "Zoning suitable for residential/commercial",
  "Within CMDA or DTCP jurisdiction"
];

const FAQS = [
  {
    q: "What exactly is joint venture construction in Chennai?",
    a: "It is a partnership where you provide the land, we fund and manage the entire construction. Both parties share the finished property based on a pre-agreed ratio.",
  },
  {
    q: "How is the ratio calculated?",
    a: "The ratio is determined by the market value of your land versus the cost of development. We provide a transparent calculation before signing any agreement.",
  },
  {
    q: "How much land do I need for a JV?",
    a: "We typically look for plots starting from 1,200 sq.ft (half ground) up to large acreage for gated communities.",
  },
  {
    q: "Is JV better than selling my land?",
    a: "Selling gives a one-time payment. JV gives you premium built assets that generate monthly rental income and have higher long-term appreciation.",
  },
  {
    q: "Do I need to pay for plan approvals?",
    a: "No. HireAndBuild manages and funds all government sanctions, building plan approvals, and utility connections.",
  },
  {
    q: "What is the timeline for a JV project?",
    a: "Depending on the scale, most residential developments are completed within 18 to 24 months, including approval stages.",
  },
];

const JointVenturePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* ── Enhanced Hero ── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #050A1B 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Chennai's Trusted JV Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-black text-foreground mb-8 leading-[1.05] tracking-tight">
                Joint Venture<br />
                Builders in <span className="text-primary italic-serif">Chennai</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium">
                Don't just sell your land. Transform it into a high-value asset. We partner with landowners to build premium spaces with <span className="text-foreground font-bold underline decoration-primary/30">Zero Investment</span> from your side.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+917200472008">
                  <Button variant="cta" size="xl" className="shadow-2xl shadow-primary/20">
                    Discuss Your Land
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="outline" size="xl" className="rounded-2xl border-gray-200">
                    How it Works
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-[#050A1B] p-6 lg:p-12 rounded-3xl lg:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(5,10,27,0.3)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                <div className="relative z-10 space-y-6 lg:space-y-8">
                  <div className="flex items-center justify-between gap-3 lg:gap-6">
                    <div className="bg-white/5 border border-white/10 p-4 lg:p-6 rounded-2xl flex-1 text-center shrink">
                      <Home className="w-6 h-6 lg:w-8 lg:h-8 text-primary mx-auto mb-2 lg:mb-3" />
                      <div className="text-[8px] lg:text-[10px] font-bold text-white uppercase tracking-widest leading-tight">Landowner</div>
                    </div>
                    <div className="text-primary font-black text-xl lg:text-2xl shrink-0">+</div>
                    <div className="bg-white/5 border border-white/10 p-4 lg:p-6 rounded-2xl flex-1 text-center shrink">
                      <Building2 className="w-6 h-6 lg:w-8 lg:h-8 text-primary mx-auto mb-2 lg:mb-3" />
                      <div className="text-[8px] lg:text-[10px] font-bold text-white uppercase tracking-widest leading-tight">Developer</div>
                    </div>
                  </div>
                  <div className="bg-primary p-6 lg:p-8 rounded-2xl text-center shadow-lg shadow-primary/20">
                    <div className="text-white font-heading font-black text-lg lg:text-xl mb-1">Developed Property</div>
                    <div className="text-white/80 text-[8px] lg:text-[10px] font-black uppercase tracking-widest">& Shared Profits</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white">100+</div>
                      <div className="text-[8px] font-bold text-white/70 uppercase tracking-widest">JV Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-white">50:50</div>
                      <div className="text-[8px] font-bold text-white/70 uppercase tracking-widest">Fair Ratio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-white">500+</div>
                      <div className="text-[8px] font-bold text-white/70 uppercase tracking-widest">Flats Built</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="py-24 bg-gray-50/50 border-y border-gray-100" id="how-it-works">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                <div className="relative bg-white p-2 rounded-[3rem] shadow-2xl">
                  <div className="bg-[#050A1B] p-10 rounded-[2.8rem] space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Your Vacant Land</div>
                        <div className="text-white/70 text-[10px] uppercase">Asset Potential</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-6 h-6 text-white/30 animate-bounce mb-2" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Legal JV Partnership</div>
                        <div className="text-white/70 text-[10px] uppercase">Transparent Contract</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <ChevronDown className="w-6 h-6 text-white/30 animate-bounce mb-2" />
                    </div>
                    <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
                      <div className="text-white font-heading font-black text-center text-lg">Multiple High-Value Units</div>
                      <div className="text-white/80 text-[9px] font-bold text-center uppercase tracking-widest">Regular Rental & Asset Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-8 leading-tight tracking-tight">
                A partnership that <br />
                <span className="text-primary italic-serif">unlocks true potential</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Most landowners settle for a one-time payment. But in a growing city like Chennai, your land is worth more. Our Joint Venture model allows you to retain ownership while we build high-end residential apartments.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Retain your asset inheritance",
                  "Get high-value built assets",
                  "Generate monthly rental income",
                  "Zero cost of construction for you"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-bold">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Stages ── */}
      <section className="py-24 bg-white text-foreground overflow-hidden relative border-y border-gray-100">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, black 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-heading font-black text-gray-900 mb-6 tracking-tight">
              5 Stages <span className="text-primary italic-serif">to Success</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We manage the entire pipeline. You stay informed at each milestone without managing day-to-day construction.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6" style={{ perspective: '2000px' }}>
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2.5rem] bg-[#050A1B] border border-white/10 text-center relative transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-20px_rgba(5,10,27,0.4)] hover:border-primary/50"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) rotateX(10deg) rotateY(-5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-10px)' }} />

                <div className="relative z-10 transition-transform duration-500" style={{ transform: 'translateZ(30px)' }}>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                    <stage.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <div className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em] mb-4">Stage {i + 1}</div>
                  <h3 className="text-lg font-heading font-black text-white mb-4 transition-colors duration-300">{stage.title}</h3>
                  <p className="text-white/70 text-sm font-medium leading-relaxed group-hover:text-white transition-colors duration-300">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Landowners Choose ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-4 tracking-tight leading-tight">
                Why landowners choose <br />
                <span className="text-primary italic-serif">Joint Venture Development</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '2000px' }}>
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-[3rem] border border-gray-100 bg-white relative transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:border-primary/20"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) rotateX(10deg) rotateY(-5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-10px)' }} />

                <div className="relative z-10 transition-transform duration-500" style={{ transform: 'translateZ(30px)' }}>
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-gray-900 mb-4 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Scenario Section (Premium Dark 3D) ── */}
      <section className="py-32 bg-[#020510] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Case Study</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black mb-6 leading-tight tracking-tight">
              Real joint venture <br />
              <span className="text-primary italic-serif">scenario — Velachery</span>
            </h2>
            <p className="text-white/40 text-lg">
              Here is a breakdown of a 2,400 sq.ft (1 ground) plot development to help you visualize the returns.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start" style={{ perspective: '2000px' }}>
            {/* Left side cards */}
            <div className="lg:col-span-5 space-y-6 flex flex-col h-full perspective-[2000px]">
              <div
                className="flex-1 p-10 rounded-[3rem] bg-white/5 border border-white/10 relative transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] hover:border-white/20 group"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(10deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-10px)' }} />
                <div className="relative z-10 transition-transform duration-500" style={{ transform: 'translateZ(30px)' }}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg">Landowner Side</div>
                      <div className="text-[9px] text-white/70 uppercase tracking-[0.2em] font-bold">Initial Asset</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-6 text-sm">
                    <div className="text-white/40 font-medium">Plot Area</div>
                    <div className="text-right font-black text-white text-base">2,400 sq.ft</div>
                    <div className="text-white/40 font-medium">Market Value</div>
                    <div className="text-right font-black text-white text-base">Rs. 1.20 Cr*</div>
                    <div className="text-white/40 font-medium">Your Share</div>
                    <div className="text-right font-black text-primary text-base">50% Ratio</div>
                  </div>
                </div>
              </div>

              <div
                className="flex-1 p-10 rounded-[3rem] bg-[#050A1B] border border-white/10 text-white relative transition-all duration-500 ease-out hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] hover:border-primary/50 group overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(-5deg) rotateY(10deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
                }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[50px] -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-10px)' }} />
                <div className="relative z-10 transition-transform duration-500" style={{ transform: 'translateZ(30px)' }}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 transition-colors">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg">What You Get</div>
                      <div className="text-[9px] text-white/80 uppercase tracking-[0.2em] font-bold">Developed Returns</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-6 text-sm">
                    <div className="text-white/60 font-medium">Built Content</div>
                    <div className="text-right font-black text-white text-base">4 Luxury Flats</div>
                    <div className="text-white/60 font-medium">Your Allocation</div>
                    <div className="text-right font-black text-white text-base underline decoration-white/30">2 Flats (Handover)</div>
                    <div className="text-white/60 font-medium">Monthly Rent</div>
                    <div className="text-right font-black text-primary text-base">Rs. 40,000+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side large card */}
            <div
              className="lg:col-span-7 bg-[#050A1B] border border-white/10 rounded-[3.5rem] p-12 lg:p-16 relative overflow-hidden h-full group transition-all duration-700 ease-out hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] hover:border-primary/30"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(-5deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
              }}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-20px)' }} />

              <div className="relative z-10 h-full flex flex-col justify-between transition-transform duration-700" style={{ transform: 'translateZ(40px)' }}>
                <div>
                  <h3 className="text-3xl font-heading font-black mb-12 text-white">Development Overview</h3>
                  <div className="space-y-12">
                    <div className="flex items-center gap-8 group/item">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-primary/30 group-hover/item:bg-primary/5 transition-all duration-300">
                        <Building2 className="w-10 h-10 text-white/60 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-white font-black text-4xl mb-2">5,400 <span className="text-xl text-white/70 font-medium">sq.ft</span></div>
                        <div className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">Total Built-up Area</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 group/item">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-primary/30 group-hover/item:bg-primary/5 transition-all duration-300">
                        <Users className="w-10 h-10 text-white/60 group-hover/item:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-white font-black text-4xl mb-2">G+2 <span className="text-xl text-white/70 font-medium">Structure</span></div>
                        <div className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">Standard Residential Specs</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/10">
                  <p className="text-white/40 text-base leading-relaxed mb-8 italic font-serif">
                    "By choosing a Joint Venture, the landowner in this scenario converted a static plot into 2 luxury income-generating apartments worth significantly more than the original land value."
                  </p>
                  <a href="tel:+917200472008">
                    <Button variant="cta" size="xl" className="w-full h-16 rounded-2xl shadow-xl shadow-primary/10">
                      Calculate Your Property ROI
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Requirements Section - Premium Centered ── */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Land Requirements</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight leading-tight">
                Is your land <br />
                <span className="text-primary italic-serif">suitable for JV?</span>
              </h2>
              <p className="text-gray-500 text-base font-medium max-w-2xl mx-auto">
                Check if your property meets our premium partnership criteria for a successful joint venture.
              </p>
            </div>

            {/* Requirements Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {REQUIREMENTS.map((req, i) => (
                <div 
                  key={i} 
                  className="group relative flex gap-5 p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(235,188,90,0.08)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all duration-500">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="relative z-10 flex-1 pt-1">
                    <span className="text-base font-bold text-foreground leading-relaxed">{req}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-600">Ready to explore your JV potential?</p>
              <a href="tel:+917200472008">
                <Button variant="cta" size="lg" className="rounded-2xl shadow-xl shadow-primary/15 hover:shadow-primary/25 transition-shadow">
                  Start Your Assessment
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modified FAQ Section ── */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-black text-foreground mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-center mb-16 font-medium">Clear answers for landowners looking for building partnerships.</p>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-bold text-foreground pr-6">{i + 1}. {faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-primary shrink-0 transition-transform duration-500" />
                      : <ChevronDown className="w-5 h-5 text-gray-300 shrink-0 transition-transform duration-500" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-8 pb-8 text-muted-foreground leading-relaxed font-medium animate-fade-down">
                      <div className="h-px w-full bg-gray-50 mb-6" />
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final White CTA ── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="bg-primary p-16 lg:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(235,188,90,0.3)]">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-heading font-black text-black mb-8 leading-tight tracking-tighter">
                Unlock the <span className="italic-serif text-white stroke-black stroke-1">Full Value</span><br />
                of Your Land.
              </h2>
              <p className="text-black/60 max-w-2xl mx-auto text-lg font-bold mb-12">
                Stop settling for one-time payments. Start building long-term wealth with Porko Elite Estates. Free site assessment within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:+917200472008">
                  <Button size="xl" className="bg-black text-white px-12 rounded-2xl hover:bg-black/90 shadow-2xl">
                    <Phone className="w-5 h-5 mr-2" /> +91 72004 72008
                  </Button>
                </a>
                <Button variant="outline" size="xl" className="border-black/10 bg-white/10 hover:bg-white text-black px-12 rounded-2xl font-black">
                  Request Free Site Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JointVenturePage;
