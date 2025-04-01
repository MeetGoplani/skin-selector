import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const ClickableImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  // Remove isMuted and audioRef

  useEffect(() => {
    const video = document.getElementById("mainVideo");

    if (video) {
      video.muted = false; // Ensure video is not muted
      video
        .play()
        .catch((err) => console.log("Video playback prevented:", err));

      // Add event listeners for various interactions
      const playVideo = () => {
        video
          .play()
          .catch((err) => console.log("Video playback prevented:", err));
      };

      window.addEventListener("scroll", playVideo);
      window.addEventListener("keydown", playVideo);
      window.addEventListener("click", playVideo);
      window.addEventListener("touchstart", playVideo);

      return () => {
        window.removeEventListener("scroll", playVideo);
        window.removeEventListener("keydown", playVideo);
        window.removeEventListener("click", playVideo);
        window.removeEventListener("touchstart", playVideo);
      };
    }
  }, []);

  // Remove togglePlay function as we want continuous playback

  return (
    <div className="">
       <Header/>
      {/* Video section with stronger centering for iPad/tablet screens */}
      <div className="w-full flex flex-col items-center justify-center my-8 relative px-4 sm:px-6 md:px-8">
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
          className="w-full max-w-4xl h-auto object-contain bg-black mx-auto"
          style={{ margin: '0 auto', display: 'block' }}
          onLoadedData={() => setIsLoading(false)}
          onError={(e) => console.error("Video Error:", e)}
          poster="/images/video-thumbnail.jpg"
        >
          <source
            src="https://ewcbje9d7p.ufs.sh/f/ijNs5VSrK0Resbzi1dewyBu1vd4nWrQOiVeGSXY8gRbcTJLx"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Interactive image section with stronger centering */}
      <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-4xl" style={{ margin: '0 auto' }}>
          <img
            src="https://ewcbje9d7p.ufs.sh/f/ijNs5VSrK0ReD6gmVyimRarG5XP8UE2OZBseHyzuwd7JIYAi"
            alt="Interactive Image"
            className="w-full h-auto"
            style={{ margin: '0 auto', display: 'block' }}
          />
          <Link to="/skins" className="no-underline">
            <div
              rel="noopener noreferrer"
              className="absolute"
              style={{
                top: "52%",
                width: "100px",
                height: "50px",
                left: 0,
              }}
            />
          </Link>
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
      {/* Remove audio element */}
    </div>
  );
};

export default ClickableImage;
