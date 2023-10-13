import { MouseEventHandler } from "react";
import { SlideButton } from "./SlideBtn.styled";
type ISlideBtn = {
  click: MouseEventHandler<HTMLElement>;
  disabled: boolean;
  left?: boolean;
  right?: boolean;
  position?: string;
};

const SlideBtn = ({ click, disabled, position, left, right }: ISlideBtn) => {
  return (
    <SlideButton
      left={left}
      right={right}
      onClick={click}
      disabled={disabled}
      position={position}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="24"
          height="24"
          transform="matrix(-1 0 0 -1 24 24)"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M14.6667 17.3335L9.2122 11.879L14.6667 6.4244"
          stroke="#3A3A3A"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </SlideButton>
  );
};

export default SlideBtn;
