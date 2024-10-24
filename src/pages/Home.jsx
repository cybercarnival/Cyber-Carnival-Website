import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import Loop from '../components/Loop';
import vid from '../assets/vid1.mp4';
import AboutUs from '../components/AboutUs/AboutUs';

function Home() {
  return (
    <div className='bg-slate-950'>
      
      {/* HomePage with Video Background */}
      <div className="relative">
        <video 
          src={vid} 
          className="opacity-30 object-cover absolute top-0 left-0 w-full h-full z-0"
          autoPlay 
          loop 
          muted 
        />
        <div className="relative z-10">
          <HomePage />
        </div>
      </div>

      {/* AboutUs Section with Background text */}
      <div className='relative z-10'>
        <AboutUs />
      </div>

      {/* Loop Component */}
      <div className="relative z-10">
        <Loop />
      </div>
    </div>
  );
}

export default Home;
