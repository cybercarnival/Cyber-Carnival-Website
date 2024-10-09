import cyberConclave from "../assets/cyberConclave.png";
import React from "react";
function EventCard() {
  return (
    <div className="mt-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-1000px]"
      >
        <defs>
          <clipPath id="myShape" clipPathUnits="objectBoundingBox">
            <path d="M0.6911 0.0321H0.0712C0.0376 0.0321 0.0103 0.0535 0.0099 0.0799L0.0050 0.4918C0.0049 0.5015 0.0079 0.5109 0.0138 0.5202L0.0309 0.5453V0.6288V0.6739C0.0235 0.7005 0.0162 0.7181 0.0162 0.7181V1H0.5372L0.5659 0.9656L0.5946 0.9309H1V0.5093L0.9746 0.4614V0.2205L1 0.1643V0H0.7199L0.6911 0.0321Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="w-[400px] h-[500px] flex justify-center items-center flex-col relative"
        style={{
          clipPath: "url(#myShape)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full"
          viewBox="0 0 1 1"
          style={{ clipPath: "url(#myShape)" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0.6911 0.0321H0.0712C0.0376 0.0321 0.0103 0.0535 0.0099 0.0799L0.0050 0.4918C0.0049 0.5015 0.0079 0.5109 0.0138 0.5202L0.0309 0.5453V0.6288V0.6739C0.0235 0.7005 0.0162 0.7181 0.0162 0.7181V1H0.5372L0.5659 0.9656L0.5946 0.9309H1V0.5093L0.9746 0.4614V0.2205L1 0.1643V0H0.7199L0.6911 0.0321Z"
            fill="none"
            stroke="#1EC1C5"
            strokeWidth="0.02"
          />
        </svg>
        <div className="w-full h-1/2 ">
          <img src={cyberConclave} />
        </div>
        <div className="w-full h-1/2 "></div>
      </div>
    </div>
  );
}

export default EventCard;
