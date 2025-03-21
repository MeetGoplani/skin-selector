import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ClickableImage = ({ videoTime, setVideoTime, isVideoPlaying, setIsVideoPlaying }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.getElementById('mainVideo');
    if (video) {
      video.muted = false;
      video.currentTime = videoTime;
      
      if (isVideoPlaying) {
        video.play();
      }

      const timeUpdateInterval = setInterval(() => {
        if (video) {
          setVideoTime(video.currentTime);
        }
      }, 1000);

      const handleVisibilityChange = () => {
        if (!document.hidden && isVideoPlaying) {
          video.play();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        clearInterval(timeUpdateInterval);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        setIsVideoPlaying(!video.paused);
      };
    }
  }, [videoTime, isVideoPlaying]);

  const handleVideoClick = () => {
    const video = document.getElementById('mainVideo');
    if (video.paused) {
      video.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <>
      {/* Header section remains unchanged */}
      
      <div 
        className="w-full flex justify-center my-8 relative px-4 sm:px-6 md:px-8"
        onClick={handleVideoClick}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#e50046]"></div>
          </div>
        )}
        <video 
          id="mainVideo"
          autoPlay={false}
          loop 
          controls
          playsInline
          className="w-full max-w-4xl h-auto object-contain bg-black cursor-pointer"
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

      {/* Rest of the component remains unchanged */}
    </>
  );
};

export default ClickableImage;
