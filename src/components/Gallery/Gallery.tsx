import { Pagination, A11y, Navigation, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SlideBtn from "../SlideBtn/SlideBtn";

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { events } from "../../content/events";
import {
  GalleryTitle,
  GallerySection,
  EventTitle,
  CloseButton,
  ImageWrapper,
} from "./Gallery.styled";

import { Content } from "@/types/contentType";
import { Lang } from "@/types/langTypes";
import { useEffect, useState } from "react";

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
  const [modalImages, setModalImages] = useState<IImages[]>([]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GallerySection id="gallery" bg={modalIsOpen}>
        <GalleryTitle>{content.aboutGallery.title}</GalleryTitle>
        <Swiper
          modules={[Navigation, Pagination, A11y, Zoom]}
          pagination={{
            clickable: true,
          }}
          zoom={true}
          spaceBetween={20}
          centeredSlides={screenWidth >= 570 ? false : true}
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
          style={{ paddingTop: "40px", paddingBottom: "55px" }}
        >
          {!modalIsOpen &&
            events.map((image) => (
              <SwiperSlide
                className={`${image.class}`}
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
        </Swiper>
      </GallerySection>
      {modalIsOpen && (
        <>
          <CloseButton onClick={() => setModalIsOpen((prev) => !prev)}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.29104 7.4366L10.8564 12.002L12.2706 10.5878L7.71931 6.03644L12.0935 1.74834L10.6934 0.320141L6.30503 4.62216L1.90699 0.224121L0.492775 1.63833L4.87676 6.02232L0.227295 10.5803L1.62738 12.0085L6.29104 7.4366Z"
                fill="#3A3A3A"
              />
            </svg>
          </CloseButton>
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            items={modalImages}
            renderLeftNav={(click, disabled) => {
              return <SlideBtn click={click} disabled={disabled} left />;
            }}
            renderRightNav={(click, disabled) => {
              return (
                <SlideBtn
                  click={click}
                  disabled={disabled}
                  position="right"
                  right
                />
              );
            }}
          />
        </>
      )}
    </>
  );
};
export default Gallery;
