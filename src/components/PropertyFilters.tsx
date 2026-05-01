import { useState } from "react";
import { X, Search, MapPin, ChevronDown, SlidersHorizontal, Check } from "lucide-react";
import { Button } from "./ui/button";

interface FilterOptions {
  city: string;
  area: string;
  propertyStatus: string[];
}

interface PropertyFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyFilters = ({ onFilterChange, isOpen, onClose }: PropertyFiltersProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    city: "",
    area: "",
    propertyStatus: [],
  });

  const cities = ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"];
  const areas = {
    Chennai: ["OMR", "ECR", "Adyar", "Anna Nagar"],
    Coimbatore: ["RS Puram", "Race Course", "Peelamedu"],
    Madurai: ["KK Nagar", "Anna Nagar"],
    Salem: ["Fairlands", "Hasthampatti"],
    Trichy: ["Cantonment", "Thillai Nagar"],
  };

  const statusOptions = [
    "Ready to Occupy",
    "Under Construction",
    "New Launching",
    "Resale Property",
    "Prime Plot",
    "Gated Community Appartment",
  ];

  const handleStatusToggle = (status: string) => {
    setFilters((prev) => {
      const newStatus = prev.propertyStatus.includes(status)
        ? prev.propertyStatus.filter((s) => s !== status)
        : [...prev.propertyStatus, status];
      return { ...prev, propertyStatus: newStatus };
    });
  };

  const handleSearch = () => {
    onFilterChange(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-heading font-black text-foreground">Filters</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-gray-100">
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          <Button 
            onClick={handleSearch}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
          >
            <Search className="w-5 h-5" />
            Apply Search
          </Button>

          {/* City Selection */}
          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-gray-500">City</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <select 
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value, area: "" })}
                className="w-full h-14 pl-12 pr-10 bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl text-sm font-semibold text-gray-700 appearance-none transition-all cursor-pointer"
              >
                <option value="">Choose city</option>
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors pointer-events-none">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Area Selection */}
          <div className="space-y-4">
            <label className="text-sm font-black uppercase tracking-widest text-gray-500">Area</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <select 
                value={filters.area}
                disabled={!filters.city}
                onChange={(e) => setFilters({ ...filters, area: e.target.value })}
                className="w-full h-14 pl-12 pr-10 bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl text-sm font-semibold text-gray-700 appearance-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Choose area</option>
                {filters.city && (areas as any)[filters.city].map((area: string) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors pointer-events-none">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Property Status */}
          <div className="space-y-6">
            <label className="text-sm font-black uppercase tracking-widest text-gray-500">Property Status</label>
            <div className="grid gap-4">
              {statusOptions.map((status) => (
                <div 
                  key={status} 
                  onClick={() => handleStatusToggle(status)}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                    filters.propertyStatus.includes(status) 
                    ? "bg-primary border-primary shadow-lg shadow-primary/20" 
                    : "bg-white border-gray-200 group-hover:border-primary/50"
                  }`}>
                    {filters.propertyStatus.includes(status) && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${
                    filters.propertyStatus.includes(status) ? "text-foreground" : "text-gray-600 group-hover:text-primary"
                  }`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <Button 
            variant="ghost" 
            onClick={() => setFilters({ city: "", area: "", propertyStatus: [] })}
            className="w-full font-bold text-gray-400 hover:text-primary"
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
