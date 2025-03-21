import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SkinSelector from './skinselector';

const App = () => {
  const [videoTime, setVideoTime] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage videoTime={videoTime} setVideoTime={setVideoTime} isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />} />
          <Route path="/skins" element={<SkinSelector videoTime={videoTime} isVideoPlaying={isVideoPlaying} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
