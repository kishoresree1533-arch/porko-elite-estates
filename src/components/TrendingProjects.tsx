import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Car, 
  Users, 
  Facebook, 
  Youtube, 
  Instagram,
  Search,
  MapPin,
  Home,
  IndianRupee
} from "lucide-react";
// Using local property images that will display correctly
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/project-4.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import hasthinapuramReference from "@/assets/1771848381.webp";
import westMambalamReference from "@/assets/1773833068.webp";
import chrompetReference from "@/assets/1773985023.webp";
import injambakkamReference from "@/assets/1775458403.webp";
import medavakkamReference from "@/assets/1776320944.webp";
import keelkattalaiReference from "@/assets/1773985023.webp";

const westMambalamImage = westMambalamReference;
const hasthinapuramImage = hasthinapuramReference;
const chrompetImage = chrompetReference;
const injambakkamImage = injambakkamReference;
const medavakkamImage = medavakkamReference;
const keelkattalaiImage = keelkattalaiReference;

const trendingProjects = [
  {
    id: "3-4bhk-apartments-hasthinapuram-gayathri-nagar",
    image: hasthinapuramImage,
    approval: "CMDA",
    status: "Under Construction",
    statusValue: "construction",
    city: "chennai",
    area: "Hasthinapuram",
    type: "apartment",
    location: "Hasthinapuram, Tamil Nadu",
    description: "Kumara Kundram Bus Stop Near",
    sqft: "925-1850",
    bhk: "3,4 BHK",
    price: "81.39 L - 1.63 Cr",
    minPrice: 8139000,
    maxPrice: 16300000,
    amenities: ["Car Parking", "LIFT"],
    socialLinks: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    id: "2bhk-apartments-chrompet-near-railway-bus",
    image: chrompetImage,
    approval: "RERA",
    status: "Ready to Occupy",
    statusValue: "ready",
    city: "chennai",
    area: "Chrompet",
    type: "apartment",
    location: "Chrompet, Tamil Nadu",
    description: "Sree Balaji Medical College And Hospital near",
    sqft: "1010-1040",
    bhk: "2 BHK",
    price: "70.7 L - 72.8 L",
    minPrice: 7070000,
    maxPrice: 7280000,
    amenities: ["Car Parking", "LIFT"],
    socialLinks: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    id: "4-bhk-house-injambakkam-near-iskcon-temple-g2-villa",
    image: injambakkamImage,
    approval: "CMDA",
    status: "Ready to Occupy",
    statusValue: "ready",
    city: "chennai",
    area: "Injambakkam",
    type: "villa",
    location: "Injambakkam, Tamil Nadu",
    description: "Near ISKCON Temple",
    sqft: "2200-2500",
    bhk: "4 BHK",
    price: "3.7 Cr",
    minPrice: 37000000,
    maxPrice: 37000000,
    amenities: ["Car Parking", "LIFT"],
    socialLinks: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    id: "2-3bhk-apartments-west-mambalam-old-mambalam-road",
    image: westMambalamImage,
    approval: "RERA",
    status: "Ready to Occupy",
    statusValue: "ready",
    city: "chennai",
    area: "West Mambalam",
    type: "apartment",
    location: "West Mambalam, Tamil Nadu",
    description: "Old Mambalam Road",
    sqft: "850-1200",
    bhk: "2,3 BHK",
    price: "1.14 Cr - 1.58 Cr",
    minPrice: 11400000,
    maxPrice: 15800000,
    amenities: ["Car Parking", "LIFT"],
    socialLinks: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    id: "2-3-bhk-apartments-medavakkam-near-thiruvalluvar-nagar-park",
    image: medavakkamImage,
    approval: "CMDA",
    status: "Ready to Occupy",
    statusValue: "ready",
    city: "chennai",
    area: "Medavakkam",
    type: "apartment",
    location: "Medavakkam, Tamil Nadu",
    description: "Near Thiruvalluvar Nagar Park",
    sqft: "1240-1280",
    bhk: "3 BHK",
    price: "85.5 L - 1.18 Cr",
    minPrice: 8550000,
    maxPrice: 11800000,
    amenities: ["Car Parking", "LIFT"],
    socialLinks: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    }
  },
  {
    id: "Villa",
    image: keelkattalaiImage,
    approval: "DTCP",
    status: "New Launching",
    statusValue: "launching",
    city: "chennai",
    area: "Keelkattalai",
    type: "villa",
    location: "Keelkattalai, Tamil Nadu",
    description: "Prime Residential Area",
    sqft: "1100-1600",
    bhk: "3 BHK",
    price: "95 L - 1.35 Cr",
    minPrice: 9500000,
    maxPrice: 13500000,
    amenities: ["Car Parking", "LIFT"],
    socialLinks: {
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    }
  }
];

