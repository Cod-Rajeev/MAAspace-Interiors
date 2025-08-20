import React from "react";
import PopupForm from "../PopupForm";
import PortFolioData from "../PortFolio/PortFolioData";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PortFolio = () => {
  const data = PortFolioData;

  return (
    <div className="bg-neutral-300 flex flex-col items-center pt-0 p-10">
      {/* Heading Section */}
      <section className="max-w-7xl w-full text-center bg-neutral-700 mb-5 p-10 rounded-md">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 select-none">
          MAAspace <span className="text-sm font-medium">INTERIORS</span>
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-xl select-none">
          Comprehensive solutions for every space in your home
        </p>
      </section>

      {/* Grid of Cards */}
      <section className="max-w-7xl w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, idx) => (
          <article
            key={idx}
            className="bg-white rounded-lg shadow-md hover:scale-[1.02] outline outline-1 outline-gray-200 transition-transform duration-300 flex flex-col"
          >
            <div className="overflow-hidden rounded-t-lg relative">
              {/* Agar images array hai to Swiper show karo */}
              {Array.isArray(item.image) && item.image.length > 1 ? (
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  loop={true}
                  className="w-full h-60"
                >
                  {item.image.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={item.title}
                        className="w-full h-60 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : item.video ? (
                <video
                  src={item.video}
                  controls
                  muted
                  loop
                  className="w-full h-60 object-cover"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
              )}
            </div>

            <div className="p-4 md:p-6 flex flex-col grow">
              <h2 className="text-yellow-700 font-semibold text-xl md:text-2xl mb-2 ">
                {item.title}
              </h2>
              <p className="text-neutral-800 poppins-regular md:text-base grow">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <PopupForm />

      {/* Tailwind Custom Styling for Swiper Arrows */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            font-weight: semibold;
            transition: all 0.3s ease;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: #facc15 !important;
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
};

export default PortFolio;
