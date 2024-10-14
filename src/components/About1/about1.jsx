import React from 'react';
import './about1.css';
import srm from '../../assets/srmpic.png';


const about1 = () => {
  return (
    <section id='introab1'> 
    <div className='srmistab1'>
      <h1 className='h1ab1 font-jersey'>SRMIST</h1>
      <div className="paraab1">
      <p className='pab1 font-gudea'>SRM Institute of Science and Technology, Ramapuram campus, is a premier educational institution located in Chennai, Tamil Nadu. Known for its robust academic programs, the campus offers a diverse range of undergraduate, postgraduate, and doctoral courses in engineering, management, science, and humanities. The Ramapuram campus is equipped with state-of-the-art infrastructure, modern laboratories, and a well-stocked library, providing students with an enriching learning environment. </p>
      <img src={srm} alt="srm" className='srmubab1' />
      
      </div>
      
      
</div>
    </section>
  );
}

export default about1

