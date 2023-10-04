import styled from "@emotion/styled";

export const RalliesSection = styled.section`
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
    margin: 120px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

  }
`;
export const RalliesText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 16px;
  line-height: 1.5;
  text-align: justify;
  // width: 288px;

  @media screen and (min-width: 768px) {
    width: 548px;
    margin-top: 16px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 428px;
    margin-top: 40px;
  }
`;
export const RalliesWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 112px;
  }
`;
export const ImageRalliesWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 548px;
  }
`;
