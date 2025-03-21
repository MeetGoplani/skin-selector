import React, { createContext, useEffect, useRef, useState } from 'react';

export const AudioContext = createContext({
  videoRef: { current: null },
  isPlaying: false
});

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/videos/teaser.m4a');
    audio.loop = true;
    let hasStarted = false;
    videoRef.current = audio;

    const startAudio = () => {
      if (!hasStarted) {
        audio.play()
          .then(() => {
            hasStarted = true;
            setIsPlaying(true);
          })
          .catch(error => console.log("Audio playback prevented:", error));
      }
    };

    // Handle various user interactions
    const handleInteraction = () => {
      startAudio();
    };

    // Add event listeners for common user interactions
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    
    return () => {
      audio.pause();
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ videoRef, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};