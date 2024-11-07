import React, { useRef } from "react";
import Background from "../components/Background/Background";
import BlobBubble from "../components/Background/BlobBubble"; // Import the BlobBubble component
import nonTech from "../assets/nonTech.jpg";
import cyberthonEvent from "../assets/cyberthonEvent.jpg";
import awareness from "../assets/awareness.png";
import conclave from "../assets/cyberConclave.png";
import techEvent from "../assets/techEvent.jpg";
import workshopEvent from "../assets/workshopEvent.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Events() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const textTransform = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const titleTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yTransform1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const xTransform1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yTransform2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const xTransform2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yTransform3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const xTransform3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yTransform4 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const xTransform4 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yTransform5 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const xTransform5 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yTransform6 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const xTransform6 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const nav = useNavigate();
  return (
    <div ref={containerRef} className="relative z-10 py-4 h-full mt-32">
      <Background />
      <div className="relative w-full">
        <div className="h-[200vh] md:h-[150vh] sticky top-0 flex flex-col justify-center items-center overflow-x-hidden">
          <motion.h1
            style={{ y: -50, opacity: titleTransform }}
            className="text-white text-5xl font-monoton"
          >
            EVENTS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: -15 }}
            transition={{ duration: 2 }}
            className="w-[400px] md:w-[900px] grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 "
          >
            <motion.div
              className="w-[270px] md:w-96 h-56 self-start justify-self-center md:self-end md:justify-self-end overflow-clip relative flex items-center justify-center cursor-pointer border-0"
              onClick={() => {
                nav("/techevents");
              }}
              whileHover={{ border: 2, borderColor: "red" }}
              style={{ y: yTransform1, x: xTransform1 }}
            >
              <motion.h1
                style={{ opacity: textTransform }}
                className="text-4xl font-monoton text-white"
              >
                Tech Events
              </motion.h1>
              <motion.img
                src={techEvent}
                className="w-full h-full absolute top-0 left-0 object-cover -z-20 pointer-events-none"
                style={{ scale: scaleTransform }}
              />
            </motion.div>
            <motion.div
              className="w-[270px] md:w-96 h-56 self-start justify-self-center md:self-end md:justify-self-start overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform2, x: xTransform2 }}
              onClick={() => {
                nav("/nontechevents");
              }}
            >
              <motion.h1
                style={{ opacity: textTransform }}
                className="text-4xl font-monoton text-white text-center"
              >
                Non-Tech Events
              </motion.h1>
              <motion.img
                src={nonTech}
                className="w-full h-full absolute top-0 left-0 -z-20 object-cover pointer-events-none"
                style={{ scale: scaleTransform }}
              />
            </motion.div>
            <motion.div
              className="w-[270px] md:w-96 h-56 self-start justify-self-center md:self-start md:justify-self-end overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform3, x: xTransform3 }}
              onClick={() => {
                nav("/techevents/viewevent/cyberthon");
              }}
            >
              <motion.h1
                style={{ opacity: textTransform }}
                className="text-4xl font-monoton text-white"
              >
                Cyberthon
              </motion.h1>
              <motion.img
                src={cyberthonEvent}
                className="w-full h-full absolute top-0 left-0 -z-20 object-cover pointer-events-none"
                style={{ scale: scaleTransform }}
              />
            </motion.div>
            <motion.div
              className="w-[270px] md:w-96 h-56 self-start justify-self-center md:self-start md:justify-self-start overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform4, x: xTransform4 }}
              onClick={() => {
                nav("/workshops");
              }}
            >
              <motion.h1
                style={{ opacity: textTransform }}
                className="text-4xl font-monoton text-white"
              >
                Workshop
              </motion.h1>
              <motion.img
                src={workshopEvent}
                className="w-full h-full absolute top-0 left-0 -z-20 object-cover pointer-events-none"
                style={{ scale: scaleTransform }}
              />
            </motion.div>
            <motion.div
              className="w-[270px] md:w-96 h-56 self-start justify-self-center md:self-start md:justify-self-end overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform5, x: xTransform5 }}
              onClick={() => {
                nav("/techevents/viewevent/cyberconclave");
              }}
            >
              <motion.h1
                style={{ opacity: textTransform }}
                className="text-4xl font-monoton text-white"
              >
                Conclave
              </motion.h1>
              <motion.img
                src={conclave}
                className="w-full h-full absolute top-0 left-0 -z-20 object-cover pointer-events-none"
                style={{ scale: scaleTransform }}
              />
            </motion.div>
            <motion.div
              className="w-[270px] md:w-96 h-56 self-start justify-self-center md:self-start md:justify-self-start overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform6, x: xTransform6 }}
              onClick={() => {
                nav("/nontechevents/viewevent/awareness");
              }}
            >
              <motion.h1
                style={{ opacity: textTransform }}
                className="text-4xl font-monoton text-white"
              >
                AWARENESS
              </motion.h1>
              <motion.img
                src={awareness}
                className="w-full h-full absolute top-0 left-0 -z-20 object-cover pointer-events-none"
                style={{ scale: scaleTransform }}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default Events;
