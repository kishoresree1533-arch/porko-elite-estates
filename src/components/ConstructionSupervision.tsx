import { HardHat, Camera, Smartphone, ClipboardCheck, Users, ShieldCheck } from "lucide-react";
import supervisionHeroImg from "@/assets/alvara_construcao.jpg";

const features = [
  {
    icon: HardHat,
    title: "Dedicated Site Engineer",
    desc: "A qualified engineer remains on your site daily to oversee every structural detail and quality benchmark."
  },
  {
    icon: Camera,
    title: "Live 24/7 CCTV Feed",
    desc: "Monitor your property construction from anywhere in the world with high-definition live camera access."
  },
  {
    icon: Smartphone,
    title: "Real-Time Tracking App",
    desc: "Receive daily logs, photos, and milestone progress reports directly on your Porko Elite dashboard."
  },
  {
    icon: ClipboardCheck,
    title: "440+ Quality Inspections",
    desc: "Rigorous quality checks at every singular stage — from foundation excavation to final painting coats."
  },
  {
    icon: Users,
    title: "Elite Master Craftsmen",
    desc: "Only highly skilled artisans and specialized crews handle finishes, ensuring world-class execution."
  },
  {
    icon: ShieldCheck,
    title: "15-Year Structural Bond",
    desc: "Written legal guarantee covering the building's core skeleton, ensuring a legacy of structural safety."
  }
];

const ConstructionSupervision = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-6">
              Engineering Oversight
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-8 leading-tight tracking-tight">
              Masterpiece Execution Through <span className="text-primary italic-serif">Precision Supervision</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-12 font-medium">
              We don't just build structures; we engineer peace of mind. Our proprietary supervision framework ensures every brick is laid with integrity and every beam is poured to perfection.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-black text-foreground mb-2 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={supervisionHeroImg} 
                alt="Professional Site Supervision" 
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-12 left-12 right-12 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white">
                      <ShieldCheck className="w-8 h-8" />
                   </div>
                   <div>
                      <div className="text-white text-2xl font-heading font-black tracking-tight">ISO 9001:2015</div>
                      <div className="text-white/60 text-sm font-bold uppercase tracking-widest">Certified Quality Systems</div>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating stats badge */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white shadow-2xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center hidden xl:flex">
               <div className="text-primary text-4xl font-heading font-black">440+</div>
               <div className="text-gray-400 text-[9px] font-black uppercase tracking-widest leading-tight mt-1">Quality <br /> Benchmarks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSupervision;
