import styled from "@emotion/styled";

export const DonateBtnsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
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
  cursor: poiner;
  
  @media screen and (min-width: 768px) {
    width: 86px;
    height: 60px;
  }
`;

export const Btn = styled.button`
  display: block;
  width: 280px;
  height: 74px;
  cursor: poiner;

  border-radius: 12px;
  padding: 16px;
  border-radius: 5px;
  border: 5px solid #000000;
  background-color: #000000;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;
  @media (max-width: 1050px) {
    margin: 0 auto;
  }

  @media (max-width: 350px) {
    width: 212px;
  }
`;
export const BlickName = styled.p`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;
