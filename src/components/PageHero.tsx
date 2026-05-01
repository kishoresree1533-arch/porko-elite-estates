import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaLink?: string;
  showLogo?: boolean;
}

import Logo from "./Logo";

const PageHero = ({ title, subtitle, backgroundImage, ctaText, ctaLink, showLogo }: PageHeroProps) => {
  // Split title: last word gets the italic gold serif treatment
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-20 bg-white overflow-hidden border-b border-border">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #050A1B 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            {showLogo && (
              <div className="mb-8">
                <Logo size="lg" variant="color" />
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 leading-[1.1] tracking-tight">
              {firstPart && <span>{firstPart} </span>}
              <span className="text-primary italic-serif">{lastWord}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed font-medium">
              {subtitle}
            </p>
            {ctaText && ctaLink && (
              <Link to={ctaLink}>
                <Button variant="cta" size="xl" className="shadow-lg hover:shadow-primary/20 transition-all">
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>

          <div className="relative animate-slide-in-right hidden lg:block">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-primary/10 rounded-3xl -rotate-2" />
            <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-1" />

            {/* Main Visual */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
              <img
                src={backgroundImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
