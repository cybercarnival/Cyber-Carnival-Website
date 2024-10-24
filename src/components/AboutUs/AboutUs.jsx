import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import srmBuilding from '../../assets/srmBuilding.png';
import cyberCarnivalPng from '../../assets/cyberCarnivalPng.png';
import computerCyber from '../../assets/computerCyber.png';
// import Background from '../Background/Background';

const About = () => {
  
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  
  const createSection = (imageSrc, title, description) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center mb-20 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img src={imageSrc} alt={title} className="w-3/4 h-auto justify-self-center" />
          <div className="flex-col">
            <h1 className="text-7xl text-[#BEDFE0] font-jersey2 mb-6 text-center">{title}</h1>
            <p className="relative bg-slate-700/10 text-gray-300 text-lg leading-relaxed p-6 border border-transparent rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:border-t before:border-l before:border-teal-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-1/2 after:border-b after:border-r after:border-teal-300">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative max-w-7xl mx-auto mt-3 mb-16 py-12 px-4 overflow-hidden">
      {/* <Background />  */}
      <div className="relative z-10">
        {createSection(cyberCarnivalPng, "Cyber Carnival", 
          "The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation. Fusing education with excitement, the carnival showcases cutting-edge technologies, interactive workshops, and engaging competitions designed to sharpen skills and raise awareness about cybersecurity threats and solutions. Participants can expect riveting demonstrations, insightful talks by industry experts, and hands-on experiences that illuminate the importance of safeguarding our digital landscape.")
        }
        {createSection(srmBuilding, "SRMIST", 
          "  SRM Institute of Science and Technology, Ramapuram campus, is a premier educational institution located in Chennai, Tamil Nadu. Known for its robust academic programs, the campus offers a diverse range of undergraduate, postgraduate, and doctoral courses in engineering, management, science, and humanities. The Ramapuram campus is equipped with state-of-the-art infrastructure, modern laboratories, and a well-stocked library, providing students with an enriching learning environment.")
        }
        {createSection(computerCyber, "Cyber Security Department", 
          "  The Cybersecurity Department of SRM Institute of Science and Technology is a center of innovation, education, and practical experience in the rapidly advancing field of digital security. Our department is committed to equipping students with the knowledge, skills, and forward-thinking approach necessary to address the challenges of today’s digital world. We aim to be a leading center of excellence in cybersecurity, fostering a generation of skilled professionals capable of defending against modern cyber threats while contributing to the global security landscape.")
        }
      </div>
    </section>
  );
};

export default About;
