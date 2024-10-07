import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function NavBar() {
  return (
    <>
      <div className="font-alumni z-50 flex fixed top-8 left-1/2 transform -translate-x-1/2 w-11/12 h-14 justify-between ">
        <NavLink to="/" className="w-3/12 flex items-center justify-start ">
          <div className=" bg-[#2E2B2B54] font-alumni text-3xl text-white flex justify-center p-1 rounded-3xl w-32 h-14 items-center">
            Logo
          </div>
        </NavLink>

        <div className=" w-5/12 flex items-center justify-center bg-[#2E2B2B54] bg-opacity-[0.33]  rounded-[23px] ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive
                ? "text-[#5BFFE6] text-shadow-custom"
                : "text-secondary") +
              " text-3xl font-[300] mx-8 hover:text-[#5BFFE6] hover:text-shadow-custom"
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
              " text-3xl font-[300] mx-8 hover:text-[#5BFFE6] hover:text-shadow-custom"
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
              " text-3xl font-[300] mx-8 hover:text-[#5BFFE6] hover:text-shadow-custom"
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              (isActive
                ? "text-[#5BFFE6] text-shadow-custom"
                : "text-secondary") +
              " text-3xl font-[300] mx-8 hover:text-[#5BFFE6] hover:text-shadow-custom"
            }
          >
            Sponsors
          </NavLink>
        </div>
        <div className=" w-3/12 flex items-center justify-end ">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] " : "text-secondary") +
              " mx-2 hover:text-[#5BFFE6] "
            }
          >
            <AccountCircleOutlinedIcon sx={{ height: "50px", width: "50px" }} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
