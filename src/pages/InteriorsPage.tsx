import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import WhyChooseSection from "@/components/WhyChooseSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import luxuryLivingRoomV1 from "@/assets/luxury_living_room.png";
import luxuryKitchenV1 from "@/assets/luxury_kitchen.png";
import luxuryBathroomV1 from "@/assets/luxury_bathroom.png";
import project3 from "@/assets/project-3.jpg";
import southIndianFeatured from "@/assets/south_indian_featured_interior.png";
import img3dModels from "@/assets/realistic_3d_new.png";
import imgAdvancedLighting from "@/assets/advanced_lighting_new.jpg";
import imgMaterialShaders from "@/assets/material_shaders_card.png";
import imgVirtualPhotography from "@/assets/virtual_photography_card.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { ArrowRight, CheckCircle2, Sofa, Lamp, PaintBucket, Sparkles, Award, Users, Home, Star, Box, Lightbulb, Palette, Camera, Cpu } from "lucide-react";

import DraggableInteriorsGallery from "@/components/DraggableInteriorsGallery";
import ChromaGrid from "@/components/ChromaGrid";

const packages = [
  { name: "Essential", price: "₹8 Lakh", desc: "Thoughtfully designed essentials for modern Indian homes", features: ["2D Layout Planning", "Premium Material Selection", "Basic Lighting Design", "Modular Kitchen", "Bedroom Wardrobes", "Living Room Design"], popular: false },
  { name: "Premium", price: "₹18 Lakh", desc: "Elevated living with traditional Indian craftsmanship meets contemporary design", features: ["3D Visualization", "Custom Furniture Design", "Smart Home Integration", "False Ceiling Design", "Premium Finishes", "Vastu-Compliant Layout", "Artisanal Wall Treatments"], popular: true },
  { name: "Luxury", price: "₹35 Lakh+", desc: "Bespoke luxury with international standards and Indian heritage", features: ["Personalized Design Consultation", "Imported Materials", "Advanced Home Automation", "Exclusive Furniture Sourcing", "Art & Decor Curation", "Landscaping Integration", "Dedicated Project Manager"], popular: false },
];

const InteriorsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Bespoke Interior Design"
        subtitle="Spaces that reflect your taste — designed with precision, crafted with passion"
        backgroundImage={luxuryLivingRoomV1}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Services" title="Interior Design Excellence" subtitle="Complete home interior solutions tailored to your lifestyle and vision" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sofa, title: "Living Spaces", desc: "Elegant, functional rooms designed for modern Indian living" },
              { icon: Lamp, title: "Bedroom Design", desc: "Restful sanctuaries with Vastu-compliant layouts" },
              { icon: PaintBucket, title: "Kitchen & Bath", desc: "Premium modular kitchens and luxury bathrooms with Indian craftsmanship" },
              { icon: Sparkles, title: "Smart Homes", desc: "Seamless home automation with traditional Indian aesthetics" },
            ].map((s, i) => (
              <div key={i} className="premium-card p-8 group text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading badge="Our Philosophy" title="Where Tradition Meets Innovation" subtitle="Blending centuries-old Indian craftsmanship with contemporary design principles" />
              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Heritage Craftsmanship</h4>
                    <p className="text-muted-foreground">We collaborate with skilled Indian artisans to bring traditional techniques like intricate woodwork, brass inlay, and hand-painted motifs into modern spaces.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Vastu-Compliant Designs</h4>
                    <p className="text-muted-foreground">Our designs incorporate Vastu Shastra principles to create harmonious living spaces that promote positive energy and well-being.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sustainable Luxury</h4>
                    <p className="text-muted-foreground">We source eco-friendly materials locally and support sustainable practices while maintaining the highest standards of luxury and comfort.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Portfolio" title="Ultra-Realistic South Indian Interiors" subtitle="Experience luxury living through our lens - authentic Indian homes captured in stunning detail" />
          
          {/* Featured Masterpiece */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group overflow-hidden rounded-3xl premium-card p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={southIndianFeatured}
                    alt="Ultra-Realistic South Indian Interior"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Floating badge */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-3 shadow-xl">
                    <div className="w-9 h-9 rounded-full bg-primary/80 flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Featured Project</div>
                      <div className="text-white/70 text-xs">Architectural Photography</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">Photography Excellence</span>
                </div>
                <h4 className="text-2xl font-heading font-bold text-foreground mb-6">Ultra-Realistic South Indian Interiors</h4>
                <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                  Experience luxury living through our lens - authentic Indian homes captured in stunning detail.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Natural Lighting</div>
                      <div className="text-sm text-muted-foreground">Golden hour photography</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Premium Textures</div>
                      <div className="text-sm text-muted-foreground">Realistic materials</div>
                    </div>
                  </div>
                </div>
                <Button variant="hero" className="group mt-8">
                  View Full Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Room Categories */}
          <div className="space-y-12">
            {/* Living Rooms */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Luxury Living Spaces</h3>
              <div style={{ minHeight: '500px', position: 'relative' }}>
                <ChromaGrid 
                  items={[
                    {
                      image: gallery2,
                      title: "Chennai Contemporary",
                      subtitle: "Modern meets Traditional",
                      handle: "Teak Wood • Brass Accents",
                      location: "Chennai",
                      borderColor: "#3B82F6",
                      gradient: "linear-gradient(145deg, #3B82F6, #000)",
                      url: "/interiors/chennai-contemporary"
                    },
                    {
                      image: gallery3,
                      title: "Bangalore Minimalist",
                      subtitle: "Contemporary Indian Minimalism",
                      handle: "Clean Lines • Marble Finishes",
                      location: "Bangalore",
                      borderColor: "#10B981",
                      gradient: "linear-gradient(180deg, #10B981, #000)",
                      url: "/interiors/bangalore-minimalist"
                    },
                    {
                      image: gallery4,
                      title: "Madurai Heritage",
                      subtitle: "Traditional Luxury",
                      handle: "Vastu Layout • Gold Details",
                      location: "Madurai",
                      borderColor: "#F59E0B",
                      gradient: "linear-gradient(165deg, #F59E0B, #000)",
                      url: "/interiors/madurai-heritage"
                    },
                    {
                      image: gallery1,
                      title: "Coimbatore Elite",
                      subtitle: "Premium Villa Design",
                      handle: "Indoor Plants • Natural Light",
                      location: "Coimbatore",
                      borderColor: "#EF4444",
                      gradient: "linear-gradient(195deg, #EF4444, #000)",
                      url: "/interiors/coimbatore-elite"
                    }
                  ]}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                  columns={4}
                  rows={1}
                />
              </div>
            </div>

            {/* 3D Design Details */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Premium 3D Design Details</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { 
                    icon: Box,
                    image: img3dModels,
                    title: "Realistic 3D Models", 
                    desc: "Photorealistic furniture and architectural elements",
                    features: ["High-poly meshes", "UV mapping", "Texture optimization"]
                  },
                  { 
                    icon: Lightbulb,
                    image: imgAdvancedLighting,
                    title: "Advanced Lighting", 
                    desc: "Dynamic lighting with realistic shadows and reflections",
                    features: ["HDRI lighting", "Ray tracing", "Ambient occlusion"]
                  },
                  { 
                    icon: Palette,
                    image: imgMaterialShaders,
                    title: "Material Shaders", 
                    desc: "Physically accurate materials with real-world properties",
                    features: ["PBR materials", "Subsurface scattering", "Metallic workflows"]
                  },
                  { 
                    icon: Camera,
                    image: imgVirtualPhotography,
                    title: "Virtual Photography", 
                    desc: "Professional camera angles and depth of field effects",
                    features: ["DSLR simulation", "Focal length control", "Bokeh effects"]
                  }
                ].map((detail, i) => (
                  <div key={i} className="premium-card overflow-hidden text-center group cursor-pointer hover-lift relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 pointer-events-none"></div>
                    {/* Card Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={detail.image}
                        alt={detail.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <detail.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {/* Card Body */}
                    <div className="p-5 relative z-10">
                      <h4 className="font-heading font-semibold text-foreground mb-2">{detail.title}</h4>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{detail.desc}</p>
                      <div className="space-y-1">
                        {detail.features.map((feature, j) => (
                          <div key={j} className="flex items-center justify-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 3D Design Process */}
              <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <Cpu className="w-4 h-4" />
                    <span>3D Design Workflow</span>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-foreground mb-2">From Concept to Reality</h4>
                  <p className="text-muted-foreground">Our premium 3D design process ensures every detail is perfected before construction</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "01", title: "3D Modeling", desc: "Precise digital models of your space" },
                    { step: "02", title: "Material Application", desc: "Realistic textures and finishes" },
                    { step: "03", title: "Lighting Setup", desc: "Natural and artificial light simulation" },
                    { step: "04", title: "Virtual Tour", desc: "Immersive walkthrough experience" }
                  ].map((process, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mx-auto mb-3">
                        {process.step}
                      </div>
                      <h5 className="font-semibold text-foreground mb-1">{process.title}</h5>
                      <p className="text-xs text-muted-foreground">{process.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DraggableInteriorsGallery />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading badge="Investment" title="Interior Design Packages" subtitle="Select the tier that aligns with your vision and lifestyle" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`rounded-2xl p-8 border-2 ${pkg.popular ? "border-primary bg-primary/3 relative shadow-xl" : "border-border bg-background"} hover-lift`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                <div className="text-3xl font-heading font-bold text-primary mb-8">{pkg.price}</div>
                <div className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button variant={pkg.popular ? "hero" : "outline"} className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-secondary/5 to-background">
        <div className="container-custom">
          <SectionHeading badge="Testimonials" title="What Our Clients Say" subtitle="Real experiences from homeowners who transformed their spaces with us" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Lakshmi Ramesh",
                location: "Coimbatore",
                content: "Porko Elite Estates transformed our 3BHK into a luxurious haven. Their attention to detail and understanding of Vastu principles made our home perfect.",
                rating: 5,
                project: "Premium Package - 2023"
              },
              {
                name: "Karthik Sivan",
                location: "Madurai",
                content: "The blend of traditional Tamil craftsmanship with modern design exceeded our expectations. Every room tells a story of elegance and functionality.",
                rating: 5,
                project: "Luxury Package - 2024"
              },
              {
                name: "Meena Kumar",
                location: "Tiruchirappalli",
                content: "From concept to completion, the team was professional and creative. Our smart home integration works seamlessly with beautiful interiors.",
                rating: 5,
                project: "Premium Package - 2024"
              }
            ].map((testimonial, i) => (
              <div key={i} className="premium-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Transform Your Vision Into a Masterpiece"
        subtitle="Book a complimentary design consultation with our award-winning interior architects. Let us create your dream space."
        ctaText="Book Consultation"
      />
    </Layout>
  );
};

export default InteriorsPage;
