import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="section">
        <h2>Zanco Farrell's Blog</h2>
      </div>
      <div className="section">
        <h2>About</h2>

      </div>
      <div className="section">
        <h2>Contact Me</h2>
      </div>
      <div className="section">
        <h2>Journey</h2>
      </div>
    </>
  )
}

export default App
