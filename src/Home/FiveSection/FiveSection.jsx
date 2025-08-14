import React from "react";

const FiveSection = () => {

    const user = {
        vidiourl: "src/Home/FiveSection/ImgVideo/fiveVideoYouTub.mp4"
    }


  return (
    <section className="max-w-full mx-auto p-2 md:p-12 sm:p-2 bg-slate-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Client Success Stories
        </h2>
        <p className="mt-3 text-black text-sm md:text-base max-w-xl mx-auto relative inline-block">
          See what our clients have to say about their experience
          <span className="block h-1 w-20 bg-yellow-600 rounded-full mx-auto mt-1"></span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16 ">
        {/* Video Section */}
        <div className="relative group w-full md:w-full max-w-lg shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:-skew-y-1 hover:scale-[1.04] justify-center flex items-center">
          <video
            crossOrigin=""
            controls
            loop
            autoPlay
            playsInline
            muted
            src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4"
            preload="metadata"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 pointer-events-none"></div>
        </div>

        {/* Testimonial & Button */}
        <div className="w-full md:w-full  text-center md:text-left bg-slate-100 p-2 md:p-10 rounded-xl shadow-lg">
          <blockquote className="poppins-regular text-gray-700 text-xl md:text-lg  mb-2 relative  before:absolute before:-top-4 before:-left-6 ">
            Sharma’s Family dreamed of a home that perfectly captured the charm
            of tradition while embracing the elegance of modern living. They
            wanted a space where every corner spoke of warmth, culture, and
            timeless beauty. MAAspace Interiors turned this vision into reality
            with meticulous planning and artistic precision.
            <br /> <br />
             The transformation
            began with a serene pooja room, designed as a peaceful sanctuary
            that radiates spiritual calm. The rest of the home was adorned with
            stylish interiors, premium finishes, and thoughtful layouts that
            bring together aesthetics and functionality. 
          </blockquote>
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            Sharma’s Family
          </p>
          <p className="text-gray-500 text-sm md:text-base mb-4">
            Residential Project, Delhi
          </p>
        </div>
      </div>
    </section>
  );
};

export default FiveSection;

