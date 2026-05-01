import { useCountUp } from "@/hooks/useCountUp";
import { Building2, Users, Award, Shield } from "lucide-react";

const stats = [
  { icon: Building2, value: 200, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 1100, suffix: "+", label: "Families Served" },
  { icon: Award, value: 15, suffix: "+ years", label: "Years of Excellence" },
  { icon: Shield, value: 10, suffix: " Yr", label: "Structural Warranty" },
];

const StatItem = ({ icon: Icon, value, suffix, label }: { icon: any; value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="group relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative flex items-center gap-5 p-4 lg:p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-xl hover:bg-white/[0.04] hover:border-[#D4AF37]/20 transition-all duration-500 transform hover:-translate-y-1">
        {/* Animated Gold Indicator */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#D4AF37] transition-all duration-700 group-hover:h-1/2 rounded-full" />

        {/* Icon Container */}
        <div className="relative flex-shrink-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/5 transition-all duration-500">
            <Icon className="w-5 h-5 text-white/60 group-hover:text-[#D4AF37] transition-colors duration-500" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
            <div className="text-2xl lg:text-3xl font-heading font-black text-white tracking-tighter leading-none mb-0.5">
                {count}{suffix}
            </div>
            <div className="text-[9px] lg:text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-500">
                {label}
            </div>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-[#050A1B]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
