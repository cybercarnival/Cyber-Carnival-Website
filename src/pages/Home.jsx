import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import Loop from '../components/Loop'
import About1 from "../components/About1/about1"
import About from "../components/About/about"
import About2 from "../components/About2/about2"
function Home() {
  return (
    <div >
        <HomePage />
      <About />
      <About1 />
      <About2 />
      
      
        <Loop />
    </div>
    
  )
}

export default Home


