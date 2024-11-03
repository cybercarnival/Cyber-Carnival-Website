import React, { useEffect, useRef } from "react";
import HomePage from "../components/HomePage/HomePage";
// import Loop from '../components/Loop';
import vid from "../assets/vid1.mp4";
import AboutUs from "../components/AboutUs/AboutUs";
import { useLocation } from "react-router-dom";

function Home() {
  const aboutUsRef = useRef(null);
  const homeRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#aboutus") {
      aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="" ref={homeRef}>
      <video
        src={vid}
        className="opacity-30 object-cover absolute top-0 min-h-full"
        autoPlay
        loop
        muted
      />
      <HomePage />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
