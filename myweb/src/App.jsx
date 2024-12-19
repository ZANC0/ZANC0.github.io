import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'
import Navbar from "./components/Navbar"
import Projects from './pages/Projects';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>

        <div>
          <h3>Zanco Farrell's Blog</h3>
          <Navbar/>
        </div>
        
        <div className='section'>
          <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
