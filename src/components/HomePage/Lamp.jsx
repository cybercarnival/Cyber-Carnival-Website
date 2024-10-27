
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemo() {
  return (
    (
    <LampContainer className="pt-24 ">
      <motion.h1
        initial={{ opacity: 0.2, y: 400 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br font-jersey  lg:mt-36 md:mt-24 mt-44 text-center tracking-tight text-white ">
        <div className="box-shadow-hover lg:text-9xl md:text-[5rem] text-[3rem] leading-tight ">
        CYBER
          </div> 
          <div className="font-rubik2 text-gradient-to-r lg:text-[7rem] md:text-[5rem] text-[3rem]   text-[#27f4ff]  from-[#66f7ff] via-[#DFFFD9] to-[#FFFFFF] bg-clip-text  ">
            CARNIVAL <span className="text-white font-audiowide">'25 </span>
            </div> 
            <div className="font-jura tracking-widest text-gradient-to-r lg:text-4xl md:text-3xl text-lg  text-white  ">
            February 20 & 21
            </div> 
      </motion.h1>
    </LampContainer>
    )
  );
}

