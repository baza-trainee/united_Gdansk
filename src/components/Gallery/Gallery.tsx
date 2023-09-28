import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SlideBtn from "../SlideBtn/SlideBtn";

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { events } from "../../content/events";
import {
  GalleryTitle,
  GallerySection,
  EventTitle,
  ImageWrapper,
} from "./Gallery.styled";

import { Content } from "@/types/contentType";
import { Lang } from "@/types/langTypes";
import { useState } from "react";

type IGallery = {
  content: Content;
  lang: Lang;
};
type IImages = {
  thumbnail: string;
  original: string;
};

const Gallery = ({ content, lang }: IGallery) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState<IImages[] | null>(null);

  const screenWidth = window.innerWidth;

  return (
    <>
      <GallerySection id="gallery" bg={modalIsOpen}>
        <GalleryTitle>{content.aboutGallery.title}</GalleryTitle>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          centeredSlides={screenWidth > 768 ? false : true}
          breakpoints={{
            320: {
              slidesPerView: 1.4,
            },
            570: {
              slidesPerView: 3,
            },
            820: {
              slidesPerView: 3,
            },
          }}
          style={{ paddingTop: "12px", paddingBottom: "35px" }}
          onSlideChange={() => console.log("slide change")}
        >
          {!modalIsOpen &&
            events.map((image) => (
              <SwiperSlide
                key={image.image}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setModalImages(image.images);
                  setModalIsOpen((prev) => !prev);
                }}
              >
                <ImageWrapper>
                  <picture>
                    <source
                      srcSet={`${image.image} 1x, ${image.imageDouble} 2x`}
                      type="image/jpeg"
                    />
                    <img src={image.image} alt="event image" />
                  </picture>
                  <EventTitle>
                    {lang === "PL" ? image.titlePL : image.title}
                  </EventTitle>
                </ImageWrapper>
              </SwiperSlide>
            ))}
          {modalIsOpen && (
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              items={modalImages}
              renderLeftNav={(click, disabled) => {
                return <SlideBtn click={click} disabled={disabled} left />;
              }}
              renderRightNav={(click, disabled) => {
                return <SlideBtn click={click} disabled={disabled} position='right' right />;
              }}
            />
          )}
        </Swiper>
      </GallerySection>
    </>
  );
};
export default Gallery;
