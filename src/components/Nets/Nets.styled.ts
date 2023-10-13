import styled from "@emotion/styled";

export const NetsSection = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin: 60px 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    margin: 60px 120px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const NetsPicWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 548px;
  }
`;

export const NetsWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-right: 112px;
  }
`;

export const NetsContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 1.5;
  text-align: justify;

  @media screen and (min-width: 768px) {
    width: 548px;
    margin-left: 0;
    margin-top: 16px;
  }
  @media screen and (min-width: 1280px) {
    width: 428px;
    margin-top: 40px;
    margin-right: 0px;
    
  }
`;
