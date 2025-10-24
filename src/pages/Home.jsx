import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Settings,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Target,
  Zap,
  ChevronRight,
  Star,
  Quote,
  Mail,
  Phone,
  MapPin,
  Plane,
  Hammer,
  Globe as Globe2,
  MousePointer,
  TrendingUp,
  Sparkles,
  X,
} from "lucide-react";

const productShowcase = [
  {
    name: "Oil & Gas",
    tagline: "Powering Energy Frontiers",
    description:
      "Delivering high-precision, corrosion-resistant, precision-built components for critical energy applications.",
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    gradient: "from-yellow-400 via-orange-400 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    stats: "250+ Projects",
  },
  {
    name: "Valves & Fittings",
    tagline: "Precision in Every Flow",
    description:
      "Machined to exact tolerances, our valve and fitting components ensure superior sealing, pressure integrity, and long service life in critical applications.",
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    gradient: "from-blue-500 via-blue-300 to-green-400",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    stats: "180+ Components",
  },
  {
    name: "Defence",
    tagline: "Strength for Security",
    description:
      "Engineered components built to perform reliably in the most demanding defence environments..",
    icon: <Shield className="w-10 h-10 text-red-500" />,
    gradient: "from-red-500 via-gray-700 to-black",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    stats: "95+ Assemblies",
  },
  {
    name: "Aerospace",
    tagline: "Elevating Innovation",
    description: "Supporting the aerospace industry with precision-machined parts that combine advanced metallurgy and specified tolerances for safety, reliability, and performance in the most demanding environments.",
    icon: <Plane className="w-10 h-10 text-purple-500" />,
    gradient: "from-purple-500 via-indigo-400 to-blue-300",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    stats: "120+ Parts",
  },
  {
    name: "Mining",
    tagline: "Endurance in Motion",
    description:
    "Precision-machined parts crafted from high-strength alloys to deliver durability, accuracy, and consistent performance in challenging mining operations.",
    icon: <Hammer className="w-10 h-10 text-yellow-700" />,
    gradient: "from-yellow-700 via-yellow-400 to-gray-500",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    stats: "300+ Units",
  },
  {
    name: "General Engineering",
    tagline: "Versatility Unleashed",
    description:
    "From prototyping to production, Ambika Precision Works delivers cost-effective, high-accuracy solutions for mechanical, industrial, and manufacturing applications.",
    icon: <Globe2 className="w-10 h-10 text-teal-500" />,
    gradient: "from-teal-500 via-green-400 to-blue-400",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a2b3a8e8a2?auto=format&fit=crop&w=600&q=80",
    stats: "450+ Solutions",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      name: "ISO 9001:2015 Certified",
      image: "/Iso-certificate.jpg", // Replace with the actual path to your certificate image
    },
    {
      name: "EEPC Registered",
      image: "/Iso-certificate.jpg", // Replace with the actual path to your certificate image
    },
    {
      name: "Importer-Exporter Code",
      image: "/Iso-certificate.jpg", // Replace with the actual path to your certificate image
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section
        className="relative pt-8 pb-16 px-4 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/3Q Machining - CNC Machining in China for Custom CNC Machining Parts.jpeg')`, // Replace with the actual path to your image
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {certificates.map((certificate, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCertificate(certificate)}
                  className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300"
                >
                  <Award className="w-4 h-4 mr-2" />
                  {certificate.name}
                </button>
              ))}
            </div>

            <h1
              className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Precision Engineering
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
                Meets Innovation
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-slate-200 animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              Transform your manufacturing targets into reality with Ambika
              Precision Works, High Precision CNC Machining solutions, ensuring 100% inspection
               and 15+ years of precision excellence.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
              style={{ animationDelay: "1.2s" }}
            >
              <Link
                to="/services"
                className="group bg-blue-600 text-white px-10 py-5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-lg shadow-2xl flex items-center hover:shadow-blue-500/25"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group text-slate-200 hover:text-white transition-colors font-semibold flex items-center gap-2 text-lg px-6 py-3 border border-slate-400/30 rounded-full hover:border-slate-300/50 backdrop-blur-sm hover:bg-white/5"
              >
                Learn Our Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-700/50">
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-count-up">
                  Foundry
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Non-Ferrous Bronze/Gun Metal/Inconel Monthly Casting Capacity 25 Tons
                </div>
              </div>
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "1.6s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 animate-count-up">
                  650mm
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Max Turning Diameter
                </div>
              </div>
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "1.8s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 animate-count-up">
                  100%
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Quality Assured
                </div>
              </div>
              <div
                className="text-center animate-fade-in-up"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-count-up">
                  100 Tons
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Monthly Machining Capacity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 animate-fade-in-up">
              Our Core Capabilities
            </h2>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="flex gap-6 group animate-slide-in-left"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    High-Precision CNC Turning
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Specialized in large-diameter turning up to 650mm with
                    exceptional accuracy, superior surface finish quality, and
                    capability to handle the most complex components within specified
                    tolerances.
                  </p>
                </div>
              </div>

              <div
                className="flex gap-6 group animate-slide-in-left"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    Quality Assurance Excellence
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    With ISO 9001:2015 certified systems and 100% inspection at every stage, we deliver precision, reliability, and quality that consistently exceed global standards.
                  </p>
                </div>
              </div>

              <div
                className="flex gap-6 group animate-slide-in-left"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    Trusted Partnership
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    With over 15 years of trusted service to domestic and international clients, we build lasting partnerships through reliability, technical excellence, and a commitment to continuous innovation.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
                    <Settings className="w-16 h-16 text-white animate-spin-slow" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">
                    CNC Manufacturing
                  </h4>
                  <p className="text-slate-600 text-lg">Excellence in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ambika Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-24 left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-24 right-24 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Sparkles
                className="w-4 h-4 mr-2 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              Why Industry Leaders Choose Us
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
              Excellence in Every
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Dimension
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Discover the Ambika Precision Works advantage through innovation,
              precision, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/30 rounded-3xl shadow-2xl p-8 flex flex-col items-start hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Target className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-2xl font-black text-blue-400 group-hover:scale-125 transition-transform duration-300">
                    Accuracy ±0.005mm
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  Precision Engineered to perfection
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Powered by advanced CNC systems, expert programming, and certified inspectio standards.
                </p>
                <div className="flex items-center text-blue-400 text-sm font-semibold mt-auto pt-4 border-t border-blue-400/20 group-hover:text-blue-300 transition-colors duration-300">
                  <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  99.8% Accuracy Rate
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/30 rounded-3xl shadow-2xl p-8 flex flex-col items-start hover:shadow-green-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-green-500/20 rounded-2xl group-hover:bg-green-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Clock className="w-8 h-8 text-green-400" />
                  </div>
                  <span className="text-3xl font-black text-green-400 group-hover:scale-125 transition-transform duration-300">
                    100%
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                  On-Time Delivery
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Ensuring timely completion through optimized machining schedules, real-time tracking, disciplined process control and reliable logistics support.
                </p>
                <div className="flex items-center text-green-400 text-sm font-semibold mt-auto pt-4 border-t border-green-400/20 group-hover:text-green-300 transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Guaranteed Timeline
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl border border-violet-400/30 rounded-3xl shadow-2xl p-8 flex flex-col items-start hover:shadow-violet-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20 transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-violet-500/20 rounded-2xl group-hover:bg-violet-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Zap className="w-8 h-8 text-violet-400" />
                  </div>
                  <span className="text-3xl font-black text-violet-400 group-hover:scale-125 transition-transform duration-300">
                    Latest
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  Advanced Technology
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Equipped with the latest CNC machinery and CAD/CAM software to ensure maximum efficiency, precision, and superior machining outcomes.
                </p>
                <div className="flex items-center text-violet-400 text-sm font-semibold mt-auto pt-4 border-t border-violet-400/20 group-hover:text-violet-300 transition-colors duration-300">
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Cutting-Edge Tech
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-xl border border-orange-400/30 rounded-3xl shadow-2xl p-8 flex flex-col items-start hover:shadow-orange-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/20 group-hover:to-amber-500/20 transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-orange-500/20 rounded-2xl group-hover:bg-orange-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Shield className="w-8 h-8 text-orange-400" />
                  </div>
                  <span className="text-3xl font-black text-orange-400 group-hover:scale-125 transition-transform duration-300">
                    100%
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                  Quality Certified
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  ISO 9001:2015 certified quality management with inspection at every stage of production.
                </p>
                <div className="flex items-center text-orange-400 text-sm font-semibold mt-auto pt-4 border-t border-orange-400/20 group-hover:text-orange-300 transition-colors duration-300">
                  <Shield className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Zero Defect Goal
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-cyan-500/10 to-sky-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl shadow-2xl p-8 flex flex-col items-start hover:shadow-cyan-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-sky-500/0 group-hover:from-cyan-500/20 group-hover:to-sky-500/20 transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-cyan-500/20 rounded-2xl group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <span className="text-3xl font-black text-cyan-400 group-hover:scale-125 transition-transform duration-300">
                    15+
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  Expert Team
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Skilled team of engineers, machinists and CNC specialists with continuous training to ensure flawless execution everytime.
                </p>
                <div className="flex items-center text-cyan-400 text-sm font-semibold mt-auto pt-4 border-t border-cyan-400/20 group-hover:text-cyan-300 transition-colors duration-300">
                  <Award className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Master Craftsmen
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl shadow-2xl p-8 flex flex-col items-start hover:shadow-yellow-500/50 hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-yellow-500/20 rounded-2xl group-hover:bg-yellow-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Award className="w-8 h-8 text-yellow-400" />
                  </div>
                  <span className="text-3xl font-black text-yellow-400 group-hover:scale-125 transition-transform duration-300">
                    500+
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  Industry Recognition
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Trusted by leading industries for our precision, reliability, and quality excellence proudly serving clients across oil & gas, defence, mining, and engineering sectors.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-semibold mt-auto pt-4 border-t border-yellow-400/20 group-hover:text-yellow-300 transition-colors duration-300">
                  <Star className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Trusted Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-slate-700 text-sm font-medium mb-8 border border-blue-200/50 animate-fade-in-up">
              <MousePointer className="w-4 h-4 mr-2" />
              Interactive Industry Explorer
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Our Industry
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Solutions
              </span>
            </h2>
            <p
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Precision-engineered solutions across aerospace, oil & gas, defence, and mining — transforming challenges into measurable performance.
            </p>
            <div
              className="flex items-center justify-center gap-2 text-slate-500 text-sm animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <span>Hover over cards to explore</span>
              <MousePointer className="w-4 h-4 animate-bounce" />
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productShowcase.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {category.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-500 mb-3">
                    {category.tagline}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <button
                    onClick={() =>
                      navigate(
                        `/product?filter=${encodeURIComponent(category.name)}`
                      )
                    }
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div
            className="text-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "2s" }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Don't see your industry?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We work across many specialized sectors. Contact our team to
                discuss your unique manufacturing requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Precision Manufacturing Project?
              </h2>
              <p className="text-xl mb-8 text-slate-200 leading-relaxed">
                Get in touch with our expert team to discuss your manufacturing
                needs and discover how we can transform your vision into
                precision-engineered reality.
              </p>

              <div className="space-y-4 mb-8">
                <div
                  className="flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div
                  className="flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Mail className="w-6 h-6 text-green-400" />
                  <span className="text-lg">info@ambikaprecisionworks.com</span>
                </div>
                <div
                  className="flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <Link
                  to="/contact"
                  className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all hover:scale-105 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="group border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center"
                >
                  View Our Services
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:bg-white/25"
                  />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:bg-white/25"
                  />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <textarea
                    placeholder="Project Details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all duration-300 focus:bg-white/25"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Certificate */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCertificate(null)} // Close modal on background click
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] p-6 relative overflow-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedCertificate.name}
            </h2>
            <div className="flex justify-center">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                className="w-full max-h-[70vh] object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
