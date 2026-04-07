import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import estateHero from "@/assets/estate-hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { MapPin, Bed, Bath, Maximize, ArrowRight, IndianRupee } from "lucide-react";
import { useState } from "react";

const properties = [
  { image: project1, title: "Seaside Luxury Villa", location: "Mumbai", price: "2.5 Cr", beds: 4, baths: 3, sqft: "3,500", type: "Villa" },
  { image: project2, title: "Sky Tower Apartment", location: "Pune", price: "1.2 Cr", beds: 3, baths: 2, sqft: "1,800", type: "Apartment" },
  { image: project3, title: "Skyline Penthouse", location: "Delhi", price: "4.8 Cr", beds: 5, baths: 4, sqft: "4,200", type: "Penthouse" },
  { image: project4, title: "Heritage Townhouse", location: "Bangalore", price: "1.8 Cr", beds: 3, baths: 2, sqft: "2,200", type: "Townhouse" },
  { image: project1, title: "Palm Residency", location: "Mumbai", price: "3.1 Cr", beds: 4, baths: 3, sqft: "3,800", type: "Villa" },
  { image: project3, title: "Urban Heights", location: "Pune", price: "95 L", beds: 2, baths: 2, sqft: "1,200", type: "Apartment" },
];

const EstatePage = () => {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Villa", "Apartment", "Penthouse", "Townhouse"];
  const filtered = filter === "All" ? properties : properties.filter((p) => p.type === filter);

  return (
    <Layout>
      <PageHero
        title="Premium Real Estate"
        subtitle="Discover handpicked luxury properties in India's most coveted addresses"
        backgroundImage={estateHero}
        ctaText="Browse Properties"
        ctaLink="#listings"
      />

      <section id="listings" className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Properties" title="Curated Luxury Residences" subtitle="Each property is personally vetted for quality, location, and investment potential" />
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === type
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-foreground hover:bg-primary/5 border border-border/50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <div key={i} className="group premium-card overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={800} height={800} />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/90 text-foreground text-sm font-bold flex items-center gap-1 backdrop-blur-sm">
                    <IndianRupee className="w-3 h-3" />{property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{property.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-5">
                    <MapPin className="w-4 h-4" /> {property.location}
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><Bed className="w-4 h-4" /> {property.beds}</div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><Bath className="w-4 h-4" /> {property.baths}</div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><Maximize className="w-4 h-4" /> {property.sqft} sqft</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-5">
            Looking for Something Specific?
          </h2>
          <p className="text-primary-foreground/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Share your requirements and our property consultants will curate the perfect selection for you.
          </p>
          <Link to="/contact">
            <Button variant="hero-outline" size="xl">Get in Touch <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default EstatePage;
