import React from "react";
import img1 from "./ojanup_niwas.png";
import paplet from "../assets/papletThali.jpg";
import paplet2 from "../assets/paplet.jpg";
import fish from "../assets/fish.jpg";
import modak from "../assets/modak.jpg";
import ghavan from "../assets/ghavan.jpg";

function Menu() {
  return (
    <>
      <div className="flex justify-center pt-6">
        <div className="md:h-[40%] md:w-[40%] md:pt-[30px]">
          <img
            src={img1}
            alt="Ojanup Nivass"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* नाष्टा */}
        <div className="md:h-[40%] md:w-[40%] rounded overflow-hidden shadow-lg flex items-center justify-center mx-auto bg-white">
          <img
            src={ghavan}
            alt="Ojanup Nivass"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-center text-xl font-bold text-rose-600 mb-4 border-b pb-2">
            नाष्टा
          </h2>
          <ul className="space-y-1 text-gray-800 font-medium">
            <li>पोहे - ₹40</li>
            <li>चहा - ₹20</li>
            <li>शीरा - ₹40</li>
            <li>कॉफी - ₹25</li>
            <li>उपमा - ₹40</li>
            <li>बुर्जी चपाती - ₹80</li>
            <li>फिंगर चिप्स - ₹60</li>
            <li>मसाला पापड़ - ₹40</li>
            <li>थालीपीठ प्लेट - ₹60</li>
            <li>आमलेट चपाती - ₹70</li>
          </ul>
        </div>

        {/* जेवण */}
        <div className="md:h-[40%] md:w-[40%] rounded overflow-hidden shadow-lg flex items-center justify-center mx-auto bg-white">
          <img
            src={paplet}
            alt="Ojanup Nivass"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-center text-xl font-bold text-rose-600 mb-4 border-b pb-2">
            जेवण
          </h2>
          <ul className="space-y-1 text-gray-800 font-medium">
            <li>चपाती- ₹15</li>
            <li>पापड - ₹10</li>
            <li>भाकरी - ₹20</li>
            <li>दाल फ्राय - ₹120</li>
            <li>व्हेज थाळी - ₹170</li>
            <li>जीरा राईस - ₹120</li>
            <li>अंडा थाळी - ₹180</li>
            <li>दाल तडका - ₹150</li>
            <li>चिकन फ्राय - ₹200</li>
            <li>बांगडा फ्राय - ₹150</li>
            <li>चिकन थाळी - ₹250</li>
            <li>बांगडा थाळी - ₹250</li>
            <li>कोळंबी फ्राय - ₹300</li>
            <li>चिकन सुक्का - ₹200</li>
            <li>कोळंबी थाळी - ₹400</li>
            <li>कोलिम भाकरी - ₹100</li>
            <li>कोळंबी मसाला - ₹350</li>
            <li>सुरमई फ्राय (साईज नुसार)</li>
            <li>पापलेट फ्राय (साईज नुसार)</li>
            <li>सुरमई थाळी (साईज नुसार)</li>
            <li>पॉपलेट थाळी (साईज नुसार)</li>
          </ul>
        </div>
        <div className="md:h-[40%] md:w-[40%] rounded overflow-hidden shadow-lg flex items-center justify-center mx-auto bg-white">
          <img
            src={paplet2}
            alt="Ojanup Nivass"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Beverages and Sweets */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow col-span-full md:col-span-1">
          <h2 className="text-center text-xl font-bold text-rose-600 mb-4 border-b pb-2">
            पेय व गोड
          </h2>
          <ul className="space-y-2 text-center text-gray-800 font-medium">
            <li>सोलकढी - ₹40</li>
            <li>गुलाबजाम प्लेट - ₹25</li>
          </ul>
        </div>

        {/* Order Specific */}
        <div className="md:h-[40%] md:w-[40%] rounded overflow-hidden shadow-lg flex items-center justify-center mx-auto bg-white">
          <img
            src={modak}
            alt="Ojanup Nivass"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-center text-xl font-bold text-rose-600 mb-4 border-b pb-2">
            ऑर्डर प्रमाणे
          </h2>
          <ul className="space-y-1 text-gray-800 font-medium">
            <li>मोदक - ₹40</li>
            <li>कांदा भजी - ₹80</li>
            <li>बटाटा भजी - ₹50</li>
            <li>घावण चटणी - ₹60</li>
            <li>चिकन बिर्याणी / भात</li>
            <li>कोळंबी बिर्याणी / भात</li>
            <li>साबुदाणा खिचडी - ₹80</li>
          </ul>
        </div>

        {/* Special Item */}
        <div className="md:h-[40%] md:w-[40%] rounded overflow-hidden shadow-lg flex items-center justify-center mx-auto bg-white">
          <img
            src={fish}
            alt="Ojanup Nivass"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 mb-10 hover:shadow-xl transition-shadow col-span-full">
          <p className="text-center text-lg font-bold text-rose-700">
            मासे बनविणे - ₹400
          </p>
        </div>
      </div>
    </>
  );
}

export default Menu;
