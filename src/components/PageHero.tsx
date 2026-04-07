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
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center container-custom">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button variant="hero" size="lg" className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
