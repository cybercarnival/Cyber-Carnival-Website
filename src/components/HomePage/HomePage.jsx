import React from 'react'
import { LampDemo } from './Lamp'
import Button from './Button'
import CardCollection from './CardCollection'

function HomePage() {
  return (
    <div className='relative'>
     
        <LampDemo />
        <div className='absolute top-2/3 right-72'>
        <Button>
          JOIN US

        </Button>
        </div>
        <div className='absolute bottom-4 left-4'>
        <CardCollection />
        </div>

    </div>
  )
}


export default HomePage
