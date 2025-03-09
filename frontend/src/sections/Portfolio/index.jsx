import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";
import c1 from "../../assets/img/clients/client-1.png";
import c2 from "../../assets/img/clients/client-2.png";
import c3 from "../../assets/img/clients/client-3.png";
import c4 from "../../assets/img/clients/client-4.png";
import c5 from "../../assets/img/clients/client-5.png";
import c6 from "../../assets/img/clients/client-6.png";
import c7 from "../../assets/img/clients/client-7.png";
import c8 from "../../assets/img/clients/client-8.png";

const Portfolio = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
		});
	}, []);

	const [activeFilter, setActiveFilter] = useState("all");
	const filters = [
		"all",
		"web development",
		"app development",
		"cloud services",
		"machine learning",
		"domain services",
	];

	const projects = [
		{
			id: 1,
			img: c1,
			title: "Intellion Commerce",
			category: "web development",
			description:
				"An AI-powered e-commerce platform optimizing sales and user experience.",
			link: "#",
			delay: 200,
		},
		{
			id: 2,
			img: c2,
			title: "Intellion Portfolio",
			category: "web development",
			description:
				"A dynamic AI-assisted portfolio website for professionals and businesses.",
			link: "#",
			delay: 300,
		},
		{
			id: 3,
			img: c3,
			title: "Intellion Finance Tracker",
			category: "app development",
			description:
				"A smart expense and budget tracking app with AI-driven insights.",
			link: "#",
			delay: 200,
		},
		{
			id: 4,
			img: c4,
			title: "Intellion Fitness Coach",
			category: "app development",
			description:
				"An AI-powered fitness and workout planner with personalized recommendations.",
			link: "#",
			delay: 300,
		},
		{
			id: 5,
			img: c5,
			title: "Intellion Admin Suite",
			category: "cloud services",
			description:
				"A modern AI-driven admin dashboard for managing enterprise operations efficiently.",
			link: "#",
			delay: 200,
		},
		{
			id: 6,
			img: c6,
			title: "Intellion ChatX",
			category: "cloud services",
			description:
				"An AI-powered real-time chat application with automated responses and smart suggestions.",
			link: "#",
			delay: 300,
		},
		{
			id: 7,
			img: c8,
			title: "Intellion AI Vision",
			category: "machine learning",
			description:
				"An advanced computer vision system for object recognition and analysis.",
			link: "#",
			delay: 200,
		},
		{
			id: 8,
			img: c8,
			title: "Intellion PredictX",
			category: "machine learning",
			description:
				"A predictive analytics platform using AI models to forecast trends and risks.",
			link: "#",
			delay: 300,
		},
		{
			id: 9,
			img: c7,
			title: "Intellion API Hub",
			category: "domain services",
			description:
				"A scalable and secure RESTful API service for seamless integrations.",
			link: "#",
			delay: 200,
		},
		{
			id: 10,
			img: c1,
			title: "Intellion SecureAuth",
			category: "domain services",
			description:
				"An AI-enhanced authentication system with multi-layer security and fraud detection.",
			link: "#",
			delay: 300,
		},
	];

	return (
		<section id='portfolio' className='portfolio !mt-[100px] mb-10 mt-10'>
			<div className='container text-center' data-aos='fade-up'>
				<header className='section-header'>
					<h2 className='text-[100px] font-bold'>Portfolio</h2>
					<p>Check out some of our work</p>
				</header>

				<ul className='portfolio-filters'>
					{filters.map((filter) => (
						<li
							key={filter}
							className={filter === activeFilter ? "filter-active" : ""}
							onClick={() => setActiveFilter(filter)}>
							{filter.charAt(0).toUpperCase() + filter.slice(1)}
						</li>
					))}
				</ul>

				<div
					className='row portfolio-items h-100'
					data-aos='zoom-in'
					data-aos-delay='100'>
					{projects
						.filter(
							(project) =>
								activeFilter === "all" || project.category === activeFilter
						)
						.map((project) => (
							<div
								key={project.id}
								className='col-md-4  portfolio-item'
								data-aos='fade-up'
								data-aos-delay={project.delay}>
								<div className='portfolio-content h-[250px] flex flex-col justify-center items-center '>
									<img
										src={project.img}
										className='p-3 flex flex-col justify-center items-center h-50'
										alt={project.title}
									/>
									<div className='portfolio-info'>
										<h4 className='!bg-[rgb(1,1,75)]'>{project.title}</h4>

										<p>{project.description}</p>
										<a href={project.link} className='preview-link'>
											View Project
										</a>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
