import React from "react";
import { useParams } from "react-router-dom";
import conclave from "../assets/cyberConclave.png";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CropSquareIcon from "@mui/icons-material/CropSquare";
function ViewEvent() {
  const { event } = useParams();
  return (
    <div className="w-screen flex justify-center items-center text-white">
      <div className="w-11/12 my-28 flex p-4 items-center justify-center flex-wrap">
        <div className="h-[500px] w-[350px] flex flex-col items-center justify-center rounded-xl">
          <div className="w-full h-1/2 relative flex flex-col items-center justify-center">
            <img
              className="w-full h-full absolute top-0 left-0"
              src={conclave}
            />
            <h1
              className={`z-40 ${"font-orbitron"} ${"text-3xl"} text-white my-4 `}
            >
              {"Cyber Conclave"}
            </h1>
            <p className="z-40 text-[10px] font-audiowide font-normal px-6 text-[#F6E9E9] text-center">
              {
                "Dive into the Details of leading experts converging in a panel discussion"
              }
            </p>
          </div>
          <div className="h-1/2 w-full bg-gray-900 p-4 rounded-b-xl">
            <p className="text-justify text-white">
              In today's digital age, the proliferation of online scams and
              cyber threats poses a significant risk to individuals and
              organizations alike. The alarming rise in these incidents has
              sparked a pressing need for robust discussions and actionable
              strategies among professionals across various sectors. To address
              these challenges, we invite you to participate in the upcoming{" "}
            </p>
          </div>
        </div>
        <div className="w-[350px] flex flex-col items-center justify-between p-4">
          <div className="w-full">
            <h1 className="text-center ml-[40px] font-jersey text-[#1EC1C5] text-2xl">
              SPEAKERS
            </h1>
            <div className="flex m-2">
              <img src={conclave} className="w-[40px] h-[40px] rounded-[50%]" />

              <div className="flex flex-col flex-grow">
                <h6 className="text-center">Name</h6>
                <h6 className=" text-center">Designation</h6>
              </div>
            </div>
            <div className="flex m-2">
              <img src={conclave} className="w-[40px] h-[40px] rounded-[50%]" />
              <div className="flex flex-col flex-grow">
                <h6 className="text-center">Name</h6>
                <h6 className=" text-center">Designation</h6>
              </div>
            </div>
            <div className="flex m-2">
              <img src={conclave} className="w-[40px] h-[40px] rounded-[50%]" />
              <div className="flex flex-col flex-grow">
                <h6 className="text-center">Name</h6>
                <h6 className=" text-center">Designation</h6>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-center ml-[40px] text-[#1EC1C5] text-2xl font-jersey">
              EVENT DETAILS
            </h1>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <AccessTimeOutlinedIcon />
                <h6 className=" text-center mx-2">9AM - 10AM</h6>
              </div>
            </div>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <CalendarTodayOutlinedIcon />
                <h6 className=" text-center mx-2">21 FEB 2025</h6>
              </div>
            </div>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <PaymentsOutlinedIcon />
                <h6 className=" text-center mx-2">200 PER TEAM</h6>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-center ml-[40px] text-[#1EC1C5] text-2xl font-jersey">
              TOPICS OF DISCUSSION
            </h1>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <CropSquareIcon />
                <h6 className=" text-center mx-2">Topic 1</h6>
              </div>
            </div>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <CropSquareIcon />
                <h6 className=" text-center mx-2">Topic 2</h6>
              </div>
            </div>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <CropSquareIcon />
                <h6 className=" text-center mx-2">Topic 3</h6>
              </div>
            </div>
          </div>
          <button className="border-2 border-[#1EC1C5] w-2/3 ml-[40px] p-1 rounded-xl text-[#1EC1C5] text-xl font-jersey">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEvent;
