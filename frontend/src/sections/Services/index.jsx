import { motion } from "framer-motion";
import {
	FaCode,
	FaBuilding,
	FaCloud,
	FaLaptopCode,
	FaShieldAlt,
	FaRobot,
	FaMobileAlt,
	FaPaintBrush,
} from "react-icons/fa";
import "./services.css";

const services = [
	{
		icon: <FaCode size={50} />,
		title: "Custom Web Development",
		desc: "Build responsive, scalable, and high-performance web applications.",
	},
	{
		icon: <FaBuilding size={50} />,
		title: "Enterprise Software Solutions",
		desc: "Enhance workflow automation with enterprise-grade solutions.",
	},
	{
		icon: <FaCloud size={50} />,
		title: "Cloud Computing & DevOps",
		desc: "Leverage cloud platforms for scalability and security.",
	},
	{
		icon: <FaLaptopCode size={50} />,
		title: "Full-Stack Development",
		desc: "Master frontend & backend technologies for complete web solutions.",
	},
	{
		icon: <FaShieldAlt size={50} />,
		title: "Cybersecurity Solutions",
		desc: "Protect digital assets with advanced security measures.",
	},
	{
		icon: <FaRobot size={50} />,
		title: "AI & Machine Learning",
		desc: "Integrate AI & ML for smarter decision-making and automation.",
	},
	{
		icon: <FaMobileAlt size={50} />,
		title: "Mobile App Development",
		desc: "Create high-performance mobile applications for Android & iOS.",
	},
	{
		icon: <FaPaintBrush size={50} />,
		title: "UI/UX Design & Prototyping",
		desc: "Design engaging, user-friendly interfaces for better experiences.",
	},
];

const Services = () => {
	return (
		<section className='services-section' id='services'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='section-title !mt-[80px]'>
					<span className='badge'>Our Services</span>
					<h2>What We Deliver</h2>
				</motion.div>
				<div className='services-grid'>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className='service-item group'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2, duration: 0.6 }}
							viewport={{ once: true }}>
							<div className='service-bg'></div>
							<div className='service-content'>
								<div className='icon'>{service.icon}</div>
								<h4>{service.title}</h4>
								<p>{service.desc}</p>
								<motion.button
									className='learn-more-btn'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									Learn More
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
