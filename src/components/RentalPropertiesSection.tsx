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
import rentalApartment from '@/assets/rental-apartment.jpg';
import familyHome from '@/assets/family-home.jpg';
import studioApartment from '@/assets/studio-apartment.jpg';
import luxuryVilla from '@/assets/luxury-villa.jpg';
import balconyApartment from '@/assets/balcony-apartment.jpg';
import metroApartment from '@/assets/metro-apartment.jpg';

const RentalPropertiesSection: React.FC = () => {
  const rentalProperties = [
    {
      id: 7,
      title: "2BHK Apartment for Rent",
      location: "Adyar, Chennai",
      price: 25000,
      image: rentalApartment,
      bedrooms: 2,
      bathrooms: 1,
      area: 1200,
      type: "For Rent",
      description: "Well-maintained 2BHK apartment in prime location with all amenities"
    },
    {
      id: 8,
      title: "3BHK Family Home",
      location: "Tambaram, Chennai",
      price: 35000,
      image: familyHome,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      type: "For Rent",
      description: "Spacious 3BHK home perfect for families with parking facility"
    },
    {
      id: 9,
      title: "1BHK Studio Apartment",
      location: "Velachery, Chennai",
      price: 18000,
      image: studioApartment,
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      type: "For Rent",
      description: "Modern studio apartment with excellent connectivity and amenities"
    },
    {
      id: 10,
      title: "4BHK Luxury Villa",
      location: "Anna Nagar, Chennai",
      price: 55000,
      image: luxuryVilla,
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      type: "For Rent",
      description: "Premium 4BHK villa with garden and modern facilities"
    },
    {
      id: 11,
      title: "2BHK with Balcony",
      location: "Porur, Chennai",
      price: 22000,
      image: balconyApartment,
      bedrooms: 2,
      bathrooms: 1,
      area: 1100,
      type: "For Rent",
      description: "Bright 2BHK apartment with spacious balcony and good ventilation"
    },
    {
      id: 12,
      title: "3BHK Near Metro",
      location: "OMR, Chennai",
      price: 32000,
      image: metroApartment,
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      type: "For Rent",
      description: "Convenient 3BHK apartment near metro station with parking"
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
            Discover Rental
            <span className="text-primary block">Properties</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the perfect rental property that fits your lifestyle and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rentalProperties.map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Property Image */}
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* For Rent Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {property.type}
                  </span>
                </div>

                {/* Rent Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4 text-green-600" />
                      <span className="font-bold text-gray-900">
                        {formatPrice(property.price)}/month
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
                  <Button className="flex-1 group">
                    Contact
                    <Star className="w-4 h-4 ml-2 group-hover:fill-primary transition-colors" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/properties?purpose=rent">
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

export default RentalPropertiesSection;