const ProjectCard = ({ project }: { project: typeof trendingProjects[0] }) => {
  const statusColor = project.status === "Ready to Occupy" ? "bg-green-600" : 
                     project.status === "Under Construction" ? "bg-blue-600" : 
                     "bg-orange-600";

  return (
    <div className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.location}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Approval and Status Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 shadow-lg transition-colors">
            {project.approval}
          </Badge>
          <Badge className={`${statusColor} hover:opacity-90 text-white text-xs font-bold px-3 py-1.5 shadow-lg transition-opacity`}>
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-blue-600 group-hover:text-blue-700 transition-colors" />
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">{project.location}</h3>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        {/* Property Details */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
            <Home className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{project.sqft} Sq.ft</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{project.bhk}</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
            <IndianRupee className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-gray-900">{project.price}</span>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="flex gap-2 mb-5">
          {project.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors">
              {amenity === "Car Parking" && <Car className="w-3.5 h-3.5 text-blue-600" />}
              {amenity === "LIFT" && <Users className="w-3.5 h-3.5 text-blue-600" />}
              <span className="text-xs font-medium text-blue-700">{amenity}</span>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Link to={`/property/${project.id}`}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          {/* Social Links */}
          <div className="flex gap-2">
            <a 
              href={project.socialLinks.youtube} 
              className="w-9 h-9 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href={project.socialLinks.instagram} 
              className="w-9 h-9 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



const TrendingProjects = () => {
  const [searchFilters, setSearchFilters] = useState({
    city: "",
    area: "",
    type: "",
    status: "",
    minPrice: "",
    maxPrice: ""
  });

  const filteredProjects = useMemo(() => {
    return trendingProjects.filter(project => {
      // City filter
      if (searchFilters.city && project.city !== searchFilters.city) return false;
      
      // Area filter
      if (searchFilters.area && !project.area.toLowerCase().includes(searchFilters.area.toLowerCase())) return false;
      
      // Type filter
      if (searchFilters.type && project.type !== searchFilters.type) return false;
      
      // Status filter
      if (searchFilters.status && project.statusValue !== searchFilters.status) return false;
      
      // Min Price filter
      if (searchFilters.minPrice) {
        const min = parseFloat(searchFilters.minPrice);
        if (!isNaN(min)) {
          // If input is less than 1000, assume Lakhs
          const minVal = min < 1000 ? min * 100000 : min;
          if (project.maxPrice < minVal) return false;
        }
      }
      
      // Max Price filter
      if (searchFilters.maxPrice) {
        const max = parseFloat(searchFilters.maxPrice);
        if (!isNaN(max)) {
          // If input is less than 1000, assume Lakhs
          const maxVal = max < 1000 ? max * 100000 : max;
          if (project.minPrice > maxVal) return false;
        }
      }
      
      return true;
    });
  }, [searchFilters]);

  const handleClearFilters = () => {
    setSearchFilters({
      city: "",
      area: "",
      type: "",
      status: "",
      minPrice: "",
      maxPrice: ""
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-blue-600 rounded-full" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Premium Properties</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Trending Projects</h2>
            <p className="text-gray-600 text-lg">Discover our most sought-after properties in prime locations</p>
          </div>
        </div>

        {/* Search Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Search Properties</h3>
            </div>
            {(searchFilters.city || searchFilters.area || searchFilters.type || searchFilters.status || searchFilters.minPrice || searchFilters.maxPrice) && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleClearFilters}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                Clear Filters
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
              <Select value={searchFilters.city} onValueChange={(value) => 
                setSearchFilters(prev => ({ ...prev, city: value }))
              }>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="coimbatore">Coimbatore</SelectItem>
                  <SelectItem value="madurai">Madurai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Area</label>
              <Input
                placeholder="Enter Area"
                value={searchFilters.area}
                onChange={(e) => setSearchFilters(prev => ({ ...prev, area: e.target.value }))}
                className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">All Types</label>
              <Select value={searchFilters.type} onValueChange={(value) => 
                setSearchFilters(prev => ({ ...prev, type: value }))
              }>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">All Status</label>
              <Select value={searchFilters.status} onValueChange={(value) => 
                setSearchFilters(prev => ({ ...prev, status: value }))
              }>
                <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ready">Ready to Occupy</SelectItem>
                  <SelectItem value="construction">Under Construction</SelectItem>
                  <SelectItem value="launching">New Launching</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Min Price</label>
              <Input
                placeholder="Min Price"
                value={searchFilters.minPrice}
                onChange={(e) => setSearchFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Max Price</label>
              <Input
                placeholder="Max Price"
                value={searchFilters.maxPrice}
                onChange={(e) => setSearchFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Projects */}
        <div className="relative">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-h-[400px]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E1 #F1F5F9' }}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="w-full flex flex-col items-center justify-center bg-white rounded-xl border border-dashed border-gray-300 p-12">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h4>
                  <p className="text-gray-600 text-center max-w-md">
                    We couldn't find any properties matching your current filters. Try adjusting your search criteria or clearing all filters.
                  </p>
                  <Button 
                    onClick={handleClearFilters}
                    className="mt-6 bg-blue-600 hover:bg-blue-700"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Gradient fade effects for scroll indication */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
