import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Product from "./Pages/Product";

export default function App() {
  return (
    <Router>
        {/* Navbar (fixed at top) */}
        
        <Navbar />

        {/* Page Content */}
        <main className="pt-24 max-w-7xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    </Router>
  );
}
