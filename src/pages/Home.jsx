
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // Animated Hero Section only
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-100 overflow-hidden flex-1">
      {/* Animated Background Circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute rounded-full bg-blue-400 w-[600px] h-[600px] -top-40 -left-40 z-0"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute rounded-full bg-indigo-400 w-[400px] h-[400px] -bottom-32 -right-32 z-0"
      />
      {/* Hero Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Precision Engineering for a Modern World
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Ambika Precision Works delivers world-class CNC machining and engineering solutions, trusted by industry leaders since 1995.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
}
