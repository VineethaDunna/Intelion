import { motion } from "framer-motion";
import c1 from "../../assets/img/testimonials/testimonials-1.jpg";
import c2 from "../../assets/img/testimonials/testimonials-2.jpg";
import c3 from "../../assets/img/testimonials/testimonials-3.jpg";
import "./update.css";

const blogPosts = [
	{
		date: "24 Jan",
		title:
			"Finolity's Digital Campus Program: Transforming Universities Through Strategic Partnerships",
		image: c1,
	},
	{
		date: "25 Oct",
		title:
			"Finolity Becomes an Official Corel Partner, Delivering Next-Gen Software Solutions to Businesses",
		image: c2,
	},
	{
		date: "01 Dec",
		title:
			"Finolity Achieves Adobe Certified Reseller Status, Enhancing Access to Premium Creative Tools",
		image: c3,
	},
];

export default function BlogSection() {
	return (
		<section id='updates'>
			<div className='container-fluid py-6 bg-gray-100'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className='text-center'>
						<small className='d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3'>
							Latest Insights
						</small>
						<h1 className='display-5 mb-5'>Stay Ahead with Industry Trends</h1>
					</motion.div>

					<div className='row gx-4 justify-content-center'>
						{blogPosts.map((post, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className='col-md-6 col-lg-4'>
								<div className='blog-item'>
									<motion.div
										whileHover={{ scale: 1.05 }}
										className='overflow-hidden rounded'>
										<img
											src={post.image}
											className='img-fluid w-100'
											alt='Tech Blog'
										/>
									</motion.div>
									<div className='blog-content mx-4 d-flex rounded bg-light shadow'>
										<div className='text-dark bg-[rgb(1,1,75)] rounded-start p-3 text-center'>
											<p className='fw-bold text-white mb-0'>
												{post.date.split(" ")[0]}
											</p>
											<p className='fw-bold text-white mb-0'>
												{post.date.split(" ")[1]}
											</p>
										</div>
										<a
											href='#'
											className='h5 lh-base my-auto h-100 p-3 blog-title'>
											{post.title}
										</a>
									</div>
									<a href='#' className='text-primary p-5 pb-5 fw-bold'>
										Learn More →
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
