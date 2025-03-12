import React, { useState, useEffect, useRef } from "react";
import { skinsByTab } from "./lib/videoData";

const SkinSelector = () => {
  // Add this at the beginning of your component, after the imports
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        100% { background-position: -200% 50%; }
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-gradient {
        animation: gradient 3s linear infinite;
      }
      .shimmer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.08) 50%,
          transparent 100%
        );
        animation: shimmer 1.5s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Add this with other state variables at the top
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [screenSize, setScreenSize] = useState("large");
  const [clickedItem, setClickedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState({}); // Add this line
  const audioRef = useRef(null);
  const videoRefs = useRef({});

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 480) {
        setScreenSize("small");
      } else if (window.innerWidth < 768) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const isMobile = screenSize !== "large";

  const tabs = ["ALL", "OG", "MILAURA", "GLORP", "HONORARI", "OTHER"];

  // Define different skins for each tab - all using videos
 

  // Get current skins based on active tab
  const getCurrentSkins = () => {
    if (activeTab === "ALL") {
      // Combine all skins from every tab except 'ALL' itself
      const allSkins = [
        ...skinsByTab.OG,
        ...skinsByTab.MILAURA,
        ...skinsByTab.GLORP,
        ...skinsByTab.HONORARI,
        ...skinsByTab.OTHER,
      ];
      // Remove duplicates based on id and sort alphabetically
      return [
        ...new Map(allSkins.map((skin) => [skin.id, skin])).values(),
      ].sort((a, b) => {
        // Extract prefix and number
        const [aPrefix, aNum] = a.id.match(/([A-Za-z_]+)(\d*)/).slice(1);
        const [bPrefix, bNum] = b.id.match(/([A-Za-z_]+)(\d*)/).slice(1);

        // Compare prefixes first
        if (aPrefix !== bPrefix) {
          return aPrefix.localeCompare(bPrefix);
        }
        // If prefixes are same, compare numbers
        return parseInt(aNum || 0) - parseInt(bNum || 0);
      });
    }
    return [...skinsByTab[activeTab]].sort((a, b) => {
      // Extract prefix and number
      const [aPrefix, aNum] = a.id.match(/([A-Za-z_]+)(\d*)/).slice(1);
      const [bPrefix, bNum] = b.id.match(/([A-Za-z_]+)(\d*)/).slice(1);

      // Compare prefixes first
      if (aPrefix !== bPrefix) {
        return aPrefix.localeCompare(bPrefix);
      }
      // If prefixes are same, compare numbers
      return parseInt(aNum || 0) - parseInt(bNum || 0);
    });
  };

  // Handle video playback on hover or click
  useEffect(() => {
    const currentSkins = getCurrentSkins();

    currentSkins.forEach(skin => {
      const videoRef = videoRefs.current[skin.id];
      if (videoRef) {
        // Load and show first frame
        videoRef.load();
        videoRef.currentTime = 0;
        videoRef.pause();
        
        

        if (!isMobile && hoveredItem === skin.id) {
          // On desktop, play video when hovered
          
            videoRef.play().catch((e) => {
              if (e.name !== "AbortError") {
                console.error("Video playback failed:", e);
              }
            });
          
        } else if (isMobile && clickedItem === skin.id) {
          // On mobile, play video when clicked once
          playPromise.then(() => {
            videoRef.play().catch((e) => {
              if (e.name !== "AbortError") {
                console.error("Video playback failed:", e);
              }
            });
          });
        }
      }
    });
  }, [hoveredItem, clickedItem, activeTab, isMobile]);

  const handleItemInteraction = (skin) => {
    if (isMobile) {
      // On mobile: first click plays audio and video, second click opens popup
      if (clickedItem === skin.id) {
        setSelectedSkin(skin);
        setClickedItem(null); // Reset after opening popup
      } else {
        setClickedItem(skin.id);
        playAudio(skin.audio);
      }
    } else {
      // On desktop: click opens popup
      setSelectedSkin(skin);
    }
  };

  const playAudio = (audioSrc) => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current
        .play()
        .catch((e) => console.error("Audio playback failed:", e));
    }
  };

  const handleMouseEnter = (skin) => {
    if (!isMobile) {
      setHoveredItem(skin.id);
      playAudio(skin.audio);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredItem(null);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  // Apply styles to ensure the page has a black background but allow scrolling
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.minHeight = "100vh";
    // Remove overflow: hidden to allow scrolling
    document.body.style.overflowX = "hidden"; // Only prevent horizontal scrolling
    document.body.style.overflowY = "auto"; // Allow vertical scrolling

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.minHeight = "";
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
    };
  }, []);

  // Add these new state variables at the top with other states
  const [visibleItems, setVisibleItems] = useState(20); // Initial number of items to show
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  // Add this new useEffect for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          // Simulate loading delay
          setTimeout(() => {
            setVisibleItems((prev) => prev + 12); // Load 12 more items
            setLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  // Modify the grid layout section to include infinite scroll
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-black text-white overflow-y-auto pb-16 m-0">
      <audio ref={audioRef} className="hidden" />

      {/* Header */}
      <div className="w-full flex justify-between items-center px-4 pt-6 sticky top-0 bg-black z-10">
        <div className="w-16 md:w-32">{/* Left space */}</div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-16">
          <h1 className="text-2xl md:text-4xl font-bold text-pink-600">
            SKINS
          </h1>
          <button className="text-sm md:text-base">back</button>
          <h1 className="text-2xl md:text-4xl font-bold text-pink-600">
            SOCIALS
          </h1>
        </div>

        <div className="w-16 md:w-32">{/* Right space */}</div>
      </div>

      {/* Tabs layout - 3x2 grid on small screens, original layout on larger screens */}
      <div
        className={`${
          screenSize === "small" ? "sticky" : ""
        } top-16 bg-black z-10 w-full py-2`}
      >
        {screenSize === "small" ? (
          // Small screens: 3x2 grid (3 tabs per row, 2 rows)
          <div className="grid grid-cols-3 gap-2 px-2 my-4 max-w-md mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-3 text-xs rounded-md ${
                  activeTab === tab
                    ? "bg-teal-400 text-black"
                    : "bg-transparent text-cyan-400  border-blue-800 border-4"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        ) : (
          // Medium and large screens: keep the original layout
          <div className="flex flex-row flex-wrap justify-center gap-2 px-2 my-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-3 text-xs md:text-sm rounded-md ${
                  activeTab === tab
                    ? "bg-teal-400 text-black"
                    : "bg-transparent text-cyan-400  border-blue-800 border-4"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid Layout - Adaptive based on screen size */}
      <div
        className={`grid ${
          screenSize === "small"
            ? "grid-cols-2"
            : screenSize === "medium"
            ? "grid-cols-2"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } gap-3 p-2 max-w-4xl mx-auto w-full place-items-center`}
      >
        {getCurrentSkins().slice(0, visibleItems).map((skin) => (
          <div
            key={skin.id}
            className="relative flex flex-col items-center border-4 border-blue-800 rounded-lg cursor-pointer transition-transform hover:scale-105 w-full max-w-[170px] h-[200px]"
            onClick={() => handleItemInteraction(skin)}
            onMouseEnter={() => handleMouseEnter(skin)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Preview Image container */}
            <div className="w-full h-[170px] relative">
              <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
                {!loadedVideos[skin.id] && <div className="shimmer" />}
                <video
                  ref={(el) => (videoRefs.current[skin.id] = el)}
                  src={skin.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setLoadedVideos(prev => ({ ...prev, [skin.id]: true }))}
                />
              </div>
            </div>

            {/* Text label with silver gradient */}
            <div className="h-[30px] w-full flex items-center justify-center bg-blue-900">
              <p className="text-xs md:text-sm truncate animate-gradient bg-gradient-to-r from-cyan-600 via-cyan-100 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_100%]">
                {skin.id}
              </p>
            </div>

            {clickedItem === skin.id && isMobile && (
              <div className="absolute top-0 right-0 bg-pink-600 rounded-full w-3 h-3"></div>
            )}
          </div>
        ))}
      </div>

      {/* Loading indicator and observer target */}
      {getCurrentSkins().length > visibleItems && (
        <div
          ref={observerTarget}
          className="w-full flex justify-center py-4"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-[spin_1s_linear_infinite]"></div>
              <span className="text-cyan-400">Loading more...</span>
            </div>
          ) : (
            <div className="h-8" /> // Spacer for observer
          )}
        </div>
      )}

      {/* Safe area at the bottom to ensure all content is accessible */}
      <div className="h-16"></div>

      {/* Updated Responsive Popup */}
      {selectedSkin && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-gray-900 border-4 border-blue-800 rounded-lg   max-w-xs sm:max-w-sm md:max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h2 className="text-xl sm:text-2xl text-green-600 pl-4 font-bold truncate pr-4 ">
                {selectedSkin.id}
              </h2>
              <button 
                onClick={() => setSelectedSkin(null)}
                className="text-cyan-400 hover:text-white text-lg sm:text-xl mt-2 mr-5"
              >
                ✕
              </button>
            </div>
            <div className="aspect-square w-full mb-3 sm:mb-4">
              <video
                src={selectedSkin.video}
                className="w-full h-full object-cover rounded-lg"
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
            <p>This is {selectedSkin.id}</p>
              {selectedSkin.link && (
                <a
                  href={selectedSkin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 hover:text-cyan-300 underline"
                >
                  View →
                </a>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinSelector;
