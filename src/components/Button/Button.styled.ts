import styled from '@emotion/styled';

export const Btn = styled.button`
  display: block;
  width: 280px;
  height: 72px;
  border-radius: 12px;
  padding: 16px;
  border: 5px solid #000000;
  background-color: #fff;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;

  @media (max-width: 1050px) {
    margin: 0 auto;
  }

  @media (max-width: 350px) {
    width: 212px;
  }
`;
