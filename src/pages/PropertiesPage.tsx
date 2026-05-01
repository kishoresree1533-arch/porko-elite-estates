import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  IndianRupee, 
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import commercialPlot from '@/assets/commercial-plot.jpg';
import agriculturalLand from '@/assets/agricultural-land.jpg';
import brandNewApartment from '@/assets/brand-new-apartment.jpg';
import newLaunchApartment from '@/assets/new-launch-apartment.jpg';
import newVillaProject from '@/assets/new-villa-project.jpg';
import modernApartment2 from '@/assets/modern-apartment-2.jpg';
import budgetApartment2 from '@/assets/budget-apartment-2.jpg';
import premiumApartment2 from '@/assets/premium-apartment-2.jpg';
import independentHouse2 from '@/assets/independent-house-2.jpg';
import familyHome2 from '@/assets/family-home-2.jpg';
import luxuryHouse2 from '@/assets/luxury-house-2.jpg';
import commercialOffice2 from '@/assets/commercial-office-2.jpg';
import retailShop2 from '@/assets/retail-shop-2.jpg';
import showroomSpace2 from '@/assets/showroom-space-2.jpg';
import rentalApartment3 from '@/assets/rental-apartment-3.jpg';
import familyHomeRent3 from '@/assets/family-home-rent-3.jpg';
import studioApartment3 from '@/assets/studio-apartment-3.jpg';
import commercialOfficeRent3 from '@/assets/commercial-office-rent-3.jpg';
import beachViewVillaNew from '@/assets/beach-view-villa-new.jpg';
import hasthinapuramReference from "@/assets/1771848381.webp";
import westMambalamReference from "@/assets/1773833068.webp";
import chrompetReference from "@/assets/1773985023.webp";
import injambakkamReference from "@/assets/1775458403.webp";
import medavakkamReference from "@/assets/1776320944.webp";
import keelkattalaiReference from "@/assets/1773985023.webp";

