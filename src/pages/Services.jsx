import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Cog,
  Zap,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Clock,
  Users,
  Factory,
  Wrench,
  Gauge,
  Microscope,
  Layers,
  Cpu,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "CNC Turning",
      description:
        "High-precision turning operations for cylindrical components up to 650mm diameter with exceptional surface finish and dimensional accuracy.",
      features: [
        "Large diameter capability up to 650mm",
        "Live tooling for complex operations",
        "±0.01mm tolerance achievement",
        "Superior surface finish quality",
      ],
      industries: ["Oil & Gas", "Aerospace", "Defence"],
    },
    {
      icon: Cog,
      title: "VMC Machining",
      description:
        "Advanced Vertical Machining Center operations for complex geometries, multi-axis machining, and high-precision manufacturing.",
      features: [
        "3-axis and multi-axis capabilities",
        "Complex geometry machining",
        "High-speed machining operations",
        "Tight tolerance maintenance",
      ],
      industries: ["Aerospace", "Defence", "General Engineering"],
    },
    {
      icon: Factory,
      title: "Production Machining",
      description:
        "High-volume production runs with consistent quality, optimized for efficiency while maintaining precision standards.",
      features: [
        "High-volume production capability",
        "Consistent quality assurance",
        "Optimized cycle times",
        "Cost-effective solutions",
      ],
      industries: ["Mining", "Oil & Gas", "General Engineering"],
    },
    {
      icon: Microscope,
      title: "Precision Components",
      description:
        "Manufacturing of critical precision components for demanding applications requiring exceptional accuracy and reliability.",
      features: [
        "Critical component manufacturing",
        "Exceptional accuracy standards",
        "Reliability testing protocols",
        "Custom design solutions",
      ],
      industries: ["Defence", "Aerospace", "Oil & Gas"],
    },
    {
      icon: Shield,
      title: "Quality Inspection",
      description:
        "Comprehensive quality control using advanced metrology equipment and ISO 9001:2015 certified processes.",
      features: [
        "100% job inspection protocol",
        "Advanced measuring equipment",
        "ISO 9001:2015 certification",
        "Complete documentation",
      ],
      industries: ["All Industries"],
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "Fast-track prototyping services to accelerate product development cycles with quick turnaround times.",
      features: [
        "Quick turnaround times",
        "Design optimization support",
        "Material selection guidance",
        "Iterative development process",
      ],
      industries: ["General Engineering", "Aerospace"],
    },
  ];

  const industries = [
    {
      icon: Factory,
      name: "Oil & Gas",
      description:
        "Critical components for drilling, extraction, and refining operations requiring exceptional durability and precision.",
      applications: [
        "Valve components",
        "Pump parts",
        "Drilling equipment",
        "Pipeline fittings",
      ],
    },
    {
      icon: Shield,
      name: "Defence",
      description:
        "High-precision manufacturing for defense applications with stringent quality and security requirements.",
      applications: [
        "Weapon systems",
        "Vehicle components",
        "Communication equipment",
        "Precision instruments",
      ],
    },
    {
      icon: Target,
      name: "Aerospace",
      description:
        "Ultra-precision components for aerospace applications meeting the highest industry standards and certifications.",
      applications: [
        "Engine components",
        "Landing gear parts",
        "Structural elements",
        "Avionics housings",
      ],
    },
    {
      icon: Wrench,
      name: "Mining",
      description:
        "Robust components designed to withstand harsh mining environments while maintaining operational reliability.",
      applications: [
        "Excavator parts",
        "Crusher components",
        "Conveyor systems",
        "Heavy machinery",
      ],
    },
    {
      icon: Cog,
      name: "General Engineering",
      description:
        "Versatile manufacturing solutions for diverse engineering applications across multiple sectors.",
      applications: [
        "Custom components",
        "Prototype development",
        "Production parts",
        "Specialized tooling",
      ],
    },
  ];

  const capabilities = [
    {
      metric: "24/7",
      label: "Operational Hours",
      description: "Continuous production support",
    },
    {
      metric: "650mm",
      label: "Max Diameter",
      description: "Large component capability",
    },
    {
      metric: "ISO 9001:2015",
      label: "Quality Certified",
      description: "ICS Reg. RQ91/6769",
    },
    {
      metric: "100%",
      label: "Job Inspection",
      description: "Every component verified",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Precision Manufacturing Services
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Advanced CNC & VMC
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Manufacturing Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-slate-200">
              Comprehensive precision machining services for Oil & Gas, Defence,
              Aerospace, Mining, and General Engineering industries with ISO
              9001:2015 certified quality assurance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-blue-600 text-white px-10 py-5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-lg shadow-2xl flex items-center"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group text-slate-200 hover:text-white transition-colors font-semibold flex items-center gap-2 text-lg px-6 py-3 border border-slate-400/30 rounded-full hover:border-slate-300/50 backdrop-blur-sm"
              >
                Our Capabilities
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {capability.metric}
                </div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-1">
                  {capability.label}
                </div>
                <div className="text-sm text-slate-500">
                  {capability.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Our Manufacturing Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive CNC and VMC machining solutions delivering
              precision, quality, and reliability for the most demanding
              industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* <div className="pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Industries Served</div>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized manufacturing solutions tailored to meet the unique
              requirements and stringent standards of diverse industrial
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
                      {industry.name}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-slate-700 mb-3">
                        Key Applications:
                      </div>
                      {industry.applications.map((application, appIndex) => (
                        <div
                          key={appIndex}
                          className="flex items-center text-slate-600"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Excellence Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to precision manufacturing ensuring
              consistent quality and optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Design Analysis
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive review of specifications, material requirements,
                and manufacturing feasibility.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                CNC Programming
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced CAD/CAM programming optimized for efficiency,
                precision, and surface finish quality.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Precision Machining
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                State-of-the-art CNC and VMC operations with continuous
                monitoring and quality control.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Gauge className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Quality Verification
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                100% inspection protocol with advanced measuring equipment and
                complete documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Precision Manufacturing Project?
              </h2>
              <p className="text-xl mb-8 text-slate-200 leading-relaxed">
                Partner with Ambika Precision Works for your critical
                manufacturing needs. Our expert team is ready to deliver
                exceptional quality and precision for your most demanding
                applications.
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
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all hover:scale-105 flex items-center justify-center"
                >
                  Request Detailed Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center"
                >
                  Learn More About Us
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Service Inquiry</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select Industry</option>
                  <option value="oil-gas">Oil & Gas</option>
                  <option value="defence">Defence</option>
                  <option value="aerospace">Aerospace</option>
                  <option value="mining">Mining</option>
                  <option value="general">General Engineering</option>
                </select>
                <textarea
                  placeholder="Project Requirements & Specifications"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
