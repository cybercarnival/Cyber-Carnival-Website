import React, { useEffect, useRef, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import comingSoon from "../assets/comingSoon.jpg";
import { useLocation } from "react-router-dom";
import disai from "../assets/disai.png";
import nullImage from "../assets/null.png";
import yuniq from "../assets/yuniq.svg";

function Loop() {
  const sponsorsRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#sponsors") {
      sponsorsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  
  const testimonials = [
    {
      image: yuniq,
    },
    {
      image: nullImage,
    },
    {
      image: disai,
    },
    
  ];
  return (
    <div className="" ref={sponsorsRef}>
      <h1 className=" text-7xl font-semibold flex flex-col justify-center items-center text-cyan-300 font-alumni ">
        OUR PARTNERS
      </h1>
      <p className="text-white text-lg flex flex-col justify-center items-center text-center ">
        We are truly grateful for your confidence in us. We look forward to
        achieving great things together and sharing the success that your
        support has made possible.
      </p>
      <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Loop;
