import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">AP</span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">
              Ambika Precision Works
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white font-medium text-base transition-all duration-200 hover:text-blue-200"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-white font-medium text-base transition-all duration-200 hover:text-blue-200"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className="text-white font-medium text-base transition-all duration-200 hover:text-blue-200"
            >
              SERVICES
            </Link>
            <Link
              to="/product"
              className="text-white font-medium text-base transition-all duration-200 hover:text-blue-200"
            >
              PRODUCTS
            </Link>
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-base transition-all duration-200"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
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
          <div className="md:hidden mt-4 pb-4 border-t border-blue-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                className="text-white font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-white font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/services"
                className="text-white font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                to="/product"
                className="text-white font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-base inline-block text-center"
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
