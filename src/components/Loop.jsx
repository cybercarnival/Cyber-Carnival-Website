import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import comingSoon from "../assets/comingSoon.jpg";

function Loop() {
    const testimonials = [
      {
        image: comingSoon,
       
      },
      {
        image: comingSoon,
        
      },
      {
        image: comingSoon,
       
      },
      {        
        image: comingSoon,
        
      },
      {
        image: comingSoon,
        
      },
    ];
  return (
    <div className="">
      <h1 className=" text-7xl font-semibold flex flex-col justify-center items-center text-cyan-300 font-alumni ">OUR SPONSORS</h1>
        <p className="text-white text-lg flex flex-col justify-center items-center text-center ">We are truly grateful for your confidence in us. We look forward to achieving great things together and sharing the success that your support has made possible.</p>
      <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default Loop
