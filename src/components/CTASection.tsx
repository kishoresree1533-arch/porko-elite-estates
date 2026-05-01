import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CTASection = ({
  title = "Begin Your Legacy Journey Today",
  subtitle = "Partner with India's most prestigious builders to bring your enduring architectural masterpiece to life.",
  badge = "The Pinnacle of Luxury",
  ctaText = "Schedule Consultation",
  ctaLink = "/contact"
}: CTASectionProps) => {
  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #050A1B 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/40 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em]">{badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-4 leading-tight tracking-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase() === 'legacy' || word.toLowerCase() === 'vision' ? "text-primary italic font-serif" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed font-medium">
              {subtitle}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <Link to={ctaLink}>
              <Button className="h-auto py-4 px-8 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 rounded-xl font-black shadow-lg shadow-primary/20 flex items-center gap-2 group/btn">
                {ctaText}
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <a href="tel:+917695940400" className="group flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300">
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest mb-0.5">Direct Call</div>
                <div className="text-sm font-black tracking-tight">+91 76959 40400</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
