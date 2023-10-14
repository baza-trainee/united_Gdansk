import styled from "@emotion/styled";

export const DonateBtnsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (min-width: 1280px) {
    max-width: 50%;
  }
`;

export const BlickBtn = styled.button`
  cursor: poiner;
  padding: 0;
  width: 86px;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

export const Btn = styled.button`
  display: block;
  width: 196px;
  height: 74px;
  cursor: poiner;

  border-radius: 12px;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #000000;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 1050px) {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 280px;
  }
`;

export const BlickName = styled.p`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

export const BlickNameWrapper = styled.div`
  position: absolute;
`;
