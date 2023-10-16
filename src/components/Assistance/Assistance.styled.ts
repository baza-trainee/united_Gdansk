import styled from '@emotion/styled';

export const AssistanceSection = styled.section`
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    margin: 60px 110px;
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 1050px;
  }
`;

export const AssistanceWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const AssistanceImageWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 548px;
    height: 548px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    height: 500px;
    margin: 0;
  }
`;

export const AssistanceAside = styled.div`
  margin: 12px 0 0 0;
  @media screen and (min-width: 768px) {
    margin: 24px auto 0;
    display: inline-block;
  }

  @media screen and (min-width: 1280px) {
    width: 428px;
    margin: 0;
  }
`;

export const AssistanceText = styled.p`
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: justify;

  @media screen and (min-width: 768px) {
    width: 548px;
    padding: 16px 0;
  }

  @media screen and (min-width: 1280px) {
    width: 428px;
    margin: 40px 0 32px;
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0 14px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
