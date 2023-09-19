import { useEffect, useState } from "react";
import { Slides, SlidesTransition } from "../../types/heroType"
// import { Lang } from '../../types/langTypes';

import { Sliders, Slider, SliderWrap, ArrowLeft, ArrowRight, DotsContainer, Dot, SliderOverflow, SliderContainer } from "./Hero.styled"


interface HeroProps {
	contentHero: { title: string; paragraph: string },
}

const Hero: React.FC<HeroProps> = ({ contentHero }) => {

	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const slides: Slides[] = [
		{ url: './images/hero/firstSlide.jpg' },
		{ url: '/images/hero/secondSlide.jpg' },
		{ url: '/images/hero/thirdSlide.jpg' },
	]

	const goToPrevious = (): void => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex)
	}
	const goToNext = (): void => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: number): void => {
		setCurrentIndex(slideIndex)
	}

	const [windowSize, setWindowSize] = useState(
		window.innerWidth
	);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);


	const slidesTransition = (): SlidesTransition => ({
		transition: "transform ease-out 0.3s",
		width: `${(windowSize >= 1280 ? 1280 : windowSize) * slides.length}px `,
		transform: `translateX(${-(currentIndex * (windowSize >= 1280 ? 1280 : windowSize))}px)`
	})


	const renderSlider = slides.map((_, slideIndex) => (
		<Slider key={slideIndex} url={`url(${slides[slideIndex].url})`} >
			<h2>{contentHero.title}</h2>
			<p>{contentHero.paragraph}</p>
		</Slider>
	))

	return (
		<Sliders >

			<SliderWrap  >
				<ArrowLeft onClick={goToPrevious} />
				<SliderOverflow >
					<SliderContainer style={slidesTransition()}>
						{
							renderSlider
						}
					</SliderContainer>
				</SliderOverflow>


				<ArrowRight onClick={goToNext} />
				<DotsContainer>
					{slides.map((_, slideIndex) => (
						<Dot key={slideIndex}><img src="public/images/hero/dot.svg" alt="" onClick={() => goToSlide(slideIndex)} /></Dot>
					))}


				</DotsContainer>

			</SliderWrap>

		</Sliders>



	)
}

export default Hero;