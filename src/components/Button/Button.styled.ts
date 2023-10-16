import styled from "@emotion/styled";

export const DonateBtnsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 48px;
    
  }
`;

export const BlickSection = styled.div`
  padding-top: 64px;

   @media screen and (min-width: 768px) {
    padding-top: 36px;
  }
`;

export const BlickSvg = styled.svg`
  width: 54px;
  height: 28px;
  fill: #fff;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 28px;
    
    
  }
`;

export const BlickDotSvg = styled.svg`
  width: 9px;
  height: 9px;  
  top: 4px;
  position: absolute;
  left: 24px;

  @media screen and (min-width: 768px) {
    width: 8px;
    height: 8px;  
    top: 3px;
    left: 22px;
  }

  @media screen and (min-width: 1280px) {
    width: 9px;
    height: 9px;  
    top: 4px;
    position: absolute;
    left: 24px;
  }
`;

export const BlickBtn = styled.button`
  width: 86px;
  height: 40px;
  position: relative;
  background-color: #000000;
  border-radius: 5px;
  border: 1px solid #fff;

  @media screen and (min-width: 768px) {
    width: 85px;
    height: 39px;
  }

  @media screen and (min-width: 1280px) {
    width: 86px;
    height: 40px;
  }
`;

export const Btn = styled.button`
  display: block;
  width: 196px;
  height: 64px;
  border-radius: 5px;
  padding: 16px;
  border: 5px solid #000000;
  background-color: #000000;
  color: #fff;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;

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
  margin-top: 6px;
`;