// Combined properties data
const allProperties = [
  // Plot Properties
  {
    id: 1,
    title: "Residential Plot in Anna Nagar",
    location: "Anna Nagar, Chennai",
    price: 8500000,
    image: project1,
    bedrooms: 0,
    bathrooms: 0,
    area: 2400,
    type: "plot",
    purpose: "buy",
    description: "2400 sqft residential plot with DTCP approval, ready for construction"
  },
  {
    id: 2,
    title: "Commercial Plot on OMR",
    location: "Old Mahabalipuram Road, Chennai",
    price: 15000000,
    image: commercialPlot,
    bedrooms: 0,
    bathrooms: 0,
    area: 4800,
    type: "plot",
    purpose: "buy",
    description: "4800 sqft commercial plot with excellent frontage and visibility"
  },
  {
    id: 3,
    title: "Agricultural Land in Tambaram",
    location: "Tambaram, Chennai",
    price: 12000000,
    image: agriculturalLand,
    bedrooms: 0,
    bathrooms: 0,
    area: 12000,
    type: "plot",
    purpose: "buy",
    description: "12000 sqft agricultural land with water facility and road access"
  },
  // New Properties
  {
    id: 4,
    title: "Brand New 3BHK Apartment",
    location: "Velachery, Chennai",
    price: 32000000,
    image: brandNewApartment,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "new",
    purpose: "buy",
    description: "Newly constructed 3BHK apartment with premium fittings and amenities"
  },
  {
    id: 5,
    title: "New Launch 2BHK",
    location: "Porur, Chennai",
    price: 22000000,
    image: newLaunchApartment,
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    type: "new",
    purpose: "buy",
    description: "Newly launched 2BHK apartments with modern design and facilities"
  },
  {
    id: 6,
    title: "New Villa Project",
    location: "ECR, Chennai",
    price: 95000000,
    image: newVillaProject,
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    type: "new",
    purpose: "buy",
    description: "New luxury villa project with private beach access and modern amenities"
  },
  // Apartment Properties
  {
    id: 7,
    title: "Modern Apartment",
    location: "Velachery, Chennai",
    price: 28000000,
    image: modernApartment2,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "apartment",
    purpose: "buy",
    description: "Contemporary 3BHK apartment with excellent connectivity"
  },
  {
    id: 8,
    title: "Budget Apartment",
    location: "Porur, Chennai",
    price: 18000000,
    image: budgetApartment2,
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    type: "apartment",
    purpose: "buy",
    description: "Affordable 2BHK apartment for first-time buyers"
  },
  {
    id: 9,
    title: "Premium 2BHK Apartment",
    location: "Adyar, Chennai",
    price: 35000000,
    image: premiumApartment2,
    bedrooms: 2,
    bathrooms: 1,
    area: 1400,
    type: "apartment",
    purpose: "buy",
    description: "Premium 2BHK apartment with modern amenities and excellent location"
  },
  // House Properties
  {
    id: 10,
    title: "Independent House",
    location: "Tambaram, Chennai",
    price: 52000000,
    image: independentHouse2,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    type: "house",
    purpose: "buy",
    description: "Spacious 5BHK independent house with garden and parking"
  },
  {
    id: 11,
    title: "3BHK Family Home",
    location: "Anna Nagar, Chennai",
    price: 42000000,
    image: familyHome2,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    type: "house",
    purpose: "buy",
    description: "Well-maintained 3BHK family home in prime residential area"
  },
  {
    id: 12,
    title: "Luxury 4BHK House",
    location: "Besant Nagar, Chennai",
    price: 68000000,
    image: luxuryHouse2,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "house",
    purpose: "buy",
    description: "Luxury 4BHK house with modern amenities and beach proximity"
  },
  // Commercial Properties
  {
    id: 13,
    title: "Commercial Office Space",
    location: "OMR, Chennai",
    price: 75000000,
    image: commercialOffice2,
    bedrooms: 0,
    bathrooms: 2,
    area: 4500,
    type: "commercial",
    purpose: "buy",
    description: "Prime commercial space with high visibility and parking"
  },
  {
    id: 14,
    title: "Retail Shop Space",
    location: "T Nagar, Chennai",
    price: 25000000,
    image: retailShop2,
    bedrooms: 0,
    bathrooms: 1,
    area: 800,
    type: "commercial",
    purpose: "buy",
    description: "Prime retail shop space in busy commercial area with foot traffic"
  },
  {
    id: 15,
    title: "Showroom Space",
    location: "Mount Road, Chennai",
    price: 25000000,
    image: showroomSpace2,
    bedrooms: 0,
    bathrooms: 2,
    area: 2500,
    type: "commercial",
    purpose: "buy",
    description: "Spacious showroom space with excellent frontage and parking facility"
  },
  // Rental Properties
  {
    id: 16,
    title: "2BHK Apartment for Rent",
    location: "Adyar, Chennai",
    price: 25000,
    image: rentalApartment3,
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    type: "apartment",
    purpose: "rent",
    description: "Well-maintained 2BHK apartment in prime location with all amenities"
  },
  {
    id: 17,
    title: "3BHK Family Home for Rent",
    location: "Tambaram, Chennai",
    price: 35000,
    image: familyHomeRent3,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "house",
    purpose: "rent",
    description: "Spacious 3BHK home perfect for families with parking facility"
  },
  {
    id: 18,
    title: "1BHK Studio Apartment",
    location: "Velachery, Chennai",
    price: 18000,
    image: studioApartment3,
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    type: "apartment",
    purpose: "rent",
    description: "Modern studio apartment with excellent connectivity and amenities"
  },
  {
    id: 19,
    title: "Commercial Office for Rent",
    location: "OMR, Chennai",
    price: 55000,
    image: commercialOfficeRent3,
    bedrooms: 0,
    bathrooms: 2,
    area: 2000,
    type: "commercial",
    purpose: "rent",
    description: "Fully furnished commercial office space with modern amenities"
  },
  {
    id: 20,
    title: "Seaside Villa",
    location: "Chennai",
    price: 35000000,
    image: project1,
    bedrooms: 3,
    bathrooms: 2,
    area: 3000,
    type: "Featured",
    purpose: "buy",
    description: "Luxurious 3,500 sqft seaside villa with modern amenities"
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
    purpose: "buy",
    description: "Luxurious beachfront villa with stunning views and private access"
  },
  {
    id: "3-4bhk-apartments-hasthinapuram-gayathri-nagar",
    title: "Premium 3,4 BHK Apartments",
    location: "Hasthinapuram, Tamil Nadu",
    price: 8139000,
    image: hasthinapuramReference,
    bedrooms: 3,
    bathrooms: 2,
    area: 925,
    type: "apartment",
    purpose: "buy",
    description: "Premium apartments near Kumara Kundram Bus Stop. Features car parking, lift, and modern amenities."
  },
  {
    id: "2bhk-apartments-chrompet-near-railway-bus",
    title: "Modern 2BHK Apartments",
    location: "Chrompet, Tamil Nadu",
    price: 7070000,
    image: chrompetReference,
    bedrooms: 2,
    bathrooms: 2,
    area: 1010,
    type: "apartment",
    purpose: "buy",
    description: "Strategically located near Sree Balaji Medical College. Ready to occupy."
  },
  {
    id: "4-bhk-house-injambakkam-near-iskcon-temple-g2-villa",
    title: "Luxury 4 BHK G+2 Villa",
    location: "Injambakkam, Tamil Nadu",
    price: 37000000,
    image: injambakkamReference,
    bedrooms: 4,
    bathrooms: 4,
    area: 2200,
    type: "house",
    purpose: "buy",
    description: "Exquisite luxury villa near ISKCON Temple. Spacious design with premium finishes."
  },
  {
    id: "2-3bhk-apartments-west-mambalam-old-mambalam-road",
    title: "Elite 2,3 BHK Apartments",
    location: "West Mambalam, Tamil Nadu",
    price: 11400000,
    image: westMambalamReference,
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    type: "apartment",
    purpose: "buy",
    description: "Premium living on Old Mambalam Road. Ready to occupy with excellent connectivity."
  },
  {
    id: "2-3-bhk-apartments-medavakkam-near-thiruvalluvar-nagar-park",
    title: "Spacious 3 BHK Apartments",
    location: "Medavakkam, Tamil Nadu",
    price: 8550000,
    image: medavakkamReference,
    bedrooms: 3,
    bathrooms: 2,
    area: 1240,
    type: "apartment",
    purpose: "buy",
    description: "Modern apartments near Thiruvalluvar Nagar Park. High-quality construction and amenities."
  },
  {
    id: "Villa",
    title: "Luxury Villa Project",
    location: "Keelkattalai, Tamil Nadu",
    price: 9500000,
    image: keelkattalaiReference,
    bedrooms: 3,
    bathrooms: 3,
    area: 1100,
    type: "house",
    purpose: "buy",
    description: "New launch luxury villas in prime residential area of Keelkattalai."
  }
];

const PropertiesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const purpose = searchParams.get('purpose') || 'all';
  const type = searchParams.get('type') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');



  const filteredProperties = useMemo(() => {
    let filtered = allProperties;
    
    // Filter by purpose
    if (purpose !== 'all') {
      filtered = filtered.filter(p => p.purpose === purpose);
    }
    
    // Filter by type
    if (type !== 'all') {
      filtered = filtered.filter(p => p.type === type);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [purpose, type, searchTerm]);

  const formatPrice = (price: number, isRent: boolean = false) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price) + (isRent ? '/month' : '');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Title */}
              <div>
                <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                  {purpose === 'rent' ? 'Rental Properties' : 'Properties for Sale'}
                </h1>
                <p className="text-gray-600">
                  {purpose === 'rent'
                    ? 'Find your perfect rental home from our verified listings'
                    : 'Discover your dream home from our exclusive properties'
                  }
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by location, property type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
                  />
                </div>

                {/* Purpose Filter */}
                <div className="flex gap-2">
                  <Link to="/properties?purpose=all">
                    <Button variant={purpose === 'all' ? 'hero' : 'outline'} className="px-4">All</Button>
                  </Link>
                  <Link to="/properties?purpose=buy">
                    <Button variant={purpose === 'buy' ? 'hero' : 'outline'} className="px-4">Buy</Button>
                  </Link>
                  <Link to="/properties?purpose=rent">
                    <Button variant={purpose === 'rent' ? 'hero' : 'outline'} className="px-4">Rent</Button>
                  </Link>
                </div>

                {/* View Mode Toggle */}
                <div className="flex gap-2">
                  <Button variant={viewMode === 'grid' ? 'hero' : 'outline'} size="sm" onClick={() => setViewMode('grid')}>
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button variant={viewMode === 'list' ? 'hero' : 'outline'} size="sm" onClick={() => setViewMode('list')}>
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Button variant="outline" size="sm">Featured</Button>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        <div className="container-custom pb-12">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div key={property.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Property Image */}
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Purpose Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        property.purpose === 'rent' ? 'bg-green-500 text-white' : 'bg-primary text-white'
                      }`}>
                        {property.purpose === 'rent' ? 'For Rent' : 'For Sale'}
                      </span>
                    </div>
                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-4 h-4 text-primary" />
                          <span className="font-bold text-gray-900">
                            {property.purpose === 'rent'
                              ? `${(property.price / 1000).toFixed(0)}K/month`
                              : `${(property.price / 100000).toFixed(1)}L`
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <Link to={`/property/${property.id}`}>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {property.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1"><Bed className="w-4 h-4" /><span>{property.bedrooms} Beds</span></div>
                      <div className="flex items-center gap-1"><Bath className="w-4 h-4" /><span>{property.bathrooms} Baths</span></div>
                      <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /><span>{property.area} sqft</span></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link to={`/property/${property.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">View Details</Button>
                      </Link>
                      <a href="tel:+917695940400" className="flex-1">
                        <Button className="w-full">Contact</Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                  <div className="flex gap-6">
                    <div className="flex-none">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Link to={`/property/${property.id}`}>
                          <h3 className="text-lg font-heading font-semibold text-gray-900 hover:text-primary transition-colors">
                            {property.title}
                          </h3>
                        </Link>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${property.purpose === 'rent' ? 'bg-green-500 text-white' : 'bg-primary text-white'}`}>
                          {property.purpose === 'rent' ? 'For Rent' : 'For Sale'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1"><Bed className="w-4 h-4" /><span>{property.bedrooms}</span></div>
                          <div className="flex items-center gap-1"><Bath className="w-4 h-4" /><span>{property.bathrooms}</span></div>
                          <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /><span>{property.area} sqft</span></div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-lg font-bold text-primary">
                            {formatPrice(property.price, property.purpose === 'rent')}
                          </div>
                          <Link to={`/property/${property.id}`}>
                            <Button size="sm">View</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export { allProperties };
export default PropertiesPage;
