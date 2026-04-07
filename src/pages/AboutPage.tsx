import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import { Target, Eye, Heart, ArrowRight, CheckCircle2, Users, Building2, Award } from "lucide-react";

const team = [
  { name: "Rahul Porko", role: "Founder & CEO", initial: "RP" },
  { name: "Anita Sharma", role: "Chief Architect", initial: "AS" },
  { name: "Vikram Desai", role: "Head of Construction", initial: "VD" },
  { name: "Sneha Patel", role: "Interior Design Lead", initial: "SP" },
];

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="15+ years of building trust, quality, and dreams across India"
        backgroundImage={heroHome}
      />

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading badge="Our Story" title="Building Excellence Since 2010" center={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Porko Construction & Estate was founded with a singular vision — to redefine the construction experience in India. What started as a small team of passionate builders has grown into one of the most trusted names in construction and real estate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, with over 500 completed projects, 1200+ happy families, and a team of 200+ professionals, we continue to set new benchmarks in quality, transparency, and customer satisfaction.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-2xl bg-secondary">
                  <Building2 className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">1200+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary">
                  <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={heroHome} alt="Porko Construction team" className="rounded-3xl shadow-2xl" loading="lazy" width={1920} height={1080} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver exceptional construction quality with transparent pricing and unmatched customer service." },
              { icon: Eye, title: "Our Vision", desc: "To be India's most trusted construction brand, building sustainable communities for the future." },
              { icon: Heart, title: "Our Values", desc: "Integrity, quality, innovation, and customer-first approach in everything we do." },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Leadership" title="Meet Our Team" subtitle="The experts behind every successful project" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center group hover-lift">
                <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{member.initial}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Connect with our team and start your journey today</p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Get in Touch <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
