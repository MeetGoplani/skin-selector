import React, { useState, useEffect, useRef } from "react";

const SkinSelector = () => {
  // Add this at the beginning of your component, after the imports
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        100% { background-position: -200% 50%; }
      }
      .animate-gradient {
        animation: gradient 3s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedSkin, setSelectedSkin] = useState(null);
  const [screenSize, setScreenSize] = useState("large");
  const [clickedItem, setClickedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
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
  const skinsByTab = {
    OG: [
      {
        id: "OG00",
        preview: "/images/OG/OG00.png",
        video: "/videos/OG/OG00.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG01",
        preview: "/images/OG/OG01.png",
        video: "/videos/OG/OG01.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG02",
        preview: "/images/OG/OG02.png",
        video: "/videos/OG/OG02.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG03",
        preview: "/images/OG/OG03.png",
        video: "/videos/OG/OG03.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG04",
        preview: "/images/OG/OG04.png",
        video: "/videos/OG/OG04.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG05",
        preview: "/images/OG/OG05.png",
        video: "/videos/OG/OG05.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG06",
        preview: "/images/OG/OG06.png",
        video: "/videos/OG/OG06.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG07",
        preview: "/images/OG/OG07.png",
        video: "/videos/OG/OG07.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG08",
        preview: "/images/OG/OG08.png",
        video: "/videos/OG/OG08.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG09",
        preview: "/images/OG/OG09.png",
        video: "/videos/OG/OG09.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG10",
        preview: "/images/OG/OG10.png",
        video: "/videos/OG/OG10.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG11",
        preview: "/images/OG/OG11.png",
        video: "/videos/OG/OG11.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG12",
        preview: "/images/OG/OG12.png",
        video: "/videos/OG/OG12.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG13",
        preview: "/images/OG/OG13.png",
        video: "/videos/OG/OG13.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG14",
        preview: "/images/OG/OG14.png",
        video: "/videos/OG/OG14.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG15",
        preview: "/images/OG/OG15.png",
        video: "/videos/OG/OG15.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG16",
        preview: "/images/OG/OG16.png",
        video: "/videos/OG/OG16.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG17",
        preview: "/images/OG/OG17.png",
        video: "/videos/OG/OG17.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG18",
        preview: "/images/OG/OG18.png",
        video: "/videos/OG/OG18.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG19",
        preview: "/images/OG/OG19.png",
        video: "/videos/OG/OG19.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG20",
        preview: "/images/OG/OG20.png",
        video: "/videos/OG/OG20.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG21",
        preview: "/images/OG/OG21.png",
        video: "/videos/OG/OG21.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG22",
        preview: "/images/OG/OG22png",
        video: "/videos/OG/OG22.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG23",
        preview: "/images/OG/OG23.png",
        video: "/videos/OG/OG23.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG24",
        preview: "/images/OG/OG24.png",
        video: "/videos/OG/OG24.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG25",
        preview: "/images/OG/OG25.png",
        video: "/videos/OG/OG25.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG26",
        preview: "/images/OG/OG26.png",
        video: "/videos/OG/OG26.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG27",
        preview: "/images/OG/OG27.png",
        video: "/videos/OG/OG27.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG28",
        preview: "/images/OG/OG28.png",
        video: "/videos/OG/OG28.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG29",
        preview: "/images/OG/OG29.png",
        video: "/videos/OG/OG29.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG30",
        preview: "/images/OG/OG30.png",
        video: "/videos/OG/OG30.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG31",
        preview: "/images/OG/OG31.png",
        video: "/videos/OG/OG31.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG32",
        preview: "/images/OG/OG32.png",
        video: "/videos/OG/OG32.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG33",
        preview: "/images/OG/OG33.png",
        video: "/videos/OG/OG33.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG34",
        preview: "/images/OG/OG34.png",
        video: "/videos/OG/OG34.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG35",
        preview: "/images/OG/OG35.png",
        video: "/videos/OG/OG35.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG36",
        preview: "/images/OG/OG36.png",
        video: "/videos/OG/OG36.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG37",
        preview: "/images/OG/OG37.png",
        video: "/videos/OG/OG37.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG38",
        preview: "/images/OG/OG38.png",
        video: "/videos/OG/OG38.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG39",
        preview: "/images/OG/OG39.png",
        video: "/videos/OG/OG39.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG40",
        preview: "/images/OG/OG40.png",
        video: "/videos/OG/OG40.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG41",
        preview: "/images/OG/OG41.png",
        video: "/videos/OG/OG41.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG42",
        preview: "/images/OG/OG42.png",
        video: "/videos/OG/OG42.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG43",
        preview: "/images/OG/OG43.png",
        video: "/videos/OG/OG43.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG44",
        preview: "/images/OG/OG44.png",
        video: "/videos/OG/OG44.mp4",
        audio: "/api/placeholder/audio",
      },

      {
        id: "OG45",
        preview: "/images/OG/OG45.png",
        video: "/videos/OG/OG45.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG46",
        preview: "/images/OG/OG46.png",
        video: "/videos/OG/OG46.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG47",
        preview: "/images/OG/OG47.png",
        video: "/videos/OG/OG47.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG048",
        preview: "/images/OG/OG48.png",
        video: "/videos/OG/OG48.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG49",
        preview: "/images/OG/OG49.png",
        video: "/videos/OG/OG49.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG50",
        preview: "/images/OG/OG50.png",
        video: "/videos/OG/OG50.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG51",
        preview: "/images/OG/OG51.png",
        video: "/videos/OG/OG51.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG52",
        preview: "/images/OG/OG52.png",
        video: "/videos/OG/OG52.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG53",
        preview: "/images/OG/OG53.png",
        video: "/videos/OG/OG53.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG054",
        preview: "/images/OG/OG54.png",
        video: "/videos/OG/OG54.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG55",
        preview: "/images/OG/OG55.png",
        video: "/videos/OG/OG55.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG56",
        preview: "/images/OG/OG56.png",
        video: "/videos/OG/OG56.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG57",
        preview: "/images/OG/OG57.png",
        video: "/videos/OG/OG57.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG58",
        preview: "/images/OG/OG58.png",
        video: "/videos/OG/OG58.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG59",
        preview: "/images/OG/OG59.png",
        video: "/videos/OG/OG59.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG60",
        preview: "/images/OG/OG60.png",
        video: "/videos/OG/OG60.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG61",
        preview: "/images/OG/OG61.png",
        video: "/videos/OG/OG61.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG62",
        preview: "/images/OG/OG62.png",
        video: "/videos/OG/OG62.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG63",
        preview: "/images/OG/OG63.png",
        video: "/videos/OG/OG63.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG64",
        preview: "/images/OG/OG64.png",
        video: "/videos/OG/OG64.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG65",
        preview: "/images/OG/OG65.png",
        video: "/videos/OG/OG65.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG66",
        preview: "/images/OG/OG66.png",
        video: "/videos/OG/OG66.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG67",
        preview: "/images/OG/OG67.png",
        video: "/videos/OG/OG67.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG68",
        preview: "/images/OG/OG68.png",
        video: "/videos/OG/OG68.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG69",
        preview: "/images/OG/OG69.png",
        video: "/videos/OG/OG69.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG70",
        preview: "/images/OG/OG70.png",
        video: "/videos/OG/OG70.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG71",
        preview: "/images/OG/OG71.png",
        video: "/videos/OG/OG71.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG72",
        preview: "/images/OG/OG72.png",
        video: "/videos/OG/OG72.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG73",
        preview: "/images/OG/OG73.png",
        video: "/videos/OG/OG73.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG74",
        preview: "/images/OG/OG74.png",
        video: "/videos/OG/OG74.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG075",
        preview: "/images/OG/OG75.png",
        video: "/videos/OG/OG75.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG76",
        preview: "/images/OG/OG76.png",
        video: "/videos/OG/OG76.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG77",
        preview: "/images/OG/OG77.png",
        video: "/videos/OG/OG77.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG78",
        preview: "/images/OG/OG78.png",
        video: "/videos/OG/OG78.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG79",
        preview: "/images/OG/OG79.png",
        video: "/videos/OG/OG79.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG80",
        preview: "/images/OG/OG80.png",
        video: "/videos/OG/OG80.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG81",
        preview: "/images/OG/OG81.png",
        video: "/videos/OG/OG81.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG82",
        preview: "/images/OG/OG82.png",
        video: "/videos/OG/OG82.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG83",
        preview: "/images/OG/OG84.png",
        video: "/videos/OG/OG84.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG85",
        preview: "/images/OG/OG85.png",
        video: "/videos/OG/OG85.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG86",
        preview: "/images/OG/OG86.png",
        video: "/videos/OG/OG86.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG87",
        preview: "/images/OG/OG87.png",
        video: "/videos/OG/OG87.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG88",
        preview: "/images/OG/OG88.png",
        video: "/videos/OG/OG88.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG89",
        preview: "/images/OG/OG89.png",
        video: "/videos/OG/OG89.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG90",
        preview: "/images/OG/OG90.png",
        video: "/videos/OG/OG90.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG91",
        preview: "/images/OG/OG91.png",
        video: "/videos/OG/OG91.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG92",
        preview: "/images/OG/OG92.png",
        video: "/videos/OG/OG92.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG93",
        preview: "/images/OG/OG93.png",
        video: "/videos/OG/OG93.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG94",
        preview: "/images/OG/OG94.png",
        video: "/videos/OG/OG94.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG95",
        preview: "/images/OG/OG95.png",
        video: "/videos/OG/OG95.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG96",
        preview: "/images/OG/OG96.png",
        video: "/videos/OG/OG96.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG97",
        preview: "/images/OG/OG97.png",
        video: "/videos/OG/OG97.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG98",
        preview: "/images/OG/OG98.png",
        video: "/videos/OG/OG98.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG99",
        preview: "/images/OG/OG99.png",
        video: "/videos/OG/OG99.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG100",
        preview: "/images/OG/OG100.png",
        video: "/videos/OG/OG100.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG101",
        preview: "/images/OG/OG101.png",
        video: "/videos/OG/OG101.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG102",
        preview: "/images/OG/OG102.png",
        video: "/videos/OG/OG102.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG103",
        preview: "/images/OG/OG103.png",
        video: "/videos/OG/OG103.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG104",
        preview: "/images/OG/OG104.png",
        video: "/videos/OG/OG104.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG105",
        preview: "/images/OG/OG105.png",
        video: "/videos/OG/OG105.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG106",
        preview: "/images/OG/OG106.png",
        video: "/videos/OG/OG106.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG107",
        preview: "/images/OG/OG107.png",
        video: "/videos/OG/OG107.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG108",
        preview: "/images/OG/OG108.png",
        video: "/videos/OG/OG108.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "OG109",
        preview: "/images/OG/OG109.png",
        video: "/videos/OG/OG109.mp4",
        audio: "/api/placeholder/audio",
      },
    ],

    MILAURA: [
      {
        id: "MILAURA182",
        preview: "/images/MILAURA/MILAURA182.png",
        video: "/videos/MILAURA/MILAURA182.mp4",
        audio: "/api/placeholder/audio",
      },

      {
        id: "MILAURA254",
        preview: "/images/MILAURA/MILAURA254.png",
        video: "/videos/MILAURA/MILAURA254.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA359",
        preview: "/images/MILAURA/MILAURA359.png",
        video: "/videos/MILAURA/MILAURA359.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA671",
        preview: "/images/MILAURA/MILAURA671.png",
        video: "/videos/MILAURA/MILAURA671.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA959",
        preview: "/images/MILAURA/MILAURA959.png",
        video: "/videos/MILAURA/MILAURA959.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA975",
        preview: "/images/MILAURA/MILAURA975.png",
        video: "/videos/MILAURA/MILAURA975.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA1025",
        preview: "/images/MILAURA/MILAURA1025.png",
        video: "/videos/MILAURA/MILAURA1025.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA1360",
        preview: "/images/MILAURA/MILAURA1360.png",
        video: "/videos/MILAURA/MILAURA1360.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA1649",
        preview: "/images/MILAURA/MILAURA1649.png",
        video: "/videos/MILAURA/MILAURA1649.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA1685",
        preview: "/images/MILAURA/MILAURA1685.png",
        video: "/videos/MILAURA/MILAURA1685.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA1689",
        preview: "/images/MILAURA/MILAURA1689.png",
        video: "/videos/MILAURA/MILAURA1689.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA1957",
        preview: "/images/MILAURA/MILAURA1957.png",
        video: "/videos/MILAURA/MILAURA1957.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2018",
        preview: "/images/MILAURA/MILAURA2018.png",
        video: "/videos/MILAURA/MILAURA2018.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2094",
        preview: "/images/MILAURA/MILAURA2094.png",
        video: "/videos/MILAURA/MILAURA2094.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2118",
        preview: "/images/MILAURA/MILAURA2118.png",
        video: "/videos/MILAURA/MILAURA2118.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2183",
        preview: "/images/MILAURA/MILAURA2183.png",
        video: "/videos/MILAURA/MILAURA2183.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2245",
        preview: "/images/MILAURA/MILAURA2245.png",
        video: "/videos/MILAURA/MILAURA2245.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2278",
        preview: "/images/MILAURA/MILAURA2278.png",
        video: "/videos/MILAURA/MILAURA2278.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2293",
        preview: "/images/MILAURA/MILAURA2293.png",
        video: "/videos/MILAURA/MILAURA2293.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2370",
        preview: "/images/MILAURA/MILAURA2370.png",
        video: "/videos/MILAURA/MILAURA2370.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2388",
        preview: "/images/MILAURA/MILAURA2388.png",
        video: "/videos/MILAURA/MILAURA2388.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2389",
        preview: "/images/MILAURA/MILAURA2389.png",
        video: "/videos/MILAURA/MILAURA2389.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2415",
        preview: "/images/MILAURA/MILAURA2415.png",
        video: "/videos/MILAURA/MILAURA2415.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2584",
        preview: "/images/MILAURA/MILAURA2584.png",
        video: "/videos/MILAURA/MILAURA2584.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2619",
        preview: "/images/MILAURA/MILAURA2619.png",
        video: "/videos/MILAURA/MILAURA2619.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2641",
        preview: "/images/MILAURA/MILAURA2641.png",
        video: "/videos/MILAURA/MILAURA2641.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2851",
        preview: "/images/MILAURA/MILAURA2851.png",
        video: "/videos/MILAURA/MILAURA2851.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA2949",
        preview: "/images/MILAURA/MILAURA2949.png",
        video: "/videos/MILAURA/MILAURA2949.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA3053",
        preview: "/images/MILAURA/MILAURA3053.png",
        video: "/videos/MILAURA/MILAURA3053.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA3145",
        preview: "/images/MILAURA/MILAURA3145.png",
        video: "/videos/MILAURA/MILAURA3145.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA3157",
        preview: "/images/MILAURA/MILAURA3157.png",
        video: "/videos/MILAURA/MILAURA3157.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA3171",
        preview: "/images/MILAURA/MILAURA3171.png",
        video: "/videos/MILAURA/MILAURA3171.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA3173",
        preview: "/images/MILAURA/MILAURA3173.png",
        video: "/videos/MILAURA/MILAURA3173.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MILAURA3275",
        preview: "/images/MILAURA/MILAURA3275.png",
        video: "/videos/MILAURA/MILAURA3275.mp4",
        audio: "/api/placeholder/audio",
      },
    ],
    GLORP: [
      {
        id: "GLORP201",
        preview: "/images/GLORP/GLORP201.png",
        video: "/videos/GLORP/GLORP201.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "GLORP452",
        preview: "/images/GLORP/GLORP452.png",
        video: "/videos/GLORP/GLORP452.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "GLORP484",
        preview: "/images/GLORP/GLORP484.png",
        video: "/videos/GLORP/GLORP484.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "GLORP582",
        preview: "/images/GLORP/GLORP582.png",
        video: "/videos/GLORP/GLORP582.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "GLORP694",
        preview: "/images/GLORP/GLORP694.png",
        video: "/videos/GLORP/GLORP694.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "GLORP866",
        preview: "/images/GLORP/GLORP866.png",
        video: "/videos/GLORP/GLORP866.mp4",
        audio: "/api/placeholder/audio",
      },
    ],
    HONORARI: [
      {
        id: "AUTISMCAPITAL",
        preview: "/images/HONORARI/AUTISMCAPITAL.png",
        video: "/videos/HONORARI/AUTISMCAPITAL.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "HEARTWOOD",
        preview: "/images/HONORARI/HEARTWOOD.png",
        video: "/videos/HONORARI/HEARTWOOD.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "MINIMALADY",
        preview: "/images/HONORARI/MINIMALADY.png",
        video: "/videos/HONORARI/MINIMALADY.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "SCOOTER",
        preview: "/images/HONORARI/SCOOTER.png",
        video: "/videos/HONORARI/SCOOTER.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "UNFORTUNATELY",
        preview: "/images/HONORARI/UNFORTUNATELY.png",
        video: "/videos/HONORARI/UNFORTUNATELY.mp4",
        audio: "/api/placeholder/audio",
      },
    ],
    OTHER: [
      {
        id: "BEATERSON",
        preview: "/images/OTHER/BEATERSON.png",
        video: "/videos/OTHER/BEATERSON.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "BOOTLEGRAVER00",
        preview: "/images/OTHER/BOOTLEGRAVER00.png",
        video: "/videos/OTHER/BOOTLEGRAVER00.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "BOOTLEGRAVER01",
        preview: "/images/OTHER/BOOTLEGRAVER01.png",
        video: "/videos/OTHER/BOOTLEGRAVER01.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "FORESKINFRIEND0",
        preview: "/images/OTHER/FORESKINFRIEND0.png",
        video: "/videos/OTHER/FORESKINFRIEND0.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "LUCE756",
        preview: "/images/OTHER/LUCE756.png",
        video: "/videos/OTHER/LUCE756.mp4",
        audio: "/api/placeholder/audio",
      },
      {
        id: "TRUMPTARDIO3865",
        preview: "/images/OTHER/TRUMPTARDIO3865.png",
        video: "/videos/OTHER/TRUMPTARDIO3865.mp4",
        audio: "/api/placeholder/audio",
      },
    ],
  };

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
        // Ensure video is visible by playing and immediately pausing
        const playPromise = videoRef
          .play()
          .then(() => {
            videoRef.pause();
          })
          .catch((e) => {
            if (e.name !== "AbortError") {
              console.error("Video playback failed:", e);
            }
          });

        if (!isMobile && hoveredItem === skin.id) {
          // On desktop, play video when hovered
          playPromise.then(() => {
            videoRef.play().catch((e) => {
              if (e.name !== "AbortError") {
                console.error("Video playback failed:", e);
              }
            });
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
                    : "bg-transparent text-cyan-400 border border-blue-800"
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
                    : "bg-transparent text-cyan-400 border border-blue-800"
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
        {getCurrentSkins().map((skin) => (
          <div
            key={skin.id}
            className="relative flex flex-col items-center border border-blue-800 rounded-lg p-1 cursor-pointer transition-transform hover:scale-105 w-full max-w-[170px] h-[200px]"
            onClick={() => handleItemInteraction(skin)}
            onMouseEnter={() => handleMouseEnter(skin)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Preview Image container */}
            <div className="w-full h-[170px] relative">
              <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[skin.id] = el)}
                  src={skin.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

            {/* Text label with silver gradient */}
            <div className="h-[30px] w-full flex items-center justify-center">
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

      {/* Safe area at the bottom to ensure all content is accessible */}
      <div className="h-16"></div>

      {/* Updated Responsive Popup */}
      {selectedSkin && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-gray-900 border-2 border-blue-800 rounded-lg p-3 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <h2 className="text-xl sm:text-2xl text-pink-600 font-bold truncate pr-2">
                {selectedSkin.id}
              </h2>
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
                controls
                autoPlay
                loop
                playsInline
              />
            </div>
            <p className="text-white text-sm sm:text-base">
              This is {selectedSkin.id}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinSelector;
