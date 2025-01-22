import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/bg_logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useAnimate } from "framer-motion";
import srmlogo from "../assets/srm_logo.png";
function NavBar() {
  const [scope, animate] = useAnimate();
  const handleOpen = () => {
    animate(
      scope.current,
      { opacity: 1, right: 0 },
      { duration: 0.5, ease: "easeInOut" }
    );
  };
  const handleClose = () => {
    animate(
      scope.current,
      { opacity: 0, right: "-100%" },
      { duration: 0.5, ease: "easeInOut" }
    );
  };

  const location = useLocation();
  return (
    <>
      <div className="font-alumni z-50 flex fixed top-8 left-1/2 transform -translate-x-1/2 w-11/12 h-14 justify-between ">
        <NavLink
          to="/#home"
          className="w-3/12 flex items-center justify-start "
        >
          <div className=" font-alumni text-3xl text-white flex justify-center p-3 rounded-3xl w-52 h-14 items-center">
            <img src={logo} alt="logo" className="w-28 h-auto" />
          </div>
        </NavLink>

        <div className=" w-6/12 hidden items-center justify-center bg-neutral-950 bg-opacity-90 rounded-[14px] md:flex  border-x-4 border-x-[#153944cb]">
          <NavLink
            to="/#home"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/#aboutus"
            className={({ isActive }) =>
              (isActive ? "text-[#ffffff] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/#sponsors"
            className={({ isActive }) =>
              (isActive ? "text-[#ffffff] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          >
            Partners
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className=" w-5/12 flex items-center justify-end md:w-3/12">
          <div className="">
            <img src={srmlogo} alt="logo" className="w-40 h-auto" />
          </div>
          {/* <NavLink
            to="/login"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] " : "text-secondary") +
              " mx-2 hover:text-[#5BFFE6] hidden md:w-[35px] md:h-[35px] md:block lg:w-[50px] lg:h-[50px]"
            }
          >
            <AccountCircleOutlinedIcon sx={{ height: "100%", width: "100%" }} />
          </NavLink> */}
          <div
            className="h-[35px] w-[35px] text-white block md:hidden"
            onClick={handleOpen}
          >
            <MenuIcon sx={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>

      <motion.div
        ref={scope}
        className=" font-alumni w-2/3 h-screen backdrop-blur-xl fixed top-0  z-50 flex flex-col opacity-0 -right-full items-end justify-center md:hidden"
      >
        <div
          className="h-[30px] w-[30px] text-white block absolute top-0 right-0 m-10"
          onClick={handleClose}
        >
          <CloseIcon sx={{ height: "100%", width: "100%" }} />
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
          onClick={handleClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/#aboutus"
          className={({ isActive }) =>
            (isActive ? "text-[#ffffff] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/#sponsors"
          className={({ isActive }) =>
            (isActive ? "text-[#ffffff] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
        >
          Partners
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
          onClick={handleClose}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
          onClick={handleClose}
        >
          Events
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
          onClick={handleClose}
        >
          Contact Us
        </NavLink>
        {/* <NavLink
          to="/sponsors"
          className={({ isActive }) =>
            (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
          onClick={handleClose}
        >
          Sponsors
        </NavLink> */}
        {/* <NavLink
          to="/login"
          className={({ isActive }) =>
            (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
            " text-3xl font-[300] my-3 mr-10 hover:text-[#5BFFE6] hover:text-shadow-custom"
          }
          onClick={handleClose}
        >
          Login / Signup
        </NavLink> */}
      </motion.div>
    </>
  );
}

export default NavBar;
