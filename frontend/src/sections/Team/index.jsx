import React from "react";
import { motion } from "framer-motion";
import "./team.css";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaShareAlt,
} from "react-icons/fa";

import team1 from "../../assets/img/testimonials/testimonials-1.jpg";
import team2 from "../../assets/img/testimonials/testimonials-2.jpg";
import team3 from "../../assets/img/testimonials/testimonials-3.jpg";
import team4 from "../../assets/img/testimonials/testimonials-4.jpg";

const teamMembers = [
	{ id: 1, name: "Henry", role: "Software Developer", img: team1 },
	{ id: 2, name: "Jemes Born", role: "Full-Stack Developer", img: team2 },
	{ id: 3, name: "Martin Hill", role: "Data Scientist", img: team3 },
	{ id: 4, name: "Adam Smith", role: "Machine Learning Engineer", img: team4 },
];

// Animation Variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.3 }, // Staggers child animations
	},
};

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Team = () => {
	return (
		<section id='team'>
			<div className='container-fluid team py-6 mb-10'>
				<div className='container'>
					{/* Heading Animation */}
					<motion.div
						className='text-center !mt-[150px]'
						variants={fadeInUp}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}>
						<small className='d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3'>
							Our Team
						</small>
						<h1 className='display-5 mb-5'>We have an experienced Tech Team</h1>
					</motion.div>

					{/* Team Members - Staggered Animation */}
					<motion.div
						className='row g-4'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}>
						{teamMembers.map((member) => (
							<motion.div
								key={member.id}
								className='col-lg-3 col-md-6'
								variants={scaleIn}>
								<div className='team-item rounded-full'>
									{/* Image Hover Effect */}
									<motion.img
										className='img-fluid rounded-full'
										src={member.img}
										alt=''
										whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
									/>
									<div className='team-content text-center py-3 bg-dark rounded-bottom'>
										<h4 className='text-primary'>{member.name}</h4>
										<p className='text-white mb-0'>{member.role}</p>
									</div>

									{/* Social Media Icons */}
									<div className='team-icon d-flex flex-column justify-content-center m-4'>
										<a
											className='share btn btn-primary btn-md-square rounded-full mb-2'
											href=''>
											<FaShareAlt />
										</a>
										<a
											className='share-link btn btn-primary btn-md-square rounded-circle mb-2'
											href=''>
											<FaFacebookF />
										</a>
										<a
											className='share-link btn btn-primary btn-md-square rounded-circle mb-2'
											href=''>
											<FaTwitter />
										</a>
										<a
											className='share-link btn btn-primary btn-md-square rounded-circle mb-2'
											href=''>
											<FaInstagram />
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Team;
