interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, light = false, center = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light ? "bg-primary-foreground/10 text-primary-foreground" : "bg-accent/10 text-accent"
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
        <p className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
