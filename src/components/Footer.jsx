import React from "react";
import logo from "../assets/bg_logo.png";
import CallMadeIcon from "@mui/icons-material/CallMade";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/gmail.svg";
import Divider from "@mui/material/Divider";
function Footer() {
  return (
    <>
      <div className="border-t-2 border-[#153944af] flex justify-center items-center p-6 z-20 sm:justify-between flex-wrap">
        <div className="flex flex-col my-2 sm:mx-6 items-center justify-center">
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
                href="mailto:hello@cybercarnival.in?subject=CyberCarnival2025"
                target="#"
              >
                <img className="w-6 h-6" src={email} />
              </a>
            </ul>
          </div>
          <h1 className="text-gray-500 text-center">
            © 2025 Copyright: SRM RMP CSE CS
          </h1>
        </div>

        <div className=" flex text-[#a5a5a5] justify-start my-2 sm:mx-6">
          <div className="text-left m-2 mx-4">
            <a href="/#home" className="text-xl text-[#205e71]">
              Home
            </a>
            <br />
            <a href="/#aboutus" className="my-2">
              About Us
            </a>
            <br />
            <a href="/#sponsors" className="my-2">
              Sponsors
            </a>
          </div>
          <div className="text-left m-2 mx-4 ">
            <a href="/gallery" className="text-xl text-[#205e71]">
              Gallery
            </a>
            <br />
            <a href="/techevents/viewevent/cyberthon" className="my-2">
              Cyberthon 25'
            </a>
            <br />
            <a href="/events" className="my-2">
              Events
            </a>
          </div>
          <div className="text-left m-2 mx-4">
            <a href="/events" className="text-xl text-[#205e71]">
              Events
            </a>
            <br />
            <a href="/techevents" className="my-2">
              Technical Events
            </a>
            <br />
            <a href="nontechevents" className="my-2">
              Non-Technical Events
            </a>
            <br />
            <a href="/techevents/viewevent/cyberthon" className="my-2">
              Cyberthon
            </a>
            <br />
            <a href="/workshops" className="my-2">
              Workshop
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
