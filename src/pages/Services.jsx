import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "CNC Milling",
      description:
        "High-precision milling services for complex geometries and tight tolerances. From prototypes to production runs.",
      features: ["3-axis & 5-axis capabilities", '±0.001" tolerance', "Various materials"],
      image: "/cnc-milling-machine-in-operation.jpg",
    },
    {
      title: "CNC Turning",
      description:
        "Advanced turning operations for cylindrical parts with exceptional surface finish and dimensional accuracy.",
      features: ["Live tooling capabilities", "Swiss-type precision", "High-volume production"],
      image: "/cnc-lathe-turning-operation.jpg",
    },
    {
      title: "Wire EDM",
      description: "Electrical discharge machining for intricate cuts and complex shapes in hardened materials.",
      features: ['0.0001" precision', "No mechanical stress", "Complex geometries"],
      image: "/wire-edm-machine-cutting-metal.jpg",
    },
    {
      title: "Surface Grinding",
      description: "Precision surface grinding for flat surfaces, achieving superior finish and dimensional control.",
      features: ["Mirror finish capability", "Large part capacity", "Tight flatness specs"],
      image: "/surface-grinding-machine-operation.jpg",
    },
    {
      title: "Quality Inspection",
      description: "Comprehensive quality control using advanced metrology equipment and certified processes.",
      features: ["CMM inspection", "ISO 9001 certified", "Full documentation"],
      image: "/cmm-coordinate-measuring-machine.jpg",
    },
    {
      title: "Rapid Prototyping",
      description: "Fast-track prototyping services to accelerate your product development cycle.",
      features: ["24-48 hour turnaround", "Design optimization", "Material selection"],
      image: "/cnc-machined-prototype-parts.jpg",
    },
  ]

  const capabilities = [
    { metric: '±0.0001"', label: "Tolerance Capability" },
    { metric: "50+", label: "Years Experience" },
    { metric: "24/7", label: "Production Schedule" },
    { metric: "ISO 9001", label: "Quality Certified" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance">
              Precision
              <span className="block text-primary">Manufacturing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Advanced CNC machining services delivering exceptional quality and precision for your most demanding
              projects.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {capabilities.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Manufacturing
              <span className="block text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive machining solutions backed by state-of-the-art equipment and decades of expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Streamlined
              <span className="block text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, our proven workflow ensures quality results on time, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Review specifications and requirements" },
              { step: "02", title: "Planning", desc: "Develop manufacturing strategy and timeline" },
              { step: "03", title: "Production", desc: "Execute with precision using advanced equipment" },
              { step: "04", title: "Quality Control", desc: "Comprehensive inspection and certification" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start
            <span className="block text-primary">Your Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a quote for your precision machining needs. Our team is ready to discuss your requirements and provide
            expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Request Quote
            </button>
            </Link>
            
            <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
