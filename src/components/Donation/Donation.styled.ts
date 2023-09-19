import styled from '@emotion/styled';

export const DonationSection = styled.section`
  background-color: #0059b2;
  padding: 60px 120px;

  @media (max-width: 320px) {
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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    width: 568px;
    margin-bottom: 40px;
  }

  @media (max-width: 320px) {
    width: 212px;
    margin-bottom: 36px;
  }
`;
