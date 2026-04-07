import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <section className="navy-section py-24 lg:py-32">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/60 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 animate-fade-up">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-5 animate-fade-up">
            Let's Discuss Your Vision
          </h1>
          <p className="text-lg text-primary-foreground/50 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Schedule a complimentary consultation with our experts — no obligations, just expert guidance.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Contact Information</h3>
              <div className="flex flex-col gap-8 mb-8">
                {[
                  { icon: MapPin, title: "Office Address", lines: ["123 Construction Ave, Andheri West", "Mumbai, Maharashtra 400058"] },
                  { icon: Phone, title: "Phone", lines: ["+91 98765 43210", "+91 98765 43211"] },
                  { icon: Mail, title: "Email", lines: ["info@porkoconstruction.com"] },
                  { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"] },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted-foreground">{line}</p>
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
                <form className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all" />
                  <select className="w-full px-4 py-3.5 rounded-xl border border-border bg-background text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all">
                    <option>Select Service</option>
                    <option>House Construction</option>
                    <option>Interior Design</option>
                    <option>Real Estate</option>
                    <option>Renovation</option>
                  </select>
                  <textarea placeholder="Tell us about your project..." rows={4} className="sm:col-span-2 w-full px-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none" />
                  <div className="sm:col-span-2">
                    <Button variant="hero" size="lg" className="w-full">
                      <Send className="w-4 h-4" /> Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-secondary flex items-center justify-center border-t border-border/50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-5">
            <MapPin className="w-7 h-7 text-primary" />
          </div>
          <p className="text-lg font-heading font-semibold text-foreground">Mumbai, Maharashtra</p>
          <p className="text-sm text-muted-foreground mt-1">123 Construction Ave, Andheri West</p>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
