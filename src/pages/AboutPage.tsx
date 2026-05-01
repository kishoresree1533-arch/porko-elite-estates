import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target, Eye, ArrowRight, Building2, Users, Award, ShieldCheck,
  Layers, FileText, Home, Wrench, Zap, CheckCircle2, Clock,
  TrendingUp, HardHat, ClipboardCheck, Camera, Star,
  ChevronDown, ChevronUp, Phone, MapPin
} from "lucide-react";
import { useState } from "react";
import heroHome from "@/assets/hero-home.jpg";
import aboutImage from "@/assets/about-image.jpg";


const SERVICES = [
  {
    icon: HardHat,
    title: "Soil Testing & Structural Planning",
    desc: "Site analysis and foundation engineering before a single brick is placed. We never skip this step.",
  },
  {
    icon: FileText,
    title: "Architectural & Floor Plan Design",
    desc: "Custom 2D plans and 3D elevations tailored to your plot, lifestyle, and vision.",
  },
  {
    icon: ClipboardCheck,
    title: "Government Plan Approval",
    desc: "Streamlined building plan approval handled with local authorities — stress-free for you.",
  },
  {
    icon: Building2,
    title: "Full Residential Construction",
    desc: "RCC, brickwork, plastering — ISI-grade materials under dedicated qualified supervision.",
  },
  {
    icon: Zap,
    title: "Electrical, Plumbing & Finishes",
    desc: "Comprehensive MEP works and interior finishing, delivering ready-to-occupy dream homes.",
  },
  {
    icon: CheckCircle2,
    title: "Final Inspection & Handover",
    desc: "Quality audit, warranty documentation, and a formal client handover walkthrough.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "15-Year Structural Warranty",
    desc: "We back every project with long-term warranty assurance. Quality construction is measurable — and our commitment doesn't end at handover.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Pricing from ₹1,899/sqft",
    desc: "Clear scope. Defined material specs. Milestone-based billing with no surprises and zero hidden charges, ever.",
  },
  {
    icon: HardHat,
    title: "Dedicated Site Engineer",
    desc: "Every project is assigned a qualified site engineer monitoring compliance and precision at each critical stage.",
  },
  {
    icon: Layers,
    title: "Stage-Wise Quality Checks",
    desc: "Foundation, RCC, brickwork, plastering, electrical, plumbing — each stage is formally inspected before the next begins.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    desc: "Milestone tracking systems keep every project on schedule. We maintain discipline across all phases to honour committed dates.",
  },
  {
    icon: Camera,
    title: "Regular Progress Reporting",
    desc: "Clients receive consistent site updates and photo reports — complete visibility even when you aren't physically on-site.",
  },
];

