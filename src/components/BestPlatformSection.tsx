import React from 'react';
import { Home, ArrowRight, Key, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bestPlatformImage from '@/assets/luxury_mansion_exterior.png';

const BestPlatformSection: React.FC = () => {
  const platforms = [
    {
      icon: Home,
      title: "Easy to Buy Home",
      description: "Find your dream home from our verified listings with transparent pricing and expert guidance throughout the process.",
      link: "/properties?purpose=buy"
    },
    {
      icon: Key,
      title: "Sell Property",
      description: "List your property with us and reach thousands of potential buyers with our marketing expertise.",
      link: "/list-property"
    },
    {
      icon: Building,
      title: "Rent a Home",
      description: "Browse through our extensive rental properties and find the perfect home for your needs.",
      link: "/properties?purpose=rent"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
              Buy and Sell with
              <span className="text-primary block italic font-serif">Porko Real Estate</span>
            </h2>
            
            <div className="space-y-8">
              {platforms.map((platform, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
                      <platform.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {platform.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <Link to={platform.link}>
                    <Button variant="outline" className="mt-4 group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={bestPlatformImage}
                alt="Best Platform"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Home className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPlatformSection;
