import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import estateHeroImg from "@/assets/luxury_mansion_exterior.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { MapPin, Bed, Bath, Maximize, ArrowRight, IndianRupee } from "lucide-react";
import { useState } from "react";

import ConciergeServiceSection from "@/components/ConciergeServiceSection";
import PropertyTypesSection from "@/components/PropertyTypesSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import BestPlatformSection from "@/components/BestPlatformSection";
import RentalPropertiesSection from "@/components/RentalPropertiesSection";
import DualCTASection from "@/components/DualCTASection";
import EnquireSection from "@/components/EnquireSection";

const EstatePage = () => {
  return (
    <Layout>
      <PageHero
        title="Premium Real Estate"
        subtitle="Secure your legacy with India's most exclusive bespoke property acquisition service"
        backgroundImage={estateHeroImg}
        ctaText="Consult Our Experts"
        ctaLink="/contact"
      />

      <PropertyTypesSection />
      <FeaturedPropertiesSection />
      <BestPlatformSection />
      <RentalPropertiesSection />
      
      {/* Enquire Now Form */}
      <EnquireSection />

      <DualCTASection />
      
      <CTASection 
        title="Find Your Bespoke Estate"
        subtitle="Share your requirements and our property consultants will curate the perfect selection for your legacy investment."
        ctaText="Get in Touch"
      />
    </Layout>
  );
};

export default EstatePage;
