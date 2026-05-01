import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Building2, Store, MapPin, TrendingUp } from 'lucide-react';

const PropertyTypesSection: React.FC = () => {
  const propertyTypes = [
    {
      icon: MapPin,
      gradient: "from-blue-400 to-cyan-600",
      title: "Plot",
      description: "Residential and commercial plots for your dream project",
      count: "150+",
      type: "plot"
    },
    {
      icon: TrendingUp,
      gradient: "from-purple-400 to-pink-600",
      title: "New",
      description: "Brand new properties with modern amenities",
      count: "80+",
      type: "new"
    },
    {
      icon: Building2,
      gradient: "from-green-400 to-emerald-600",
      title: "Apartment",
      description: "Luxury apartments in prime locations",
      count: "200+",
      type: "apartment"
    },
    {
      icon: Home,
      gradient: "from-orange-400 to-red-600",
      title: "Individual House",
      description: "Independent houses with privacy and space",
      count: "120+",
      type: "house"
    },
    {
      icon: Store,
      gradient: "from-indigo-400 to-purple-600",
      title: "Commercial",
      description: "Business spaces and commercial properties",
      count: "90+",
      type: "commercial"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Let's Explore The Different
            <span className="text-primary block">Types Of Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of property options tailored to meet your unique needs and preferences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {propertyTypes.map((type, index) => (
            <Link 
              key={index} 
              to={`/properties?purpose=all&type=${type.type}`}
              className="group text-center cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Anime-style Card Header */}
                <div className={`relative aspect-[4/3] overflow-hidden mb-6 bg-gradient-to-br ${type.gradient} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <type.icon className="w-16 h-16 text-white relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Property Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{type.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  <div className="text-sm font-semibold text-primary">{type.count} Properties</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;
