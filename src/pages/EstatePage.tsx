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
import { MapPin, Bed, Bath, Maximize, ArrowRight, Search, IndianRupee } from "lucide-react";
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
        subtitle="Discover handpicked premium properties in India's most sought-after locations"
        backgroundImage={estateHero}
        ctaText="Browse Properties"
        ctaLink="#listings"
      />

      <section id="listings" className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Properties" title="Find Your Dream Property" subtitle="Explore our curated collection of premium residential properties" />
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Listings Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <div key={i} className="group bg-background rounded-2xl overflow-hidden shadow-lg hover-lift border border-border/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/80 text-primary-foreground text-sm font-bold flex items-center gap-1">
                    <IndianRupee className="w-3 h-3" />{property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{property.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" /> {property.location}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground"><Bed className="w-4 h-4" /> {property.beds}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground"><Bath className="w-4 h-4" /> {property.baths}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground"><Maximize className="w-4 h-4" /> {property.sqft} sqft</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Tell us your requirements and we'll find the perfect property for you.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Contact Us <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default EstatePage;
