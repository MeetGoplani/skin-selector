import React, { useState, useEffect, useRef } from 'react';

const SkinSelector = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [screenSize, setScreenSize] = useState('large');
  const [clickedItem, setClickedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const audioRef = useRef(null);
  const videoRefs = useRef({});

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 480) {
        setScreenSize('small');
      } else if (window.innerWidth < 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const isMobile = screenSize !== 'large';

  const tabs = ['ALL', 'OG', 'MILAURA', 'GLORP', 'HONORARY', 'OTHER'];
  
  // Define different skins for each tab - all using videos
  const skinsByTab = {
    ALL: [
      { id: 'AUTISMCAPITAL', video: '/videos/earth.mp4', audio: '/audios/earth-rumble-128880.mp3' },
      { id: 'BEATERSON', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'BOOTLEGRAVER00', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'BOOTLEGRAVER01', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'FORESKINFRIENDO', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP201', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP452', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP484', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' }
    ],
    OG: [
      { id: 'OG_CLASSIC1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_CLASSIC2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_RARE1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_RARE2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_SPECIAL1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_SPECIAL2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_LIMITED1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'OG_LIMITED2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' }
    ],
    MILAURA: [
      { id: 'MILAURA_RED', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_BLUE', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_GREEN', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_GOLD', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_SILVER', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_BRONZE', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_CRYSTAL', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MILAURA_SHADOW', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' }
    ],
    GLORP: [
      { id: 'GLORP101', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP202', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP303', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP404', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP505', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP606', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP707', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'GLORP808', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' }
    ],
    HONORARY: [
      { id: 'HONORARY_ALPHA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_BETA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_GAMMA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_DELTA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_EPSILON', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_ZETA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_ETA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'HONORARY_THETA', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' }
    ],
    OTHER: [
      { id: 'SPECIAL_EDITION1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'SPECIAL_EDITION2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'LIMITED_DROP1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'LIMITED_DROP2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'COMMUNITY_CREATED1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'COMMUNITY_CREATED2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MYSTERY_BOX1', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' },
      { id: 'MYSTERY_BOX2', video: '/videos/placeholder.mp4', audio: '/api/placeholder/audio' }
    ]
  };

  // Get current skins based on active tab
  const getCurrentSkins = () => {
    return skinsByTab[activeTab] || skinsByTab.ALL;
  };

  // Handle video playback on hover or click
  useEffect(() => {
    const currentSkins = getCurrentSkins();
    
    currentSkins.forEach(skin => {
      const videoRef = videoRefs.current[skin.id];
      if (videoRef) {
        if (!isMobile && hoveredItem === skin.id) {
          // On desktop, play video when hovered
          videoRef.play().catch(e => console.error("Video playback failed:", e));
        } else if (isMobile && clickedItem === skin.id) {
          // On mobile, play video when clicked once
          videoRef.play().catch(e => console.error("Video playback failed:", e));
        } else {
          // Pause and reset when not hovered/clicked
          videoRef.pause();
          videoRef.currentTime = 0;
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
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
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
    document.body.style.backgroundColor = '#000';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100vh';
    // Remove overflow: hidden to allow scrolling
    document.body.style.overflowX = 'hidden'; // Only prevent horizontal scrolling
    document.body.style.overflowY = 'auto';   // Allow vertical scrolling
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.minHeight = '';
      document.body.style.overflowX = '';
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-black text-white overflow-y-auto pb-16 m-0">
      <audio ref={audioRef} className="hidden" />
      
      {/* Header */}
      <div className="w-full flex justify-between items-center px-4 pt-6 sticky top-0 bg-black z-10">
        <div className="w-16 md:w-32">
          {/* Left space */}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-16">
          <h1 className="text-2xl md:text-4xl font-bold text-pink-600">SKINS</h1>
          <button className="text-sm md:text-base">back</button>
          <h1 className="text-2xl md:text-4xl font-bold text-pink-600">SOCIALS</h1>
        </div>
        
        <div className="w-16 md:w-32">
          {/* Right space */}
        </div>
      </div>
      
      {/* Tabs layout - 3x2 grid on small screens, original layout on larger screens */}
      <div className={`${screenSize === 'small' ? 'sticky' : ''} top-16 bg-black z-10 w-full py-2`}>
        {screenSize === 'small' ? (
          // Small screens: 3x2 grid (3 tabs per row, 2 rows)
          <div className="grid grid-cols-3 gap-2 px-2 my-4 max-w-md mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-3 text-xs rounded-md ${
                  activeTab === tab 
                    ? 'bg-teal-400 text-black' 
                    : 'bg-transparent text-cyan-400 border border-blue-800'
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
            {tabs.map(tab => (
              <button
                key={tab}
                className={`py-2 px-3 text-xs md:text-sm rounded-md ${
                  activeTab === tab 
                    ? 'bg-teal-400 text-black' 
                    : 'bg-transparent text-cyan-400 border border-blue-800'
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
      <div className={`grid ${
        screenSize === 'small' 
          ? 'grid-cols-1' 
          : screenSize === 'medium' 
            ? 'grid-cols-2' 
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      } gap-3 p-2 max-w-4xl mx-auto w-full place-items-center`}>
        {getCurrentSkins().map(skin => (
          <div 
            key={skin.id} 
            className="relative flex flex-col items-center border border-blue-800 rounded-lg p-1 cursor-pointer transition-transform hover:scale-105 w-full max-w-[170px] h-[200px]"
            onClick={() => handleItemInteraction(skin)}
            onMouseEnter={() => handleMouseEnter(skin)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Video container */}
            <div className="w-full h-[170px] relative">
              <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
                <video 
                  ref={el => videoRefs.current[skin.id] = el}
                  src={skin.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
            
            {/* Text label */}
            <div className="h-[30px] w-full flex items-center justify-center">
              <p className="text-cyan-400 text-xs md:text-sm truncate">{skin.id}</p>
            </div>
            
            {clickedItem === skin.id && isMobile && (
              <div className="absolute top-0 right-0 bg-pink-600 rounded-full w-3 h-3"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Safe area at the bottom to ensure all content is accessible */}
      <div className="h-16"></div>
      
      {/* Responsive Popup */}
      {selectedSkin && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-gray-900 border-2 border-blue-800 rounded-lg p-3 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h2 className="text-xl sm:text-2xl text-pink-600 font-bold truncate pr-2">{selectedSkin.id}</h2>
              <button 
                onClick={() => setSelectedSkin(null)}
                className="text-cyan-400 hover:text-white text-lg sm:text-xl"
              >
                ✕
              </button>
            </div>
            <div className="aspect-square w-full mb-3 sm:mb-4">
              <video 
                src={selectedSkin.video}
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <p className="text-white text-sm sm:text-base">Details about {selectedSkin.id}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinSelector;