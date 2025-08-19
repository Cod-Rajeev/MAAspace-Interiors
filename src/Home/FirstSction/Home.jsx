import React from 'react'
import { PackageOpen, HousePlug, BedDouble } from "lucide-react";

import Hero from "../FirstSction/Hero.jpg"
import aboutimg from "../FirstSction/aboutimg.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import WhyChoose from '../WhyChoose/WhyChoose';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ConsultationBooking"); 

  };
  //  var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // screens below 1024px
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 640, // screens below 640px
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }
  //   ]
  // };

  return (
    <>
      {/* <div className="bg-white min-h-auto flex flex-col items-center relative overflow-hidden">
        <section className="w-full px-0 md:px-5 gap-4 md:gap-1">
          <Slider {...settings}>
 
            <div className="px-0 md:px-0">
              <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
                <div className="relative hover:rounded-xl overflow-hidden rounded-lg">
                  <img
                    src={FirstImg}
                    alt="Modern living room interior"
                    className="w-full h-64 md:h-[500px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98b84167-474c-438b-8b97-d88ac48851fa.png";
                    }}
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-2 rounded-md w-[90%] md:w-[70%]">
                    <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-4 text-center">
                      Full Home Interiors?
                    </h1>
                    <p className="text-xs md:text-lg font-medium text-center leading-tight md:leading-normal">
                      Experience a complete makeover that brings harmony and
                      grandeur to every corner of your home. From the living
                      room to the bedroom, every area reflects a unified design
                      language that is a fusion of style, functionality, and
                      comfort.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="px-0 md:px-0">
              <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
                <div className="relative hover:rounded-xl overflow-hidden rounded-t-lg">
                  <img
                    src={SecondImg}
                    alt="Cozy living room interior"
                    className="w-full h-64 md:h-[500px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-2 rounded-md w-[90%] md:w-[70%]">
                    <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-4 text-center">
                      Modular Room
                    </h1>
                    <p className="text-xs md:text-lg font-medium text-center leading-tight md:leading-normal">
                      Discover kitchens that blend ergonomic layouts with sleek,
                      modern style. Each space is thoughtfully crafted to
                      enhance daily functionality, optimize movement, and
                      elevate the cooking experience — all while maintaining a
                      clean, sophisticated aesthetic appeal.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="px-0 md:px-0">
              <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
                <div className="relative hover:rounded-xl overflow-hidden rounded-t-lg">
                  <img
                    src={ThirdImg}
                    alt="Sleek modern kitchen interior"
                    className="w-full h-64 md:h-[500px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-2 rounded-md w-[90%] md:w-[70%]">
                    <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-4 text-center">
                      Wardrobe Solutions?
                    </h1>
                    <p className="text-xs md:text-lg font-medium text-center leading-tight md:leading-normal">
                      Tailored storage solutions meticulously designed to fit
                      your unique space and lifestyle. These smart systems
                      maximize every inch, reduce clutter, enhance organization,
                      and bring seamless functionality to your home with
                      elegance and long-lasting practicality.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </Slider>
        </section>
      </div> */}

      <div className="bg-white min-h-auto h-full flex flex-col items-center relative overflow-hidden">
        <section className="w-full">
          <div>
            <article className="transform-gpu duration-300 flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={Hero}
                  alt="Modern living room interior"
                  className="w-full h-auto md:h-[610px] object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98b84167-474c-438b-8b97-d88ac48851fa.png";
                  }}
                />
                <div className="absolute bottom-0 pt-2 md:pt-12 text-white bg-black/50 h-full flex flex-col justify-center">
                  <h1 className="text-lg sm:text-2xl md:text-5xl font-bold px-4 sm:px-10 md:px-20 lg:px-72 text-center">
                    Blending Tradition and Modernity in Every Home
                  </h1>
                  <p className="text-xs sm:text-base md:text-2xl text-center px-6 md:px-20 lg:px-36 pt-4 md:pt-7">
                    MAAspace has been transforming homes since 2017 — honoring
                    cultural roots while embracing modern elegance. Each project
                    blends tradition with innovation, creating spaces full of
                    beauty, comfort, and timeless functionality.
                  </p>

                  {/* Fixed button */}
                  <button
                    onClick={handleClick}
                    className=" hover:bg-gray-700 poppins-medium outline outline-1 px-6  rounded-lg absolute bottom-4 md:bottom-16 h-8 text-center items-center md:h-16 text-xs md:text-lg  left-1/2 transform -translate-x-1/2 shadow-lg"
                  >
                    Consultation Booking
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      

      {/* *************************** */}

      <div className="w-full bg-gray-300 p-10">
        <div className="px-0 md:px-20">
          <div className="min-h-20 justify-center text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="m-4 hover:text-gray-100 text-black flex flex-col items-center p-4 bg-orange-50 hover:bg-slate-700  rounded-2xl shadow-md overflow-hidden max-w-80 transition transform hover:scale-105">
              <h1 className=" p-5 hover:bg-amber-600 bg-amber-700 rounded-full w-24 h-24">
                <HousePlug size={55} />
              </h1>
              <div className="">
                <h3 className="text-xl px-8 py-2 mt-4 poppins-bold">
                  Your Space, Your Style
                </h3>
                <p className="poppins-medium p-3">
                  Interiors thoughtfully crafted to reflect your unique
                  personality, seamlessly combining timeless elegance with
                  practical everyday functionality for a truly personalized
                  living space.
                </p>
              </div>
            </div>

            <div className="m-4 hover:text-gray-100 text-black flex flex-col items-center p-4 bg-orange-50 hover:bg-slate-700  rounded-2xl shadow-md overflow-hidden max-w-80 transition transform hover:scale-105">
              <h1 className=" p-5 hover:bg-amber-600 bg-amber-700 rounded-full w-24 h-24">
                <PackageOpen size={55} />
              </h1>
              <div className="">
                <h3 className="text-xl px-8 py-2 mt-4 poppins-bold">
                  30% More Living Space
                </h3>
                <p className="poppins-medium p-3">
                  Innovative home interior designs that maximize every inch,
                  blending smart space-saving solutions with style, comfort, and
                  modern functionality.
                </p>
              </div>
            </div>

            <div className="m-4 hover:text-gray-100 text-black flex flex-col items-center p-4 bg-orange-50 hover:bg-slate-700  rounded-2xl shadow-md overflow-hidden max-w-80 transition transform hover:scale-105">
              <h1 className=" p-5 bg-amber-700 rounded-full w-24 h-24">
                <BedDouble size={55} />
              </h1>
              <div className="">
                <h3 className="text-xl px-8 py-2 mt-4 poppins-bold">
                  Quality You Can See and Feel
                </h3>
                <p className="poppins-medium p-3">
                  Experience interiors crafted from premium materials,
                  delivering exceptional durability, timeless beauty, and
                  unmatched elegance in every single detail of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ************************ */}

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 bg-gray-600 text-gray-50">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 px-4 sm:px-8 md:px-20 py-8">
          {/* <!-- Text content --> */}
          <section className="md:w-1/2 text-base sm:text-lg leading-relaxed">
            <h2 className="text-gray-100 font-bold text-lg sm:text-xl md:text-4xl mb-2">
              Designing Homes, Defining Lifestyles
            </h2>
            <p className="py-5 poppins-regular  text-justify">
              At MAAspace, we believe your home is more than just walls and
              furniture — it’s a reflection of your dreams, emotions, and way of
              life. Since 2017, our mission has been to transform ordinary
              spaces into extraordinary experiences, blending beauty, comfort,
              and functionality in perfect harmony.
            </p>
            <p className="pb-5 poppins-regular  text-justify">
              Our team of passionate designers brings together artistic vision
              and technical expertise to create interiors that are not only
              visually stunning but also practical for everyday living. From
              cozy living rooms to elegant bedrooms, and from stylish kitchens
              to serene balconies — we design each corner with love and
              precision.
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

      {/* <WhyChoose /> */}
    </>
  );
}

export default Home