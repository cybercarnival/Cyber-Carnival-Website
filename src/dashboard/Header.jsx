import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav("/admin/home")}
      className="h-14 border-b-2 cursor-pointer border-black w-full flex items-center sm:justify-start md:justify-center"
    >
      <h1 className="text-white sm:text-sm  md:text-2xl font-serif m-2">
        Cyber Carnival '25 Dashboard
      </h1>
    </div>
  );
}

export default Header;
