import styled from "@emotion/styled";

export const Sliders = styled.section`
  width: 100%;
  height: 748px;
  margin: 0 auto;
`;

export const SliderWrap = styled.div`
  height: 100%;
  position: relative;
`;

export const SliderOverflow = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const SliderContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Slider = styled.div<{url: string}>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => (props.url ? props.url : ``)};
`;

export const ArrowLeft = styled.div`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 60px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 2;
  cursor: pointer;
  background-image: url("/images/hero/arrowLeft.png");
`;

export const ArrowRight = styled.div`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  right: 60px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 2;
  cursor: pointer;
  background-image: url("/images/hero/arrowRight.png");
`;
export const DotsContainer = styled.div`
  display: flex;
  bottom: 50px;
  left: 50%;
  position: absolute;
  justify-content: center;
`;
export const Dot = styled.div`
  margin: 0 3px;
  cursor: pointer;
  height: 50px;
  width: 50px;
`;

