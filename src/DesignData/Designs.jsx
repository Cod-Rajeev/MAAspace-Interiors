import React from 'react'

import interiorDesignData from './InteriorDesignData'

const Designs = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full  bg-neutral-100  p-10">
      {interiorDesignData.map((design, id) => (
        <div
          key={id}
          className="w-11/12 flex flex-row justify-center p-5 rounded-lg  mb-12 gap-10 bg-neutral-700 items-center"
        >
          {/* 📷 Image Section */}
          <div className="w-1/2 ">
            <img
              src={design.image}
              // alt="Img Not Available"
              alt={design.title}
              className="w-full h-96 rounded-lg shadow-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png";
              }}
            />
          </div>
          {/* 📝 Text Card */}
          <div className="bg-white w-1/2 flex flex-col justify-around shadow-lg rounded-lg p-5 overflow-hidden h-96">
            <strong className="text-3xl sm:text-4xl text-amber-900 uppercase block cormorant-garamond-bold text-center">
              {design.title}
            </strong>
            <p className="text-gray-800 px-4 poppins-regular">{design.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Designs