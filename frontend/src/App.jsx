import React from "react";
import { motion } from "framer-motion";
import Home from "./sections/Home";
import ScrollToTop from "./sections/ScrollToTop";
import ConsentPreferences from "./sections/ConsentPreferences";

const App = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<Home />
			<ScrollToTop />
			<ConsentPreferences />
		</motion.div>
	);
};

export default App;
