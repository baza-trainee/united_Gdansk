import styled from "@emotion/styled";

export const SlideButton = styled.button<{
  position: string | undefined;
  left: boolean | undefined;
  right: boolean | undefined;
}>`
  border: 1px solid #eaeaea;
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  z-index: 10;
  padding: 0;
  left: ${(props) => (props.left ? "0" : "")};
  right: ${(props) => (props.right ? "0" : "")};
  background-color: transparent;
  cursor: pointer;
  transform: ${(props) => (props.position === "right" ? "rotate(180deg)" : "")};

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;
