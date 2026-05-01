import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Home, Droplets, Camera, Sun, Star, Shield, Zap } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const LuxuryVillaShowcase: React.FC = () => {
  const villas = [
    {
      id: 'chennai-ecr',
      title: 'Oceanfront Paradise Villa',
      location: 'Chennai ECR',
      price: '₹12.5 Crore',
      specs: '12,000 Sq.Ft | 6 Bedrooms | Infinity Pool | Private Beach Access',
      description: 'Ultra-luxury beachfront villa with panoramic Bay of Bengal views, featuring floor-to-ceiling glass walls and cantilevered balconies.',
      features: ['Private Beach Access', 'Infinity Pool', 'Smart Home Integration', 'Wine Cellar'],
      image: project1
    },
    {
      id: 'bangalore-outskirts',
      title: 'Tech Elite Villa',
      location: 'Bangalore Whitefield',
      price: '₹8.75 Crore',
      specs: '8,500 Sq.Ft | 5 Bedrooms | Home Theater | Smart Automation',
      description: 'Contemporary architectural masterpiece with integrated smart home technology and sustainable design elements.',
      features: ['Home Theater', 'Voice Control', 'Energy Management', 'Security System'],
      image: project2
    },
    {
      id: 'hyderabad-jubilee',
      title: 'Hilltop Sanctuary',
      location: 'Hyderabad Jubilee Hills',
      price: '₹15 Crore',
      specs: '15,000 Sq.Ft | 7 Bedrooms | Helipad | City Views',
      description: 'Prestigious hilltop residence offering expansive city views and ultimate privacy in gated community.',
      features: ['Rooftop Helipad', 'Panoramic Balconies', 'Private Elevator', 'Landscaped Gardens'],
      image: project3
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <Camera className="w-5 h-5" />
            <span>Featured Properties</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter mb-6">
            Exclusive Luxury
            <span className="text-primary block">Villa Collection</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            Discover South India's most prestigious residential properties, 
            each showcasing architectural excellence and unparalleled luxury living.
          </p>
        </div>

        {/* Villa Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {villas.map((villa, index) => (
            <div key={villa.id} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={villa.image} 
                  alt={villa.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="16" fill="%239ca3af"%3ELuxury Villa Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">Premium</span>
                    </div>
                  </div>
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-xl">
                    {villa.price}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{villa.location}</span>
                    </div>
                    <p className="text-sm text-white/90">{villa.specs}</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{villa.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{villa.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{villa.description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {villa.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Specs */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{villa.specs.split(' | ')[0]}</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{villa.specs.split(' | ')[1]}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="hero" className="w-full group h-12">
                  Schedule Private Viewing
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center py-16 border-t border-gray-100">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <Sun className="w-5 h-5" />
            <span>Golden Hour Photography</span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Each property photographed during optimal lighting conditions with professional equipment 
            to showcase the true essence of luxury living.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-gray-900">Professional Photography</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-gray-900">Cinematic Composition</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-gray-900">Premium Properties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryVillaShowcase;
