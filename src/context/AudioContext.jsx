import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const AudioContext = createContext();

export const useAudioVideo = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Create a video element that will persist across routes
    const video = document.createElement('video');
    video.src = '/videos/teaser.mp4';
    video.loop = true;
    video.muted = !isHomePage; // Mute on skins page, unmute on home
    video.style.display = isHomePage ? 'block' : 'none'; // Only show on homepage
    video.id = 'persistent-video';
    video.playsInline = true;
    
    // Add to DOM if on homepage, otherwise just keep reference
    if (isHomePage) {
      const container = document.getElementById('video-container');
      if (container && !container.contains(video)) {
        container.appendChild(video);
      }
    }
    
    videoRef.current = video;

    return () => {
      // Don't remove the video element on unmount, just detach if needed
      if (video.parentNode && isHomePage) {
        video.parentNode.removeChild(video);
      }
    };
  }, [isHomePage]);

  // Handle route changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isHomePage;
      videoRef.current.style.display = isHomePage ? 'block' : 'none';
    }
  }, [isHomePage]);

  const startPlayback = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => console.log("Video playback prevented:", error));
    }
  };

  const value = {
    videoRef,
    isPlaying,
    startPlayback
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};