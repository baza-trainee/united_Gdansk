import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

type IGallery = {
  content: Content;
  lang: Lang;
};

const Gallery = ({ content, lang }: IGallery) => {
  const screenWidth = window.innerWidth;
  return (
    <>
      <GallerySection id="gallery">
        <GalleryTitle>{content.aboutGallery.title}</GalleryTitle>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination
          spaceBetween={20}
          centeredSlides={screenWidth > 768 ? false : true}
          breakpoints={{
            320: {
              slidesPerView: 1.4,
            },
            480: {
              slidesPerView: 2,
            },
            820: {
              slidesPerView: 3,
            },
          }}
          style={{ paddingTop: "12px", paddingBottom: "35px" }}
          onSlideChange={() => console.log("slide change")}
        >
          {events.map((image) => (
            <SwiperSlide key={image.image}>
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
    </>
  );
};
export default Gallery;
