import React from "react";
import img1 from "./ojanup_niwas_20211211_0.png";

function Home() {
  return (
    <>
      <div className="md:h-[40%] md:w-[40%] md:pt-[30px] pt-[30%] flex items-center justify-center mx-auto">
        <img src={img1} alt="Ojanup Nivass" />
      </div>
      <h1 className="text-center mt-4 text-xl font-semibold">ओजानुप निवास</h1>
      <h1 className="text-center text-lg font-bold ">(OJANUP NIVAS)</h1>
    </>
  );
}

export default Home;
