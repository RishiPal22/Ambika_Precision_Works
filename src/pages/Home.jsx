import React from "react";
import { Link } from "react-router-dom";
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
  MapPin
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative pt-20 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-blue-900/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              ISO 9001:2015 Certified Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Precision Engineering
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Meets Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-slate-200">
              Transform your manufacturing vision into reality with Ambika Precision Works' 
              cutting-edge CNC solutions, uncompromising quality, and over 15 years of trusted expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/services"
                className="group bg-blue-600 text-white px-10 py-5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-lg shadow-2xl flex items-center"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group text-slate-200 hover:text-white transition-colors font-semibold flex items-center gap-2 text-lg px-6 py-3 border border-slate-400/30 rounded-full hover:border-slate-300/50 backdrop-blur-sm"
              >
                Learn Our Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-300 text-sm font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">650mm</div>
                <div className="text-slate-300 text-sm font-medium">Max Diameter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-slate-300 text-sm font-medium">Quality Assured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Core Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Delivering precision manufacturing solutions with uncompromising quality, 
              cutting-edge technology, and decades of engineering expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
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

              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
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

              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
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

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Settings className="w-16 h-16 text-white animate-spin" style={{animationDuration: '8s'}} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">CNC Manufacturing</h4>
                  <p className="text-slate-600 text-lg">Excellence in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Why Choose Ambika Precision Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference that precision engineering, advanced technology, and dedicated expertise make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Precision Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Achieving tolerances as tight as ±0.01mm with state-of-the-art CNC equipment and 
                rigorous quality control processes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">On-Time Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Reliable project timelines with 98% on-time delivery rate, ensuring your production 
                schedules stay on track.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Advanced Technology</h3>
              <p className="text-slate-600 leading-relaxed">
                Latest CNC machinery and CAD/CAM software ensuring optimal efficiency and 
                superior manufacturing outcomes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Quality Certified</h3>
              <p className="text-slate-600 leading-relaxed">
                ISO 9001:2015 certified with comprehensive quality management systems and 
                continuous improvement processes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Expert Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Skilled engineers and technicians with decades of combined experience in 
                precision manufacturing and CNC operations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Industry Recognition</h3>
              <p className="text-slate-600 leading-relaxed">
                Trusted by leading manufacturers across industries with proven track record of 
                excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover why industry leaders trust Ambika Precision Works for their critical manufacturing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "Ambika Precision Works has been instrumental in our success. Their attention to detail 
                and commitment to quality is unmatched in the industry."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RK</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Rajesh Kumar</div>
                  <div className="text-slate-600 text-sm">Manufacturing Director</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "The precision and reliability of their CNC work has helped us maintain our competitive 
                edge. Truly exceptional service and quality."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SP</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Suresh Patel</div>
                  <div className="text-slate-600 text-sm">Operations Manager</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 relative">
              <Quote className="w-8 h-8 text-purple-500 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "Working with Ambika Precision Works for over 8 years. Their consistency in quality 
                and on-time delivery is remarkable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MG</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Meera Gupta</div>
                  <div className="text-slate-600 text-sm">Production Head</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Precision Manufacturing Project?</h2>
              <p className="text-xl mb-8 text-slate-200 leading-relaxed">
                Get in touch with our expert team to discuss your manufacturing needs and discover 
                how we can transform your vision into precision-engineered reality.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-400" />
                  <span className="text-lg">info@ambikaprecisionworks.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Mumbai, Maharashtra, India</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Project Details" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
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