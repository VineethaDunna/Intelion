import React from "react";
import { motion } from "framer-motion";
import "./price.css";

const plans = [
	{
		title: "Starter AI",
		price: "$10 / month",
		features: [
			"Basic AI Features",
			"Community Support",
			"Limited Data Insights",
			"AI-Powered Recommendations",
			"Access to AI Learning Hub",
			"Monthly Performance Reports",
		],
	},
	{
		title: "AI Pro Suite",
		price: "$50 / month",
		features: [
			"Advanced Machine Learning",
			"Premium Support",
			"In-Depth Analytics",
			"Customizable AI Workflows",
			"Priority Feature Requests",
			"Data Encryption & Security",
			"Early Access to Beta Features",
		],
		featured: true,
	},
	{
		title: "Enterprise AI Hub",
		price: "$120 / month",
		features: [
			"Full AI Capabilities",
			"Dedicated Account Manager",
			"API & Custom Integration",
			"Enterprise-Level Security",
			"24/7 Technical Assistance",
			"Unlimited AI Model Training",
			"On-Demand AI Consultation",
		],
	},
];

const cardVariants = {
	hidden: { opacity: 0, x: -50, scale: 0.8 },
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Pricing = () => {
	return (
		<section
			id='pricing'
			className='pricing section!mt-[150px] section-bg dark-background mt-10 mb-10'>
			<div className='container text-center section-title' data-aos='fade-up'>
				<h2
					className='visible mb-10 text-[30px] text-[#] font-bold'
					style={{ color: "black" }}>
					Pricing
				</h2>
				<p className='mb-10 text-[20px]'>
					Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
					consectetur velit
				</p>
			</div>

			<div className='container mt-10'>
				<div className='row'>
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							className={`col-lg-4 ${plan.featured ? "featured" : ""}`}
							data-aos='zoom-in'
							data-aos-delay={(index + 1) * 100}>
							<motion.div
								className='pricing-item'
								variants={cardVariants}
								initial='hidden'
								animate='visible'
								transition={{ delay: plan.delay }}
								whileHover={{ scale: 1.1, y: -10, zIndex: 10 }}>
								<h3>{plan.title}</h3>
								<h4>{plan.price}</h4>
								<ul>
									{plan.features.map((feature, i) => (
										<li key={i}>
											<i className='bi bi-check'></i> <span>{feature}</span>
										</li>
									))}
									{plan.excluded?.map((feature, i) => (
										<li key={i} className='na'>
											<i className='bi bi-x'></i> <span>{feature}</span>
										</li>
									))}
								</ul>
								<div className='text-center'>
									<a href='#' className='buy-btn'>
										Buy Now
									</a>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
