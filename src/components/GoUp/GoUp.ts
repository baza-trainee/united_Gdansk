import styled from "@emotion/styled";

export const GoUpButton = styled.button`
  background-color: transparent;
  border-radius: 0.4rem;
  position: fixed;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2.5rem;
  right: 5rem; 
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s;
  fill:#FFFF00;
  &:hover {
    background-color: active; 
    fill: #1414b8;
  }
`;
