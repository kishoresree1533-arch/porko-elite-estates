import React, { useState, useEffect, useRef, useMemo } from "react";

interface AccordGalleryItem {
  title: string;
  imageUrl: string;
  location?: string;
  sqft?: string;
  type?: string;
}

interface AccordGalleryProps {
  items: AccordGalleryItem[];
  defaultOpenIndex?: number;
  radius?: number;
}

const AccordGallery: React.FC<AccordGalleryProps> = ({
  items,
  defaultOpenIndex = 0,
  radius = 16,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      setIsMobile(window.innerWidth <= 768);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getItemWidths = useMemo(() => {
    if (!items || items.length === 0 || containerWidth === 0) return [];
    
    const gap = isMobile ? 8 : 12;
    const totalGap = gap * (items.length - 1);
    const availableWidth = containerWidth - totalGap;
    
    const activeWidth = isMobile 
      ? Math.max(availableWidth * 0.6, 150) 
      : Math.max(availableWidth * 0.45, 250);
    
    const inactiveWidth = (availableWidth - activeWidth) / (items.length - 1);
    
    return items.map((_, index) => (index === activeIndex ? activeWidth : inactiveWidth));
  }, [items, activeIndex, containerWidth, isMobile]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[350px] lg:h-[450px] flex items-center justify-center overflow-hidden"
    >
      <div 
        style={{ 
          display: "flex", 
          gap: isMobile ? "8px" : "12px",
          width: "100%",
          height: "100%",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className="relative h-full overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ 
              width: getItemWidths[index] || "100%",
              borderRadius: `${radius}px`,
              flexShrink: 0
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 z-10 transition-opacity duration-500 ${activeIndex === index ? 'bg-black/50' : 'bg-black/30'}`} />
            
            {/* Content */}
            <div className={`absolute inset-0 z-20 p-4 lg:p-6 flex flex-col justify-end transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="text-white/70 text-[10px] tracking-widest uppercase mb-1">{item.type}</span>
                <h3 className="text-white text-xl lg:text-2xl font-heading font-bold mb-1">{item.title}</h3>
                <div className="flex items-center justify-between text-white/80 text-xs">
                    <span>{item.location}</span>
                    <span className="font-medium text-white">{item.sqft} sq.ft</span>
                </div>
            </div>

            {/* Vertical Title (when collapsed) */}
            <div 
                className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 pointer-events-none ${activeIndex === index ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
            >
                <span 
                    className="text-white/50 font-heading font-bold uppercase whitespace-nowrap tracking-wider text-[10px] lg:text-xs"
                    style={{ transform: "rotate(-90deg)" }}
                >
                    {item.title}
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AccordGallery;
