import logoImage from "@/assets/porko-logo-premium-v2.png";

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'color', 
  size = 'md'
}) => {
  const sizeMap = {
    sm: { height: 40 },
    md: { height: 50 },
    lg: { height: 60 },
    xl: { height: 80 },
  };

  const currentSize = sizeMap[size];
  
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Porko Elite Estates Logo"
        className={`transition-all duration-300 hover:scale-105 select-none drop-shadow-sm hover:drop-shadow-md ${variant === 'dark' ? 'brightness-0 invert' : ''}`}
        style={{
          height: `${currentSize.height}px`,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default Logo;
