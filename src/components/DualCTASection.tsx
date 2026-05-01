import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Key, ArrowRight } from 'lucide-react';

const DualCTASection: React.FC = () => {
  const ctaCards = [
    {
      icon: Home,
      title: "Buy and Sell with Porko Real Estate",
      description: "Find your dream home from our verified listings with transparent pricing and expert guidance throughout the process.",
      primaryAction: "Explore Properties",
      primaryLink: "/properties?purpose=buy",
      secondaryAction: "Get Consultation",
      secondaryLink: "/contact"
    },
    {
      icon: Key,
      title: "Rent with Porko Real Estate",
      description: "Browse through our extensive rental properties and find the perfect home for your needs with verified listings.",
      primaryAction: "Find Rentals",
      primaryLink: "/properties?purpose=rent",
      secondaryAction: "List Property",
      secondaryLink: "/list-property"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Ready to Find Your
            <span className="text-primary block">Dream Property?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to buy, sell, or rent, we're here to help you every step of the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ctaCards.map((card, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-10 group hover:shadow-2xl transition-all duration-500">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary transition-all duration-500">
                <card.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {card.description}
              </p>

              {/* Buttons */}
              <div className="space-y-4">
                <Link to={card.primaryLink}>
                  <Button variant="hero" className="w-full group">
                    {card.primaryAction}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to={card.secondaryLink}>
                  <Button variant="outline" className="w-full group">
                    {card.secondaryAction}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-12 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Verified Listings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium">Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm font-medium">Best Prices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTASection;
