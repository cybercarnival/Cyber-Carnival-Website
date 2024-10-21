import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import Loop from '../components/Loop'
import About1 from "../components/About1/about1"
import About from "../components/About/about"
import About2 from "../components/About2/about2"
import vid from '../assets/vid1.mp4';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className='bg-slate-950'>
  
      <video src={vid} className="opacity-30 object-cover absolute top-0 min-h-full" autoPlay loop muted/>
        <HomePage />
      <About />
      <About1 />
      <About2 />
      
      
        <Loop />
    </div>
    
  )
}

export default Home


