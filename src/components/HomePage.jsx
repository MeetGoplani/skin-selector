import React, { useState } from "react";
import { Link } from "react-router-dom";

const ClickableImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

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

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-16">
          <Link to="/skins">
            <p className="text-6xl md:text-8xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-10">
              skins
            </p>
          </Link>
          <img
            src="/images/logo2.png"
            className="w-full h-80  -my-24  md:w-48 "
          />

          <p className="text-6xl md:text-8xl font-bold text-[#e50046] font-['Pastor_of_Muppets'] pt-10">
            socials
          </p>
        </div>

        <div className="w-16 md:w-32">
          <img
            src="/images/percentage.gif"
            alt="Right Animation"
            className="w-16 h-16 md:w-48 md:h-48 fixed right-0 top-0"
          />
        </div>
      </div>

      <div className="w-full flex justify-center my-8 relative">
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
          className="w-full max-w-4xl"
          onLoadedData={() => setIsLoading(false)}
        >
          <source src="https://ewcbje9d7p.ufs.sh/f/ijNs5VSrK0Resbzi1dewyBu1vd4nWrQOiVeGSXY8gRbcTJLx" type="video/mp4" />
        </video>
      </div>

      <div style={{ position: "relative", width: "800px", margin: "auto" }}>
        {/* Background Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af25057bef9689a737b5867b027ff4d96284e2dad14fb187be42d160c88b7ea7?placeholderIfAbsent=true&apiKey=d5a57126427d4ef7bef61b7201f8af28"
          alt="Interactive Image"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        {/* Clickable Areas */}
        <a
          href="/skins"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "52%", // Adjust this value based on the position
            width: "100px",
            height: "50px",
            // backgroundColor: "rgba(255, 0, 0, 0.3)",
            left: 0, // Transparent red overlay for visualization
          }}
        />

        <a
          href=" https://linktr.ee/miraricielador"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "50%",
            left: "84%",
            width: "100px",
            height: "50px",
            // backgroundColor: "rgba(0, 255, 0, 0.3)", // Transparent green overlay
          }}
        />
      </div>
    </>
  );
};

export default ClickableImage;
