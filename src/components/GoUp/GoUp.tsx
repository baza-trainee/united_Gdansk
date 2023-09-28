import { useState, useEffect } from "react";
import { GoUpButton } from "./GoUp";
const GoUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <GoUpButton onClick={scrollToTop}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="44"
            width="44"
            height="44"
            transform="rotate(-90 0 44)"
            fill="white"
            fillOpacity="0.6"
          />
          <path
            d="M12.2222 26.8887L22.2222 16.8887L32.2222 26.8887"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <rect
            x="0.5"
            y="43.5"
            width="43"
            height="43"
            transform="rotate(-90 0.5 43.5)"
            stroke="white"
            strokeOpacity="0.6"
          />
        </svg>
      </GoUpButton>
    )
  );
};

export default GoUp;
