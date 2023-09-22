import styled from "@emotion/styled";

export const NetsSection = styled.section`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin: 60px 110px;
  }
  @media screen and (min-width: 1280px) {
    margin: 120px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
export const NetsPicWrapper = styled.div`
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 548px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const NetsWrapper = styled.div`
  
  width: 288px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    width: 548px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    
  }
`;

export const NetsContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  text-align: start;
  line-height: 1.5;
  width: 100%;
  @media screen and (min-width: 1280px) {
    width: 430px;
    margin-top: 40px;
  }
`;