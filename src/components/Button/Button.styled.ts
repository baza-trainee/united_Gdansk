import styled from "@emotion/styled";

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
  background-color: #000000;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  transition: background-color 0.5s ease;


  @media (min-width: 500px) {
    width: 280px;
  }

  :hover {
    background-color: #ffff00;
    color: #000;
    border: none;
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
