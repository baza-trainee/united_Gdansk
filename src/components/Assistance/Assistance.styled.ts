import styled from "@emotion/styled";

export const AssistanceSection = styled.section`
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
    flex-direction: inherit;
    align-items: flex-start;
}
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
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 112px;
  }
`;

export const AssistanceText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 16px;
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
  }
`;

export const ButtonPosition = styled.div`
  position: relative;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 44px;
    align-items: center;

    section {
      max-width: 100%;
      justify-content: end;
      gap: 60px;
    }
      div{
        
      }
  }
`;

export const AssistanceImageWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 548px;
  }
`;

export const ButtonWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: none;

    margin-top: 44px;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonAssistance = styled.img`
  width: 86px;
  height: 40px;

  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
