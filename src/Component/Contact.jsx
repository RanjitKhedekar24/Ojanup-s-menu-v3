import React from "react";
import img1 from "./ojanup_niwas_20211211_0.png";


function Contact() {
  return (
    <>
      <div className="md:h-[40%] md:w-[40%] md:pt-[30px] pt-[30%] flex items-center justify-center mx-auto">
        <img src={img1} alt="Ojanup Nivass" />
      </div>
      <span>
        <h1 className="text-center mt-2 text-xl font-semibold">+91 94209 20046 / +91 75889 16976</h1>
        <h1 className="text-center text-xl font-semibold"></h1>
      </span>
    </>
  );
}

export default Contact;
