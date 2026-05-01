import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, IndianRupee, Star } from 'lucide-react';
import chennaiResidential from '@/assets/chennai-residential.jpg';
import coimbatoreCommercial from '@/assets/coimbatore-commercial.jpg';
import maduraiResidential from '@/assets/madurai-residential.jpg';
import tiruppurCommercial from '@/assets/tiruppur-commercial.jpg';
import velloreResidential from '@/assets/vellore-residential.jpg';
import trichyResidential from '@/assets/trichy-residential.jpg';
import modernApartment from '@/assets/modern-apartment.jpg';
import independentHouse from '@/assets/independent-house.jpg';
import commercialSpace from '@/assets/commercial-space.jpg';
import budgetApartment from '@/assets/budget-apartment.jpg';
import beachVilla from '@/assets/beach-villa.jpg';
import balconyApartment from '@/assets/balcony-apartment.jpg';
import familyHome from '@/assets/family-home.jpg';
import studioApartment from '@/assets/studio-apartment.jpg';
import luxuryVilla from '@/assets/luxury-villa.jpg';
import metroApartment from '@/assets/metro-apartment.jpg';
import seasideVilla from '@/assets/seaside-villa.jpg';
import beachViewVillaNew from '@/assets/beach-view-villa-new.jpg';

const FeaturedPropertiesSection: React.FC = () => {
  const properties = [
    {
      id: 20,
      title: "Seaside Villa",
      location: "Chennai",
      price: 35000000,
      image: seasideVilla,
      bedrooms: 3,
      bathrooms: 2,
      area: 3000,
      type: "Featured",
      description: "3,500 sqft"
    },
    {
      id: 7,
      title: "Modern Apartment",
      location: "Velachery, Chennai",
      price: 28000000,
      image: modernApartment,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      type: "New",
      description: "Contemporary 3BHK apartment with excellent connectivity"
    },
    {
      id: 10,
      title: "Independent House",
      location: "Tambaram, Chennai",
      price: 52000000,
      image: independentHouse,
      bedrooms: 5,
      bathrooms: 4,
      area: 3200,
      type: "Featured",
      description: "Spacious 5BHK independent house with garden"
    },
    {
      id: 13,
      title: "Commercial Office Space",
      location: "OMR, Chennai",
      price: 75000000,
      image: commercialSpace,
      bedrooms: 0,
      bathrooms: 2,
      area: 4500,
      type: "New",
      description: "Prime commercial space with high visibility"
    },
    {
      id: 21,
      title: "Beach View Villa",
      location: "ECR, Chennai",
      price: 85000000,
      image: beachViewVillaNew,
      bedrooms: 6,
      bathrooms: 5,
      area: 4200,
      type: "Featured",
      description: "Luxurious beachfront villa with stunning views"
    },
    {
      id: 8,
      title: "Budget Apartment",
      location: "Porur, Chennai",
      price: 18000000,
      image: budgetApartment,
      bedrooms: 2,
      bathrooms: 1,
      area: 1200,
      type: "New",
      description: "Affordable 2BHK apartment for first-time buyers"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Featured
            <span className="text-primary block">Property</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handpicked properties that offer exceptional value and prime locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.type === 'Featured' 
                      ? 'bg-primary text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {property.type}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4 text-primary" />
                      <span className="font-bold text-gray-900">
                        {(property.price / 100000).toFixed(1)}L
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Property Features */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Link to={`/property/${property.id}`}>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </Link>
                  <a href="tel:+917695940400" className="flex-1">
                    <Button className="w-full group">
                      Contact
                      <Star className="w-4 h-4 ml-2 group-hover:fill-primary transition-colors" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/properties">
            <Button variant="hero" className="px-8 py-3 text-sm group">
              View All Properties
              <Star className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
