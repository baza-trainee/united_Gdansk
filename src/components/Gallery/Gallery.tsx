import { Pagination, A11y, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { events } from "../../content/events";
import {
  GalleryTitle,
  GallerySection,
  EventTitle,
  EventTitleWrapper,
} from "./Gallery.styled";
const Gallery = () => {
  return (
    <>
      <GallerySection>
        <GalleryTitle>Галерея</GalleryTitle>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          style={{ paddingTop: "62px" }}
          onSlideChange={() => console.log("slide change")}
        >
          {events.map((image) => (
            <SwiperSlide key={image.image}>
              <picture>
                <source
                  srcSet={`${image.image} 1x, ${image.imageDouble} 2x`}
                  type="image/jpeg"
                />
                <img src={image.image} alt="Кіт" />
              </picture>
              <EventTitleWrapper>
                <EventTitle>{image.title}</EventTitle>
              </EventTitleWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </GallerySection>
    </>
  );
};
export default Gallery;
