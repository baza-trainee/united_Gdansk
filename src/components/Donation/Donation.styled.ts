import styled from '@emotion/styled';

export const DonationSection = styled.section`
  background-color: #0059b2;
  padding: 60px 120px;

  @media (max-width: 700px) {
    padding: 36px 54px;
  }
`;

export const DonationTitle = styled.h2`
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 16px;
  }
`;

export const DonationInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    display: block;
  }
`;

export const DonationText = styled.p`
  width: 500px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: justify;
  color: #ffffff;

  @media (max-width: 1050px) {
    margin: 0 auto 40px;
  }

  @media (max-width: 768px) {
    max-width: 548px;
    margin: 0 0 40px 0;
  }

  @media (max-width: 620px) {
    max-width: 450px;
  }

  @media (max-width: 525px) {
    max-width: 380px;
    width: 100%;
  }

  @media (max-width: 400px) {
    max-width: 250px;
    width: 100%
    margin-bottom: 36px;
  }

  @media (max-width: 320px) {
    width: 212px;
  }
`;
