import React from "react";
import LineGraphic from "../assets/line9.svg";
import LineGraphic2 from "../assets/Vector46.svg";
import Grouplines from "../assets/Grouplines.svg";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";

function EventCard({
  image,
  title,
  title_size,
  title_font,
  description,
  date,
  time,
  fees,
  seats,
  brief,
}) {
  return (
    <>
      <div className="w-[330px] h-[500px] relative m-10 md:w-[370px]">
        <img className="absolute z-40 top-1 left-10" src={Grouplines} />
        <img
          className="absolute z-40 -bottom-2 left-1/2 transform: -translate-x-[80%]"
          src={Grouplines}
        />
        <div
          className="w-[330px] h-[500px] flex items-center flex-col relative md:w-[370px]"
          style={{
            clipPath: "url(#myShape)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-full pointer-events-none z-40"
            viewBox="0 0 1 1"
            style={{ clipPath: "url(#myShape)" }}
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0.6911 0.0321H0.0712C0.0376 0.0321 0.0103 0.0535 0.0099 0.0799L0.0050 0.4918C0.0049 0.5015 0.0079 0.5109 0.0138 0.5202L0.0309 0.5453V0.6288V0.6739C0.0235 0.7005 0.0162 0.7181 0.0162 0.7181V1H0.5372L0.5659 0.9656L0.5946 0.9309H1V0.5093L0.9746 0.4614V0.2205L1 0.1643V0H0.7199L0.6911 0.0321 L0.702 0.0321 "
              fill="none"
              stroke="#1EC1C5"
              strokeWidth="0.01"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
          <div className="w-full h-1/2 relative flex flex-col items-center justify-center">
            <img className="w-full h-full absolute top-0 left-0" src={image} />
            <h1 className={`z-40 ${title_font} ${title_size} text-white my-4 `}>
              {title}
            </h1>
            <p className="z-40 text-[10px] font-audiowide font-normal px-6 text-[#F6E9E9] text-center">
              {description}
            </p>
          </div>
          <img
            className="w-full h-[50px] absolute top-1/2 left-1/2 transform: -translate-x-1/2 transform: -translate-y-1/2"
            src={LineGraphic}
          />
          <img
            className="w-10/12 h-[50px] absolute top-1/2 left-1/2 transform: -translate-x-1/2 transform: -translate-y-[60%]"
            src={LineGraphic}
          />
          <div className="h-1/2 w-full font-orbitron text-white">
            <div className="h-3/12 w-full grid grid-cols-2 grid-rows-2 pl-12 py-4 gap-y-2">
              <div className="flex justify-start items-center justify-self-start">
                <CalendarTodayOutlinedIcon sx={{ height: 20, width: 20 }} />
                <p className="text-xs mx-3">{date}</p>
              </div>
              <div className="flex justify-start items-center justify-self-start">
                <PaymentsOutlinedIcon sx={{ height: 20, width: 20 }} />
                <p className="text-xs mx-3">{fees}</p>
              </div>
              <div className="flex justify-start items-center justify-self-start">
                <PersonOutlinedIcon sx={{ height: 20, width: 20 }} />
                <p className="text-xs mx-3">{seats}</p>
              </div>
              <div className="flex justify-start items-center justify-self-start">
                <AccessTimeOutlinedIcon sx={{ height: 20, width: 20 }} />
                <p className="text-xs mx-3">{time}</p>
              </div>
            </div>
            <div className="h-9/12 py-6 px-8  flex justify-center items-center">
              <p className="text-[10px]  text-justify">{brief}</p>
            </div>
          </div>
          <img className="absolute top-2/3 left-0" src={LineGraphic2} />
        </div>
        <button
          className="w-[150px] h-[39px] absolute -bottom-2 right-1 md:w-[168px]"
          style={{
            clipPath: "url(#myShape2)",
          }}
        >
          <motion.svg
            viewBox="0 0 1 1"
            className="absolute w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0.1504 0.02778 L0.00546 1 H0.861 L1 0.02778 H0.1504 Z"
              fill="none"
              stroke="#51C8CA"
              vectorEffect="non-scaling-stroke"
              strokeWidth={3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 10, ease: "easeInOut" }}
            />
          </motion.svg>
          <motion.div
            className="flex items-center justify-center w-full h-full"
            initial={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
            }}
            whileHover={{
              background:
                "linear-gradient(90deg, rgba(4,37,47,1) 0%, rgba(26,173,216,1) 100%)",
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="text-[#51B8BD] text-xl mx-2 font-jersey">REGISTER</p>

            <CallMadeIcon sx={{ width: 15, height: 15, color: "white" }} />
          </motion.div>
        </button>
      </div>

      {/*SVGS OUT OF THE VIEW FOR CLIPPING PURPOSES*/}

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-1000px]"
      >
        <defs>
          <clipPath id="myShape2" clipPathUnits="objectBoundingBox">
            <path d="M0.1504 0.02778 L0.00546 1 H0.861 L1 0.02778 H0.1504 Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default EventCard;
