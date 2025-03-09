import { motion } from "framer-motion";
import { BsCheckCircleFill, BsTelephoneFill } from "react-icons/bs";
import profileImg from "../../assets/img/avatar-1.webp";
import aboutMainImg from "../../assets/img/about-5.webp";
import aboutSmallImg from "../../assets/img/about-2.webp";
import "./about.css";

const About = () => {
	return (
		<section id='about' className='about section '>
			<div className='container' data-aos='fade-up'>
				<div className='row gy-4  align-items-center justify-content-between'>
					<motion.div
						className='col-xl-5 !mt-[150px]'
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<span className='about-meta'>MORE ABOUT INTELLION</span>
						<h2 className='about-title'>
							Innovating the Future with Intelligence
						</h2>
						<p className='about-description'>
							At Intellion, we harness the power of cutting-edge technology to
							drive innovation and create intelligent solutions for businesses
							worldwide.
						</p>

						<div className='row feature-list-wrapper'>
							<div className='col-md-6'>
								<ul className='feature-list'>
									{[
										"AI & Machine Learning Solutions",
										"Cloud Computing & DevOps",
										"Custom Software Development",
									].map((item, index) => (
										<li key={index}>
											<BsCheckCircleFill /> {item}
										</li>
									))}
								</ul>
							</div>
							<div className='col-md-6'>
								<ul className='feature-list'>
									{[
										"Cybersecurity & Compliance",
										"Data Analytics & Business Intelligence",
										"Enterprise Software Solutions",
									].map((item, index) => (
										<li key={index}>
											<BsCheckCircleFill /> {item}
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className='info-wrapper'>
							<div className='row gy-4'>
								<div className='col-lg-5'>
									<div className='profile d-flex align-items-center gap-3'>
										<img
											src={profileImg}
											alt='CEO Profile'
											className='profile-image'
										/>
										<div>
											<h4 className='profile-name'>John Doe</h4>
											<p className='profile-position'>CEO & Founder</p>
										</div>
									</div>
								</div>
								<div className='col-lg-7'>
									<div className='contact-info d-flex align-items-center gap-2'>
										<BsTelephoneFill />
										<div>
											<p className='contact-label'>Call us anytime</p>
											<p className='contact-number'>+123 456-789</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						className='col-xl-6'
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<div className='image-wrapper'>
							<motion.div
								className='images position-relative'
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.6 }}>
								<img
									src={aboutMainImg}
									alt='Innovation Hub'
									className='img-fluid main-image rounded-4'
								/>
								<img
									src={aboutSmallImg}
									alt='Tech Team'
									className='img-fluid small-image rounded-4'
								/>
							</motion.div>
							<motion.div
								className='experience-badge floating'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}>
								<h3>
									15+ <span>Years</span>
								</h3>
								<p>Of pioneering intelligent solutions</p>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
