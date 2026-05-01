import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  ArrowLeft,
  Phone,
  Mail,
  Share2,
  Heart,
  Calendar,
  FileText,
  Building,
  Calculator
} from "lucide-react";
import { useState } from "react";

// Import the same property data from PropertiesPage
import { allProperties } from "./PropertiesPage";

const PropertyDetailPage = () => {
  const { propertyId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Find property by ID from allProperties array
  const property = allProperties.find(p => p.id.toString() === propertyId);

  if (!property) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <Link to="/properties" className="text-gray-500 hover:text-gray-700">
              <Button>Back to Properties</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const statusColor = property.status === "Ready to Occupy" ? "bg-green-600" : 
                     property.status === "Under Construction" ? "bg-blue-600" : 
                     "bg-orange-600";

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/properties" className="text-gray-500 hover:text-gray-700">Properties</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{property.location}</span>
            </div>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {property.purpose === 'rent' ? `₹${property.price.toLocaleString()}/month` : `₹${property.price.toLocaleString()}`}
              </div>
              <div className="text-sm text-gray-500">
                {property.purpose === 'rent' ? 'Monthly Rent' : 'Total Price'}
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">{property.description}</p>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Bed className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">{property.bedrooms} Beds</div>
                <div className="text-xs text-gray-500">Bedrooms</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Bath className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">{property.bathrooms} Baths</div>
                <div className="text-xs text-gray-500">Bathrooms</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Maximize className="w-5 h-5 text-blue-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">{property.area} sqft</div>
                <div className="text-xs text-gray-500">Area</div>
              </div>
            </div>
          </div>

          {/* Property Image */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <div className="relative">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className="bg-white/90 hover:bg-white"
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
                <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact for Details</h3>
              <div className="space-y-4">
                <a href="tel:+917695940400" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="mailto:porkoestate@gmail.com" className="block mb-2">
                  <Button variant="outline" className="w-full py-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Estate
                  </Button>
                </a>
                <a href="mailto:porkoconstruction@gmail.com" className="block mb-2">
                  <Button variant="outline" className="w-full py-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Construction
                  </Button>
                </a>
                <a href="mailto:Porkoconstructionestate@gmail.com" className="block">
                  <Button variant="outline" className="w-full py-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calculator className="w-4 h-4 mr-2" />
                  EMI Calculator
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailPage;
