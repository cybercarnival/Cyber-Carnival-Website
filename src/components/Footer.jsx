import React from 'react'
import logo from '../assets/bg_logo.png'
import CallMadeIcon from '@mui/icons-material/CallMade';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/gmail.png';
import Divider from '@mui/material/Divider';
function Footer() {
  return (
    <div className='bg-gray-900 border-t-4 border-emerald-300 grid grid-cols-3'>

    <div className='w-24 ml-14 h-full'>
      <img src={logo} alt="logo" />
    </div>
    <div className='grid grid-rows-2 mt-5'>
    <h1 className='text-emerald-300 text-xl '>Reach Us <CallMadeIcon/></h1>
    <div className='grid grid-cols-3 '>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-7 h-7' src={insta}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.linkedin.com/in/cyber-carnival-srm-ramapuram-71a63a2b1/'>
        <img className='w-7 h-7' src={linkedin}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-7 h-7' src={email}/>
        </a>
        </ul>
    </div>
    </div>
    <h1 className='text-gray-400 text-center text-xl mt-11'>© 2024 Copyright: SRM RMP CSE CS</h1>
    </div>
  )
}

export default Footer
