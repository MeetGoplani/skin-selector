import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ClickableImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = document.getElementById('mainVideo');
    
    const handleScroll = () => {
      if (!video) return;
      
      const rect = video.getBoundingClientRect();
      const isInView = (
        rect.top >= 0 &&
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.bottom <= window.innerHeight
      );

      if (isInView) {
        video.play().catch(err => console.log("Playback prevented:", err));
        setIsPlaying(true);
      }
      // Removed the else block that was pausing the video
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    const video = document.getElementById('mainVideo');
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = document.getElementById('mainVideo');
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
            className="no-underline"
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
        <video 
          id="mainVideo"
          autoPlay
          muted
          loop 
          controls
          playsInline
          className="w-full max-w-4xl h-auto object-contain bg-black"
          onLoadedData={() => setIsLoading(false)}
          onError={(e) => console.error("Video Error:", e)}
          poster="/images/video-thumbnail.jpg"
        >
          <source 
            src="/videos/teaser.mp4" 
            type="video/mp4" 
          />
        </video>
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
              // backgroundColor: "rgba(0, 255, 0, 0.3)", // Transparent green overlay
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
              // backgroundColor: "rgba(0, 255, 0, 0.3)", // Transparent green overlay
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ClickableImage;
