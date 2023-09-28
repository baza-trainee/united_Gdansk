import styled from "@emotion/styled";

export const SlideButton = styled.button<{
  position: string | undefined;
  left: boolean | undefined;
  right: boolean | undefined;
}>`
  border: none;
  position: absolute;
  top: 50%;
  z-index: 10;
  left: ${(props) => (props.left ? "0" : "")};
  right: ${(props) => (props.right ? "0" : "")};
  background-color: transparent;
  cursor: pointer;
  transform: ${(props) => (props.position === "right" ? "rotate(180deg)" : "")};
`;
