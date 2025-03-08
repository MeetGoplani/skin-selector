import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkinSelector from './skinselector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SkinSelector />
    </div>
  )
}

export default App
