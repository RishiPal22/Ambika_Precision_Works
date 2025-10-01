import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Height of navbar (matches --navbar-height in App.jsx and CSS)
  const NAVBAR_HEIGHT = 80; // px (h-20)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/product", label: "Products" },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
            : 'bg-slate-900/95 backdrop-blur-md shadow-2xl'
        }`}
        style={{ height: NAVBAR_HEIGHT, minHeight: NAVBAR_HEIGHT }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Company Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 shadow-lg group-hover:shadow-xl' 
                  : 'bg-white shadow-lg group-hover:shadow-xl'
              }`}>
                <img
                  src={logo}
                  alt="Ambika Precision Works"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className={`transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                <div className="text-xl font-bold leading-tight">
                  Ambika Precision Works
                </div>
                <div className={`text-xs font-medium ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  ISO 9001:2015 Certified
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 group ${
                    isActiveLink(link.to)
                      ? isScrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-blue-400 bg-white/10'
                      : isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.to) && (
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-blue-400'
                    }`} />
                  )}
                </Link>
              ))}
              
              {/* Contact Info */}
              <div className={`hidden xl:flex items-center space-x-4 ml-6 pl-6 border-l ${
                isScrolled ? 'border-slate-200' : 'border-slate-700'
              }`}>
                <div className={`flex items-center space-x-2 text-sm ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className={`flex items-center space-x-2 text-sm ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  <Mail className="w-4 h-4" />
                  <span>info@ambikaprecisionworks.com</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-700 hover:bg-slate-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${
            isScrolled 
              ? 'bg-white border-t border-slate-200' 
              : 'bg-slate-900 border-t border-slate-700'
          }`}>
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                    isActiveLink(link.to)
                      ? isScrolled
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-blue-400 bg-white/10'
                      : isScrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className={`pt-4 mt-4 border-t space-y-3 ${
                isScrolled ? 'border-slate-200' : 'border-slate-700'
              }`}>
                <div className={`flex items-center space-x-3 px-4 py-2 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className={`flex items-center space-x-3 px-4 py-2 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@ambikaprecisionworks.com</span>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 text-center shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;