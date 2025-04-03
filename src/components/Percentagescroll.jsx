import React, { useEffect, useState, useRef } from "react";

const PercentageScroll = ({ debug = false }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenSize, setScreenSize] = useState('large');
  const containerRef = useRef(null);

  useEffect(() => {
    // Handle scroll position
    const handleScroll = () => {
      // Get scroll position
      const currentScrollY = window.scrollY;
      
      // Get document height (total scrollable height)
      const documentHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      
      // Calculate percentage scrolled (0 to 1)
      const scrollPercentage = Math.min(currentScrollY / documentHeight, 1);
      
      // Update state with current scroll position
      setScrollY(scrollPercentage);
    };
    
    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    // Check screen size
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large');
      } else if (window.innerWidth >= 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    };
    
    // Initialize and add listeners
    checkScreenSize();
    handleScroll();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate position based on scroll and screen size
  const topPosition = screenSize === 'large' 
    ? 15 + (scrollY * 75) // Large screens: Start at 15% and move down to 90%
    : screenSize === 'medium'
      ? 4 + (scrollY * 35) // Medium screens: Start at 2% (very close to top) and move down to 37%
      : 15 + (scrollY * 35); // Small screens: Start at 15% and move down to 50%

  // Fixed position style
  const percentageStyle = {
    position: "fixed",
    top: isLoaded ? `${topPosition}%` : (screenSize === 'large' ? '15%' : screenSize === 'medium' ? '4%' : '15%'),
    transform: "translateY(-50%)",
    zIndex: screenSize === 'large' ? 9999 : 5, // Lower z-index on medium and small screens
    pointerEvents: "none",
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-out",
    width: screenSize === 'large' ? "12rem" : "3rem", // Much larger on big screens
    height: screenSize === 'large' ? "12rem" : "3rem", // Much larger on big screens
    filter: debug ? "drop-shadow(0 0 4px red)" : "none",
  };

  return (
    <div ref={containerRef}>
      {/* Left indicator */}
      <div
        style={{
          ...percentageStyle,
          left: screenSize === 'large' ? "2rem" : "1rem",
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
          right: screenSize === 'large' ? "2rem" : "1rem",
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
