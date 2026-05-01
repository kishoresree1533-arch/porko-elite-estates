import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Importing the generated images from local assets
import siteEngineerImg from "@/assets/why-choose/engineer.png";
import timelineImg from "@/assets/why-choose/timeline.png";
import pricingImg from "@/assets/why-choose/pricing.png";
import structuralImg from "@/assets/why-choose/structural.png";
import materialsImg from "@/assets/why-choose/materials.png";
import handoverImg from "@/assets/why-choose/handover.png";

const reasons = [
  {
    image: siteEngineerImg,
    badge: "01 - EXPERT SUPERVISION",
    title: "Dedicated Site Engineer for Every Project",
    subtitle: "Qualified Engineering Supervision on Every Pillar",
  },
  {
    image: timelineImg,
    badge: "02 - ON-TIME DELIVERY",
    title: "Structured Timeline with On-Time Completion",
    subtitle: "Precision Milestone Tracking & Reporting",
  },
  {
    image: pricingImg,
    badge: "03 - ZERO HIDDEN COSTS",
    title: "Transparent Stage-Wise Payment Model",
    subtitle: "Complete Financial Clarity & Integrity",
  },
  {
    image: structuralImg,
    badge: "04 - ELITE STRUCTURAL",
    title: "15-Year Premier Structural Guarantee",
    subtitle: "Engineered for Generations of Longevity",
  },
  {
    image: materialsImg,
    badge: "05 - MATERIAL MASTERPIECE",
    title: "The Finest Grade-A Global Materials",
    subtitle: "Uncompromising Quality in Every Detail",
  },
  {
    image: handoverImg,
    badge: "06 - SEAMLESS POSSESSION",
    title: "Effortless Handover & After-Care",
    subtitle: "Your Legacy Journey, Fully Managed",
  }
];

const WhyChooseSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    slidesToScroll: 3, // Scroll by 3 cards (one page)
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 leading-[1.1] tracking-tight">
                Building Exceptional Homes That Reflect Your Vision and Lifestyle
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
                Six luxury pillars that make every Porko Elite architectural project a guaranteed masterpiece and a stress-free investment.
            </p>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {reasons.map((reason, i) => (
              <div 
                key={i} 
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-1.33rem)] min-w-0"
              >
                <div className="group relative h-[650px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                    <div className="absolute inset-0 transition-transform duration-[2s] scale-100 group-hover:scale-110">
                        <img 
                            src={reason.image} 
                            alt={reason.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
                    </div>

                    <div className="relative z-10 p-10 flex flex-col items-start gap-4">
                        <div className="px-5 py-2.5 rounded-full bg-primary shadow-[0_10px_20px_rgba(5,10,27,0.3)] text-white text-[10px] font-black tracking-widest uppercase mb-4">
                            {reason.badge}
                        </div>
                        <div className="mt-2 max-w-[90%]">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white mb-3 leading-[1.15] tracking-tight">
                                {reason.title}
                            </h3>
                            <p className="text-white/80 text-xs md:text-sm font-bold tracking-tight uppercase opacity-80">
                                {reason.subtitle}
                            </p>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <button 
            onClick={scrollPrev}
            className={`w-14 h-14 rounded-full border border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary group ${selectedIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <ArrowLeft className={`w-5 h-5 text-primary group-hover:text-white transition-colors`} />
          </button>

          <div className="flex items-center gap-1.5 font-heading text-lg font-black tracking-widest">
            <span className="text-primary">{selectedIndex + 1}</span>
            <span className="text-gray-300 font-normal">/</span>
            <span className="text-gray-400">{scrollSnaps.length}</span>
          </div>

          <button 
            onClick={scrollNext}
            className={`w-14 h-14 rounded-full border border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary group ${selectedIndex === scrollSnaps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <ArrowRight className={`w-5 h-5 text-primary group-hover:text-white transition-colors`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
