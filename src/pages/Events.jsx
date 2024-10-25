
import React from 'react';
import Card from '../components/EventComp';
import Background from '../components/Background/Background';
import BlobBubble from '../components/Background/BlobBubble'; // Import the BlobBubble component

function Events() {
  return (
    <div className='relative z-10 mt-32 py-4 overflow-hidden'>
      

      <Background />
      <BlobBubble  />

      {/* Event content */}
      <div className='relative z-20'>

        <Card />
      </div>

    </div>
  );
}

export default Events;
