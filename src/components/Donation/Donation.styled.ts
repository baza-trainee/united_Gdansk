import styled from "@emotion/styled";

export const DonationSection = styled.section`
  background-color: #0059b2;
  padding: 36px 16px;
  @media screen and (min-width: 768px) {
    padding: 60px 110px;
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DonationTitle = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;

  text-align: left;
`;

export const DonationInner = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 100%;
    align-items: center;

    justify-content: space-between;
  }
`;

export const DonationText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 36px;
  line-height: 1.5;
  text-align: justify;
  color: #fff;
  @media screen and (min-width: 768px) {
    width: 548px;
    margin-top: 16px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    margin-top: 0px;
    margin-left: 0px;
  }
`;
