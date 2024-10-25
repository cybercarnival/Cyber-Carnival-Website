import React from 'react';
// import logo from '../../assets/cclogo.png';
// import srm from '../../assets/srmpic.png';
// import laptop from '../../assets/laptop.png';
import srmBuilding from '../../assets/srmBuilding.png';
import cyberCarnivalPng from '../../assets/cyberCarnivalPng.png';
import computerCyber from '../../assets/computerCyber.png';
// import Background from '../Background/Background';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto  mt-3 mb-16 py-12 px-4">
      {/* <Background/> */}
      <div className="flex flex-col items-center  mb-20">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img src={cyberCarnivalPng} alt="Cyber Carnival Logo" className="w-3/4 mt-3 h-auto justify-self-center" />
          <div className=' flex-col '>
          <h1 className="text-7xl text-[#BEDFE0] font-jersey2 mb-6 text-center">Cyber Carnival</h1>
          <p className="relative bg-slate-700/10 text-gray-300 text-lg leading-relaxed p-6 border border-transparent rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:border-t before:border-l
          before:border-teal-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-1/2 after:border-b after:border-r after:border-teal-300 ">
            The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation. Fusing education with excitement, the carnival showcases cutting-edge technologies, interactive workshops, and engaging competitions designed to sharpen skills and raise awareness about cybersecurity threats and solutions. Participants can expect riveting demonstrations, insightful talks by industry experts, and hands-on experiences that illuminate the importance of safeguarding our digital landscape.
          </p>
          </div>
        </div>
      </div>

      {/* */}
      <div className="flex flex-col items-center mb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <img src={srmBuilding} alt="SRMIST Campus " className="w-3/4 h-auto justify-self-center" />
          <div className=' flex-col '>
          <h1 className="text-7xl text-[#BEDFE0] font-jersey2 mb-6 text-center">SRMIST</h1>
          <p className="relative bg-slate-700/10 text-gray-300 text-lg leading-relaxed p-6 border border-transparent rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:border-t before:border-l 
          before:border-teal-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-1/2 after:border-b after:border-r after:border-teal-300">
            SRM Institute of Science and Technology, Ramapuram campus, is a premier educational institution located in Chennai, Tamil Nadu. Known for its robust academic programs, the campus offers a diverse range of undergraduate, postgraduate, and doctoral courses in engineering, management, science, and humanities. The Ramapuram campus is equipped with state-of-the-art infrastructure, modern laboratories, and a well-stocked library, providing students with an enriching learning environment.
          </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col items-center ">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img src={computerCyber} alt="Cybersecurity Department" className="w-3/4 h-auto justify-self-center" />
          <div className=' flex-col '>
          <h1 className="text-7xl text-[#BEDFE0] font-jersey2 mb-6 text-center">Cyber Security Department</h1>
          <p className="relative bg-slate-700/10 text-gray-300 text-lg leading-relaxed p-6 border border-transparent rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:border-t before:border-l 
          before:border-teal-300 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-1/2 after:border-b after:border-r after:border-teal-300">
            The Cybersecurity Department of SRM Institute of Science and Technology is a center of innovation, education, and practical experience in the rapidly advancing field of digital security. Our department is committed to equipping students with the knowledge, skills, and forward-thinking approach necessary to address the challenges of today’s digital world. We aim to be a leading center of excellence in cybersecurity, fostering a generation of skilled professionals capable of defending against modern cyber threats while contributing to the global security landscape.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


