import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './pages/AboutMe'
import Blog from './pages/Blog'
import Navbar from "./components/Navbar"
import Projects from './pages/Projects';
import UpdateBlog from './pages/UpdateBlog';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>

        <div className='info-bar'>
          <p>Zanco Farrell's Blog</p>
          <Navbar/>
          <UpdateBlog/>
        </div>
        
        <div className='section-contents'>
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
