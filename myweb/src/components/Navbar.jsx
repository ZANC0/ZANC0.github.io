import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import "./Navbar.css"
import AboutMe from '../pages/AboutMe';
function Navbar(){
    return(
        <>
            <div className='navbar'>
                <Link to="/">about me</Link>
            
                <Link to="/blog">blog</Link>
            
                <Link to="/projects">projects</Link>
            </div>
        </>
    )
}
export default Navbar