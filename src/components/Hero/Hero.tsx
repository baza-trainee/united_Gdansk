import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Slides, HeroProps } from "../../types/heroTypes";
import { CarouselContainer, Slider } from "./Hero.styled";

const Hero: React.FC<HeroProps> = ({ contentHero }) => {

	const slides: Slides[] = [
		{ url: './images/hero/firstSlide.jpg' },
		{ url: '/images/hero/secondSlide.jpg' },
		{ url: '/images/hero/thirdSlide.jpg' },
	]

	const renderSlides = slides.map((_, index) => (
		<SwiperSlide key={index} >
			<Slider url={`url(${slides[index].url})`}>
				<h2>{contentHero.title}</h2>
				<p>{contentHero.paragraph}</p>
			</Slider>
		</SwiperSlide>
	))

	return (
		<CarouselContainer>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
			>
				{
					renderSlides
				}
			</Swiper>
		</CarouselContainer >
	)
}

export default Hero;