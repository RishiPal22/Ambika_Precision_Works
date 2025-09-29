import React from "react"
const Services = () => {
  const services = [
    {
      title: "CNC Milling",
      description:
        "High-precision milling services for complex geometries and tight tolerances. From prototypes to production runs.",
      features: ["3-axis & 5-axis capabilities", '±0.001" tolerance', "Various materials"],
    },
    {
      title: "CNC Turning",
      description:
        "Advanced turning operations for cylindrical parts with exceptional surface finish and dimensional accuracy.",
      features: ["Live tooling capabilities", "Swiss-type precision", "High-volume production"],
    },
    {
      title: "Wire EDM",
      description: "Electrical discharge machining for intricate cuts and complex shapes in hardened materials.",
      features: ['0.0001" precision', "No mechanical stress", "Complex geometries"],
    },
    {
      title: "Surface Grinding",
      description: "Precision surface grinding for flat surfaces, achieving superior finish and dimensional control.",
      features: ["Mirror finish capability", "Large part capacity", "Tight flatness specs"],
    },
    {
      title: "Quality Inspection",
      description: "Comprehensive quality control using advanced metrology equipment and certified processes.",
      features: ["CMM inspection", "ISO 9001 certified", "Full documentation"],
    },
    {
      title: "Rapid Prototyping",
      description: "Fast-track prototyping services to accelerate your product development cycle.",
      features: ["24-48 hour turnaround", "Design optimization", "Material selection"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ambika Precision Works offers comprehensive CNC machining services with over a decade of experience in
              high-precision manufacturing solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-lg text-gray-600">
              Delivering precision manufacturing with state-of-the-art equipment and certified processes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">±0.0001"</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Tolerance Capability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">650mm</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Max Diameter</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ISO 9001</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Quality Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Job Inspection</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your precision machining requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Quote
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
