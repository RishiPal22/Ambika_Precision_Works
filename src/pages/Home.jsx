
import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with dark overlay */}
      <section className="relative pt-16 pb-8 px-2 bg-gradient-to-b from-slate-900 via-slate-800/80 to-slate-50">
        {/* Subtle dark overlay for hero */}
        <div className="absolute inset-0 bg-slate-900/60 pointer-events-none" style={{zIndex:1}} />
        <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance leading-tight">
              Precision engineering
              <span className="block gradient-text">meets excellence</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed text-slate-200">
              Transform your manufacturing needs with Ambika Precision Works' ISO-certified CNC solutions and over a
              decade of trusted expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 text-lg shadow-lg"
              >
                Explore Our Services
              </Link>
              <Link
                to="/about"
                className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2 text-lg"
              >
                Learn Our Story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

  {/* Light section */}
  <section className="py-8 px-2 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
              <div className="text-sm text-muted-foreground mt-1">Since 2010</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">650mm</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Max Diameter</div>
              <div className="text-sm text-muted-foreground mt-1">Large-scale turning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Quality Inspection
              </div>
              <div className="text-sm text-muted-foreground mt-1">Every component</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">ISO</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                9001:2015 Certified
              </div>
              <div className="text-sm text-muted-foreground mt-1">ICS Reg. RQ91/6769</div>
            </div>
          </div>
        </div>
      </section>

  {/* Light section */}
  <section className="py-10 px-2 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">Our core capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering precision manufacturing solutions with uncompromising quality and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">High-Precision CNC Turning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized in large-diameter turning up to 650mm with exceptional accuracy and surface finish
                      quality for complex components.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      ISO 9001:2015 certified processes with 100% job inspection ensuring every component meets the
                      highest quality standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-primary rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Trusted Partnership</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Over a decade of reliable service to domestic clients with a commitment to excellence and
                      long-term business relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full"></div>
                </div>
                <p className="text-muted-foreground">CNC Manufacturing Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to start your project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our team to discuss your precision manufacturing needs and discover how we can bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/90 transition-all hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
