import styled from '@emotion/styled';

export const GalleryTitle = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`;
export const GallerySection = styled.section`
  background-color: #0059b2;
  padding-top: 12px;
  position: relative;
  @media screen and (min-width: 320px) {
    padding-left: 35px;
    padding-right: 35px;
  }
`;
export const EventTitle = styled.p`
  color: #fff;
  position: absolute;
  bottom: 12px;
  z-index: 20;
`;
export const EventTitleWrapper = styled.div`
  background-color: rgba(241, 239, 239, 0.7);
  padding-top: 14px;
  padding-bottom: 14px;
`;
export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(48, 48, 48, 0) 0%, rgba(45, 44, 44, 0.92) 100%);
    pointer-events: none;
  }
`;
