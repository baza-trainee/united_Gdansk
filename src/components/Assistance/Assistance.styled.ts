import styled from '@emotion/styled';

export const AssistanceSection = styled.section`
  padding: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 120px 60px;
    display: block;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const AssistanceLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AssistanceImage = styled.img`
  width: 500px;
  height: 500px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

export const AssistanceAside = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 46px;
  }
`;

export const AssistanceTitle = styled.h2`
  color: #000000;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 40px;

  @media (max-width: 970px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 16px;
  }

  @media (max-width: 320px) {
    width: 150px;
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

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ButtonPosition = styled.div`
  @media (max-width: 1200px) {
    position: absolute;
    bottom: 0px;
  }
`;
