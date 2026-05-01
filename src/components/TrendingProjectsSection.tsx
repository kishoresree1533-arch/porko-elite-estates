import { MapPin, Maximize, Bed, Car, ArrowRight, Search, LayoutGrid, Building2, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import property1V1 from "@/assets/property-1.jpg";
import property2V1 from "@/assets/property-2.jpg";
import property3V1 from "@/assets/property-3.jpg";
import { Button } from "./ui/button";

const trendingProjects = [
  {
    id: 1,
    image: property1V1,
    registration: "CMDA",
    status: "Under Construction",
    name: "Hasthinapuram",
    location: "Kumara Kundram Bus Stop Near",
    sqft: "925-1850 Sq.ft",
    bhk: "3,4 BHK",
    price: "₹81.39 L - 1.63 Cr",
    amenities: ["Car Parking", "LIFT"],
  },
  {
    id: 2,
    image: property2V1,
    registration: "RERA",
    status: "Ready to Occupy",
    name: "Chrompet",
    location: "Sree Balaji Medical College And Hospital near",
    sqft: "1010-1040 Sq.ft",
    bhk: "2 BHK",
    price: "₹70.7 L - 72.8 L",
    amenities: ["Car Parking", "LIFT"],
  },
  {
    id: 3,
    image: property3V1,
    registration: "CMDA",
    status: "Ready to Occupy",
    name: "Injambakkam",
    location: "Near ISKCON Temple",
    sqft: "3618 Sq.ft",
    bhk: "4 BHK",
    price: "₹3.7 Cr",
    amenities: ["Car Parking", "LIFT"],
  },
  {
    id: 4,
    image: property1V1,
    registration: "RERA",
    status: "Ready to Occupy",
    name: "West Mambalam",
    location: "Dr. Ambedkar Play Ground Near",
    sqft: "993-1371 Sq.ft",
    bhk: "3 BHK",
    price: "₹1.14 Cr - 1.58 Cr",
    amenities: ["Car Parking", "LIFT"],
  }
];

const TrendingProjectsSection = () => {
  return (
    <section className="section-padding bg-background pb-16">
      <div className="container-custom max-w-[1400px] mx-auto">
        
        {/* Filter Bar */}
        <div className="bg-[#1868B7] rounded-xl p-4 md:px-8 mb-16 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 shadow-xl">
          <select className="bg-transparent text-white border-0 focus:ring-0 cursor-pointer font-medium pl-2 pr-6 outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center] bg-[length:0.65rem_auto] [&>option]:text-black">
            <option>City</option>
          </select>
          <div className="w-px h-6 bg-white/30 hidden lg:block" />
          
          <select className="bg-transparent text-white border-0 focus:ring-0 cursor-pointer font-medium pl-2 pr-6 outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center] bg-[length:0.65rem_auto] [&>option]:text-black">
            <option>Area</option>
          </select>
          <div className="w-px h-6 bg-white/30 hidden lg:block" />
          
          <select className="bg-transparent text-white border-0 focus:ring-0 cursor-pointer font-medium pl-2 pr-6 outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center] bg-[length:0.65rem_auto] [&>option]:text-black">
            <option>All Types</option>
          </select>
          <div className="w-px h-6 bg-white/30 hidden lg:block" />
          
          <select className="bg-transparent text-white border-0 focus:ring-0 cursor-pointer font-medium pl-2 pr-6 outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center] bg-[length:0.65rem_auto] [&>option]:text-black">
            <option>All Status</option>
          </select>
          <div className="w-px h-6 bg-white/30 hidden lg:block" />
          
          <select className="bg-transparent text-white border-0 focus:ring-0 cursor-pointer font-medium pl-2 pr-6 outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center] bg-[length:0.65rem_auto] [&>option]:text-black">
            <option>Min Price</option>
          </select>
          <div className="w-px h-6 bg-white/30 hidden lg:block" />
          
          <select className="bg-transparent text-white border-0 focus:ring-0 cursor-pointer font-medium pl-2 pr-6 outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center] bg-[length:0.65rem_auto] [&>option]:text-black">
            <option>Max Price</option>
          </select>
          <div className="w-px h-6 bg-white/30 hidden lg:block" />

          <Button className="bg-white hover:bg-gray-100 text-[#1868B7] font-semibold rounded-full px-8 ml-auto py-2">
            Search
          </Button>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">Trending Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl border border-border/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 bg-[#1868B7] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                  {project.registration}
                </div>
                <div className="absolute top-3 right-3 z-10 bg-[#1868B7] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                  {project.status}
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[#1868B7] text-sm font-semibold mb-1">{project.name}</span>
                <div className="flex items-start gap-2 mb-5">
                  <MapPin className="text-[#1868B7] w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm font-medium leading-relaxed line-clamp-2">{project.location}</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                    <Maximize className="text-[#1868B7] w-4 h-4" />
                    {project.sqft}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                    <Bed className="text-[#1868B7] w-4 h-4" />
                    {project.bhk}
                  </div>
                </div>
                
                <div className="text-lg font-black text-foreground mb-4">
                  {project.price}
                </div>

                <div className="flex items-center justify-between mb-5 mt-auto">
                    {project.amenities.map(amen => (
                        <div key={amen} className="flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                           {amen === "Car Parking" ? <Car className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                           {amen}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100 mt-2">
                  <Link to="/projects">
                    <Button size="sm" className="bg-[#1868B7] hover:bg-blue-700 text-white font-semibold rounded shadow-sm h-9 px-5 text-xs transition-colors">
                      View Details
                    </Button>
                  </Link>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-red-500 hover:bg-red-50 hover:border-red-200 transition-all">
                      <Youtube className="w-4 h-4" fill="currentColor" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-pink-600 hover:bg-pink-50 hover:border-pink-200 transition-all">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProjectsSection;
