import { CheckCircle2 } from "lucide-react";

const materials = [
  {
    category: "Structure & Core",
    items: [
      { name: "Cement", grade: "Ultratech / ACC / Birla Shaktimaan (OPC 53 Grade)", desc: "High strength Portland cement for structural columns and beams." },
      { name: "Steel", grade: "TATA Tiscon / JSW Neosteel (FE 550D)", desc: "Ductile, high-tensile rebar for superior earthquake resistance." },
      { name: "Fine Aggregate", grade: "M-Sand (Zone II Double Washed)", desc: "Engineered sand for high bondage and zero salt content." },
      { name: "Solid Blocks", grade: "Factory Cured (7-Day Curing Period)", desc: "High-density concrete blocks for thermal insulation." }
    ]
  },
  {
    category: "Electrical & Plumbing",
    items: [
      { name: "Wiring", grade: "Havells / Finolex (FRLS - Fire Retardant)", desc: "Fire-resistant cables with low smoke emission for safety." },
      { name: "Pipes", grade: "Ashirvad / Astral (CPVC / UPVC)", desc: "Lead-free, chemical resistant piping for lifelong water flow." },
      { name: "Switchgear", grade: "Legrand / Schneider (Myrius / Livia)", desc: "Premium touch-points with surge protection and child safety." },
      { name: "Waterproofing", grade: "Dr. Fixit / Fosroc (5-Stage Application)", desc: "Integrated chemical treatment for slabs, toilets, and sumps." }
    ]
  }
];

const MaterialGradeShowcase = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-4">
            Technical Specification
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4 leading-tight tracking-tight">
            The <span className="text-primary">Masterpiece Inventory</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-medium">
            We exclusively utilize internationally certified materials that meet the peak benchmarks of Indian Bureau of Standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {materials.map((cat, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-black/5 border border-white">
               <h3 className="text-2xl font-heading font-black text-primary mb-8 tracking-tight border-b border-gray-100 pb-6 flex items-center justify-between">
                 {cat.category}
                 <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Porko Grade-A</span>
               </h3>
               <div className="flex flex-col gap-8">
                 {cat.items.map((item, idx) => (
                   <div key={idx} className="flex gap-6 group">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline gap-2 mb-2">
                           <span className="text-lg font-bold text-foreground">{item.name}</span>
                           <span className="text-[10px] font-black text-primary/60 bg-primary/5 px-2 py-0.5 rounded uppercase tracking-widest">{item.grade}</span>
                        </div>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialGradeShowcase;
