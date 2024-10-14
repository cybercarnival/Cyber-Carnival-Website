import React from 'react';
import './about.css';
import logo from '../../assets/cclogo.png';


const about = () => {
  return (
    <section id='introab'> 
    <div className='srmistab'>
      <h1 className='ccfontab font-jersey'>Cyber Carnival</h1>
      <div className="paraab">
      <p className='ccparaab font-gudea'>The Cyber Carnival at SRM Ramapuram is an electrifying event hosted by the cybersecurity department, promising an immersive journey into the world of digital defense and innovation. Fusing education with excitement, the carnival showcases cutting-edge technologies, interactive workshops, and engaging competitions designed to sharpen skills and raise awareness about cybersecurity threats and solutions. Participants can expect riveting demonstrations, insightful talks by industry experts, and hands-on experiences that illuminate the importance of safeguarding our digital landscape.</p>
     
      <img src={logo} alt="logo" className='logoab' />
      </div>
      
      
      
      
</div>
    </section>
  );
}

export default about

