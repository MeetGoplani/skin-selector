import React, { useEffect, useState, useRef } from "react";

const PercentageScroll = ({ debug = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Fixed position style - always 2rem from top
  const percentageStyle = {
    position: "fixed",
    top: "!2rem", // Always 2rem from top
    transform: "translateY(0)",
    zIndex: 9999,
    pointerEvents: "none",
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-out",
    width: "3rem",
    height: "3rem",
    filter: debug ? "drop-shadow(0 0 4px red)" : "none",
  };

  return (
    <div ref={containerRef}>
      {/* Left indicator */}
      <div
        style={{
          ...percentageStyle,
          left: "1rem",
        }}
      >
        <img
          src="/images/percentage.gif"
          alt="Scroll indicator"
          onLoad={() => setIsLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Right indicator */}
      <div
        style={{
          ...percentageStyle,
          right: "1rem",
        }}
      >
        <img
          src="/images/percentage.gif"
          alt="Scroll indicator"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default PercentageScroll;
