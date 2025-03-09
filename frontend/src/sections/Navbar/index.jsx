import React, { useState } from "react";
import "../../index.css";
import "./navbar.css";

const Navbar = () => {
	const [animateHome, setAnimateHome] = useState(false);

	const handleHomeClick = () => {
		setAnimateHome(false);
		setTimeout(() => setAnimateHome(true), 10);
	};

	return (
		<header id='header' className='header flex align-items-center fixed-top'>
			<div className='header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between'>
				<a
					href='#hero'
					className={`logo d-flex align-items-center me-auto me-xl-0 ${
						animateHome ? "animate" : ""
					}`}
					onClick={handleHomeClick}>
					<h1 className='sitename'>Intellion</h1>
				</a>

				<nav id='navmenu' className='navmenu'>
					<ul>
						<li>
							<a href='#hero' className='active' onClick={handleHomeClick}>
								Home
							</a>
						</li>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#services'>Services</a>
						</li>
						<li>
							<a href='#portfolio'>Portfolio</a>
						</li>

						<li>
							<a href='#pricing'>Pricing</a>
						</li>
						<li className='dropdown'>
							<a href='#'>
								<span>More</span>{" "}
								<i className='bi bi-chevron-down toggle-dropdown'></i>
							</a>
							<ul>
								<li>
									<a href='#team'>Team</a>
								</li>

								<li>
									<a href='#clientsSection'>Clients</a>
								</li>
								<li>
									<a href='#events'>Events</a>
								</li>
								<li>
									<a href='#updates'>Updates</a>
								</li>
								<li className='dropdown'>
									<a href='#faq'>
										<span>FAQs</span>{" "}
										<i className='bi bi-chevron-down toggle-dropdown'></i>
									</a>
									<ul>
										<li>
											<a href='#'>Deep Dropdown 1</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 2</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 3</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 4</a>
										</li>
										<li>
											<a href='#'>Deep Dropdown 5</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
					<i className='mobile-nav-toggle d-xl-none bi bi-list'></i>
				</nav>

				<a className='btn-getstarted' href='#about'>
					Get Started
				</a>
			</div>
		</header>
	);
};

export default Navbar;
