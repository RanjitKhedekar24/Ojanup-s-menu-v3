import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full md:h-[80px] hidden md:flex md:bg-black md:fixed md:top-0 text-white md:justify-center justify-around items-center md:gap-[50px] gap-[20px] p-[20px]">
        <Link to="/" className="transition-all duration-200 hover:scale-110 hover:text-gray-300">Home</Link>
        <Link to="/contact" className="transition-all duration-200 hover:scale-110 hover:text-gray-300">Contact us</Link>
        <Link to="/menu" className="transition-all duration-200 hover:scale-110 hover:text-gray-300">Menu</Link>
        <Link to="/gallery" className="transition-all duration-200 hover:scale-110 hover:text-gray-300">Gallery</Link>
      </div>
    </>
  );
}

export default Navbar;