const FAQS = [
  {
    q: "What is Porko Elite Estates?",
    a: "Porko Elite Estates is a professional luxury construction and real estate company that provides complete building solutions including architectural design, structural engineering, building plan approval, residential construction, and bespoke interior design services.",
  },
  {
    q: "Where does Porko Elite Estates operate?",
    a: "We are headquartered in Chennai, Tamil Nadu, and provide premium construction services across the city and surrounding regions.",
  },
  {
    q: "What services does Porko Elite Estates offer?",
    a: "We provide a comprehensive range of services: House & villa construction, Commercial construction, Architectural designing, Structural engineering, Building plan approval, Bespoke interior design, and real estate acquisition consulting.",
  },
  {
    q: "How many projects has Porko Elite Estates completed?",
    a: "We have successfully completed over 500 residential and commercial construction projects, delivering uncompromising quality and enduring architectural value.",
  },
  {
    q: "What makes Porko different from other contractors in Chennai?",
    a: "We combine engineering rigor with luxury aesthetics — focused on transparent pricing, premium materials, qualified site supervision, and on-time delivery. Every client receives a dedicated project manager and a 15-year structural warranty.",
  },
  {
    q: "Does Porko provide full turnkey construction services?",
    a: "Yes. We manage the entire process — from soil testing and architectural design to final inspection and formal client handover — under one accountable system.",
  },
  {
    q: "Which areas in Chennai do you primarily serve?",
    a: "We serve clients across Chennai including Anna Nagar, Velachery, Porur, Tambaram, OMR, Ambattur, Nolambur, Mogappair, Avadi, and surrounding neighbourhoods.",
  },
  {
    q: "How do I start a construction project with Porko Elite Estates?",
    a: "Simply contact our team through the website, call us, or use our free Cost Calculator. Our architectural consultants will review your requirements and guide you through a zero-obligation planning process.",
  },
];

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero
        title="About Porko"
        subtitle="15 years of building trust, delivering quality, and exceeding expectations"
        backgroundImage={heroHome}
        showLogo={false}
      />

      {/* ── Company Story ── */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Our Foundation</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter leading-tight mb-8">
                Engineering Rigour into <br />
                <span className="text-primary italic-serif">Luxury Construction</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 font-medium">
                Porko Elite Estates was established to bring engineering precision into luxury house construction in Chennai. While many builders prioritize speed, we prioritize structural accuracy, documentation, and accountability.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                As experienced building contractors in Chennai, we manage every project with qualified site engineers, defined quality checkpoints, and milestone-based tracking systems.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-12 font-medium">
                From soil testing to final handover, every stage is supervised, verified, and documented — so you always know exactly what is being built and how.
              </p>
            </div>

            <div className="space-y-6">
              {/* Vision */}
              <div className="p-10 rounded-[2.5rem] bg-[#050A1B] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-black mb-4">Our Vision</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-medium">
                    To establish Porko Elite Estates as the benchmark for the best luxury construction company in Chennai — known for engineering precision, disciplined project execution, and transparent cost structures.
                  </p>
                </div>
              </div>
              {/* Mission */}
              <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-black text-gray-900 mb-6">Our Mission</h3>
                <ul className="space-y-3">
                  {[
                    "Deliver durable, safe and beautiful residential structures",
                    "Maintain strict stage-wise quality inspections throughout",
                    "Provide transparent BOQ and milestone-based billing",
                    "Complete every project within committed timelines",
                    "Offer 15-year long-term structural warranty support",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Turnkey Expertise ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">End-to-End Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter mb-4">
              Complete Turnkey <br />
              <span className="text-primary italic-serif">Construction Expertise</span>
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              End-to-end residential construction under one accountable system — from concept to formal handover.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <svc.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Phase {i + 1}</div>
                <h3 className="text-lg font-heading font-black text-gray-900 mb-4 leading-tight">{svc.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Makes Us The Best Choice ── */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Our Differentiators</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter leading-tight mb-6">
                What Makes Us The <br />
                <span className="text-primary italic-serif">Best Choice in Chennai</span>
              </h2>
              <p className="text-gray-400 text-sm font-medium leading-relaxed mb-12">
                Six pillars that define every project we undertake — built on accountability and delivered with precision.
              </p>
              <Link to="/cost-calculator">
                <Button className="bg-primary text-white h-14 px-10 rounded-2xl font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20">
                  Calculate Your Budget <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} className="p-8 rounded-[2rem] border border-gray-100 bg-white group hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500 flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <d.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-black text-gray-900 mb-2">{d.title}</h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Our Team ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Premium Content</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter mb-6">
              About Our <br />
              <span className="text-primary italic-serif">Expert Team</span>
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-12">
              A collective of seasoned professionals dedicated to delivering excellence in every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Structural Engineers",
                count: "5",
                desc: "Qualified engineers with 15+ years of experience in residential and commercial structural design.",
                expertise: "RCC, Steel, Foundation"
              },
              {
                title: "Architectural Designers",
                count: "8",
                desc: "Creative architects specializing in modern luxury homes and commercial spaces across Tamil Nadu.",
                expertise: "3D Design, Vastu, Planning"
              },
              {
                title: "Project Managers",
                count: "15",
                desc: "Dedicated managers ensuring on-time delivery and quality control at every construction phase.",
                expertise: "Timeline, Quality, Coordination"
              },
              {
                title: "Interior Specialists",
                count: "6",
                desc: "Expert interior designers creating bespoke spaces with premium materials and finishes.",
                expertise: "Luxury, Custom, Modern"
              }
            ].map((team, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors duration-500">
                  <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-3xl font-heading font-black text-primary mb-2">{team.count}</div>
                <h3 className="text-lg font-heading font-black text-gray-900 mb-3">{team.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-4">{team.desc}</p>
                <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest bg-gray-50 px-3 py-2 rounded-full inline-block">
                  {team.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter leading-tight mb-8">
                Meet Our <br />
                <span className="text-primary italic-serif">Founder & Managing Director</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 font-medium">
                With over 15 years of experience in the construction industry, our founder established Porko Elite Estates with a vision to bring engineering precision and transparency to luxury construction in Tamil Nadu.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                Starting as a structural engineer, our founder's journey encompasses over 200 successful projects, ranging from luxury villas to commercial complexes, each built with uncompromising quality and attention to detail.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                "Every structure we build is a testament to our commitment to excellence, safety, and client satisfaction. We don't just construct buildings – we build relationships that last a lifetime."
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Experience", value: "15+ years" },
                  { label: "Projects Led", value: "200+" },
                  { label: "Awards", value: "12+" },
                  { label: "Team Size", value: "40+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-gray-50">
                    <div className="text-2xl font-heading font-black text-primary mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-primary text-white h-14 px-10 rounded-2xl font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20">
                  Connect with Office <ArrowRight className="w-4 h-4" />
                </Button>
                <a href="tel:+917695940400" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> +91 76959 40400
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-[100px]" />
                <div className="relative w-full aspect-[4/5] rounded-[3rem] bg-gray-100 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 group hover:border-primary/20 hover:bg-gray-50 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors">
                    <Users className="w-8 h-8 text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest">Image Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter mb-6">
              Ready to Build Your <br />
              <span className="text-primary italic-serif">Dream Home in Chennai?</span>
            </h2>
            <p className="text-gray-400 text-base font-medium leading-relaxed mb-12">
              Speak with our architectural experts — zero obligation, complete transparency. We walk you through the full process before any commitment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-primary text-white h-16 px-12 rounded-2xl font-black text-sm uppercase tracking-widest gap-3 shadow-2xl shadow-primary/20 group">
                  Get a Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+917695940400">
                <Button variant="outline" className="border-gray-200 h-16 px-10 rounded-2xl font-black text-xs uppercase tracking-widest gap-3">
                  <Phone className="w-4 h-4" /> Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 tracking-tighter mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm font-medium mb-16">Everything you need to know about Porko Elite Estates.</p>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-7 text-left hover:bg-gray-50/80 transition-colors"
                  >
                    <span className="text-sm font-bold text-gray-900 pr-6">{i + 1}. {faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-300 shrink-0" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-7 pb-7 text-sm text-gray-500 leading-relaxed font-medium border-t border-gray-50 pt-5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default AboutPage;

