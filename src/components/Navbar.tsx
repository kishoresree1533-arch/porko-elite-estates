import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";


const navItems = [
  { label: "Home", path: "/" },
  { label: "Construction", path: "/construction" },
  { label: "Joint Venture", path: "/joint-venture" },
  { label: "Estate", path: "/estate" },
  { label: "Interiors", path: "/interiors" },
  { label: "Estimator", path: "/cost-calculator" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md py-2 shadow-lg border-b border-gray-100"
          : "bg-white py-4 border-b border-gray-50"
        }`}
    >
      <div className="container-custom flex items-center justify-between gap-8">
        <Link to="/" className="flex-shrink-0">
          <Logo size={isScrolled ? "sm" : "md"} className="transition-all duration-500" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 group ${location.pathname === item.path
                  ? "text-primary font-bold"
                  : "text-gray-600 hover:text-primary"
                }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${location.pathname === item.path ? "w-4" : "w-0 group-hover:w-4"
                }`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {location.pathname !== "/contact" && (
            <Link to="/contact">
              <Button
                variant="default"
                size="default"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold text-[11px] tracking-widest uppercase rounded-full px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Free Quote
              </Button>
            </Link>
          )}
          <button
            className="lg:hidden text-primary hover:text-primary/80 p-2 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-500 ease-in-out origin-top ${isMobileOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
          }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-2">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-4 rounded-2xl text-sm font-semibold transition-all ${location.pathname === item.path
                  ? "bg-primary/5 text-primary translate-x-2"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50 hover:translate-x-2"
                }`}
            >
              {item.label}
            </Link>
          ))}
          {location.pathname !== "/contact" && (
            <div className="pt-4 border-t border-gray-100 mt-2 px-4">
              <Link to="/contact" className="block">
                <Button variant="default" className="w-full bg-primary text-white font-bold py-6 rounded-2xl text-xs tracking-widest uppercase">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

