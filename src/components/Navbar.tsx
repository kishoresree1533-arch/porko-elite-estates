import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Estate", path: "/estate" },
  { label: "Interiors", path: "/interiors" },
  { label: "Construction", path: "/construction" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/98 backdrop-blur-xl shadow-2xl py-2"
          : "bg-primary py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
            P
          </div>
          <div className="hidden sm:block">
            <span className="text-primary-foreground font-heading font-bold text-lg leading-tight block tracking-wide">
              Porko
            </span>
            <span className="text-primary-foreground/50 text-[10px] leading-tight block tracking-widest uppercase">
              Construction & Estate
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-primary-foreground/12 text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/8"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <Link to="/contact">
            <Button variant="hero-outline" size="default">
              Get Free Quote
            </Button>
          </Link>
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-up">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-primary-foreground/12 text-primary-foreground"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
