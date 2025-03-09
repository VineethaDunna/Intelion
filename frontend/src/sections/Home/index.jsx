import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Stats from "../Stats";
import Clients from "../Clients";
import Team from "../Team";
import Testimonial from "../Testimonials";
import Pricing from "../Pricing";
import Portfolio from "../Portfolio";
import FAQSection from "../Faq";
import Contact from "../Contact";
import Footer from "../Footer";
import About from "../About";
import Services from "../Services";
import BlogSection from "../UpdateNews";
import EventsSection from "../Upcoming";

// Animation Variants
const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
	return (
		<>
			<Navbar />

			{/* Hero Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Hero />
			</motion.section>

			{/* Clients Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Clients />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<About />
			</motion.section>

			{/* Stats Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Stats />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Services />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<BlogSection />
			</motion.section>
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<EventsSection />
			</motion.section>

			{/* Team Section */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Team />
			</motion.section>

			{/* Testimonial Section (Uncomment if needed) */}
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Testimonial />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Pricing />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Portfolio />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<FAQSection />
			</motion.section>

			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Contact />
			</motion.section>
			<motion.section
				initial='hidden'
				whileInView='visible'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.2 }}>
				<Footer />
			</motion.section>
		</>
	);
};

export default Home;
