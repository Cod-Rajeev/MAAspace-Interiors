import React from "react";
import { Link } from "react-router-dom";

import FirstImg from "../ThirdSection/box1.jpg";
import SecondImg from "../ThirdSection/box2.jpg";
import ThirdImg from "../ThirdSection/box3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const gallerySlider = () => {
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
        breakpoint: 1024, // screens below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // screens below 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-neutral-700 min-h-auto flex flex-col items-center px-4 py-12">
      <section className="max-w-7xl w-full text-center mb-10 ">
        <h1 className="text-3xl md:text-5xl cormorant-garamond-bold mb-3 text-white select-none uppercase">
          Masterpiece Services
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-xl select-none">
          Comprehensive solutions for every space in your home
        </p>
      </section>

      <section className="w-full px-0 md:px-5 gap-4 md:gap-8">
        <Slider {...settings}>
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl image-container overflow-hidden rounded-t-lg">
                <img
                  src={FirstImg}
                  alt="Modern living room interior"
                  className="w-full h-40 md:h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98b84167-474c-438b-8b97-d88ac48851fa.png";
                  }}
                />
              </div>
              <div className="p-4 md:p-6 text-left flex flex-col grow">
                <h2 className="text-yellow-700 font-semibold text-xl md:text-2xl mb-2 select-none">
                  Full Home Interiors
                </h2>
                <p className="text-neutral-500 text-base font-semibold md:text-lg grow">
                  Complete home transformation cohesive design language across
                  all.
                </p>
              </div>
            </article>
          </div>
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl image-container overflow-hidden rounded-t-lg">
                <img
                  src={SecondImg}
                  alt="Cozy living room interior"
                  className="w-full h-40 md:h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="p-4 md:p-6 text-left flex flex-col grow">
                <h2 className="text-yellow-700 font-semibold text-xl md:text-2xl mb-2 select-none">
                  Modular Kitchens
                </h2>
                <p className="text-neutral-500 text-base font-semibold md:text-lg grow">
                  Ergonomic, stylish kitchens designed for functionality and
                  aesthetics.
                </p>
              </div>
            </article>
          </div>
          <div className="px-2 md:px-5">
            <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
              <div className="transform hover:rounded-xl image-container overflow-hidden rounded-t-lg">
                <img
                  src={ThirdImg}
                  alt="Sleek modern kitchen interior"
                  className="w-full h-40 md:h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400?text=Image+Not+Found";
                  }}
                />
              </div>
              <div className="p-4 md:p-6 text-left flex flex-col grow">
                <h2 className="text-yellow-700 font-semibold text-xl md:text-2xl mb-2 select-none">
                  Wardrobe Solutions
                </h2>
                <p className="text-neutral-500 text-base font-semibold md:text-lg grow">
                  Custom storage solutions that maximize space and organization.
                </p>
              </div>
            </article>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default gallerySlider;
