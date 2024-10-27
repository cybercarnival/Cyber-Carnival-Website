import React, { useRef } from "react";
import Card from "../components/EventComp";
import Background from "../components/Background/Background";
import BlobBubble from "../components/Background/BlobBubble"; // Import the BlobBubble component
import nonTech from "../assets/nonTech.jpg";
import cyberthonEvent from "../assets/cyberthonEvent.jpg";
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
  const yTransform1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const xTransform1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yTransform2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const xTransform2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yTransform3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const xTransform3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yTransform4 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const xTransform4 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const nav = useNavigate();
  return (
    <div ref={containerRef} className="relative z-10 py-4 h-full mt-32">
      <Background />
      <div className="relative w-full">
        <div className="h-screen sticky top-0 flex justify-center items-center overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -10 }}
            transition={{ duration: 2 }}
            className="w-[400px] md:w-[900px] h-2/3 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 "
          >
            <motion.div
              className="w-[300px] md:w-96 h-56 self-start justify-self-center md:self-end md:justify-self-end overflow-clip relative flex items-center justify-center cursor-pointer border-0"
              onClick={() => {
                nav("/techevents");
              }}
              whileHover={{ border: 2, borderColor: "red" }}
              style={{ y: yTransform1, x: xTransform1 }}
            >
              <motion.h1
                style={{ opacity: scrollYProgress }}
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
              className="w-[300px] md:w-96 h-56 self-start justify-self-center md:self-end md:justify-self-start overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform2, x: xTransform2 }}
              onClick={() => {
                nav("/nontechevents");
              }}
            >
              <motion.h1
                style={{ opacity: scrollYProgress }}
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
              className="w-[300px] md:w-96 h-56 self-start justify-self-center md:self-start md:justify-self-end overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform3, x: xTransform3 }}
              onClick={() => {
                nav("/underdev");
              }}
            >
              <motion.h1
                style={{ opacity: scrollYProgress }}
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
              className="w-[300px] md:w-96 h-56 self-start justify-self-center md:self-start md:justify-self-start overflow-clip relative flex items-center justify-center cursor-pointer"
              style={{ y: yTransform4, x: xTransform4 }}
              onClick={() => {
                nav("/underdev");
              }}
            >
              <motion.h1
                style={{ opacity: scrollYProgress }}
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
          </motion.div>
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default Events;
