import React from 'react'
import logo from '../assets/bg_logo.png'
import CallMadeIcon from '@mui/icons-material/CallMade';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/gmail.png';
import Divider from '@mui/material/Divider';
function Footer() {
  return (
    <div className='bg-black border-t-4 border-emerald-300 grid grid-cols-3 justify-items-stretch p-6 '>

      <img src={logo} className='w-16' alt="logo" />
    
    <h1 className='text-gray-400 text-center text-lg mt-2 '>© 2024 Copyright: SRM RMP CSE CS</h1>

      <div className=' flex flex-row gap-3 justify-end mt-2 '>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-9 h-9' src={insta}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.linkedin.com/in/cyber-carnival-srm-ramapuram-71a63a2b1/'>
        <img className='w-9 h-9' src={linkedin}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-9 h-9' src={email}/>
        </a>
        </ul>
      </div>

    </div>
  )
}

export default Footer
