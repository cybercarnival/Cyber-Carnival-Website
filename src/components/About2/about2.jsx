import React from 'react';
import './about2.css';
import laptop from '../../assets/laptop.png';


const about2 = () => {
  return (
    <section id='introab2'> 
    <div className='srmistab2'>
      <h1 className='deptab2 font-jersey2'>Cyber security Department</h1>
      <div className="paraab2">
      <p className='deptparaab2 '>The Cybersecurity Department of SRM Institute of Science and Technology is a center of innovation, education, and practical experience in the rapidly advancing field of digital security. Our department is committed to equipping students with the knowledge, skills, and forward-thinking approach necessary to address the challenges of today’s digital world. We aim to be a leading center of excellence in cybersecurity, fostering a generation of skilled professionals capable of defending against modern cyber threats while contributing to the global security landscape.</p>
      <img src={laptop} alt="laptop" className='laptopimgab2' />
      
      </div>
      
      
</div>
    </section>
  );
}

export default about2

