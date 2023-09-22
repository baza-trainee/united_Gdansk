import styled from "@emotion/styled";

export const AboutUsSection = styled.section`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin: 60px 110px;
  }
  @media screen and (min-width: 1280px) {
    margin: 120px;
    display: flex;
  }
`;
export const AboutUsPicWrapper = styled.div`
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 548px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const AboutUsWrapper = styled.div`
  margin: 36px 20px;
  width: 288px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    width: 548px;
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
  text-align: start;
  line-height: 1.5;
  width: 100%;
  @media screen and (min-width: 1280px) {
    width: 430px;
    margin-top: 40px;
  }
`;