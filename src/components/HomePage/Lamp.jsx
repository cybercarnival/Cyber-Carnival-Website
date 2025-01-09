import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemo() {
  return (
    <LampContainer className="pt-24 ">
      <motion.h1
        initial={{ opacity: 0.2, y: 400 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br font-jersey  lg:mt-36 md:mt-24 mt-44 text-center tracking-tight text-white "
      >
        <div className="box-shadow-hover lg:text-9xl md:text-[5rem] text-[3rem] leading-tight ">
          CYBER
        </div>
        <div className="font-rubik2 text-gradient-to-r lg:text-[7rem] md:text-[5rem] text-[3rem]   text-[#27f4ff]  from-[#66f7ff] via-[#DFFFD9] to-[#FFFFFF] bg-clip-text  ">
          CARNIVAL <span className="text-white font-audiowide">'25 </span>
        </div>
        <div className="font-jura tracking-widest text-gradient-to-r lg:text-4xl md:text-3xl text-lg  text-white  ">
          February 20 & 21
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="mt-6 flex justify-center"
        >
          <div className="grid sm:grid-rows-2 lg:grid-cols-2 gap-5">
            <button className="px-6 py-3 text-sm lg:text-xl font-audiowide tracking-wider rounded-2xl bg-gradient-to-r from-[#37adb1] to-slate-300 text-black hover:from-cyan-300 hover:to-teal-700 transition-all duration-300 outline outline-2 outline-cyan-300 outline-offset-2">
              <a
                target="_blank"
                href="cc23.pdf"
                download={"Cyber_Chronicle_2023"}
              >
                Cyber Chronicle'23
              </a>
            </button>
            <button className="px-6 py-3 text-sm lg:text-xl font-audiowide tracking-wider rounded-2xl  text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-800 hover:to-slate-800 transition-all duration-300 outline outline-2 outline-cyan-300 outline-offset-2">
              <a
                target="_blank"
                href="cc24.pdf"
                download={"Cyber_Chronicle_2024"}
              >
                Cyber Chronicle'24
              </a>
            </button>
          </div>
        </motion.div>
      </motion.h1>
    </LampContainer>
  );
}
