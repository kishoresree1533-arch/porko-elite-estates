import React, { useState } from 'react';
import { Button } from './ui/button';
import { Send, MapPin, Phone, Mail, Building2, Calendar } from 'lucide-react';
import { toast } from "sonner";

const BookNowSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    area: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    // We'll use the browser's native form submission for maximum reliability
    // since AJAX might be blocked by activation requirements.
    // The form below will handle the submission.
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Direct Engagement</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gray-900 tracking-tighter leading-tight mb-8">
              Book Your <br />
              <span className="text-primary italic-serif">Consultation Today!</span>
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 font-medium">
              Schedule a one-on-one session with our master architects and property consultants. Secure your preferred slot now and turn your vision into reality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 font-heading">Multiple Locations</h4>
                  <p className="text-xs text-gray-400 font-medium">Exclusive projects across primary urban hubs of South India.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 font-heading">Flexible Schedule</h4>
                  <p className="text-xs text-gray-400 font-medium">Book a visit at your convenience, including evening and weekend slots.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            {/* Form Glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl pointer-events-none" />
            
            <div className="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-12">
              <form 
                action="https://formsubmit.co/68363077aa497da371aa867295bac236" 
                method="POST" 
                className="space-y-6"
              >
                {/* Hidden Configuration Fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Booking Enquiry - Porko Elite Estates" />
                
                {/* Inputs Grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="mobile"
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Area (or) Place</label>
                  <input 
                    type="text" 
                    name="area"
                    placeholder="Specific locality or project name"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    name="message"
                    placeholder="Describe your requirements..."
                    rows={3}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Book Now <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNowSection;
