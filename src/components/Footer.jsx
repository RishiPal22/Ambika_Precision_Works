
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-200 pt-10 pb-4 px-4 md:px-0">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-700 pb-8">
				{/* Logo & Description */}
				<div className="flex-1">
					<h2 className="text-2xl font-bold text-white mb-2 tracking-wide">Ambika Precision Works</h2>
					<p className="text-gray-400 max-w-xs text-sm">Delivering excellence in CNC machining and precision engineering since 1995.</p>
				</div>

				{/* Navigation Links */}
				<div className="flex flex-col md:flex-row gap-8 flex-1 justify-center">
					<div>
						<h3 className="font-semibold text-white mb-2">Company</h3>
						<ul className="space-y-1 text-sm">
							<li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
							<li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
							<li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
							<li><a href="/product" className="hover:text-blue-400 transition">Product</a></li>
							<li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-white mb-2">Contact</h3>
						<ul className="space-y-1 text-sm">
							<li>Email: <a href="mailto:info@ambikaprecision.com" className="hover:text-blue-400 transition">info@ambikaprecision.com</a></li>
							<li>Phone: <a href="tel:+911234567890" className="hover:text-blue-400 transition">+91 12345 67890</a></li>
							<li>Location: Delhi, India</li>
						</ul>
					</div>
				</div>

				{/* Social Icons */}
				<div className="flex flex-1 flex-col items-start md:items-end gap-3">
					<h3 className="font-semibold text-white mb-2">Follow Us</h3>
					<div className="flex gap-4">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition">
							<FaFacebookF size={18} />
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition">
							<FaInstagram size={18} />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition">
							<FaLinkedinIn size={18} />
						</a>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500">
				<span>&copy; {new Date().getFullYear()} Ambika Precision Works. All rights reserved.</span>
				<span>Made with <span className="text-red-500">&#10084;</span> in India</span>
			</div>
		</footer>
	);
};

export default Footer;
