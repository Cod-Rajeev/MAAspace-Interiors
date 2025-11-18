import React from 'react'
import { PackageOpen, HousePlug, BedDouble } from "lucide-react";

import Hero from "../FirstSction/Hero.jpg"
import aboutimg from "../FirstSction/aboutimg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/consultationBooking#contact"); 

  };

  return (
    <>
      
      <div className="bg-white poppins-regular relative w-full h-screen flex flex-col items-center justify-center text-center ">
        <section className="w-full h-full relative">
          {/* Background Image */}
          <img
            src={Hero}
            alt="Modern living room interior"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98b84167-474c-438b-8b97-d88ac48851fa.png";
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-20 gap-12 md:gap-0 lg:px-40">
            <h1 className="text-5xl md:text-7xl poppins-bold-italic text-white">
              Blending Tradition & Modernity – Luxury Interiors in Udaipur
            </h1>
            <p className="text-base  md:text-2xl poppins-regular text-white mt-4 md:mt-6 max-w-4xl">
              MAAspace has been transforming homes since 2017 — honoring
              cultural roots while embracing modern elegance. Each project
              blends tradition with innovation, creating spaces full of beauty,
              comfort, and timeless functionality.
            </p>

            {/* Button */}
            <button
              onClick={handleClick}
              className="mt-4 md:mt-10 bg-amber-700 hover:bg-amber-600 text-white poppins-medium px-6 py-2 md:px-10 md:py-4 rounded-lg shadow-lg text-lg sm:text-sm md:text-lg"
            >
              Get Free Consultation
            </button>
          </div>
        </section>
      </div>

      {/* *************************** */}

      <div className="w-full bg-white p-6 sm:p-10">
        <div className="px-2 sm:px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className=" text-black flex flex-col items-center p-4 bg-[#ede0d4] rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105">
              <h1 className="flex items-center justify-center p-3 sm:p-5 hover:bg-amber-600 bg-amber-700 rounded-full w-16 h-16 sm:w-24 sm:h-24">
                <HousePlug className="w-8 h-8 sm:w-12 sm:h-12" />
              </h1>
              <div className="text-center">
                <h3 className="text-base sm:text-xl mt-4 font-semibold">
                  Your Space, Your Style
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Interiors thoughtfully crafted to reflect your unique
                  personality, blending timeless elegance with practical
                  functionality.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className=" text-black flex flex-col items-center p-4 bg-[#ede0d4] rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105">
              <h1 className="flex items-center justify-center p-3 sm:p-5 hover:bg-amber-600 bg-amber-700 rounded-full w-16 h-16 sm:w-24 sm:h-24">
                <PackageOpen className="w-8 h-8 sm:w-12 sm:h-12" />
              </h1>
              <div className="text-center">
                <h3 className="text-base sm:text-xl mt-4 font-semibold">
                  30% More Living Space
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Innovative designs maximize every inch, blending smart
                  space-saving solutions with comfort and modern style.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" text-black flex flex-col items-center p-4 bg-[#ede0d4]  rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105">
              <h1 className="flex items-center justify-center p-3 sm:p-5 bg-amber-700 rounded-full w-16 h-16 sm:w-24 sm:h-24">
                <BedDouble className="w-8 h-8 sm:w-12 sm:h-12" />
              </h1>
              <div className="text-center">
                <h3 className="text-base sm:text-xl mt-4 font-semibold">
                  Quality You Can See and Feel
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Interiors crafted from premium materials, offering durability,
                  timeless beauty, and unmatched elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ************************ */}

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 bg-[#ede0d4]  text-gray-900">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 px-4 sm:px-8 md:px-20 py-8">
          {/* <!-- Text content --> */}
          <section className="md:w-1/2 text-base sm:text-lg leading-relaxed">
            <h2 className="text-gray-800 font-bold text-2xl sm:text-2xl md:text-4xl mb-2">
              Luxury Interiors Designed Around You
            </h2>
            <p className="py-5 poppins-regular  text-justify">
              At MaaSpace Interiors, we believe your home is more than just
              walls and furniture — it’s a canvas of your dreams, lifestyle, and
              emotions. Since 2017, we have been creating luxury interior design
              and turnkey solutions in Udaipur, blending beauty, comfort, and
              functionality in perfect harmony.
            </p>
            <p className="pb-5 poppins-regular  text-justify">
              From modular kitchens to elegant bedrooms, stylish living rooms to
              premium office interiors, every space we design reflects timeless
              elegance and everyday practicality. With a team driven by passion
              and precision, MaaSpace Interiors transforms ordinary spaces into
              extraordinary living experiences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[120px] rounded-xl overflow-hidden bg-white px-4 py-3 hover:bg-orange-100 transition text-center">
                <h1 className="text-2xl sm:text-3xl text-amber-700 font-bold">
                  200<sup>+</sup>
                </h1>
                <p className="text-gray-900 poppins-medium text-sm sm:text-base">
                  Projects Completed
                </p>
              </div>
              <div className="flex-1 min-w-[120px] rounded-xl overflow-hidden bg-white px-4 py-3 hover:bg-orange-100 transition text-center">
                <h1 className="text-2xl sm:text-3xl text-amber-700 font-bold">
                  2017
                </h1>
                <p className="text-gray-900 poppins-medium text-sm sm:text-base">
                  Serving Since
                </p>
              </div>
              <div className="flex-1 min-w-[120px] rounded-xl overflow-hidden bg-white px-4 py-3 hover:bg-orange-100 transition text-center">
                <h1 className="text-2xl sm:text-3xl text-amber-700 font-bold">
                  2000<sup>+</sup>
                </h1>
                <p className="text-gray-900 poppins-medium text-sm sm:text-base">
                  Happy Clients
                </p>
              </div>
            </div>
          </section>

          {/* <!-- Image content --> */}
          <section className="md:w-1/2 w-full bg-gray-300 rounded-lg p-4 shadow-lg transform md:hover:-skew-y-3">
            <img
              src={aboutimg}
              alt="Modern interior design living room"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg select-none"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png";
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Home