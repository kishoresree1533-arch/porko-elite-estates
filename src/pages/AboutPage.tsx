import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";
import { Target, Eye, Heart, ArrowRight, Building2, Users, Award } from "lucide-react";

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
        title="About Porko"
        subtitle="Fifteen years of building trust, delivering quality, and exceeding expectations"
        backgroundImage={heroHome}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading badge="Our Legacy" title="A Foundation Built on Excellence" center={false} />
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Porko Construction & Estate was founded with a singular, unwavering vision — to redefine what it means to build a home in India. What began as a small team of passionate builders has evolved into one of the country's most respected names in construction and real estate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Today, with over 500 completed projects and 1,200+ families who call our creations home, we continue to set new benchmarks in quality, transparency, and client satisfaction. Every project is a testament to our commitment to architectural excellence.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-5 rounded-2xl bg-secondary border border-border/50">
                  <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-5 rounded-2xl bg-secondary border border-border/50">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">1200+</div>
                  <div className="text-xs text-muted-foreground">Families</div>
                </div>
                <div className="text-center p-5 rounded-2xl bg-secondary border border-border/50">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={heroHome} alt="Porko Construction" className="rounded-2xl shadow-2xl" loading="lazy" width={1920} height={1080} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading badge="Foundation" title="What Drives Us" subtitle="The principles that guide every decision we make" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver architecturally refined living spaces with transparent pricing, premium materials, and an unwavering commitment to client satisfaction." },
              { icon: Eye, title: "Our Vision", desc: "To be India's most trusted construction brand — building sustainable, beautiful communities that stand the test of time." },
              { icon: Heart, title: "Our Values", desc: "Integrity in every interaction. Quality in every detail. Innovation in every design. Client-first in every decision." },
            ].map((item, i) => (
              <div key={i} className="premium-card p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Leadership" title="The Team Behind Every Success" subtitle="Experienced professionals dedicated to delivering excellence" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-28 h-28 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-500">
                  <span className="text-2xl font-heading font-bold text-primary-foreground">{member.initial}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="navy-section section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-5">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-primary-foreground/50 mb-10 max-w-xl mx-auto leading-relaxed">Connect with our team and begin your journey toward a home that exceeds every expectation</p>
          <Link to="/contact">
            <Button variant="hero-outline" size="xl">Get in Touch <ArrowRight className="w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
