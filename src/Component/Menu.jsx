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
        {/* नाष्टा */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-center text-xl font-bold text-rose-600 mb-4 border-b pb-2">
            नाष्टा
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {[
                  ["पोहे", "₹40"],
                  ["चहा", "₹20"],
                  ["शीरा", "₹40"],
                  ["कॉफी", "₹25"],
                  ["उपमा", "₹40"],
                  ["बुर्जी चपाती", "₹80"],
                  ["फिंगर चिप्स", "₹60"],
                  ["मसाला पापड़", "₹40"],
                  ["थालीपीठ प्लेट", "₹60"],
                  ["ऑम्लेट चपाती", "₹70"],
                ].map(([item, price], index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 text-gray-800 font-medium">{item}</td>
                    <td className="py-2 text-right text-gray-800 font-medium">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {[
                  ["चपाती", "₹15"],
                  ["पापड", "₹10"],
                  ["भाकरी", "₹20"],
                  ["दाल फ्राय", "₹120"],
                  ["व्हेज थाळी", "₹170"],
                  ["जीरा राईस", "₹120"],
                  ["अंडा थाळी", "₹180"],
                  ["दाल तडका", "₹150"],
                  ["चिकन फ्राय", "₹200"],
                  ["बांगडा फ्राय", "₹150"],
                  ["चिकन थाळी", "₹250"],
                  ["बांगडा थाळी", "₹250"],
                  ["कोळंबी फ्राय", "₹300"],
                  ["चिकन सुक्का", "₹200"],
                  ["कोळंबी थाळी", "₹400"],
                  ["कोलिम भाकरी", "₹100"],
                  ["कोळंबी मसाला", "₹350"],
                  ["सुरमई फ्राय", "(साईज नुसार)"],
                  ["पापलेट फ्राय", "(साईज नुसार)"],
                  ["सुरमई थाळी", "(साईज नुसार)"],
                  ["पॉपलेट थाळी", "(साईज नुसार)"],
                ].map(([item, price], index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 text-gray-800 font-medium">{item}</td>
                    <td className="py-2 text-right text-gray-800 font-medium">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* पेय व गोड */}
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {[
                  ["मोदक", "₹40"],
                  ["कांदा भजी", "₹80"],
                  ["बटाटा भजी", "₹50"],
                  ["घावण चटणी", "₹60"],
                  ["चिकन बिर्याणी / भात", "-"],
                  ["कोळंबी बिर्याणी / भात", "-"],
                  ["साबुदाणा खिचडी", "₹80"],
                ].map(([item, price], index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 text-gray-800 font-medium">{item}</td>
                    <td className="py-2 text-right text-gray-800 font-medium">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
