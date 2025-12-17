import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Settings, 
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" }
  ];

  const services = [
    { to: "/services", label: "CNC Turning" },
    { to: "/services", label: "VMC Machining" },
    { to: "/services", label: "Precision Components" },
    { to: "/services", label: "Quality Inspection" },
    { to: "/services", label: "Rapid Prototyping" }
  ];

  const industries = [
    { to: "/services", label: "Oil & Gas" },
    { to: "/services", label: "Defence" },
    { to: "/services", label: "Aerospace" },
    { to: "/services", label: "Mining" },
    { to: "/services", label: "General Engineering" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1C1C1C] via-[#2A2E34] to-[#0B5ED7] text-white relative overflow-hidden">
  {/* Subtle background glow */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0B5ED7] rounded-full blur-3xl"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#6C757D] rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10">
    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <img src={logo} alt="Ambika Precision Works" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Ambika Precision Works</h2>
              <p className="text-xs text-[#6C757D] font-medium">
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>

          <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6">
            Precision manufacturing specialists delivering CNC & VMC machining
            solutions for Oil & Gas, Defence, Aerospace, Mining, and Engineering sectors.
          </p>

          {/* Trust Badges */}
          <div className="space-y-3">
            <div className="flex items-center text-sm text-[#D1D5DB]">
              <Award className="w-4 h-4 mr-3 text-[#FFC107]" />
              ISO 9001:2015 Certified
            </div>
            <div className="flex items-center text-sm text-[#D1D5DB]">
              <Shield className="w-4 h-4 mr-3 text-[#0B5ED7]" />
              ICS Reg. RQ91/6769
            </div>
            <div className="flex items-center text-sm text-[#D1D5DB]">
              <Settings className="w-4 h-4 mr-3 text-[#6C757D]" />
              15+ Years of Excellence
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="flex items-center text-[#D1D5DB] hover:text-white transition"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-[#6C757D]" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Services</h3>
          <ul className="space-y-3 text-sm">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.to}
                  className="flex items-center text-[#D1D5DB] hover:text-white transition"
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-[#6C757D]" />
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4 text-sm text-[#D1D5DB]">

            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-[#0B5ED7]" />
              Mumbai, Maharashtra, India – 400001
            </div>

            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-[#6C757D]" />
              +91 98765 43210
            </div>

            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-[#6C757D]" />
              info@ambikaprecisionworks.com
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 mr-3 text-[#FFC107]" />
              <div>
                Mon–Fri: 9:00 AM – 6:00 PM<br />
                Sat: 9:00 AM – 2:00 PM
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#9CA3AF]">
        <p>
          © {currentYear} Ambika Precision Works. Precision Engineering Excellence Since 2010.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/terms" className="hover:text-white">Terms</Link>
          <Link to="/sitemap" className="hover:text-white flex items-center">
            Sitemap <ExternalLink className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;