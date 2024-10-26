import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import srmBuilding from '../../assets/srmBuilding.png';
import cyberCarnivalPng from '../../assets/cyberCarnivalPng.png';
import computerCyber from '../../assets/computerCyber.png';
import Loop from '../Loop';
import Background from './Aboutbg'; // Import Background component
import BlobBubble from './AboutBlob'; // Import BlobBubble component

const About = () => {
  const slides = [
    {
      image: cyberCarnivalPng,
      title: "Cyber Carnival",
      description: "The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation. Fusing education with excitement, the carnival showcases cutting-edge technologies, interactive workshops, and engaging competitions designed to sharpen skills and raise awareness about cybersecurity threats and solutions. Participants can expect riveting demonstrations, insightful talks by industry experts, and hands-on experiences that illuminate the importance of safeguarding our digital landscape."
    },
    {
      image: srmBuilding,
      title: "SRMIST",
      description: "SRM Institute of Science and Technology, Ramapuram campus, is a premier educational institution located in Chennai, Tamil Nadu. Known for its robust academic programs, the campus offers a diverse range of undergraduate, postgraduate, and doctoral courses in engineering, management, science, and humanities. The Ramapuram campus is equipped with state-of-the-art infrastructure, modern laboratories, and a well-stocked library, providing students with an enriching learning environment."
    },
    {
      image: computerCyber,
      title: "Cyber Security Department",
      description: "The Cybersecurity Department of SRM Institute of Science and Technology is a center of innovation, education, and practical experience in the rapidly advancing field of digital security. Our department is committed to equipping students with the knowledge, skills, and forward-thinking approach necessary to address the challenges of today’s digital world. We aim to be a leading center of excellence in cybersecurity, fostering a generation of skilled professionals capable of defending against modern cyber threats while contributing to the global security landscape."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set up an interval to automatically change slides every 2 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to the first slide
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section className="relative max-w-full mx-4  mb-2  py-12 px-4 overflow-hidden" ref={sectionRef}>
      {/* Include Background and BlobBubble components */}
      <div className="absolute inset-0 z-0">
        <Background /> 
        <BlobBubble /> 
      </div>

      <div className="relative z-10 mb-72 flex justify-center items-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }} // Duration for visibility
          className="flex flex-col items-center mb-20 relative w-full z-10"
        >
          {slides[currentSlide] && (
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
              <div className="relative">
                {/* Top diagonal glowing lines within the container */}
                <div className="absolute -top-18 -left-12 transform rotate-45 w-36 h-1 bg-teal-300/80 shadow-glow"></div>
                <div className="absolute -top-12 -left-12 transform rotate-45 w-36 h-1 bg-teal-300/80 shadow-glow "></div>
                <div className="absolute -top-6 -left-12 transform rotate-45 w-36 h-1 bg-teal-300/80 shadow-glow"></div>

                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-3/4 h-auto justify-self-center relative z-10"
                />

                {/* Bottom diagonal glowing lines within the container */}
                <div className="absolute -bottom-10 -left-12 transform -rotate-45 w-36 h-1 bg-teal-300/80 shadow-glow"></div>
                <div className="absolute -bottom-16 -left-12 transform -rotate-45 w-36 h-1 bg-teal-300/80 shadow-glow"></div>
                <div className="absolute -bottom-24 -left-12 transform -rotate-45 w-36 h-1 bg-teal-300/80 shadow-glow"></div>
              </div>
              <div className="flex-col">
                <h1 className="text-7xl text-[#BEDFE0] font-jersey2 mb-6 text-center">{slides[currentSlide].title}</h1>
                <p className="relative bg-slate-700/10 text-gray-300 text-lg leading-relaxed p-6 border border-transparent rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:border-t before:border-l before:border-teal-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-1/2 after:border-b after:border-r after:border-teal-300">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <Loop />
    </section>
  );
};

export default About;
