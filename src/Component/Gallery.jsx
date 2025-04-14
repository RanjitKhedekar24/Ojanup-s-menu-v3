import React from "react";
import img1 from "./ojanup_niwas.png";
import fish from "../assets/fish.jpg";
import fish2 from "../assets/fish2.jpg";
import ghavan from "../assets/ghavan.jpg";
import mandeli from "../assets/mandeli.png";
import modak from "../assets/modak.jpg";
import paplet2 from "../assets/paplet.jpg";
import papletfry from "../assets/papletfry.png";
import paplet from "../assets/papletThali.jpg";
import papletthali1 from "../assets/papletthali1.png";
import pronce from "../assets/pronce.png";
import Prawns from "../assets/Prawnsfry2.png";
import proncemasala from "../assets/proncemasala.png";
import proncethali from "../assets/proncethali.png";
import surmaifry from "../assets/surmaifry.png";
import surmaithali from "../assets/surmaithali.png";
import duplex1 from "../assets/duplex1.png";
import duplex2 from "../assets/duplex2.png";
import duplex3 from "../assets/duplex3.png";
import duplex4 from "../assets/duplex4.png";
import duplex5 from "../assets/duplex5.png";
import duplex6 from "../assets/duplex6.png";
import duplex7 from "../assets/duplex7.png";
import duplex8 from "../assets/duplex8.png";

function Gallery() {
  const images = [
    { src: paplet, alt: "Paplet Thali" },
    { src: paplet2, alt: "Paplet Fry" },
    { src: modak, alt: "Modak" },
    { src: fish, alt: "Fried Fish" },
    { src: fish2, alt: "Fish" },
    { src: ghavan, alt: "Ghavan Chutney" },
    { src: mandeli, alt: "Mandeli fry" },
    { src: surmaithali, alt: "Surmai thali" },
    { src: papletfry, alt: "Paplet fry" },
    { src: papletthali1, alt: "Paplet thali" },
    { src: pronce, alt: "Prawns fry" },
    { src: Prawns, alt: "Prawns fry" },
    { src: proncemasala, alt: "Prawns masala" },
    { src: proncethali, alt: "Prawns Thali" },
    { src: surmaifry, alt: "Surmai fry" },
  ];

  const duplexImages = [
    { src: duplex1 },
    { src: duplex2 },
    { src: duplex3 },
    { src: duplex4 },
    { src: duplex5 },
    { src: duplex6 },
    { src: duplex7 },
    { src: duplex8 },
  ];

  return (
    <>
      {/* Header Image */}
      <div className="flex justify-center pt-6">
        <div className="md:h-[40%] md:w-[40%] md:pt-[1%]">
          <img
            src={img1}
            alt="Ojanup Nivass"
            className="rounded-xl shadow-xl transition-transform duration-500"
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

      <div className="max-w-6xl mb-[10%] mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
          आमच्या खोल्या
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {duplexImages.map(({ src, alt }, index) => (
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
