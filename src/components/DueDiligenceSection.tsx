import { CheckCircle2, ShieldCheck, Users, Search, FileText, ClipboardList } from "lucide-react";

const checkpoints = [
  {
    icon: ShieldCheck,
    number: "01",
    label: "FINANCIAL SAFETY",
    title: "Avoid Large <span class='text-primary'>Advance Payments</span>",
    desc: "Never pay high upfront costs. Payments should be strictly milestone-based to ensure your capital is tied to visible progress.",
  },
  {
    icon: Search,
    number: "02",
    label: "DUE DILIGENCE",
    title: "Check Final <span class='text-primary'>Billing History</span>",
    desc: "Verify with previous clients if final costs matched initial quotes. Transparency in final billing is the hallmark of trust.",
  },
  {
    icon: Users,
    number: "03",
    label: "TEAM STRUCTURE",
    title: "In-House <span class='text-primary'>Architectural Team</span>",
    desc: "Ensure your builder has in-house design experts for seamless coordination and to minimize architectural errors.",
  },
  {
    icon: ClipboardList,
    number: "04",
    label: "TECHNICAL STANDARDS",
    title: "Structural Design <span class='text-primary'>After Soil Testing</span>",
    desc: "Foundations must be designed based on professional soil analysis to ensure the long-term structural integrity of your home.",
  },
  {
    icon: FileText,
    number: "05",
    label: "CONTRACT CLARITY",
    title: "Detailed Material <span class='text-primary'>Specifications</span>",
    desc: "Every material—from cement grade to tile brands—must be explicitly documented in the contract to avoid quality compromises.",
  },
  {
    icon: CheckCircle2,
    number: "06",
    label: "LEGAL PROTECTION",
    title: "Written <span class='text-primary'>Warranty Agreement</span>",
    desc: "Ensure your structural warranty is a legally binding written document, not just a verbal promise made during sales.",
  }
];

const DueDiligenceSection = () => {
  return (
    <section className="py-12 bg-[#FAFAFA] overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* Left Column - Header Content */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-8">
              Due Diligence Guide
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight tracking-tight">
              6 Things to Verify <br />
              <span className="text-primary italic-serif block mt-2">Before Choosing a Builder</span>
            </h2>
            
            <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-md font-medium">
              Protect your investment and peace of mind by verifying these critical factors before finalizing your construction partner.
            </p>

            <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Checklist Progress</span>
                    <span className="text-primary font-heading font-black">6 Points</span>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-primary" />
                </div>
            </div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {checkpoints.map((point, i) => (
              <div 
                key={i} 
                className={`group relative bg-white p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${
                  i === 1 ? 'border-primary ring-1 ring-primary/20' : 'border-gray-100 hover:border-primary/20'
                }`}
              >
                {/* Top Ornament */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <span className="text-5xl font-heading font-black text-gray-100 group-hover:text-primary/5 transition-colors">
                    {point.number}
                  </span>
                </div>

                {/* Content */}
                <h3 
                  className="text-xl md:text-2xl font-heading font-black text-foreground mb-4 leading-[1.2] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: point.title }}
                />
                
                <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8">
                  {point.desc}
                </p>

                {/* Bottom Tag */}
                <div className="inline-block px-4 py-1.5 rounded-full bg-gray-50 text-[9px] font-black text-gray-400 group-hover:text-primary transition-colors uppercase tracking-[0.15em] border border-gray-100 italic">
                  {point.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DueDiligenceSection;
