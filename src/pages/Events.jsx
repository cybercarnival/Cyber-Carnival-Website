
import React from 'react';
import Card from '../components/EventComp';
import Background from '../components/Background/Background';
import BlobBubble from '../components/Background/BlobBubble'; // Import the BlobBubble component

function Events() {
  return (
    <div className='relative z-10 mt-32 py-4 h-full overflow-hidden '>
      
      <div className="absolute inset-0 z-0">
        <Background /> 
        <BlobBubble /> 
      </div>

      {/* Event content */}
      <div className='relative z-20'>

        <Card />
      </div>

    </div>
  );
}

export default Events;
