import styled from "@emotion/styled";

export const RalliesSection = styled.section`
  padding: 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding: 120px;
    display: flex;
  }
`;
export const RalliesText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 12px;
  text-align: start;
  line-height: 1.5;
  @media screen and (min-width: 1280px) {
    width: 430px;
    margin-top: 40px;
  }
`;
export const RalliesWrapper = styled.div`
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 110px;
  }
`;
