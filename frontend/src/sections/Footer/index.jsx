import { motion } from "framer-motion";
import "./footer.css";

import { IoMdMailOpen } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const socialIcons = [
	{ icon: IoMdMailOpen, link: "mailto:connect@intellion.com" },
	{ icon: FaFacebookF, link: "#facebook" },
	{ icon: FaInstagram, link: "#instagram" },
	{ icon: BsLinkedin, link: "#linkedin" },
	{ icon: FaTwitter, link: "#twitter" },
	{ icon: FaGithub, link: "#github" },
];

const Footer = () => {
	return (
		<footer id='footer' className='footer dark-background'>
			<motion.div
				className='container footer-top'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<div className='row gy-4'>
					<div className='col-lg-4 col-md-6 footer-about'>
						<a href='index.html' className='logo d-flex align-items-center'>
							<span className='sitename'>Intellion</span>
						</a>
						<div className='footer-contact pt-3'>
							<p>R-7 Street, Yamuna Nagar</p>
							<p>Haryana 135001</p>
							<p className='mt-3'>
								<strong>Phone:</strong> <span>0612-2500-971</span>
							</p>
							<p>
								<strong>Email:</strong> <span>connect@intellion.com</span>
							</p>
						</div>
						<div className='social-links d-flex mt-4'>
							{socialIcons.map(({ icon: Icon, link }, index) => (
								<motion.a
									key={index}
									href={link}
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 300 }}>
									<Icon />
								</motion.a>
							))}
						</div>
					</div>

					<div className='col-lg-2 col-md-3 footer-links'>
						<h4>Company</h4>
						<ul>
							{[
								"Events",
								"Why us",
								"Team",
								"Careers",
								"Partners & Certifications",
							].map((link, index) => (
								<li key={index}>
									<a href='#'>{link}</a>
								</li>
							))}
						</ul>
					</div>

					<div className='col-lg-2 col-md-3 footer-links'>
						<h4>Solutions</h4>
						<ul>
							{[
								"Digital Strategy & Design",
								"Cloud & Infrastructure",
								"Generative AI & BI",
								"ERP Solutions",
							].map((service, index) => (
								<li key={index}>
									<a href='#'>{service}</a>
								</li>
							))}
						</ul>
					</div>

					<div className='col-lg-4 col-md-12 footer-newsletter'>
						<h4>Don’t miss out on updates</h4>
						<p>
							I agree to the Privacy Policy and give my permission to process my
							personal data for the purposes specified in the Privacy Policy.
						</p>
						<motion.form
							action='forms/newsletter.php'
							method='post'
							className='php-email-form'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}>
							<div className='newsletter-form'>
								<input type='email' name='email' placeholder='Your Email' />
								<input type='submit' value='Subscribe' />
							</div>
						</motion.form>
					</div>
				</div>
			</motion.div>

			<div className='container copyright text-center mt-4'>
				<p>
					© 2025 <strong className='px-1 sitename'>Intellion</strong> All Rights
					Reserved
				</p>
				<div className='credits'>
					<a href='#'>Terms & Conditions</a> | <a href='#'>Privacy Policy</a> |{" "}
					<a href='#'>Refund & Cancellation Policy</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
