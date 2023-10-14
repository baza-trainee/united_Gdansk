import styled from "@emotion/styled";

export const BlickSection = styled.div`
  padding: 20px;
  background: #fff;
  padding-bottom: 8px;

  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 350px;
`;

export const BlickTitle = styled.h2`
  color: #000;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 5px;
  line-height: 24px;
`;

export const BlickText = styled.p`
  color: #3a3a3a;
  font-family: Roboto;
  text-align: justify;

  width: 247px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const BlickName = styled.p`
  color: #3a3a3a;
  font-family: Roboto;
  text-align: justify;
  font-size: 18px;
  font-weight: 500;
`;
export const BlickPhone = styled.p`
  color: #3a3a3a;
  font-family: Roboto;
  text-align: justify;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  border-radius: 20px;

  font-weight: 400;
  padding: 5px;
  background-color: #e3e3e3;
`;

export const BlickWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

export const BlickInfo = styled.p`
  color: #3a3a3a;
  align-items: center;

  text-align: left;
  font-family: Roboto;

  font-size: 8px;
  font-style: normal;
  font-weight: 400;
`;
