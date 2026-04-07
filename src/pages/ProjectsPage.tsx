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
        subtitle="A showcase of excellence — explore our completed and ongoing projects"
        backgroundImage={heroHome}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Portfolio" title="Featured Projects" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <div key={i} className="group bg-background rounded-2xl overflow-hidden shadow-lg hover-lift border border-border/50">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground text-lg">{project.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="w-3 h-3" /> {project.location}</span>
                    <span className="text-sm font-medium text-accent">{project.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">Have a Project in Mind?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Let's discuss your vision and bring it to life</p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Start Your Project <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
