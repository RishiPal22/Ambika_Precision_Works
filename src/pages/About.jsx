import React, { useState } from "react";
import { Award, Shield, Users, CheckCircle, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import isoCertificate from "../assets/iso-certificate.jpg"; // Adjust extension if needed

const highlights = [
	{
		icon: <Award className="w-8 h-8 text-blue-500" />,
		title: "ISO 9001:2015 Certified",
		desc: "Internationally recognized quality management for every project.",
		badge: "Certified",
		color: "from-blue-500 to-purple-500",
	},
	{
		icon: <Shield className="w-8 h-8 text-green-500" />,
		title: "100% Quality Inspection",
		desc: "Rigorous testing and inspection for zero-defect delivery.",
		badge: "Zero Defect",
		color: "from-green-500 to-teal-500",
	},
	{
		icon: <Users className="w-8 h-8 text-cyan-500" />,
		title: "Expert Team",
		desc: "Skilled engineers with decades of combined experience.",
		badge: "15+ Years",
		color: "from-cyan-500 to-blue-400",
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2, duration: 0.7, type: "spring" },
	}),
};

const About = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
			}}
			className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden"
		>
			{/* Decorative background with animated pulse */}
			<motion.div
				initial={{ scale: 0.9, opacity: 0.1 }}
				animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
				transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
				className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl pointer-events-none"
			/>
			<motion.div
				initial={{ scale: 0.9, opacity: 0.1 }}
				animate={{ scale: [1, 1.07, 1], opacity: [0.1, 0.18, 0.1] }}
				transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
				className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl pointer-events-none"
			/>

			{/* Modal for ISO Certificate */}
			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					{/* Blurred, gradient overlay */}
					<div
						className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/60 to-purple-100/80 backdrop-blur-2xl transition-all duration-300"
						onClick={() => setShowModal(false)}
					/>
					{/* Modal content with glassmorphism and animation */}
					<motion.div
						initial={{ scale: 0.85, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.85, opacity: 0 }}
						transition={{ type: "spring", stiffness: 260, damping: 20 }}
						className="relative z-10 bg-white/80 backdrop-blur-xl border-2 border-blue-400/30 shadow-2xl rounded-3xl p-0 flex flex-col items-center max-w-2xl w-full mx-4"
						style={{
							boxShadow: "0 12px 48px 0 rgba(60, 80, 180, 0.18)",
							border: "2px solid rgba(60, 80, 180, 0.18)",
						}}
					>
						{/* Floating Close Button */}
						<button
							onClick={() => setShowModal(false)}
							className="absolute -top-6 right-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all border-4 border-white"
							aria-label="Close"
						>
							<X className="w-6 h-6" />
						</button>
						<div className="flex flex-col items-center w-full p-8">
							<img
								src={isoCertificate}
								alt="ISO 9001:2015 Certificate"
								className="rounded-xl shadow-xl border-4 border-blue-100 max-h-[70vh] w-auto object-contain bg-white"
							/>
							<div className="mt-6 text-xl font-bold text-blue-900 drop-shadow text-center">
								ISO 9001:2015 Certificate
							</div>
							<div className="text-sm text-slate-600 mt-1 text-center">
								ICS Reg. No. RQ91/6769
							</div>
						</div>
					</motion.div>
				</div>
			)}

			<div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
				{/* Header */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0}
					className="text-center mb-16"
				>
					<motion.div
						whileHover={{ scale: 1.05, boxShadow: "0 0 24px #6366f1" }}
						className="inline-flex items-center px-6 py-3 bg-blue-500/10 rounded-full text-blue-700 text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-200/50"
					>
						<Sparkles className="w-4 h-4 mr-2" />
						<a href="#company-overview "className="hover:underline focus:outline-none">About Ambika Precision Works</a>
					</motion.div>
					<motion.h1
						variants={fadeUp}
						custom={1}
						className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight"
					>
						Precision Engineering
						<span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
							With Trusted Excellence
						</span>
					</motion.h1>
					
				</motion.div>

				{/* Highlights Grid */}
				<motion.div
					className="grid md:grid-cols-3 gap-8 mb-16"
					initial="hidden"
					animate="visible"
					variants={{
						visible: { transition: { staggerChildren: 0.2 } },
					}}
				>
					{highlights.map((item, idx) => (
						<motion.div
							key={item.title}
							variants={fadeUp}
							custom={idx}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 32px #6366f1",
								y: -8,
							}}
							className={`bg-gradient-to-br ${item.color} rounded-2xl shadow-lg p-8 text-center relative transition-all duration-300`}
						>
							<motion.div
								whileHover={{ rotate: 12 }}
								className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30"
							>
								{item.icon}
							</motion.div>
							<h3 className="text-xl font-bold text-white mb-2">
								{item.title}
							</h3>
							<p className="text-white/80 mb-4">{item.desc}</p>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className="absolute top-6 right-6 bg-white/90 text-blue-700 font-bold px-4 py-1 rounded-full text-xs shadow"
							>
								{item.badge}
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				{/* Company Overview & Certification */}
				<motion.div
					className="grid md:grid-cols-2 gap-12 mb-16"
					initial="hidden"
					animate="visible"
					id="company-overview"
					variants={{
						visible: { transition: { staggerChildren: 0.3 } },
					}}
				>
					<motion.div
						variants={fadeUp}
						custom={0}
						className="bg-white rounded-3xl shadow-lg p-10"
						
					>
						<h2 className="text-3xl font-bold text-slate-900 mb-6">
							Company Overview
						</h2>
						<p className="text-slate-700 leading-relaxed mb-4">
							Ambika Precision Works, established in 2010, is an ISO 9001:2015 certified company (Certified by ICS, Reg. No. RQ91/6769) specializing in high-precision CNC turning (up to 650 mm diameter) and advanced VMC machining (up to 5th axis).

We serve diverse industries including oil & gas, valves & fittings, defence, aerospace, mining, and general engineering, delivering precision-engineered components that meet global standards.

Our expertise spans a wide range of materials — steel, bronze, brass, alloys, Inconel, and more — all machined to perfection with a 100-ton monthly capacity, 100% job inspection, and a proven reputation for timely delivery and consistent quality.
						</p>
						{/* <p className="text-slate-700 leading-relaxed">
							<span className="font-semibold text-blue-700">Our Products:</span>
							{" "}
							Steel, bronze, brass, alloys, Inconel, and more—machined to
							perfection. 100-ton monthly capacity, 100% job inspection, and a
							legacy of timely delivery.
						</p> */}
					</motion.div>
					<motion.div
						variants={fadeUp}
						custom={1}
						className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl shadow-lg p-10 flex flex-col justify-center"
					>
						<div className="flex items-center mb-6">
							<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
								<Award className="w-8 h-8 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-blue-900 mb-1">
									ISO 9001:2015 Certified
								</h3>
								<div className="text-blue-700 font-semibold">
									ICS Reg. No. RQ91/6769
								</div>
							</div>
						</div>
						
						{/* View Button */}
						<button
							onClick={() => setShowModal(true)}
							className="mx-auto mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow transition-all"
						>
							View Certificate
						</button>
					</motion.div>
				</motion.div>

				{/* Commitment Section */}
				<motion.div
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					custom={0}
					className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-16 text-white shadow-xl"
				>
					<h2 className="text-3xl font-bold mb-8 text-center">Our Commitment</h2>
					<div className="grid md:grid-cols-2 gap-12">
						<motion.div variants={fadeUp} custom={1}>
							<h3 className="text-xl font-semibold mb-3">Precision Excellence</h3>
							<p className="text-white/80 leading-relaxed">
								Every component is crafted with meticulous attention to detail,
								achieving dimensional accuracy and surface finish that surpasses
								industry benchmarks.
							</p>
						</motion.div>
						<motion.div variants={fadeUp} custom={2}>
							<h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
							<p className="text-white/80 leading-relaxed">
								We collaborate closely with clients, understanding their unique needs
								and delivering solutions tailored to exact specifications and
								timelines.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default About;
