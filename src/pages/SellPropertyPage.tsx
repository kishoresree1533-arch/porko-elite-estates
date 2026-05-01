import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Send, Building2, ShieldCheck, TrendingUp, Key } from "lucide-react";
import { useState } from "react";
import sellHeroImg from "@/assets/luxury_mansion_exterior.png";

const SellPropertyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    propertyType: '',
    location: '',
    expectedPrice: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Property Listing Enquiry:', formData);
    alert('Thank you for listing your property with us! Our experts will contact you for verification shortly.');
  };

  return (
    <Layout>
      <PageHero
        title="List Your Property"
        subtitle="Reach thousands of premium buyers and get the best market value for your asset"
        backgroundImage={sellHeroImg}
        ctaText="Scroll to Form"
        ctaLink="#sell-form"
      />

      <section className="section-padding bg-background" id="sell-form">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8">
                <Key className="w-3.5 h-3.5 text-primary" />
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Hassle-Free Selling</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-8 leading-tight tracking-tight">
                Sell Your Property with <br />
                <span className="text-primary italic-serif">Porko Elite Estates</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Our premium network of high-net-worth individuals and corporate investors ensures your property gets the attention it deserves. From valuation to legal paperwork, we handle everything.
              </p>

              <div className="grid gap-8">
                {[
                  { icon: TrendingUp, title: "Best Market Value", desc: "Expert valuation to ensure you get the maximum return on your investment." },
                  { icon: ShieldCheck, title: "Verified Buyers", desc: "We pre-screen all potential buyers to ensure serious and qualified enquiries only." },
                  { icon: Building2, title: "Premium Marketing", desc: "Professional photography and targeted advertising across our exclusive channels." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <div className="relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Property Type</label>
                      <select 
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      >
                        <option value="">Select Type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Land/Plot">Land / Plot</option>
                        <option value="Industrial">Industrial</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location</label>
                      <input 
                        type="text" 
                        placeholder="City, Area"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message / Details</label>
                    <textarea 
                      placeholder="Describe your property (sq.ft, age, etc.)"
                      rows={3}
                      className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full h-16 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    List My Property <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SellPropertyPage;
