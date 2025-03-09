import React, { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";

import "./scroll.css";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			className={`scroll-top ${isVisible ? "show" : ""}`}
			onClick={scrollToTop}>
			<BsArrowUpShort size={24} />
		</button>
	);
};

export default ScrollToTop;
