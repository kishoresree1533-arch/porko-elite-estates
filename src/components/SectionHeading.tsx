interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, light = false, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 lg:mb-20 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 ${
          light ? "bg-primary-foreground/10 text-primary-foreground/80" : "bg-primary/5 text-primary/70 border border-primary/10"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${
          light ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
