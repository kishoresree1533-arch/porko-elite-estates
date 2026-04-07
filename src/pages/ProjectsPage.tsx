import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import interiorHero from "@/assets/interior-hero.jpg";
import constructionHero from "@/assets/construction-hero.jpg";
import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const allProjects = [
  { image: project1, title: "Seaside Villa", location: "Mumbai", category: "Residential", sqft: "3,500" },
  { image: project2, title: "Sky Tower", location: "Pune", category: "Commercial", sqft: "50,000" },
  { image: project3, title: "Skyline Penthouse", location: "Delhi", category: "Residential", sqft: "4,200" },
  { image: project4, title: "Heritage Homes", location: "Bangalore", category: "Residential", sqft: "2,800" },
  { image: interiorHero, title: "Corporate Office", location: "Mumbai", category: "Interiors", sqft: "8,000" },
  { image: constructionHero, title: "Industrial Complex", location: "Chennai", category: "Commercial", sqft: "120,000" },
  { image: heroHome, title: "Garden Estate", location: "Goa", category: "Residential", sqft: "5,000" },
  { image: project1, title: "Lake View Villas", location: "Hyderabad", category: "Residential", sqft: "3,200" },
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
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div>
                      <span className="text-primary-foreground/70 text-xs tracking-widest uppercase">{project.category}</span>
                      <div className="flex items-center gap-1 text-primary-foreground text-sm mt-1"><MapPin className="w-3 h-3" /> {project.location}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-foreground text-lg">{project.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="w-3 h-3" /> {project.location}</span>
                    <span className="text-sm font-medium text-primary">{project.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-5">Have a Project in Mind?</h2>
          <p className="text-primary-foreground/50 mb-10 max-w-xl mx-auto leading-relaxed">Let's discuss your vision and bring it to life with precision and excellence</p>
          <Link to="/contact">
            <Button variant="hero-outline" size="xl">Start Your Project <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
