import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import { init } from '@emailjs/browser';
import ScrollToTop from "./components/ScrollToTop";


init("8camyyLwv9hs5-Hj4");

export default function App() {
  // Keep in sync with Navbar.jsx
  const NAVBAR_HEIGHT = 64; // px (h-16)
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        {/* Use inline style to match navbar height for top padding */}
        <main
          className="flex-1 w-full py-4"
          style={{ paddingTop: NAVBAR_HEIGHT }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
