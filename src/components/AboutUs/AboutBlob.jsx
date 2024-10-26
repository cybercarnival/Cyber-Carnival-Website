import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlobBubble = () => {
  const blobRef = useRef(null); 

  useEffect(() => {
    if (gsap && ScrollTrigger) { // Check if gsap and ScrollTrigger exist
      // GSAP animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: blobRef.current, 
          start: 'top 100%', 
          end: 'top 0%', 
          scrub: 1, 
          markers: false,
          toggleActions: 'play none none none',
        },
      });

      tl.to(blobRef.current, {
        // x: '100vw', 
        y: '-100vh',
        rotate: 180, 
        scale: 1.5, 
        duration: 2, 
      })
      .to(blobRef.current, {
        scale: 1, 
        duration: 1,
      });

      return () => {
        tl.kill(); 
      };
    }
  }, []);

  return (
    <div ref={blobRef} className="absolute bottom-0 -right-24 w-[35rem] h-[35rem] z-0">
      <svg width="100%" height="100%" viewBox="0 0 777 777" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.35775 372.351C3.8544 332.974 9.19844 292.866 17.3899 252.028C25.5813 211.19 44.7794 176.395 74.9843 147.644C105.189 118.892 138.536 94.8771 175.025 75.5977C211.514 56.3183 249.457 37.249 288.856 18.3899C328.254 -0.469157 369.019 -4.68593 411.15 5.73955C453.281 16.1651 489.576 36.1387 520.035 65.6605C550.493 95.1821 585.488 117.823 625.02 133.582C664.552 149.342 697.657 174.393 724.334 208.735C751.011 243.077 766.951 281.749 772.156 324.751C777.36 367.753 777.943 410.715 773.906 453.638C769.868 496.56 757.281 536.193 736.146 572.535C715.01 608.877 692.405 644.721 668.329 680.067C644.253 715.413 611.785 739.67 570.925 752.837C530.065 766.004 489.728 772.794 449.913 773.209C410.098 773.623 370.602 774.598 331.425 776.132C292.248 777.666 251.671 774.659 209.695 767.111C167.719 759.562 129.836 742.271 96.0475 715.237C62.2588 688.204 42.7313 652.61 37.4651 608.458C32.1988 564.305 24.2402 523.76 13.5892 486.823C2.93826 449.886 -1.1389 411.728 1.35775 372.351Z" 
        fill="url(#paint0_radial_581_675)" 
        fillOpacity="0.35"/>
        <defs>
          <radialGradient id="paint0_radial_581_675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(388.345 387.817) rotate(-42.2556) scale(2093.33 2065.61)">
            <stop offset="0.05" stopColor="#1A1A1A" stopOpacity="0"/>
            <stop offset="0.173794" stopColor="#21DEAF" stopOpacity="0.53"/>
            <stop offset="0.18686" stopColor="#00DDFF" stopOpacity="0.73"/>
            <stop offset="0.211987" stopColor="#DC9D36" stopOpacity="0.64"/>
            <stop offset="0.655" stopColor="#646464"/>
            <stop offset="1" stopColor="#808080"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BlobBubble;
