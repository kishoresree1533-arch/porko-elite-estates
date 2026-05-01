import React, { useEffect, useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

import luxuryLivingRoom from "@/assets/luxury_living_room.png";
import interiorHero from "@/assets/interior-hero.jpg";
import luxuryKitchen from "@/assets/luxury_kitchen.png";
import luxuryBathroom from "@/assets/luxury_bathroom.png";
import bedroomImg from "@/assets/project-3.jpg";
import officeImg from "@/assets/about-image.jpg";

const galleryItems = [
  { image: luxuryLivingRoom, title: "Skyline Living Lounge", category: "Contemporary Living" },
  { image: interiorHero, title: "Minimalist Grand Suite", category: "Modern Architecture" },
  { image: luxuryKitchen, title: "Culinary Studio", category: "Gourmet Kitchen" },
  { image: bedroomImg, title: "The Sanctuary", category: "Master Bedroom" },
  { image: luxuryBathroom, title: "Aura Spa Bath", category: "Wellness Space" },
  { image: officeImg, title: "The Private Office", category: "Executive Suite" },
];

const DraggableInteriorsGallery = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        align: "center",
        containScroll: "trimSnaps",
        dragFree: true,
        skipSnaps: false
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const onScroll = useCallback(() => {
        if (!emblaApi) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onScroll();
        emblaApi.on("scroll", onScroll);
        emblaApi.on("select", onScroll);
    }, [emblaApi, onScroll]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="min-h-screen bg-[#020617] text-white overflow-hidden perspective-1000 flex flex-col justify-center py-12">
            <div className="container-custom mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                            <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em]">The Immersive Portfolio</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-2 leading-[1.1] tracking-tighter"
                        >
                            Bespoke Interior <br />
                            <span className="text-primary italic-serif">Design Gallery</span>
                        </motion.h2>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={scrollPrev}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-700 group hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                        >
                            <ArrowLeft className="w-5 h-5 group-active:scale-75 transition-transform" />
                        </button>
                        <button 
                            onClick={scrollNext}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-700 group hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                        >
                            <ArrowRight className="w-5 h-5 group-active:scale-75 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Framer-Style Draggable Carousel - Full Screen Height Fit */}
            <div className="cursor-grab active:cursor-grabbing px-4">
                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex gap-8 md:gap-12">
                        {galleryItems.map((item, i) => {
                            const isActive = selectedIndex === i;
                            return (
                                <div 
                                    key={i} 
                                    className="flex-[0_0_90%] md:flex-[0_0_75%] lg:flex-[0_0_65%] min-w-0"
                                >
                                    <motion.div 
                                        className="relative h-[60vh] md:h-[70vh] rounded-[3.5rem] overflow-hidden group border border-white/10"
                                        initial={false}
                                        animate={{ 
                                            scale: isActive ? 1 : 0.94,
                                            opacity: isActive ? 1 : 0.5,
                                            rotateY: isActive ? 0 : (i < selectedIndex ? 10 : -10)
                                        }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 90,
                                            damping: 20,
                                            mass: 1
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-[#020617] transition-all duration-700">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                                            />
                                        </div>
                                        
                                        {/* Dynamic Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                        
                                        <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                                            <motion.div
                                                animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                                                transition={{ delay: 0.1 }}
                                            >
                                                <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">
                                                    {item.category}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white leading-none tracking-tight mb-8">
                                                    {item.title}
                                                </h3>
                                                <button className="flex items-center gap-3 text-white/60 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors group/btn border border-white/20 rounded-full px-6 py-3 hover:bg-white/5 backdrop-blur-sm">
                                                    Explore Project
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </motion.div>
                                        </div>

                                        <div className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100 italic font-black text-primary text-sm shadow-2xl">
                                             {i + 1}
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom Progress Scrubber */}
            <div className="container-custom mt-12">
                <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden mb-6">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.5em] text-white/30 font-inter">
                    <span>Inspiration Center</span>
                    <div className="flex items-center gap-4">
                        <span className="text-primary">{selectedIndex + 1}</span>
                        <div className="w-8 h-px bg-white/10" />
                        <span>{galleryItems.length}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DraggableInteriorsGallery;
