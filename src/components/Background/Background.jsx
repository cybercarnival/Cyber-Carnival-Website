import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Background = () => {
  const text = "CYBER CARNIVAL"; 

  return (
    <ParallaxProvider>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Glowing blobs */}
        <div className="blob top-0 left-10" />
        {/* <div className="blob bottom-10 right-44" /> */}
        <div className="blob top-1/4 right-10" />
        <div className="blob bottom-0 left-10" />

       
        <Parallax
          translateY={[-30, 30]} 
          className="text-teal-900/10 text-[14vw] font-jersey transform absolute left-1/2"
          style={{ 
            whiteSpace: 'nowrap', 
            translate: '-50% -50%', 
            textShadow: '0 0 11px rgba(0, 255, 255, 0.4)', 
            willChange: 'transform' 
          }} 
        >
          {text.split('').map((char, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center" 
              style={{ margin: '0', lineHeight: '0.8' }} 
            >
              {char}
            </div>
          ))}
        </Parallax>

        <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden" />
      </div>
    </ParallaxProvider>
  );
};

export default Background;