import React from "react";
import { Link } from "react-router-dom";

import ourwork1 from "./OurWorkVideo/ourwork1.mp4";
import ourwork2 from "./OurWorkVideo/ourwork2.mp4";
import ourwork3 from "./OurWorkVideo/ourwork3.mp4";
import ourwork4 from "./OurWorkVideo/ourwork4.mp4";
import ourwork5 from "./OurWorkVideo/ourwork5.mp4";
import ourwork6 from "./OurWorkVideo/ourwork6.mp4";
import ourwork7 from "./OurWorkVideo/ourwork7.mp4";
import ourwork8 from "./OurWorkVideo/ourwork8.mp4";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ExploreOurWork = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#ebe6c0] min-h-auto flex flex-col items-center px-4 pb-10 mb-4 py-4">
      <section className="max-w-7xl w-full text-center mb-1 ">
        <h1 className="text-3xl md:text-5xl cormorant-garamond-bold mb-1 text-neutral-900 select-none uppercase">
          Explore Our Work
        </h1>
        <p className="text-gray-900 max-w-2xl pb-2 poppins-medium mx-auto text-sm md:text-xl select-none">
          A glimpse of our finest interior projects.
        </p>
      </section>

      <section className="w-full px-0 md:px-5 gap-4 md:gap-8">
        <Slider {...settings}>
          {/* First Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork1}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>

          {/* Second Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork2}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>

          {/* Third Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork3}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              {/* <div className="p-4 md:p-6 text-left flex flex-col grow">
                <h2 className="text-yellow-700 font-semibold text-xl md:text-2xl mb-2 select-none">
                  Wardrobe Solutions
                </h2>
                <p className="text-neutral-500 text-base font-semibold md:text-lg grow">
                  Custom storage solutions that maximize space and organization.
                </p>
              </div> */}
            </article>
          </div>

          {/* Forth Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork4}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>

          {/* 5 Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork5}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>

          {/* 6 Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork6}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>

          {/* 7 Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork7}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>

          {/* 8 Video */}
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl overflow-hidden rounded-t-lg">
                <video
                  src={ourwork8}
                  className="w-full h-40 md:h-80 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </article>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default ExploreOurWork;
