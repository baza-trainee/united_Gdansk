import styled from '@emotion/styled';

export const DonateBtnsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: 350px) {
    gap: 50px;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    gap: 70px;
  }
`;

export const BlickSvg = styled.svg`
  width: 44px;
  height: 20px;
  fill: #fff;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 30px;
  }
`;

export const BlickBtn = styled.button`
  width: 62px;
  height: 44px;
  position: relative;
  background-color: #000000;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 60px;
  }
`;

export const Btn = styled.button`
  display: block;
  width: 196px;
  height: 74px;
  cursor: pointer;
  border-radius: 12px;
  padding: 16px;
  border-radius: 5px;
  border: 5px solid #000000;
  background-color: #000000;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;

  @media (min-width: 500px) {
    width: 280px;
  }
`;
export const BlickName = styled.p`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

export const BlickNameWrapper = styled.div`
  position: absolute;
`;
