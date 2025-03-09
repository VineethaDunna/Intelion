import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import c1 from "../../assets/img/testimonials/testimonials-1.jpg";
import c2 from "../../assets/img/avatar-2.webp";
import c3 from "../../assets/img/avatar-3.webp";
import c4 from "../../assets/img/avatar-4.webp";

import "./test.css";

const testimonials = [
	{
		name: "John Doe",
		role: "Software Engineer",
		img: c1,
		feedback:
			"Exceptional service! The team was professional and delivered beyond my expectations.",
	},
	{
		name: "Emily Smith",
		role: "Marketing Specialist",
		img: c2,
		feedback:
			"Highly recommend! Their expertise helped boost our brand’s visibility significantly.",
	},
	{
		name: "Michael Brown",
		role: "Entrepreneur",
		img: c3,
		feedback:
			"Amazing experience! Their innovative approach helped grow my business significantly.",
	},
	{
		name: "Sophia Wilson",
		role: "Graphic Designer",
		img: c4,
		feedback:
			"Their creativity and dedication brought my vision to life. Truly grateful!",
	},
];

const responsive = {
	superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
	desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
	tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
	mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Testimonial = () => {
	return (
		<div className='testimonial-section'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center'>
					<small className='testimonial-title'>Testimonials</small>
					<h1 className='testimonial-heading'>What Our Happy Clients Say!</h1>
				</motion.div>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={3000}
					arrows={false}
					showDots={true}
					className='testimonial-carousel flex gap-3'>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className='testimonial-card'>
							<div className='testimonial-content'>
								<img
									src={testimonial.img}
									alt={testimonial.name}
									className='testimonial-img'
								/>
								<h4>{testimonial.name}</h4>
								<p className='testimonial-role'>{testimonial.role}</p>
								<div className='testimonial-stars'>
									{[...Array(5)].map((_, i) => (
										<i key={i} className='fas fa-star'></i>
									))}
								</div>
								<p className='testimonial-feedback'>{testimonial.feedback}</p>
							</div>
						</motion.div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonial;
