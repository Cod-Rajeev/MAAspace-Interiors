import React from "react";

const ClientSuccessStories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          Client Success Stories
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base max-w-xl mx-auto relative inline-block">
          See what our clients have to say about their experience
          <span className="block h-1 w-20 bg-yellow-600 rounded-full mx-auto mt-1"></span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Video Section */}
        <div className="relative group w-full md:w-1/2 max-w-lg shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:-skew-y-3 hover:scale-[1.04]">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            className="w-full h-auto rounded-xl"
            aria-label="Client family happily interacting in their home setting video"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="absolute inset-0 pointer-events-none"></div>
        </div>

        {/* Testimonial & Button */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <blockquote className="italic text-gray-700 text-lg md:text-xl leading-relaxed mb-6 relative before:content-['“'] before:absolute before:-top-4 before:-left-6 before:text-6xl before:text-yellow-300 before:font-serif before:opacity-20">
            BFI Interiors completely transformed our home beyond our expectations.
            Their attention to detail and creative solutions made the entire process enjoyable.
          </blockquote>
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            Priti &amp; Nitin Gupta
          </p>
          <p className="text-gray-500 text-sm md:text-base mb-8">
            Residential Project, Udaipur
          </p>

          <button
            type="button"
            className="hover:-skew-y-3 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold rounded-full px-6 py-3 transition-colors w-full md:w-auto"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;

