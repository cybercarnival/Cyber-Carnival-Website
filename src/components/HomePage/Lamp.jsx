
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemo() {
  return (
    (
    <LampContainer className="pt-24">
      <motion.h1
        initial={{ opacity: 0.2, y: 400 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br font-jersey   
        text-[9rem] text-center  tracking-tight text-white ">
        <div className="box-shadow-hover">
        CYBER
          </div> 
          <div className="font-rubik2 text-gradient-to-r text-[10rem] text-[#27f4ff]  from-[#66f7ff] via-[#DFFFD9] to-[#FFFFFF] bg-clip-text -translate-y-20">
            CARNIVAL
            </div> 
      </motion.h1>
    </LampContainer>
    )
  );
}

//font jersey is not showing because it is not imported in the file
