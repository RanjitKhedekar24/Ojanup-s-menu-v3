import React from "react";
import img1 from "./ojanup_niwas.png";
import paplet from "../assets/papletThali.jpg";
import paplet2 from "../assets/paplet.jpg";
import fish from "../assets/fish.jpg";
import modak from "../assets/modak.jpg";
import ghavan from "../assets/ghavan.jpg";

function Gallery() {
  const images = [
    { src: paplet, alt: "Paplet Thali" },
    { src: paplet2, alt: "Paplet Fry" },
    { src: modak, alt: "Modak" },
    { src: fish, alt: "Fried Fish" },
    { src: ghavan, alt: "Ghavan Chutney" },
  ];

  return (
    <>
      {/* Header Image */}
      <div className="flex justify-center pt-6">
        <div className="md:h-[40%] md:w-[40%] md:pt-[30px]">
          <img
            src={img1}
            alt="Ojanup Nivass"
            className="rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mb-[10%] mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
          🍽️ आमच्या खास पदार्थांची गॅलरी
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(({ src, alt }, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={alt}
                className="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-center text-sm font-semibold text-slate-700">
                {alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
