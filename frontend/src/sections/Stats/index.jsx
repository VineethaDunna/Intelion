import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSmile } from "react-icons/fa";
import { BsJournalBookmarkFill, BsHeadset } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import "./index.css";

const Counter = ({ end }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const duration = 2000;
		const increment = Math.ceil(end / (duration / 16));

		const counterInterval = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(counterInterval);
			} else {
				setCount(start);
			}
		}, 16);

		return () => clearInterval(counterInterval);
	}, [end]);

	return (
		<motion.span
			animate={{ scale: [1, 1.2, 1] }}
			transition={{ duration: 0.5 }}>
			{count}
		</motion.span>
	);
};

const Stats = () => {
	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section id='stats' className='stats section'>
			<div className='container mt-5 mb-10'>
				<motion.div
					className='row gy-4'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					{[
						{ icon: <FaSmile />, count: 232, label: "Happy Clients" },
						{ icon: <BsJournalBookmarkFill />, count: 521, label: "Projects" },
						{ icon: <BsHeadset />, count: 1463, label: "Hours Of Support" },
						{ icon: <FaPeopleGroup />, count: 15, label: "Hard Workers" },
					].map((item, index) => (
						<motion.div
							key={index}
							className='col-lg-3 col-md-6 d-flex flex-column align-items-center'
							variants={itemVariants}>
							<motion.div
								className='text-[#2d465e] z-2 text-[50px]'
								animate={{ scale: [1, 1.1, 1] }}
								transition={{
									duration: 0.6,
									repeat: Infinity,
									repeatType: "reverse",
								}}>
								{item.icon}
							</motion.div>
							<div className='stats-item'>
								<Counter end={item.count} />
								<p>{item.label}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Stats;
