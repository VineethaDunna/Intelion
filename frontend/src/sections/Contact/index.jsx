import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";

import "./contact.css";

const Contact = () => {
	return (
		<section id='contact' className='contact mb-10 section light-background'>
			<div className='container section-title'>
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					Contact Us
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className='!text-[20px]'>
					Partner with Us for Comprehensive IT Solutions. We’re happy to answer
					any questions you may have and help you determine which of our
					services best fit your needs.
				</motion.p>
			</div>

			<div className='container'>
				<div className='row g-4 g-lg-5'>
					<motion.div
						className='col-lg-5'
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<div className='info-box'>
							<h3>Contact Info</h3>
							<p>Call us at: 0612-2500-971</p>

							{[
								{
									icon: CiLocationOn,
									title: "Our Location",
									details: ["Bihar, India"],
								},
								{
									icon: MdOutlinePhone,
									title: "Phone Number",
									details: ["0612-2500-971"],
								},
								{
									icon: IoMdMailOpen,
									title: "Email Address",
									details: ["info@company.com"],
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className='info-item'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 }}>
									<div className='icon-box font-[20px]'>
										<item.icon />
									</div>
									<div className='content'>
										<h4>{item.title}</h4>
										{item.details.map((detail, i) => (
											<p key={i}>{detail}</p>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						className='col-lg-7'
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}>
						<div className='contact-form'>
							<h3>Schedule a Free Consultation</h3>
							<p>
								We’ll help you determine which of our services best fit your
								needs.
							</p>

							<form action='#' method='post' className='php-email-form'>
								<div className='row gy-4'>
									<motion.div className='col-md-6' whileFocus={{ scale: 1.05 }}>
										<input
											type='text'
											name='first-name'
											className='form-control'
											placeholder='First Name'
											required
										/>
									</motion.div>

									<motion.div className='col-md-6' whileFocus={{ scale: 1.05 }}>
										<input
											type='text'
											name='last-name'
											className='form-control'
											placeholder='Last Name'
											required
										/>
									</motion.div>

									<motion.div className='col-12' whileFocus={{ scale: 1.05 }}>
										<input
											type='text'
											name='company'
											className='form-control'
											placeholder='Company / Organization'
											required
										/>
									</motion.div>

									<motion.div className='col-12' whileFocus={{ scale: 1.05 }}>
										<input
											type='email'
											name='email'
											className='form-control'
											placeholder='Company Email'
											required
										/>
									</motion.div>

									<motion.div className='col-12' whileFocus={{ scale: 1.05 }}>
										<textarea
											name='message'
											rows='6'
											className='form-control'
											placeholder='How Can We Help You?'
											required></textarea>
									</motion.div>

									<div className='col-12 text-center'>
										<motion.button
											type='submit'
											className='btn'
											whileHover={{ scale: 1.1 }}>
											Submit
										</motion.button>
									</div>
								</div>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
