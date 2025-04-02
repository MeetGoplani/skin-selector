import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SkinSelector from './skinselector'
import HomePage from './components/HomePage'
import Layout from './components/Layout'
import { AudioProvider } from './context/AudioContext'

function App() {
  return (
    <AudioProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/skins" element={<SkinSelector />} />
        </Route>
      </Routes>
    </AudioProvider>
  )
}

export default App
