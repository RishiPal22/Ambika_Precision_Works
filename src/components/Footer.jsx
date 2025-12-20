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
// import logo from "../assets/logo.png";

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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img
                    src="/public/logo.PNG"
                    alt="Ambika Precision Works"
                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold leading-tight">
                    Ambika Precision Works
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    ISO 9001:2015 Certified
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading precision manufacturing company specializing in CNC and VMC machining 
                solutions for Oil & Gas, Defence, Aerospace, Mining, and General Engineering industries.
              </p>

              {/* Certifications */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-slate-300">
                  <Award className="w-4 h-4 mr-3 text-yellow-400" />
                  <span className="text-sm">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Shield className="w-4 h-4 mr-3 text-green-400" />
                  <span className="text-sm">ICS Reg. RQ91/6769</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Settings className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">15+ Years Excellence</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                  <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="flex items-center text-slate-300 hover:text-white transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.to}
                      className="flex items-center text-slate-300 hover:text-white transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <div className="font-medium text-white mb-1">Head Office</div>
                    <div className="text-sm leading-relaxed">
                      Mumbai, Maharashtra<br />
                      India - 400001
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-300">
                        <div className="font-medium text-white mb-1">India</div>
                        <a href="tel:+919765530366" className="text-sm hover:text-white transition-colors">
                          +91 9765530366
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-300">
                        <div className="font-medium text-white mb-1">United Kingdom</div>
                        <a href="tel:+447818961332" className="text-sm hover:text-white transition-colors">
                          +44 7818961332
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-300">
                        <div className="font-medium text-white mb-1">Canada</div>
                        <a href="tel:+17785481146" className="text-sm hover:text-white transition-colors">
                          +1 7785481146
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-300">
                      <div className="font-medium text-white mb-1">Email</div>
                      <a href="mailto:info@ambikaprecisionworks.com" className="text-sm hover:text-white transition-colors">
                        info@ambikaprecisionworks.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <div className="font-medium text-white mb-1">Availability</div>
                    <div className="text-sm">
                      24/7 Operations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        {/* <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Industries We Serve</h3>
              <p className="text-slate-300 text-sm">Specialized manufacturing solutions for diverse industrial sectors</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  to={industry.to}
                  className="px-4 py-2 bg-white/10 rounded-full text-slate-300 hover:bg-white/20 hover:text-white transition-all text-sm font-medium backdrop-blur-sm"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm text-center md:text-left">
                © {currentYear} Ambika Precision Works. All rights reserved. | 
                <span className="ml-1">Precision Engineering Excellence Since 2010</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  Sitemap
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;