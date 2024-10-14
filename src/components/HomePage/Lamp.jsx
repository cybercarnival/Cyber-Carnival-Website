
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
        className="mt-8 bg-gradient-to-br font-jersey  from-slate-300 to-blue-500 py-4 bg-clip-text 
        text-9xl text-center  tracking-tight text-[#51B8BD] ">
        CYBER <br/> <span className="font-monoton text-gradient-to-r text-8xl from-[#55C8CE] via-[#DFFFD9] to-[#FFFFFF]">CARNIVAL</span> 
      </motion.h1>
    </LampContainer>
    )
  );
}

//font jersey is not showing because it is not imported in the file
