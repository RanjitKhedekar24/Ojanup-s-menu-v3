import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full h-[80px] bg-black fixed bottom-0 md:top-0 text-white flex md:justify-center justify-around items-center md:gap-[50px] gap-[20px] p-[20px]">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </>
  );
}

export default Navbar;
