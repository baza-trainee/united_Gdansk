import { useState } from "react";
import { Sliders, Slider, SliderWrap, ArrowLeft, ArrowRight, DotsContainer, Dot } from "./Hero.styled"

const Hero: React.FC = () => {

	const [currentIndex, setCurrentIndex] = useState(0)

	const slides = [
		{ url: './images/hero/firstSlide.jpg' },
		{ url: '/images/hero/secondSlide.jpg' },
		{ url: '/images/hero/thirdSlide.jpg' },
	]

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex)
	}
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex)
	}


	return (
		<Sliders >

			<SliderWrap >
				<ArrowLeft onClick={goToPrevious} />
				<Slider url={`url(${slides[currentIndex].url})`} />

				<ArrowRight onClick={goToNext} />
				<DotsContainer>
					{slides.map((slide, slideIndex) => (
						<Dot key={slideIndex}><img src="public/images/hero/dot.svg" alt="" onClick={() => goToSlide(slideIndex)} /></Dot>
					))}


				</DotsContainer>

			</SliderWrap>

		</Sliders>
	)
}

export default Hero;