import React from "react";
import Card from "../components/EventComp";
import Background from "../components/Background/Background";
import BlobBubble from "../components/Background/BlobBubble"; // Import the BlobBubble component

function Events() {
  return (
    <div className="relative z-10 mt-32 py-4 h-full overflow-hidden ">
      <Background />
      <div className="h-screen sticky top-0"></div>
      <div className="h-screen "></div>
    </div>
  );
}

export default Events;
