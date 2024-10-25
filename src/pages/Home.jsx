import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import Loop from '../components/Loop';
import vid from '../assets/vid1.mp4';
import AboutUs from '../components/AboutUs/AboutUsDem';

function Home() {
  return (
    <div className='bg-slate-950'>
      {/* <video src={vid} className="opacity-30 object-cover absolute top-0 min-h-full" autoPlay loop muted/> */}
        <HomePage />
        <AboutUs />
      {/* <Background/> */}
      {/* <About />
      <About1 />
      <About2 /> */}
        <Loop />
      </div>

  );
}

export default Home;
