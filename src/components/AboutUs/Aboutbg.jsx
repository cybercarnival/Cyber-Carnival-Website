import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Background = () => {
  const text = "CYBER CARNIVAL"; // The text to display vertically

  return (
    <ParallaxProvider>
      <div className="relative w-full h-full overflow-hidden pointer-events-none">
        {/* Glowing blobs */}
        <div className="absolute blob top-10 left-10" />
        <div className="absolute blob bottom-10 right-10" />
        <div className="absolute blob top-10 right-10" />
        <div className="absolute blob bottom-10 left-10" />

        {/* Text with Parallax effect */}
        <Parallax
          translateY={[-30, 30]} 
          className="text-teal-900/10 text-[14vw] font-jersey transform absolute left-1/2"
          style={{ 
            whiteSpace: 'nowrap', 
            translate: '-50% -50%', 
            textShadow: '0 0 11px rgba(0, 255, 255, 0.4)', // Lighter teal shadow
            willChange: 'transform' 
          }} 
        >
          {text.split('').map((char, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center" 
              style={{ margin: '0', lineHeight: '0.8' }} // Reduce vertical gap between letters
            >
              {char}
            </div>
          ))}
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default Background;
