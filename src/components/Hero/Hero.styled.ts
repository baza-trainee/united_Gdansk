import styled from "@emotion/styled";

export const CarouselContainer = styled.section`
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    background: rgba(255, 255, 255, 0.6);
    color: #000000;

    width: 44px;
    height: 44px;

    @media (max-width: 500px) {
      width: 24px;
      height: 24px;
      &::after,
      ::before {
        font-size: 14px;
      }
    }

    &:hover {
      background: rgba(197, 197, 197, 0.4);
    }
  }

  .swiper-button-prev {
    left: 60px;
    @media (max-width: 1200px) {
      left: 28px;
    }
    @media (max-width: 500px) {
      display: none;
    }

    &:after {
      font-size: 25px;
    }
  }
  .swiper-button-next {
    right: 60px;

    @media (max-width: 1200px) {
      right: 28px;
    }

    @media (max-width: 500px) {
      display: none;
    }
    &:after {
      font-size: 25px;
    }
  }

  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;

    opacity: 1;
    background-color: #d9d9d9;

    @media (max-width: 500px) {
      width: 12px;
      height: 12px;
    }

    &-active {
      background-color: #3a3a3a;
    }
  }

  .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  .swiper-pagination-horizontal {
    bottom: 30px;
  }
`;

export const Slider = styled.div<{ url: string }>`
  width: 100%;
  height: 748px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  font-family: Roboto;
  color: #fff;
  font-weight: 700;
  background-image: ${(props) => (props.url ? props.url : ``)};
  background-position: center;
  background-size: cover;

  h2 {
    font-size: 52px;
    padding: 0 30px;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 42px;
    }
  }
  p {
    font-size: 36px;
    padding: 0 35px;
    font-weight: 400;
    @media (max-width: 500px) {
      font-size: 28px;
    }
  }
`;
