import React from "react";
import logo from "../assets/bg_logo.png";
import CallMadeIcon from "@mui/icons-material/CallMade";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/gmail.svg";
import Divider from "@mui/material/Divider";
function Footer() {
  return (
    <div className="border-t-2 border-[#153944af] flex justify-center items-center p-6 z-20 sm:justify-between flex-wrap">
      <div className="flex flex-col my-2 sm:mx-6">
        <img src={logo} className="w-24 m-2" alt="logo" />
        <div className=" flex flex-row gap-3 justify-start m-2 ">
          <ul>
            <a href="https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img className="w-6 h-6" src={insta} />
            </a>
          </ul>
          <ul>
            <a href="https://www.linkedin.com/in/cyber-carnival-srm-ramapuram-71a63a2b1/">
              <img className="w-6 h-6" src={linkedin} />
            </a>
          </ul>
          <ul>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@cybercarnival.in&su=SUBJECT&body=BODY"
              target="#"
            >
              <img className="w-6 h-6" src={email} />
            </a>
          </ul>
        </div>
      </div>
      <div className=" flex text-[#a5a5a5] justify-start my-2 sm:mx-6">
        <div className="text-left m-2 mx-4">
          <h1 className="text-xl text-[#205e71]">Home</h1>
          <h6 className="my-2">About Us</h6>
          <h6 className="my-2">Sponsors</h6>
        </div>
        <div className="text-left m-2 mx-4 ">
          <h1 className="text-xl text-[#205e71]">Gallery</h1>
          <h6 className="my-2">Cyber Carnival 24'</h6>
          <h6 className="my-2">Cyberthon 24'</h6>
          <h6 className="my-2">Events</h6>
        </div>
        <div className="text-left m-2 mx-4">
          <h1 className="text-xl text-[#205e71]">Events</h1>
          <h6 className="my-2">Technical Events</h6>
          <h6 className="my-2">Non-Technical Events</h6>
          <h6 className="my-2">Cyberthon</h6>
          <h6 className="my-2">Workshop</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
