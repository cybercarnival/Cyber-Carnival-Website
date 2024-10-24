import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/bg_logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useAnimate } from "framer-motion";
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
  return (
    <>
      <div className="font-alumni z-50 flex fixed top-8 left-1/2 transform -translate-x-1/2 w-11/12 h-14 justify-between ">
        <NavLink to="/" className="w-3/12 flex items-center justify-start ">
          <div className=" font-alumni text-3xl text-white flex justify-center p-3 rounded-3xl w-52 h-14 items-center">
            <img src={logo} alt="logo" className="w-32 h-auto" />
          </div>
        </NavLink>

        <div className=" w-5/12 hidden items-center justify-center bg-[#2E2B2B54] rounded-[23px] md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive
                ? "text-[#5BFFE6] text-shadow-custom"
                : "text-secondary") +
              " text-xl font-[300] mx-4 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-5"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              (isActive
                ? "text-[#5BFFE6] text-shadow-custom"
                : "text-secondary") +
              " text-xl font-[300] mx-4 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-5"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              (isActive
                ? "text-[#5BFFE6] text-shadow-custom"
                : "text-secondary") +
              " text-xl font-[300] mx-4 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-5"
            }
          >
            Events
          </NavLink>
          {/* <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              (isActive
                ? "text-[#5BFFE6] text-shadow-custom"
                : "text-secondary") +
              " text-xl font-[300] mx-4 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-5"
            }
          >
            Sponsors
          </NavLink> */}
        </div>
        <div className=" w-5/12 flex items-center justify-end md:w-3/12">
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
            className="h-[30px] w-[30px] text-secondary block md:hidden"
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
