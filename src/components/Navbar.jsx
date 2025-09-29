import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Height of navbar (matches --navbar-height in App.jsx and CSS)
  const NAVBAR_HEIGHT = 64; // px (h-16)

  return (
    <nav
      className="fixed w-full bg-slate-800 shadow-2xl z-50"
      style={{ height: NAVBAR_HEIGHT, minHeight: NAVBAR_HEIGHT }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo/Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">AP</span>
            </div>
            <div className="text-xl font-bold text-white">
              Ambika Precision Works
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-white space-x-8">
            <Link
              to="/"
              className="text-white font-medium text-base hover:text-gray-200 transition-colors duration-200"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-white font-medium text-base hover:text-gray-200 transition-colors duration-200"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className="text-white font-medium text-base hover:text-gray-200 transition-colors duration-200"
            >
              SERVICES
            </Link>
            <Link
              to="/product"
              className="text-white font-medium text-base hover:text-gray-200 transition-colors duration-200"
            >
              PRODUCTS
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-base transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/services"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                to="/product"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-gray-200 hover:bg-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );  
}

export default Navbar;
