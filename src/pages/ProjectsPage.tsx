import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import chennaiResidential from "@/assets/chennai-residential.jpg";
import coimbatoreCommercial from "@/assets/coimbatore-commercial.jpg";
import maduraiResidential from "@/assets/madurai-residential.jpg";
import skylinePenthouse from "@/assets/skyline-penthouse.jpg";
import trichyResidential from "@/assets/trichy-residential.jpg";
import heritageHomes from "@/assets/heritage-homes.jpg";
import salemInterior from "@/assets/salem-interior.jpg";
import tiruppurCommercial from "@/assets/tiruppur-commercial.jpg";
import industrialComplex from "@/assets/industrial-complex.jpg";
import erodeResidential from "@/assets/erode-residential.jpg";
import velloreResidential from "@/assets/vellore-residential.jpg";
import modernApartmentNew from "@/assets/modern-apartment-new.jpg";
import lakeViewVillasNew from "@/assets/lake-view-villas-new.jpg";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const allProjects = [
  { image: chennaiResidential, title: "Seaside Villa", location: "Chennai", category: "Residential", sqft: "3,500" },
  { image: modernApartmentNew, title: "Modern Apartment", location: "Coimbatore", category: "Commercial", sqft: "50,000" },
  { image: skylinePenthouse, title: "Skyline Penthouse", location: "Madurai", category: "Residential", sqft: "4,200" },
  { image: heritageHomes, title: "Heritage Homes", location: "Trichy", category: "Residential", sqft: "2,800" },
  { image: salemInterior, title: "Corporate Office", location: "Salem", category: "Interiors", sqft: "8,000" },
  { image: industrialComplex, title: "Industrial Complex", location: "Tiruppur", category: "Commercial", sqft: "120,000" },
  { image: erodeResidential, title: "Garden Estate", location: "Erode", category: "Residential", sqft: "5,000" },
  { image: lakeViewVillasNew, title: "Lake View Villas", location: "Vellore", category: "Residential", sqft: "3,200" },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Interiors"];
  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHero
        title="Our Projects"
        subtitle="A portfolio of precision — explore our finest completed works"
        backgroundImage={heroHome}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Portfolio" title="Featured Projects" subtitle="Each project represents our commitment to excellence and meticulous craftsmanship" />

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-foreground hover:bg-primary/5 border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((project, i) => (
              <div key={i} className="group premium-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="w-3 h-3" /> {project.location}</span>
                    <span className="text-sm font-medium text-primary">{project.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Have a Project in Mind?"
        subtitle="Let's discuss your vision and bring it to life with precision and excellence."
        ctaText="Start Your Project"
      />
    </Layout>
  );
};

export default ProjectsPage;
