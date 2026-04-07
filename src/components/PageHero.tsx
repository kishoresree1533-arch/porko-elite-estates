import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const PageHero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }: PageHeroProps) => {
  return (
    <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/80" />
      <div className="relative z-10 text-center container-custom">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 animate-fade-up leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button variant="hero-outline" size="lg" className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
