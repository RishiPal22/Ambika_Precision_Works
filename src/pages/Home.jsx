import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Settings, Shield, Award, CheckCircle, ArrowRight, Users, Clock, Target, Zap, ChevronRight, Star, Quote, Mail, Phone, MapPin, Plane, Hammer, Globe as Globe2, MousePointer, TrendingUp, Sparkles } from "lucide-react";

const productShowcase = [
  {
    name: "Oil & Gas",
    tagline: "Powering Energy Frontiers",
    description:
      "Robust pipeline solutions and corrosion-resistant components for the world's toughest environments.",
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    gradient: "from-yellow-400 via-orange-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    stats: "250+ Projects"
  },
  {
    name: "Valves & Fittings",
    tagline: "Precision in Every Flow",
    description:
      "Engineered valve bodies and fittings for flawless control and reliability in critical systems.",
    icon: <Settings className="w-10 h-10 text-blue-500" />,
    gradient: "from-blue-500 via-blue-300 to-green-400",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    stats: "180+ Components"
  },
  {
    name: "Defence",
    tagline: "Strength for Security",
    description:
      "Specialized CNC parts for defense, built to withstand extreme conditions and ensure mission success.",
    icon: <Shield className="w-10 h-10 text-red-500" />,
    gradient: "from-red-500 via-gray-700 to-black",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    stats: "95+ Assemblies"
  },
  {
    name: "Aerospace",
    tagline: "Elevating Innovation",
    description:
      "Ultra-light, high-strength components for aerospace applications, where every gram and micron matter.",
    icon: <Plane className="w-10 h-10 text-purple-500" />,
    gradient: "from-purple-500 via-indigo-400 to-blue-300",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    stats: "120+ Parts"
  },
  {
    name: "Mining",
    tagline: "Endurance in Motion",
    description:
      "Heavy-duty gears and transmission parts designed for relentless mining operations.",
    icon: <Hammer className="w-10 h-10 text-yellow-700" />,
    gradient: "from-yellow-700 via-yellow-400 to-gray-500",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    stats: "300+ Units"
  },
  {
    name: "General Engineering",
    tagline: "Versatility Unleashed",
    description:
      "Custom machined shafts and assemblies for diverse industrial challenges.",
    icon: <Globe2 className="w-10 h-10 text-teal-500" />,
    gradient: "from-teal-500 via-green-400 to-blue-400",
    image: "https://images.unsplash.com/photo-1465101178521-c1a2b3a8e8a2?auto=format&fit=crop&w=600&q=80",
    stats: "450+ Solutions"
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative pt-8 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-blue-900/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Award className="w-4 h-4 mr-2" />
                ISO 9001:2015 Certified Excellence
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-200 text-sm font-medium backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <CheckCircle className="w-4 h-4 mr-2" />
                15+ Years Experience
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-200 text-sm font-medium backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <Target className="w-4 h-4 mr-2" />
                Precision Manufacturing
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              Precision Engineering
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
                Meets Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-slate-200 animate-fade-in-up" style={{animationDelay: '1s'}}>
              Transform your manufacturing vision into reality with Ambika Precision Works' 
              cutting-edge CNC solutions, uncompromising quality, and over 15 years of trusted expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
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
              <div className="text-center animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-count-up">15+</div>
                <div className="text-slate-300 text-sm font-medium">Years Excellence</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '1.6s'}}>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 animate-count-up">650mm</div>
                <div className="text-slate-300 text-sm font-medium">Max Diameter</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '1.8s'}}>
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 animate-count-up">100%</div>
                <div className="text-slate-300 text-sm font-medium">Quality Assured</div>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '2s'}}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-count-up">500+</div>
                <div className="text-slate-300 text-sm font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 animate-fade-in-up">Our Core Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Delivering precision manufacturing solutions with uncompromising quality, 
              cutting-edge technology, and decades of engineering expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 group animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">High-Precision CNC Turning</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Specialized in large-diameter turning up to 650mm with exceptional accuracy, 
                    superior surface finish quality, and capability to handle the most complex components 
                    with tight tolerances.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group animate-slide-in-left" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Quality Assurance Excellence</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    ISO 9001:2015 certified processes with 100% job inspection, advanced measuring 
                    equipment, and rigorous quality control ensuring every component exceeds industry standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Trusted Partnership</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Over 15 years of reliable service to domestic and international clients with 
                    unwavering commitment to excellence, innovation, and long-term business relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
                    <Settings className="w-16 h-16 text-white animate-spin-slow" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">CNC Manufacturing</h4>
                  <p className="text-slate-600 text-lg">Excellence in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ambika Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Industry Leaders Choose Us
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Excellence in Every
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Dimension
              </span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Discover the Ambika Precision Works advantage through innovation, precision, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Center Feature */}
          <div className="flex justify-center mb-16">
            <div className="relative group animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl border border-white/30 flex flex-col items-center justify-center p-8 hover:scale-105 transition-all duration-500 hover:bg-white/25">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-2xl animate-float">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">ISO 9001:2015</h3>
                <p className="text-slate-200 text-center leading-relaxed">
                  Certified quality management systems ensuring consistent excellence in every project
                </p>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding Features in Staggered Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Row 1 */}
            <div className="group transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-blue-300 text-sm font-bold bg-blue-500/20 px-3 py-1 rounded-full">±0.01mm</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Precision Excellence</h3>
                <p className="text-slate-200 leading-relaxed">
                  Achieving microscopic tolerances with state-of-the-art CNC equipment and rigorous quality control processes.
                </p>
                <div className="mt-6 flex items-center text-blue-300 text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  99.8% Accuracy Rate
                </div>
              </div>
            </div>

            <div className="group transform hover:-translate-y-2 transition-all duration-300 lg:mt-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-green-300 text-sm font-bold bg-green-500/20 px-3 py-1 rounded-full">98%</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">On-Time Delivery</h3>
                <p className="text-slate-200 leading-relaxed">
                  Reliable project timelines ensuring your production schedules stay on track, every single time.
                </p>
                <div className="mt-6 flex items-center text-green-300 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Guaranteed Timeline
                </div>
              </div>
            </div>

            <div className="group transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-purple-300 text-sm font-bold bg-purple-500/20 px-3 py-1 rounded-full">Latest</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
                <p className="text-slate-200 leading-relaxed">
                  Latest CNC machinery and CAD/CAM software ensuring optimal efficiency and superior outcomes.
                </p>
                <div className="mt-6 flex items-center text-purple-300 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Cutting-Edge Tech
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transform hover:-translate-y-2 transition-all duration-300 lg:mt-8 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-orange-300 text-sm font-bold bg-orange-500/20 px-3 py-1 rounded-full">100%</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quality Certified</h3>
                <p className="text-slate-200 leading-relaxed">
                  Comprehensive quality management with continuous improvement and rigorous testing processes.
                </p>
                <div className="mt-6 flex items-center text-orange-300 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Zero Defect Goal
                </div>
              </div>
            </div>

            <div className="group transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.6s'}}>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-cyan-300 text-sm font-bold bg-cyan-500/20 px-3 py-1 rounded-full">15+</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-slate-200 leading-relaxed">
                  Skilled engineers and technicians with decades of combined experience in precision manufacturing.
                </p>
                <div className="mt-6 flex items-center text-cyan-300 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Master Craftsmen
                </div>
              </div>
            </div>

            <div className="group transform hover:-translate-y-2 transition-all duration-300 lg:mt-8 animate-fade-in-up" style={{animationDelay: '1.8s'}}>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-yellow-300 text-sm font-bold bg-yellow-500/20 px-3 py-1 rounded-full">500+</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Industry Recognition</h3>
                <p className="text-slate-200 leading-relaxed">
                  Trusted by leading manufacturers with proven track record of excellence and innovation.
                </p>
                <div className="mt-6 flex items-center text-yellow-300 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
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
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-slate-700 text-sm font-medium mb-8 border border-blue-200/50 animate-fade-in-up">
              <MousePointer className="w-4 h-4 mr-2" />
              Interactive Industry Explorer
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Our Industry
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              From aerospace to mining, each industry presents unique challenges. Discover how our precision engineering transforms complex requirements into flawless solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <span>Hover over cards to explore</span>
              <MousePointer className="w-4 h-4 animate-bounce" />
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {productShowcase.map((category, idx) => (
              <div
                key={category.name}
                className="break-inside-avoid group relative animate-fade-in-up"
                style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] cursor-pointer bg-white">
                  {/* Image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-75 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    
                    {/* Floating icon */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 animate-float">
                      {category.icon}
                    </div>
                    
                    {/* Stats badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-slate-700 animate-slide-in-right">
                      {category.stats}
                    </div>
                    
                    {/* Category number */}
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <span className="text-white font-bold text-lg">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <div className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3">
                        {category.tagline}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Interactive elements */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => navigate(`/product?filter=${encodeURIComponent(category.name)}`)}
                        className="group/btn flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-6 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} transform transition-transform duration-1000 group-hover:translate-x-0 -translate-x-full`}
                      ></div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-transparent to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Floating action button on hover */}
                <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <button
                    onClick={() => navigate(`/product?filter=${encodeURIComponent(category.name)}`)}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow group-hover:rotate-12"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '2s'}}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your industry?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We work across many specialized sectors. Contact our team to discuss your unique manufacturing requirements.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Precision Manufacturing Project?</h2>
              <p className="text-xl mb-8 text-slate-200 leading-relaxed">
                Get in touch with our expert team to discuss your manufacturing needs and discover 
                how we can transform your vision into precision-engineered reality.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <Mail className="w-6 h-6 text-green-400" />
                  <span className="text-lg">info@ambikaprecisionworks.com</span>
                </div>
                <div className="flex items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Mumbai, Maharashtra, India</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
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
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:bg-white/25"
                  />
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 focus:bg-white/25"
                  />
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <textarea 
                    placeholder="Project Details" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all duration-300 focus:bg-white/25"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{animationDelay: '0.8s'}}
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;