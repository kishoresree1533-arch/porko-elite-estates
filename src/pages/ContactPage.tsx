import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="navy-section py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Have a project in mind? Get in touch with our experts for a free consultation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Get In Touch</h3>
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-sm text-muted-foreground">123 Construction Ave, Andheri West, Mumbai, Maharashtra 400058</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">info@porkoconstruction.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 lg:p-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">Fill in the form and our team will get back to you within 24 hours</p>
                <form className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" />
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option>Select Service</option>
                    <option>House Construction</option>
                    <option>Interior Design</option>
                    <option>Real Estate</option>
                    <option>Renovation</option>
                  </select>
                  <textarea placeholder="Tell us about your project..." rows={4} className="sm:col-span-2 w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" />
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

      {/* Map */}
      <section className="h-96 bg-secondary flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
          <p className="text-lg font-heading font-semibold text-foreground">Mumbai, Maharashtra</p>
          <p className="text-sm text-muted-foreground">123 Construction Ave, Andheri West</p>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
