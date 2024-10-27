import React from 'react'
import { LampDemo } from './Lamp'
// import Button from './Button'
import CardCollection from './CardCollection'
// import vid from '../../assets/vid1.mp4';

function HomePage() {
  return (
    <div className='relative mb-16 lg:mb-36'>
        <LampDemo/> 
        <div className='absolute top-2/3 right-72'>
        {/* <Button>
          JOIN US

        </Button> */}
        </div>
        <div className='absolute -translate-y-16 bottom-4 left-4'>
        {/* <CardCollection /> */}
        </div>
      

    </div>
  )
}


export default HomePage
