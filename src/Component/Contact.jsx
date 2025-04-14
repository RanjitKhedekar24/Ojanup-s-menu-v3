import React from "react";
import img1 from "./ojanup_niwas.png";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




function Contact() {
  return (
    <>
      <div className="md:h-[35%] md:w-[35%] md:pt-[30px] pt-[30%] flex items-center justify-center mx-auto">
        <img src={img1} alt="Ojanup Nivass" />
      </div>
      
      <div className="flex items-center justify-center gap-2 mt-2">
        <IoCallOutline size={24} className="text-gray-900" />
        <span className="flex flex-col gap-1">
          <a 
            href="tel:+919420920046" 
            className="text-xl font-semibold hover:text-rose-600 transition-colors duration-200"
          >
            +91 94209 20046
          </a>
          <a 
            href="tel:+917588916976" 
            className="text-xl font-semibold hover:text-rose-600 transition-colors duration-200"
          >
            +91 75889 16976
          </a>
        </span>
      </div>
      
      <div className="flex items-center justify-center gap-2 mt-4">
        <MdEmail size={24} className="text-gray-900" />
        <a 
          href="mailto:ojanupniwas@gmail.com" 
          className="text-lg font-medium hover:text-rose-600 transition-colors duration-200"
        >
          ojanupniwas@gmail.com
        </a>
      </div>
      
      <div className="flex items-center justify-center gap-2 mt-4">
        <a 
          href="https://www.instagram.com/hotel_ojanup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-all duration-200"
        >
          <FaInstagram size={24} className="text-[#E4405F]" />
          <span className="text-lg font-medium">Follow us on Instagram</span>
        </a>
      </div>
    </>
  );
}

export default Contact;
