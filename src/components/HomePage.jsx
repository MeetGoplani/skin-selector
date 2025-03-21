import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAudioVideo } from "../context/AudioContext";

const ClickableImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { videoRef, isPlaying, startPlayback } = useAudioVideo();

  useEffect(() => {
    // Create a container for the persistent video
    const container = document.getElementById('video-container');
    
    const handleScroll = () => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const isInView = (
        rect.top >= 0 &&
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.bottom <= window.innerHeight
      );

      if (isInView) {
        startPlayback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startPlayback]);

  return (
    <>
      <div className="w-full flex justify-between items-center px-0 pt-6 bg-black z-10">
        <div className="w-16 md:w-32">
          <img
            src="/images/percentage.gif"
            alt="Left Animation"
            className="w-16 h-16 md:w-48 md:h-48 fixed left-0 top-0"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center -space-y-5 sm:-space-y-5 sm:space-x-2 md:space-x-8">
          <Link to="/skins" className="no-underline">
            <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-0 sm:pt-10">
              skins
            </p>
          </Link>
          <Link to="/" >
            <img
              src="/images/logo2.png"
              className="w-32 h-32 sm:w-full sm:h-80 sm:-my-24 md:w-72 md:h-80"
              alt="Logo"
            />
          </Link>
          <a 
            href="https://linktr.ee/miraricielador" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="no-underline mt-0 sm:mt-0 md:mt-6"
          >
            <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-0 sm:pt-10">
              socials
            </p>
          </a>
        </div>

        <div className="w-16 md:w-32">
          <img
            src="/images/percentage.gif"
            alt="Right Animation"
            className="w-16 h-16 md:w-48 md:h-48 fixed right-0 top-0"
          />
        </div>
      </div>

      <div className="w-full flex justify-center my-8 relative px-4 sm:px-6 md:px-8">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e50046]"></div>
          </div>
        )}
        <div 
          id="video-container"
          className="w-full max-w-4xl h-auto object-contain bg-black"
          onClick={startPlayback}
          onLoadedData={() => setIsLoading(false)}
        >
          {/* The persistent video will be inserted here by the context */}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-4xl mx-auto">
          <img
            src="/splash.jpeg"
            alt="Interactive Image"
            className="w-full h-auto"
          />

          <a
            href="/skins"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute"
            style={{
              top: "52%",
              width: "100px",
              height: "50px",
              left: 0,
            }}
          />

          <a
            href="https://linktr.ee/miraricielador"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute"
            style={{
              top: "49%",
              left: "84%",
              width: "100px",
              height: "50px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ClickableImage;
