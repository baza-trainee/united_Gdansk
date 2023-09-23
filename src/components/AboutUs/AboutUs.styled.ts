import styled from "@emotion/styled";

export const AboutUsSection = styled.section`
  margin-top: 40px;

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
export const AboutUsWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 110px;
  }
`;

export const AboutUsContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
  line-height: 1.5;
  text-align: justify;
  @media screen and (min-width: 768px) {
    width: 548px;
    margin-top: 16px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 428px;
    margin-top: 40px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
export const ImageAboutUsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 548px;
  }
`;
