import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
import avatar1 from "../../assets/img/testimonials/testimonials-1.jpg";
import avatar2 from "../../assets/img/avatar-2.webp";
import avatar3 from "../../assets/img/avatar-3.webp";
import avatar4 from "../../assets/img/avatar-4.webp";
import avatar5 from "../../assets/img/avatar-5.webp";

const Hero = () => {
	return (
		<section id='hero' className='hero section'>
			<div className='container'>
				<div className='row align-items-center'>
					<motion.div
						className='col-lg-6'
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						<motion.div
							className='hero-content'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}>
							<div className='company-badge mb-4'>
								<i className='bi bi-gear-fill me-2'></i>
								Innovating Digital Solutions for Businesses
							</div>

							<h1 className='mb-4'>
								Empower Your <br />
								Business with <br />
								<span className='accent-text'>Intellion</span>
							</h1>

							<p className='mb-4 mb-md-5'>
								Intellion delivers world-class technology solutions, from
								AI-driven automation to cloud-based enterprise services. We help
								businesses scale, optimize operations, and drive innovation with
								robust digital transformation strategies. Our expertise ensures
								seamless integration, security, and efficiency for businesses of
								all sizes.
							</p>

							<div className='hero-buttons'>
								<motion.a
									href='#about'
									className='btn btn-primary me-0 me-sm-2 mx-1'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									Get Started
								</motion.a>
								<motion.a
									href='https://youtu.be/ooc07OyCQDI?si=uQWCmKw2dSFL3DU4'
									target='_blank'
									className='btn btn-link mt-2 mt-sm-0 glightbox'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									<i className='bi bi-play-circle me-1'></i>
									Play Video
								</motion.a>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						className='col-lg-6'
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						<motion.div
							className='hero-image'
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}>
							<img
								src='https://themewagon.github.io/iLanding/assets/img/illustration-1.webp'
								alt='Hero Image'
								className='img-fluid'
							/>

							<motion.div
								className='customers-badge'
								initial={{ y: 10 }}
								animate={{ y: -10 }}
								transition={{
									repeat: Infinity,
									duration: 2,
									repeatType: "reverse",
								}}>
								<div className='customer-avatars'>
									<img src={avatar1} alt='Customer 1' className='avatar' />
									<img src={avatar2} alt='Customer 2' className='avatar' />
									<img src={avatar3} alt='Customer 3' className='avatar' />
									<img src={avatar4} alt='Customer 4' className='avatar' />
									<img src={avatar5} alt='Customer 5' className='avatar' />
									<span className='avatar more'>12+</span>
								</div>
								<p className='mb-0 mt-2'>
									Trusted by 12,000+ businesses worldwide to accelerate growth.
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
