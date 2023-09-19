import styled from "@emotion/styled";

export const Sliders = styled.section`
  width: 100%;
  height: 748px;
  margin: 0 auto;
  z-index: 5;
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

export const Slider = styled.div<{ url: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: Roboto;
  color: #fff;
  font-weight: 700;
  justify-content: center;
  width: 100%;
  height: auto;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => (props.url ? props.url : ``)};

  h2 {
    font-size: 52px;

    @media (max-width: 320px) {
      font-size: 36px;
    }
  }
  p {
    font-size: 36px;
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }
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

  @media (max-width: 768px) {
    left: 20px;
  }
  @media (max-width: 320px) {
    width: 22px;
    height: 22px;
    background-size: 22px;
    left: 10px;
  }
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
  @media (max-width: 768px) {
    right: 20px;
  }
  @media (max-width: 320px) {
    width: 22px;
    height: 22px;
    background-size: 22px;
    right: 10px;
  }
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
