import React from 'react'
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Link } from 'react';
import lap from '../assets/lap_pic.png';
import vr  from '../assets/vr.png';
import robot from '../assets/robot.png';
import boy from '../assets/boy_pic.png';
import { NavLink } from 'react-router-dom';
// import Background from './Background/Background';
function EventComp() {
  return (
    <div className='grid lg:grid-cols-2  sm:grid-cols-1 gap-y-10 '>
      <div className=''>
      <CardContainer className="inter-var ">
      <CardBody className=" bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg border border-gray-100 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-3xl font-semibold text-white dark:text-white"
        >
          Technical Events
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          Experience 10+ exciting tech events at Cyber Carnival!! From workshops to coding challenges, Join us for a dynamic celebration of innovation and learning. Don't miss out our tech events.
        </CardItem>
          <img
            src={lap}
            height="1000"
            width="1000"
            className="h-[15rem] w-[20rem] object-cover rounded-xl translate-x-32 hover:scale-150 "
            alt="thumbnail"
            />
           
           <div className="-translate-y-20">
        <NavLink
            to="/techevents"
            className=" text-sm mx-4 text-white font-orbitron border-4 border-cyan-500 rounded-full p-4 hover:border-cyan-600 hover:text-gray-400 "
          >
            view all
          </NavLink>
          </div>
      </CardBody>
    </CardContainer>
            </div>


            <div className=''>
      <CardContainer className="inter-var ">
      <CardBody className=" bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg border border-gray-100 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-3xl font-semibold text-white dark:text-white"
        >
          Non-Technical Events
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 "
          >
           Experience 5+ exciting non tech events at Cyber Carnival!! From workshops to coding challenges, Join us for a dynamic celebration of innovation and learning. Don't miss out our tech events.        </CardItem>
          <img
            src={vr}
            height="1000"
            width="1000"
            className="h-[15rem] w-[18rem] object-cover rounded-xl translate-x-36 hover:scale-150"
            alt="thumbnail"
            />
           
           <div className="-translate-y-20">
        <NavLink
            to="/nontechevents"
            className=" text-sm mx-4 text-white font-orbitron border-4 border-cyan-500 rounded-full p-4 hover:border-cyan-600 hover:text-gray-400 "
          >
            view all
          </NavLink>
          </div>
      </CardBody>
    </CardContainer>
            </div>


            <div className=''>
      <CardContainer className="inter-var ">
      <CardBody className=" bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg border border-gray-100 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-3xl font-semibold text-white dark:text-white"
        >
          Workshops
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          Experience 10+ exciting tech events at Cyber Carnival!! From workshops to coding challenges, Join us for a dynamic celebration of innovation and learning. Don't miss out our tech events.
        </CardItem>
          <img
            src={boy}
            height="1000"
            width="1000"
            className="h-[15rem] w-[20rem] object-cover rounded-xl translate-x-32 hover:scale-150"
            alt="thumbnail"
            />
           
           <div className="-translate-y-20">
        <NavLink
            to="/techevents"
            className=" text-sm mx-4 text-white font-orbitron border-4 border-cyan-500 rounded-full p-4 hover:border-cyan-600 hover:text-gray-400 "
          >
            view all
          </NavLink>
          </div>
      </CardBody>
    </CardContainer>
            </div>


            <div className=''>
      <CardContainer className="inter-var ">
      <CardBody className=" bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg border border-gray-100 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="text-3xl font-semibold text-white dark:text-white"
        >
          Cyberthon
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          Experience 10+ exciting tech events at Cyber Carnival!! From workshops to coding challenges, Join us for a dynamic celebration of innovation and learning. Don't miss out our tech events.
        </CardItem>
          <img
            src={robot}
            height="1000"
            width="1000"
            className="h-[15rem] w-[20rem] object-cover rounded-xl translate-x-32 hover:scale-150"
            alt="thumbnail"
            />
           
           <div className="-translate-y-20">
        <NavLink
            to="/techevents"
            className=" text-sm mx-4 text-white font-orbitron border-4 border-cyan-500 rounded-full p-4 hover:border-cyan-600 hover:text-gray-400 "
          >
            view all
          </NavLink>
          </div>
      </CardBody>
    </CardContainer>
            </div>



    
    </div>
  )
}

export default EventComp
