import React from 'react';
import Card from '../components/EventComp';
import Background from '../components/Background/Background';
// import BlobBubble from '../components/Background/BlobBubble'; // Import the BlobBubble component

function Events() {
  return (
    <div className='relative z-10 mt-32 py-4'>
      {/* Add the Background component */}
      <Background />

      {/* Event content */}
      <div className='relative z-20'>
        <Card />
      </div>

      {/* <BlobBubble top="top-1/4" left="left-1/4" zIndex={0} /> */}
      {/* <BlobBubble top="top-1/2" left="left-1/3" zIndex={0} />  */}
      {/* <BlobBubble top="top-3/4" left="left-3/4" zIndex={0} /> */}
    </div>
  );
}

export default Events;
