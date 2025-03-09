import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import c1 from "../../assets/img/clients/client-1.png";
import c2 from "../../assets/img/clients/client-2.png";
import c3 from "../../assets/img/clients/client-3.png";
import c4 from "../../assets/img/clients/client-4.png";
import c5 from "../../assets/img/clients/client-5.png";
import c6 from "../../assets/img/clients/client-6.png";
import c7 from "../../assets/img/clients/client-7.png";
import c8 from "../../assets/img/clients/client-8.png";

import "swiper/css";
import "swiper/css/pagination";
import "./Clients.css"; // Add custom styles if needed

const Clients = () => {
	const clients = [c1, c2, c3, c4, c5, c6, c7, c8];

	return (
		<section id='clientsSection' className='clients mb-10 !mt-[100px] section'>
			<div className='container' data-aos='fade-up' data-aos-delay='100'>
				<Swiper
					modules={[Pagination, Autoplay]}
					loop={true}
					speed={600}
					autoplay={{ delay: 5000 }}
					slidesPerView='auto'
					pagination={{ clickable: true }}
					breakpoints={{
						320: { slidesPerView: 2, spaceBetween: 40 },
						480: { slidesPerView: 3, spaceBetween: 60 },
						640: { slidesPerView: 4, spaceBetween: 80 },
						992: { slidesPerView: 6, spaceBetween: 120 },
					}}
					className='init-swiper'>
					{clients.map((client, index) => (
						<SwiperSlide key={index} className='swiper-slide'>
							<img
								src={client}
								className='img-fluid'
								alt={`Client ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='swiper-pagination'></div>
			</div>
		</section>
	);
};

export default Clients;
