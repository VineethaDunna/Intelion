import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const events = [
	{
		title: "AI Centre of Excellence in Education",
		date: "Saturday, March 29 | 11 AM - 1 PM",
		desc: "Discover how AI is transforming hybrid work strategies, improving collaboration, and driving business productivity.",
		img: "https://finolity.com/wp-content/uploads/2025/02/ai_event.jpg",
	},
	{
		title: "Finolity Green Horizons Summit 2025",
		date: "Sunday, May 25 | 12 AM - 2 PM",
		desc: "Explore sustainable tech solutions and network with industry leaders in green innovation.",
		img: "https://finolity.com/wp-content/uploads/2023/04/visuals-Y4qzW3AsvqI-unsplash.jpg",
	},
	{
		title: "Finolity Ecosystem Partnerships Summit",
		date: "Sunday, September 14 | 4 PM - 8:30 PM",
		desc: "Meet with industry leaders in Bangalore to explore partnerships and foster innovation in emerging tech ecosystems.",
		img: "https://finolity.com/wp-content/uploads/2023/04/evangeline-shaw-BdV23FLkmxQ-unsplash.jpg",
	},
	{
		title: "Cybersecurity Innovations Conference",
		date: "Friday, April 19 | 10 AM - 3 PM",
		desc: "Explore the latest trends in cybersecurity and data protection at this high-impact conference.",
		img: "https://finolity.com/wp-content/uploads/2025/02/ai_event.jpg",
	},
	{
		title: "AI & Robotics Expo",
		date: "Wednesday, June 12 | 9 AM - 6 PM",
		desc: "A global summit showcasing the latest advancements in AI, automation, and robotics.",
		img: "https://finolity.com/wp-content/uploads/2023/04/visuals-Y4qzW3AsvqI-unsplash.jpg",
	},
];

export default function EventCarousel() {
	return (
		<section id='events'>
			<div className='container mx-auto py-6'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='text-center mb-6'>
					<small className='text-primary font-bold uppercase bg-gray-200 px-4 py-1 rounded-full'>
						Our Events
					</small>
					<h1 className='text-3xl font-bold mt-2'>
						Most Popular Upcoming Events
					</h1>
				</motion.div>

				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000 }}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className='w-full'>
					{events.map((event, index) => (
						<SwiperSlide key={index}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
								<img
									src={event.img}
									alt={event.title}
									className='w-24 h-24 object-cover rounded-full'
								/>
								<h4 className='text-lg font-bold mt-2'>{event.title}</h4>
								<p className='text-primary font-bold'>📅 {event.date}</p>
								<p className='text-gray-600 text-sm text-center'>
									{event.desc}
								</p>
								<a href='#' className='text-blue-500 font-bold mt-2'>
									Register Today
								</a>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
