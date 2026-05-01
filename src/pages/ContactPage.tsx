import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Navigation, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const offices = [
  {
    id: "viluppuram",
    label: "Viluppuram",
    sublabel: "Corporate HQ",
    title: "Viluppuram Office (Corporate)",
    address: ["163, Elangovan Street, K.K Nagar", "Salamedu, Viluppuram", "Tamil Nadu 605103"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=11.9316,79.3309",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=11.9316,79.3309",
    lat: 11.9316,
    lng: 79.3309,
    color: "#050A1B",
  },
  {
    id: "chennai",
    label: "Chennai",
    sublabel: "Numbal Branch",
    title: "Chennai Office",
    address: ["Plot No: 28 & 29, Moovendar Nagar", "Numbal, Kattupakkam", "Chennai – 600077"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=13.0486951,80.1318511",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=13.0486951,80.1318511",
    lat: 13.0486951,
    lng: 80.1318511,
    color: "#1a3a6b",
  },

];

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    // Native form submission will handle this
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-20 bg-white overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #050A1B 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground text-[9px] font-black uppercase tracking-[0.3em] mb-6">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground mb-4 leading-tight tracking-tighter">
            Let's Discuss <span className="text-primary">Your Vision</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Schedule a complimentary consultation with our experts — no obligations, just expert guidance.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Contact Information</h3>
              <div className="flex flex-col gap-8 mb-8">
                {[
                  { icon: MapPin, title: "Viluppuram Office (Corporate)", lines: ["163, ELANGOVAN STREET, K.K NAGAR", "Salamedu, Viluppuram, Tamil Nadu 605103"] },
                  { icon: MapPin, title: "Chennai Office", lines: ["Plot no: 28 & 29, Moovendar nagar", "Numbal, Kattupakkam", "Chennai - 600077"] },

                  {
                    icon: Phone,
                    title: "Phone",
                    lines: [
                      <a key="tel1" href="tel:+917695940400" className="hover:text-primary transition-colors">+91 76959 40400</a>,
                      <a key="tel2" href="tel:+918667741994" className="hover:text-primary transition-colors">+91 86677 41994</a>
                    ]
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: [
                      <a key="mail1" href="mailto:porkoestate@gmail.com" className="hover:text-primary transition-colors">porkoestate@gmail.com</a>,
                      <a key="mail2" href="mailto:porkoconstruction@gmail.com" className="hover:text-primary transition-colors">porkoconstruction@gmail.com</a>,
                      <a key="mail3" href="mailto:Porkoconstructionestate@gmail.com" className="hover:text-primary transition-colors">Porkoconstructionestate@gmail.com</a>
                    ]
                  },
                  { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: By Appointment"] },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.lines.map((line, j) => (
                        <div key={j} className="text-sm text-muted-foreground">{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground mb-8">Our team responds within 2 hours during business hours</p>
                <form 
                  action="https://formsubmit.co/68363077aa497da371aa867295bac236" 
                  method="POST" 
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name" 
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  />
                  <select 
                    name="service"
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    defaultValue="Select Service"
                  >
                    <option disabled>Select Service</option>
                    <option>House Construction</option>
                    <option>Interior Design</option>
                    <option>Real Estate</option>
                    <option>Renovation</option>
                  </select>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project..." 
                    rows={4} 
                    className="sm:col-span-2 w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                  />
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Locations ── */}
      <section className="section-padding bg-secondary/30 border-t border-border/50">
        <div className="container-custom">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-4">
              Find Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground tracking-tighter">
              Our <span className="text-primary">Office Locations</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
              Three offices across Tamil Nadu — always near you.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-10">
            <div className="flex p-1.5 bg-white rounded-2xl shadow-lg border border-border/50 gap-1">
              {offices.map((o, i) => (
                <button
                  key={o.id}
                  onClick={() => setActiveOffice(i)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    activeOffice === i
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              {/* Map Visual Panel */}
              <div
                className="relative min-h-[360px] flex flex-col justify-end p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${office.color} 0%, #0d1f3c 100%)`,
                }}
              >
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }} />
                {/* Decorative circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                {/* Coordinates display */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="text-white/50 text-[9px] font-black uppercase tracking-[0.3em] font-mono">
                      {office.lat.toFixed(4)}°N, {office.lng.toFixed(4)}°E
                    </span>
                  </div>
                  <h3 className="text-white font-heading font-black text-2xl mb-1">{office.label}</h3>
                  <p className="text-white/60 text-sm font-medium">{office.sublabel}</p>
                </div>
              </div>

              {/* Info Panel */}
              <div className="bg-white p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-primary text-[9px] font-black uppercase tracking-widest">{office.sublabel}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-5">{office.title}</h3>
                  <div className="flex items-start gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {office.address.map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={office.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-bold hover:bg-secondary transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* All 3 locations quick cards */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            {offices.map((o, i) => (
              <a
                key={o.id}
                href={o.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveOffice(i)}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${o.color}15` }}>
                  <MapPin className="w-4 h-4" style={{ color: o.color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-foreground uppercase tracking-wide">{o.label}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{o.sublabel}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
