import React from 'react'

import interiorDesignData from './InteriorDesignData'

const Designs = () => {
  return (
    <section className=" w-full px-4 py-12 bg-gray-500 flex justify-center">
      <div className="gap-20">
        {interiorDesignData.map((design, id) => (
          <div
            key={id}
            className="w-full max-w-7xl grid md:grid-cols-2  gap-20 mb-10 items-center z-10"
          >
            {/* 📷 Image Section */}
            <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={design.image}
                // alt="Img Not Available"
                alt={design.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png";
                }}
              />
            </div>

            {/* 📝 Text Card */}
            <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8">
              <strong className="text-3xl sm:text-4xl text-amber-900 uppercase block mb-4 cormorant-garamond-bold  text-center">
                {design.title}
              </strong>
              <p className="text-gray-800 poppins-medium">
                {design.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Designs