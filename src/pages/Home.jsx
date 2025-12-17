"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
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
  Mail,
  Phone,
  MapPin,
  Plane,
  Hammer,
  Globe2,
  TrendingUp,
  X,
} from "lucide-react"

const productShowcase = [
  {
    name: "Oil & Gas",
    tagline: "Powering Energy Frontiers",
    description:
      "Delivering high-precision, corrosion-resistant, precision-built components for critical energy applications.",
    icon: <Zap className="w-10 h-10 text-[#FFC107]" />,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    stats: "250+ Projects",
  },
  {
    name: "Valves & Fittings",
    tagline: "Precision in Every Flow",
    description:
      "Machined to exact tolerances, our valve and fitting components ensure superior sealing, pressure integrity, and long service life in critical applications.",
    icon: <Settings className="w-10 h-10 text-[#0B5ED7]" />,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    stats: "180+ Components",
  },
  {
    name: "Defence",
    tagline: "Strength for Security",
    description: "Engineered components built to perform reliably in the most demanding defence environments.",
    icon: <Shield className="w-10 h-10 text-[#6C757D]" />,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    stats: "95+ Assemblies",
  },
  {
    name: "Aerospace",
    tagline: "Elevating Innovation",
    description:
      "Supporting the aerospace industry with precision-machined parts that combine advanced metallurgy and specified tolerances for safety, reliability, and performance in the most demanding environments.",
    icon: <Plane className="w-10 h-10 text-[#0B5ED7]" />,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    stats: "120+ Parts",
  },
  {
    name: "Mining",
    tagline: "Endurance in Motion",
    description:
      "Precision-machined parts crafted from high-strength alloys to deliver durability, accuracy, and consistent performance in challenging mining operations.",
    icon: <Hammer className="w-10 h-10 text-[#6C757D]" />,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    stats: "300+ Units",
  },
  {
    name: "General Engineering",
    tagline: "Versatility Unleashed",
    description:
      "From prototyping to production, Ambika Precision Works delivers cost-effective, high-accuracy solutions for mechanical, industrial, and manufacturing applications.",
    icon: <Globe2 className="w-10 h-10 text-[#0B5ED7]" />,
    image: "https://images.unsplash.com/photo-1465101178521-c1a2b3a8e8a2?auto=format&fit=crop&w=600&q=80",
    stats: "450+ Solutions",
  },
]

