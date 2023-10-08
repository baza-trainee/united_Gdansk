import styled from "@emotion/styled";

export const GoUpButton = styled.button`
  background-color: transparent;
  padding: 0;
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2.5rem;
  right: 1rem;
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s;
  fill: #ffff00;
  &:hover {
    background-color: active;
    fill: #1414b8;
  }
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    right: 35px;
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;
