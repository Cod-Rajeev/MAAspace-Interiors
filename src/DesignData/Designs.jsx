import React from 'react'

import interiorDesignData from './InteriorDesignData'

const Designs = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full bg-neutral-100 p-6 sm:p-10">
      {interiorDesignData.map((design, id) => (
        <div
          key={id}
          className="w-full md:w-11/12 flex flex-col md:flex-row justify-center p-4 sm:p-5 rounded-lg mb-8 md:mb-12 gap-6 md:gap-10 bg-neutral-700 items-center"
        >
          {/* 📷 Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png";
              }}
            />
          </div>

          {/* 📝 Text Card */}
          <div className="bg-white w-full md:w-1/2 flex flex-col justify-around shadow-lg rounded-lg p-4 sm:p-5 overflow-hidden h-auto md:h-96">
            <strong className="text-2xl sm:text-3xl md:text-4xl text-amber-900 uppercase block cormorant-garamond-bold text-center mb-3">
              {design.title}
            </strong>
            <p className="text-gray-800 px-2 sm:px-4 poppins-regular text-sm sm:text-lg">
              {design.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Designs