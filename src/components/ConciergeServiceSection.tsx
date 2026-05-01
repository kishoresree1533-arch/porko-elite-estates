import { Key, ShieldCheck, Map, BarChart3, Users2, Compass } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Off-Market Sourcing",
    desc: "Access the most exclusive 'Whisper Listings' in India—properties that are never publicly listed and reserved for the top 0.1%.",
    label: "EXCLUSIVE ACCESS"
  },
  {
    icon: ShieldCheck,
    title: "Strategic Due Diligence",
    desc: "Every estate undergoes a 200-point structural and legal audit by our in-house engineers before we present it to you.",
    label: "RISK MITIGATION"
  },
  {
    icon: BarChart3,
    title: "Yield & Value Analytics",
    desc: "We provide data-driven appreciation forecasts and rental yield analytics to ensure your legacy home is also a sound financial asset.",
    label: "INVESTMENT ALPHA"
  },
  {
    icon: Key,
    title: "Elite Concierge Handover",
    desc: "From local registration to architectural white-glove moving services, we manage the entire transition into your new estate.",
    label: "WHITE-GLOVE SERVICE"
  }
];

const ConciergeServiceSection = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #050A1B 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
          
          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Estate Acquisition Concierge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-8 leading-tight tracking-tight">
               We Don't Just Find Homes, <br />
               <span className="text-primary italic-serif">We Secure Legacies</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
               Porko Elite Estates operates as a bespoke private office for your property acquisitions. We move beyond simple listings to provide pure architectural intelligence and strategic asset management.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
               {services.map((s, i) => (
                 <div key={i} className="group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <s.icon className="w-6 h-6" />
                    </div>
                    <div className="text-[9px] font-black text-primary/40 uppercase tracking-widest mb-2 italic">
                        {s.label}
                    </div>
                    <h3 className="text-xl font-heading font-black text-foreground mb-3 tracking-tight">
                        {s.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-500 transition-colors">
                        {s.desc}
                    </p>
                 </div>
               ))}
            </div>
          </div>

          {/* Visual side - Cinematic overlapping images */}
          <div className="relative">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                   src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                   alt="Bespoke Luxury Architecture" 
                   className="w-full h-[750px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-12 left-12 p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 max-w-sm">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                         <Map className="w-5 h-5" />
                      </div>
                      <span className="text-white text-xs font-black uppercase tracking-widest">Active Search Markets</span>
                   </div>
                   <div className="space-y-3">
                      {["Chennai (OMR & ECR)", "Coimbatore (Race Course)", "Madurai (Anna Nagar)"].map(market => (
                        <div key={market} className="flex items-center gap-3 text-white/80 text-sm font-bold">
                           <div className="w-1 h-1 rounded-full bg-primary" />
                           {market}
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Floating Trust Badge */}
             <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary flex flex-col items-center justify-center text-center p-8 shadow-2xl border-4 border-white hidden xl:flex rotate-[-10deg]">
                <div className="text-white text-2xl font-heading font-black">₹500Cr+</div>
                <div className="text-white/60 text-[8px] font-black uppercase tracking-widest leading-tight mt-1">Transaction <br /> Intelligence</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConciergeServiceSection;
