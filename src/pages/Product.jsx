import React from 'react' 
import { useState } from "react"
import { useLocation } from "react-router-dom";
// Oil & Gas
import hammerUnions from "../assets/oil-gas/hammer union.jpg";
import pupJoints from "../assets/oil-gas/pup joint.jpg";
import ChokeValves2 from "../assets/oil-gas/Choke Valves2.jpg";
import crossover from "../assets/oil-gas/cross over.webp";
import swivelJoints from "../assets/oil-gas/swivel-joint-1.jpg";
import ringJointGaskets from "../assets/oil-gas/Ring-Joint-Gasket.avif";

// Valves & Fittings
import gateValves from "../assets/valves/gate-valve.jpg";
import globeValves from "../assets/valves/globevalve.png";
import ballValves from "../assets/valves/ball valves.jpg";
import butterflyValves from "../assets/valves/valve_butterfly.jpg";
import flanges from "../assets/valves/Flanges.jpg";
// import couplings from "../assets/valves/couplings.png";

// Defefnce
// import defense1 from "../assets/defence/defense1.jpg";
// import defense2 from "../assets/defence/defense2.jpg";



const Product = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialFilter = params.get("filter") || "All";
  
  const [activeFilter, setActiveFilter] = useState(initialFilter)
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Oil & Gas", "Valves & Fittings", "Defence", "Aerospace", "Mining", "General Engineering"]

  const products = [
  {
    id: 10,
    name: "Hammer Unions",
    category: "Oil & Gas",
    description: "High-pressure hammer unions for reliable oilfield connections",
    image: hammerUnions,
    specifications: "Pressure Rating: Up to 15,000 PSI | Size: 2-10 inches",
  },
  {
    id: 9,
    name: "Choke Valves",
    category: "Oil & Gas",
    description: "Hiigh-performance choke valves designed for precise flow control in oil and gas applications",
    image: ChokeValves2,
    specifications: "Pressure Rating: Up to 10,000 PSI | Material: Forged Steel or Stainless Steel",
  },
  {
    id: 11,
    name: "Pup Joints",
    category: "Oil & Gas",
    description: "Integral pup joints designed for durability in drilling operations",
    image: pupJoints,
    specifications: "Length: 2-10 ft | Material: Alloy Steel",
  },
  {
    id: 12,
    name: "Crossover",
    category: "Oil & Gas",
    description: "Crossovers used to connect different sizes of drilling equipment",
    image: crossover,
    specifications: "Custom Sizes Available | API Certified",
  },
  {
    id: 13,
    name: "Swivel Joints",
    category: "Oil & Gas",
    description: "Rotational swivel joints for fluid transfer under pressure",
    image: swivelJoints,
    specifications: "Pressure Rating: 6,000 PSI | Rotation: 360°",
  },
  {
    id: 14,
    name: "Ring Joint Gaskets",
    category: "Oil & Gas",
    description: "Metal ring joint gaskets for high-pressure pipeline sealing",
    image: ringJointGaskets,
    specifications: "Standard: API 6A | Materials: Soft Iron, Stainless Steel",
  },

  // ---------------- Valves & Fittings ----------------
  {
    id: 15,
    name: "Gate Valves",
    category: "Valves & Fittings",
    description: "Industrial gate valves for fluid shut-off applications",
    image: gateValves,
    specifications: "Pressure Class: 150-2500 | Material: WCB/SS",
  },
  {
    id: 16,
    name: "Globe Valves",
    category: "Valves & Fittings",
    description: "Globe valves for regulating fluid flow in pipelines",
    image: globeValves,
    specifications: "Size: ½” – 24” | Material: Cast Steel, Stainless Steel",
  },
  {
    id: 17,
    name: "Ball Valves",
    category: "Valves & Fittings",
    description: "Durable ball valves for reliable shut-off in piping systems",
    image: ballValves,
    specifications: "Pressure Rating: PN16 – PN420 | Type: Floating/Trunnion",
  },
  {
    id: 18,
    name: "Butterfly Valves",
    category: "Valves & Fittings",
    description: "Compact butterfly valves for throttling and shut-off",
    image: butterflyValves,
    specifications: "Disc Material: SS/CI | Operation: Manual/Gear/Pneumatic",
  },
 
  {
    id: 19,
    name: "Flanges (Blind, Slip-On, Weld Neck)",
    category: "Valves & Fittings",
    description: "Industrial flanges for pipe connections",
    image: flanges,
    specifications: "Standard: ANSI/ASME | Size: ½” – 48”",
  }
];



  const filteredProducts = products.filter((product) => {
    const matchesFilter = activeFilter === "All" || product.category === activeFilter
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="bg-gradient-to-b from-secondary/30 to-background pt-10 pb-10 w-full">
        <div className="w-full text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance gradient-text">Precision Products</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Discover our comprehensive range of high-precision CNC machined components serving critical industries worldwide
          </p>
        </div>
      </div>

  <div className="w-full py-10">
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md min-w-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-2 text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </div>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/20 flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    background: "white"
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground font-medium">{product.specifications}</p>
                </div>

                {/* <button className="mt-4 w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                  Request Quote
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}

  <div className="mt-16 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manufacturing Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced CNC turning solutions with precision up to 650mm diameter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-muted-foreground">Quality management system ensuring consistent excellence</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Large Diameter Turning</h3>
              <p className="text-muted-foreground">Specialized in components up to 650mm diameter</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Job Inspection</h3>
              <p className="text-muted-foreground">Comprehensive quality assurance on every component</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