const Home = () => {
  const form = useRef()
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      name: "ISO 9001:2015 Certified",
      image: "/Iso-certificate.jpg",
    },
    {
      name: "EEPC Registered",
      image: "/EEPC-certificate.jpg",
    },
    {
      name: "Importer-Exporter Code",
      image: "/IEC code.jpg",
    },
  ]

  const sendEmail = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      const result = await emailjs.sendForm("service_n3pnd7v", "template_8h67n8p", form.current, "8camyyLwv9hs5-Hj4")

      console.log("Success:", result.text)
      setStatus({ ok: true, msg: "Inquiry sent successfully!" })
      form.current.reset()
    } catch (error) {
      console.error("Error:", error)
      setStatus({
        ok: false,
        msg: "Failed to send inquiry. Please try again.",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section with Industrial Blue Theme */}
      <section
        className="relative pt-8 pb-16 px-4 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/3Q Machining - CNC Machining in China for Custom CNC Machining Parts.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B5ED7]/90 via-[#0B5ED7]/80 to-[#1C1C1C]/85"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {certificates.map((certificate, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCertificate(certificate)}
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Award className="w-4 h-4 mr-2" />
                  {certificate.name}
                </button>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Precision Engineering
              <span className="block text-[#FFC107] mt-2">Meets Innovation</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/95">
              Transform your manufacturing targets into reality with Ambika Precision Works, High Precision CNC
              Machining solutions, ensuring 100% inspection and 15+ years of precision excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/services"
                className="group bg-[#0B5ED7] text-white px-10 py-5 rounded-lg font-semibold hover:bg-[#0B5ED7]/90 transition-all duration-300 hover:scale-105 text-lg shadow-xl flex items-center"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group text-white hover:text-[#FFC107] transition-colors font-semibold flex items-center gap-2 text-lg px-6 py-3 border-2 border-white/40 rounded-lg hover:border-[#FFC107] backdrop-blur-sm hover:bg-white/5"
              >
                Learn Our Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/30">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2">Foundry</div>
                <div className="text-white/90 text-sm font-medium">
                  Non-Ferrous Bronze/Gun Metal/Inconel Monthly Casting Capacity 25 Tons
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2">650mm</div>
                <div className="text-white/90 text-sm font-medium">Max Turning Diameter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2">100%</div>
                <div className="text-white/90 text-sm font-medium">Quality Assured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-2">100 Tons</div>
                <div className="text-white/90 text-sm font-medium">Monthly Machining Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1C1C1C]">Our Core Capabilities</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-[#0B5ED7] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1C1C1C]">High-Precision CNC Turning</h3>
                  <p className="text-[#6C757D] leading-relaxed text-lg">
                    Specialized in large-diameter turning up to 650mm with exceptional accuracy, superior surface finish
                    quality, and capability to handle the most complex components within specified tolerances.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-[#6C757D] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1C1C1C]">Quality Assurance Excellence</h3>
                  <p className="text-[#6C757D] leading-relaxed text-lg">
                    With ISO 9001:2015 certified systems and 100% inspection at every stage, we deliver precision,
                    reliability, and quality that consistently exceed global standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-16 h-16 bg-[#0B5ED7] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1C1C1C]">Trusted Partnership</h3>
                  <p className="text-[#6C757D] leading-relaxed text-lg">
                    With over 15 years of trusted service to domestic and international clients, we build lasting
                    partnerships through reliability, technical excellence, and a commitment to continuous innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#F8F9FA] border-2 border-[#0B5ED7]/20 rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B5ED7]/5 to-[#6C757D]/5"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-[#0B5ED7] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Settings className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#1C1C1C] mb-2">CNC Manufacturing</h4>
                  <p className="text-[#6C757D] text-lg">Excellence in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ambika Section */}
      <section className="pt-12 pb-16 -mt-12 lg:-mt-20 px-4 bg-gradient-to-b from-[#6C757D] via-[#1C1C1C] to-[#6C757D] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-10 w-72 h-72 bg-[#0B5ED7]/20 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0B5ED7]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight leading-tight">
              Excellence in Every
              <span className="block text-[#FFC107] mt-2">Dimension</span>
            </h2>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover the Ambika Precision Works advantage through innovation, precision, and an unwavering commitment
              to quality and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:bg-white/15 transition transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B5ED7] flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Precision</h3>
                    <div className="text-sm text-white/80">Accuracy ±0.005mm</div>
                  </div>
                </div>
                <div className="text-[#FFC107] font-black text-xl">±0.005mm</div>
              </div>

              <p className="text-white/80 mb-4">
                Powered by advanced CNC systems, expert programming and certified inspection standards to ensure
                repeatable, high-precision parts.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/80 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#FFC107]" />
                99.8% Accuracy Rate
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:bg-white/15 transition transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B5ED7] flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Delivery</h3>
                    <div className="text-sm text-white/80">On-Time Commitment</div>
                  </div>
                </div>
                <div className="text-[#FFC107] font-black text-xl">100%</div>
              </div>

              <p className="text-white/80 mb-4">
                Optimized machining schedules, real-time tracking and disciplined process control to meet critical
                timelines consistently.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/80 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FFC107]" />
                Guaranteed Timeline
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:bg-white/15 transition transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B5ED7] flex items-center justify-center shadow-md">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Technology</h3>
                    <div className="text-sm text-white/80">Advanced CNC & CAD/CAM</div>
                  </div>
                </div>
                <div className="text-[#FFC107] font-black text-xl">Latest</div>
              </div>

              <p className="text-white/80 mb-4">
                Equipped with the latest CNC machinery and CAD/CAM workflows to deliver complex geometries with superior
                surface finish.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/80 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFC107]" />
                Cutting-Edge Tech
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:bg-white/15 transition transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6C757D] flex items-center justify-center shadow-md">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Quality</h3>
                    <div className="text-sm text-white/80">ISO 9001:2015 Certified</div>
                  </div>
                </div>
                <div className="text-[#FFC107] font-black text-xl">Certified</div>
              </div>

              <p className="text-white/80 mb-4">
                Robust quality management with 100% inspection at every stage and traceable documentation for full
                compliance.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/80 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#FFC107]" />
                Zero Defect Goal
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:bg-white/15 transition transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B5ED7] flex items-center justify-center shadow-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">People</h3>
                    <div className="text-sm text-white/80">Experienced Team</div>
                  </div>
                </div>
                <div className="text-[#FFC107] font-black text-xl">40+</div>
              </div>

              <p className="text-white/80 mb-4">
                Skilled engineers, machinists and CNC specialists with continuous training and process ownership to
                ensure flawless execution.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/80 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFC107]" />
                Master Craftsmen
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl hover:bg-white/15 transition transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFC107] flex items-center justify-center shadow-md">
                    <Star className="w-6 h-6 text-[#1C1C1C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Reputation</h3>
                    <div className="text-sm text-white/80">Industry Recognition</div>
                  </div>
                </div>
                <div className="text-[#FFC107] font-black text-xl">500+</div>
              </div>

              <p className="text-white/80 mb-4">
                Trusted by leading industries for precision, reliability, and quality excellence across oil & gas,
                defence, mining and engineering.
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/80 flex items-center gap-2">
                <Star className="w-4 h-4 text-[#FFC107]" />
                Trusted Partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-2 text-[#1C1C1C]">
              Our Industry
              <span className="block text-[#0B5ED7] mt-2">Solutions</span>
            </h2>
            <p className="text-xl text-[#6C757D] max-w-4xl mx-auto leading-relaxed mb-8">
              Precision-engineered solutions across aerospace, oil & gas, defence, and mining — transforming challenges
              into measurable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productShowcase.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#0B5ED7]/10 hover:border-[#0B5ED7]/30 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-white text-[#0B5ED7] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {category.stats}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-1 group-hover:text-[#0B5ED7] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm font-medium text-[#0B5ED7] mb-3">{category.tagline}</p>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-6">{category.description}</p>

                  <button
                    onClick={() => navigate(`/product?filter=${encodeURIComponent(category.name)}`)}
                    className="flex items-center gap-2 text-[#0B5ED7] font-semibold hover:text-[#0B5ED7]/80 transition-colors"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#0B5ED7]/10 to-[#0B5ED7]/5 rounded-2xl p-8 border-2 border-[#0B5ED7]/20">
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Don't see your industry?</h3>
              <p className="text-[#6C757D] mb-6 max-w-2xl mx-auto">
                We work across many specialized sectors. Contact our team to discuss your unique manufacturing
                requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0B5ED7] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0B5ED7]/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1C1C1C] via-[#0B5ED7] to-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0B5ED7] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6C757D] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Precision Manufacturing Project?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Get in touch with our expert team to discuss your manufacturing needs and discover how we can transform
                your vision into precision-engineered reality.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#FFC107]" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#FFC107]" />
                  <span className="text-lg">info@ambikaprecisionworks.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-[#FFC107]" />
                  <span className="text-lg">Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="group border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-[#FFC107] transition-colors backdrop-blur-sm flex items-center justify-center"
                >
                  View Our Services
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-[#0B5ED7]/20 text-[#1C1C1C] placeholder-[#6C757D] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#0B5ED7] transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-[#0B5ED7]/20 text-[#1C1C1C] placeholder-[#6C757D] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#0B5ED7] transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Project Details"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-[#0B5ED7]/20 text-[#1C1C1C] placeholder-[#6C757D] focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#0B5ED7] resize-none transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#0B5ED7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B5ED7]/90 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Inquiry"}
                </button>
              </form>

              {status && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    status.ok
                      ? "bg-[#FFC107]/20 border border-[#FFC107] text-white"
                      : "bg-red-500/20 border border-red-300 text-white"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-[#1C1C1C]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] p-6 relative overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 text-[#6C757D] hover:text-[#0B5ED7] bg-[#F8F9FA] hover:bg-[#0B5ED7]/10 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#1C1C1C]">{selectedCertificate.name}</h2>
            <div className="flex justify-center">
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.name}
                className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg border-2 border-[#0B5ED7]/20"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
