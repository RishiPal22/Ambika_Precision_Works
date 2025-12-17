"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, Mail } from "lucide-react"
import logo from "../assets/logo.PNG"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const NAVBAR_HEIGHT = 80

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/product", label: "Products" },
  ]

  const isActiveLink = (path) => location.pathname === path

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F9FA]/95 backdrop-blur-md shadow-lg border-b border-[#E5E7EB]"
            : "bg-[#0B5ED7]/95 backdrop-blur-md shadow-2xl"
        }`}
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Ambika Precision Works"
                className="w-20 h-20 object-contain transition-transform group-hover:scale-105"
              />
              <span
                className={`text-xl md:text-2xl font-semibold tracking-tight ${
                  isScrolled ? "text-[#1C1C1C]" : "text-white"
                }`}
              >
                Ambika Precision Works
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wide transition-all ${
                    isActiveLink(link.to)
                      ? isScrolled
                        ? "text-[#0B5ED7] bg-[#0B5ED7]/10"
                        : "text-white bg-white/20"
                      : isScrolled
                        ? "text-[#1C1C1C] hover:text-[#0B5ED7] hover:bg-[#0B5ED7]/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.to) && (
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                        isScrolled ? "bg-[#0B5ED7]" : "bg-[#FFC107]"
                      }`}
                    />
                  )}
                </Link>
              ))}

              {/* Contact Info */}
              <div
                className={`hidden xl:flex items-center space-x-4 text-sm ml-6 ${
                  isScrolled ? "text-[#6C757D]" : "text-white/90"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+91 9765530366</span>
                <Mail className="w-4 h-4" />
                <span>info@ambikaprecisionworks.com</span>
              </div>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Link
                to="/contact"
                className="ml-6 bg-[#FFC107] hover:bg-[#E0A800] text-[#1C1C1C] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-lg"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${
                  isScrolled
                    ? "text-[#0B5ED7] hover:bg-[#0B5ED7]/10"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className={`${isScrolled ? "bg-[#F8F9FA]" : "bg-[#0B5ED7]"}`}>
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium uppercase ${
                    isActiveLink(link.to)
                      ? "bg-[#0B5ED7]/10 text-[#0B5ED7]"
                      : isScrolled
                        ? "text-[#1C1C1C] hover:bg-[#0B5ED7]/10"
                        : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="block mt-4 bg-[#FFC107] text-[#1C1C1C] py-4 rounded-full text-center font-semibold uppercase shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
