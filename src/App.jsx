import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SkinSelector from './skinselector'
import MirariPromo from './home-page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MirariPromo />} />
      <Route path="/skins" element={<SkinSelector />} />
    </Routes>
  )
}

export default App
