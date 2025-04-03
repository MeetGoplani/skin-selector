
import React, { useEffect, useState } from 'react';

const PercentageScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState('large');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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

    // Check screen size
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large');
      } else {
        setScreenSize('medium-small');
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScreenSize);
    
    // Initialize
    handleScroll();
    checkScreenSize();
    
    // Set loaded state after a short delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  // Calculate position based on scroll and screen size
  // For smaller screens, start higher (2%) and have less movement range
  const topPosition = screenSize === 'large' 
    ? 5 + (scrollY * 85) // Large screens: Start at 5% and move down to 90%
    : 5 + (scrollY * 40); // Smaller screens: Start at 5% instead of 2% and move down to 45%
  
  // CSS for the percentage symbols
  const percentageStyle = {
    position: 'fixed',
    top: isLoaded ? `${topPosition}%` : (screenSize === 'large' ? '5%' : '5%'),
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#0000ff',
    zIndex: screenSize === 'large' ? 9999 : 5,
    pointerEvents: 'none',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <>
      {/* Left percentage symbol */}
      <div 
        style={{ 
          ...percentageStyle, 
          left: screenSize === 'large' ? '1rem' : '0.5rem',
        }}
      >
        <img
            src="/images/percentage.gif"
            alt="Left Animation"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-48 lg:h-48"
            onLoad={() => setIsLoaded(true)}
            style={{ maxWidth: '100%', height: 'auto' }} // Ensure image is responsive
          />
      </div>
      
      {/* Right percentage symbol */}
      <div 
        style={{ 
          ...percentageStyle, 
          right: screenSize === 'large' ? '1rem' : '0.5rem', // Add some padding from the edge
        }}
      >
        <img
            src="/images/percentage.gif"
            alt="Right Animation"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-48 lg:h-48"
            style={{ maxWidth: '100%', height: 'auto' }} // Ensure image is responsive
          />
      </div>
    </>
  );
};

export default PercentageScroll;