import React, { useState } from "react";

import scrolone from "./scrolone.jpg";
import scroltwo from "./scroltwo.jpg";       
import scrolthree from "./scrolthree.jpg";
import scrolfor from "./scrolfor.jpg";

const images = [
  {
    src: scrolone,
    alt: "Stylish dining room blending comfort, elegance, and unforgettable family moments.",
    description:
      "Stylish dining room blending comfort, elegance, and unforgettable family moments.",
  },
  {
    src: scroltwo,
    alt: "Cozy book room designed for relaxation, inspiration, and timeless reading moments.",
    description:
      "Cozy book room designed for relaxation, inspiration, and timeless reading moments.",
  },
  {
    src: scrolthree,
    alt: "Modern TV room combining comfort, style, and the ultimate entertainment experience.",
    description:
      "Modern TV room combining comfort, style, and the ultimate entertainment experience.",
  },
  {
    src: scrolfor,
    alt: "Welcoming guest room offering comfort, warmth, and a touch of elegance.",
    description:
      "Welcoming guest room offering comfort, warmth, and a touch of elegance.",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-full px-10 py-4 relative bg-green-100 overflow-hidden">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          y
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl transition-transform duration-500 ease-in-out"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/742e1544-d385-4044-a2cf-5c473125634d.png";
          }}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm sm:text-xl rounded-b-xl flex justify-center items-center  text-white bg-black/40">
          {images[currentIndex].description}
        </div>
        {/* Left Arrow */}
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/75 hover:bg-white text-gray-800 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ❮
        </button>
        {/* Right Arrow */}
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/75 hover:bg-white text-gray-800 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-3 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`w-5 h-5 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
        ))}
      </div>
    </div>
  );
}

