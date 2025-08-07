import React from 'react'

import FirstImg from "../FirstSction/box1.jpg"
import SecondImg from "../FirstSction/box2.jpg"   
import ThirdImg from "../FirstSction/box3.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Home = () => {

   var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // screens below 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // screens below 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
   
<div className="bg-white min-h-auto flex flex-col items-center relative overflow-hidden">
  <section className="w-full px-0 md:px-5 gap-4 md:gap-1">
    <Slider {...settings}>
      {/* CARD 1 */}
      <div className="px-0 md:px-0">
        <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
          <div className="relative hover:rounded-xl overflow-hidden rounded-lg">
            <img
              src={FirstImg}
              alt="Modern living room interior"
              className="w-full h-64 md:h-[500px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/98b84167-474c-438b-8b97-d88ac48851fa.png';
              }}
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-2 rounded-md w-[90%] md:w-[70%]">
              <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-4 text-center">
                Full Home Interiors?
              </h1>
              <p className="text-xs md:text-lg font-medium text-center leading-tight md:leading-normal">
                Experience a complete makeover that brings harmony and grandeur to every corner of your home. From the living room to the bedroom, every area reflects a unified design language that is a fusion of style, functionality, and comfort.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* CARD 2 */}
      <div className="px-0 md:px-0">
        <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
          <div className="relative hover:rounded-xl overflow-hidden rounded-t-lg">
            <img
              src={SecondImg}
              alt="Cozy living room interior"
              className="w-full h-64 md:h-[500px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found';
              }}
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-2 rounded-md w-[90%] md:w-[70%]">
              <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-4 text-center">Modular Kitchens</h1>
              <p className="text-xs md:text-lg font-medium text-center leading-tight md:leading-normal">
                Discover kitchens that blend ergonomic layouts with sleek, modern style. Each space is thoughtfully crafted to enhance daily functionality, optimize movement, and elevate the cooking experience — all while maintaining a clean, sophisticated aesthetic appeal.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* CARD 3 */}
      <div className="px-0 md:px-0">
        <article className="hover:scale-[1.04] card bg-white rounded-lg shadow-md cursor-pointer transform-gpu duration-300 flex flex-col">
          <div className="relative hover:rounded-xl overflow-hidden rounded-t-lg">
            <img
              src={ThirdImg}
              alt="Sleek modern kitchen interior"
              className="w-full h-64 md:h-[500px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found';
              }}
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-2 rounded-md w-[90%] md:w-[70%]">
              <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-4 text-center">Wardrobe Solutions?</h1>
              <p className="text-xs md:text-lg font-medium text-center leading-tight md:leading-normal">
                Tailored storage solutions meticulously designed to fit your unique space and lifestyle. These smart systems maximize every inch, reduce clutter, enhance organization, and bring seamless functionality to your home with elegance and long-lasting practicality.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Slider>
  </section>

  <section className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
    {/* Other content... */}
  </section>
</div>


  )
}

export default Home