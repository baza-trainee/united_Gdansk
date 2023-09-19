import styled from '@emotion/styled';

export const AssistanceSection = styled.section`
  padding: 120px 0;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`;

export const AssistanceLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AssistanceImg = styled.div`
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 548px;
    height: 548px;
    margin: 0 auto 60px;
  }

  @media (max-width: 320px) {
    width: 320px;
    height: 320px;
    margin: 0 auto 36px;
  }
`;

export const AssistanceImage = styled.img`
  width: 500px;
  height: 500px;

  @media (max-width: 768px) {
    width: 100%;
    height: 548px;
  }

  @media (max-width: 320px) {
    width: 100%;
    height: 320px;
  }
`;

export const AssistanceAside = styled.div`
  @media (max-width: 768px) {
    padding: 0 110px;
  }

  @media (max-width: 320px) {
    padding: 0 54px;
  }
`;

export const AssistanceTitle = styled.h2`
  color: #000000;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }

  @media (max-width: 320px) {
    margin-bottom: 12px;
  }
`;
export const AssistanceText = styled.p`
  width: 428px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: justify;
  color: #3a3a3a;

  @media (max-width: 768px) {
    width: 548px;
  }

  @media (max-width: 320px) {
    width: 212px;
  }
`;
