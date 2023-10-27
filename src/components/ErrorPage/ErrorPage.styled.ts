import styled from "@emotion/styled";

export const ErrorSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(241, 241, 241, 0.62) 0%,
      rgba(241, 241, 241, 0.62) 100%
    ),
    url("./images/hero/firstSlide.jpg");
  gap: 35px;
  height: 65vh;
`;

export const ErrorTitle = styled.h3`
  color: black;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Error404 = styled.h1`
  color: black;
  font-size: 128px;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 11.52px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 128px;
    letter-spacing: 11.52px;
  }
  @media (max-width: 480px) {
    font-size: 64px;
    letter-spacing: 5.76px;
  }
`;

export const ImgBackground = styled.img`
  background: rgba(241, 241, 241, 0.62) url("./images/hero/firstSlide.jpg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const ButtonError = styled.button`
  display: flex;
  width: 232px;
  height: 56px;
  padding: 16px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    width: 172px;
  }
`;

export const Btn = styled.button`
  display: block;
  width: 196px;
  height: 64px;
  border-radius: 12px;
  padding: 16px;
  background-color: #000;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  font-weight: 700;

  @media (max-width: 1050px) {
    margin: 0 auto;
  }

  @media (max-width: 350px) {
    width: 212px;
  }
`;
