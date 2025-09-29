import React from "react";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Ambika Precision Works</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Established in 2010, an ISO 9001:2015 certified company by ICS (Reg. No. RQ91/6769), Ambika Precision Works has been a trusted name in high-precision CNC turning and VMC (up to 5th axis) solutions for over a decade. We specialize in large-diameter CNC turning up to 650 mm, consistently delivering excellence to our domestic clients with a firm commitment to 100% job inspection and quality assurance.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Company Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Established in 2010, Ambika Precision Works is an ISO 9001:2015 certified company by ICS with Reg. No. RQ91/6769. For over a decade, we have been a trusted name in high-precision CNC turning as well as VMC (up to 5th axis) solutions. Specializing in large-diameter CNC turning up to 650 mm since our inception, we have consistently delivered excellence to our domestic clients with a firm commitment to 100% job inspection and quality assurance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Our Products:</span> We deliver high-accuracy CNC/VMC machined parts in steel, bronze, brass, metal alloys, Inconel, and more. Our portfolio includes machining parts for oil and gas, valves and fittings, defence, aerospace, and general engineering components. With a 100-ton monthly machining capacity, we are committed to quality and timely delivery for every project.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-blue-600">14+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Years of Experience</h3>
            <p className="text-gray-600">Serving clients since 2010 with consistent quality</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-green-600">650mm</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Diameter Capacity</h3>
            <p className="text-gray-600">Specialized in large-diameter CNC turning</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-purple-600">100%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Inspection</h3>
            <p className="text-gray-600">Every job undergoes complete quality assurance</p>
          </div>
        </div>

        {/* Certification & Quality */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certification & Quality Standards</h2>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">ISO</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-gray-700 leading-relaxed">
                Certified by ICS with Registration No. RQ91/6769, ensuring our processes meet international quality management standards. Our commitment to quality is reflected in our systematic approach to continuous improvement and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Precision Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Every component is manufactured with meticulous attention to detail, ensuring dimensional accuracy and surface finish quality that exceeds industry standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                We work closely with our domestic clients to understand their specific requirements and deliver solutions that meet their exact specifications and timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
