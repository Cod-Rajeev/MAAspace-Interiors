import React from 'react'

import seconsectionmaniimg from "../Services/seconsectionmaniimg.jpeg";
import threebhkimg from "../Services/threebhkimg.png";
import { useNavigate } from 'react-router-dom';

const Services = () => {

   const navigate = useNavigate();

   const handleClick = () => {
     navigate("/consultationBooking#contact");
   };
  return (
    <>
      {/* section 1 */}

      <section className="relative w-full px-4 py-12 bg-yellow-900/30 flex justify-center">
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8 items-center z-10">
          {/* 📷 Image Section */}
          <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={threebhkimg}
              alt="2BHK Room"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png";
              }}
            />
          </div>

          {/* 📝 Text Card */}
          <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 flex flex-col items-center">
            <strong className="text-3xl sm:text-4xl text-amber-900 uppercase mb-4 cormorant-garamond-bold text-center">
              2-BHK Design
            </strong>

            <p className="text-gray-700 mb-4 poppins-semibold ">
              A 2BHK apartment offers just the right balance of space and
              comfort. With smart planning and thoughtful interiors, every
              corner can be designed to maximize functionality without
              compromising style.
            </p>
            <p className="text-gray-700 mb-4 poppins-semibold text-start">
              From elegant living rooms to cozy bedrooms and efficient kitchens,
              our designs transform compact spaces into luxurious experiences.
              Whether you love modern minimalism or vibrant traditional themes,
              we adapt the interiors to suit your lifestyle.
            </p>
            <p className="text-gray-700 poppins-bold text-start">
              Your 2BHK is more than just a house — it’s your personal haven,
              and we’ll work closely with you to bring your vision to life.
            </p>

            <h1 className="text-black poppins-semibold text-xl md:text-4xl text-center p-2 md:p-5">
              MAAspace Interiors
            </h1>

            {/* Button Centered */}
            <div className="flex justify-center w-full">
              <button
                onClick={handleClick}
                className="bg-amber-700 hover:bg-amber-600 text-white poppins-medium px-6 py-2 md:px-10 md:py-4 rounded-lg shadow-lg text-xs sm:text-sm md:text-lg"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 2  */}
      <section className="max-w-full mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="overflow-hidden flex flex-col items-center justify-center  shadow-lg bg-white pb-4">
            <img
              className="w-full  h-64 md:h-[500px] object-cover mb-4 "
              src={seconsectionmaniimg}
              alt="Sample Image"
            />
            <div className="w-3/4 flex flex-col justify-center items-center p-4 rounded-lg bg-amber-100 ">
              <h2 className="text-2xl md:text-4xl cormorant-garamond-bold uppercase mb-2 md:mb-8">
                3-BHK Interior
              </h2>
              <p className="text-gray-600 text-start poppins-medium text-sm md:text-lg">
                A 3BHK home offers the perfect blend of space, comfort, and
                style. From a spacious living room designed for family
                gatherings to cozy, well-planned bedrooms that reflect your
                personality, every corner can be transformed with elegance. The
                kitchen is crafted to balance convenience and aesthetics, while
                dedicated study or work areas bring practicality to modern
                living. Whether you prefer timeless luxury or contemporary
                minimalism, our 3BHK interiors ensure that your home is not just
                bigger, but smarter, stylish, and truly yours.
              </p>
              <h1 className="text-black poppins-semibold text-xl md:text-4xl text-center p-2 md:p-5">
                MAAspace Interiors
              </h1>
              {/* Button Centered */}
              <div className="flex justify-center w-full">
                <button
                  onClick={handleClick}
                  className="bg-amber-700 hover:bg-amber-600 text-white poppins-medium px-6 py-2 md:px-10 md:py-4 rounded-lg shadow-lg text-xs sm:text-sm md:text-lg"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="relative w-full">
        <div className="max-w-full mx-auto flex flex-col justify-center items-center text-gray-800">
          <img
            src={threebhkimg}
            alt="backgraund img"
            className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden opacity-95 z-[-1] inset-0"
          />
          <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm bg-black/40">
            <div className="w-full  md:w-4/5 flex flex-col justify-center  items-center p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-20  ">
                {/* <!-- Image content --> */}
                <section className="w-full md:w-2/3 lg:h-[550px] rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.04]">
                  <img
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Minimalist modern living room interior with a large grey sofa, two wooden rounded coffee tables, neutral cushions and printed artwork on light grey walls, styled with green plants and soft natural light"
                    className="md:w-full object-cover rounded-lg select-none transition-transform duration-300 ease-in-out hover:scale-110"
                    loading="lazy"
                    onError="this.onError=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
                  />
                </section>

                {/* <!-- Text content --> */}
                <section className="md:w-2/3 w-full h-fit bg-gray-100 text-base sm:text-lg leading-relaxed px-2 md:px-5 rounded-lg">
                  <div className="flex flex-col ">
                    <strong className="cormorant-garamond-bold mt-4 p-0 md:p-4 text-2xl md:text-4xl text-amber-900 text-center underline uppercase">
                      4-BHK Design
                    </strong>
                    <div className="p-2">
                      {/* Concept Driven Designs */}
                      <p className="mb-2 text-amber-800 poppins-semibold text-2xl flex flex-col">
                        Concept-Driven Designs
                      </p>
                      <p className="mb-2 poppins-regular">
                        A 4BHK home allows you to explore bold concepts and
                        luxury themes. From modern minimalism to traditional
                        elegance, we design every room to complement your
                        lifestyle and create a balanced, stylish home.
                      </p>

                      {/* Transforming 4BHK Spaces */}
                      <p className="mb-2 text-amber-800 poppins-semibold text-2xl flex flex-col gap-4">
                        Transforming 4BHK Spaces -
                      </p>
                      <p className="poppins-regular">
                        With multiple bedrooms and spacious living zones, a 4BHK
                        offers endless possibilities. We focus on smart layouts,
                        premium finishes, and practical elegance to make each
                        corner comfortable and stylish.
                      </p>

                      <h1 className="text-black poppins-semibold text-2xl md:text-4xl text-center p-4">
                        MAAspace Interiors
                      </h1>
                      {/* Button Centered */}
                      <div className="flex justify-center w-full">
                        <button
                          onClick={handleClick}
                          className="bg-amber-700 hover:bg-amber-600 text-white poppins-medium px-6 py-2 md:px-10 md:py-4 rounded-lg shadow-lg text-xs sm:text-sm md:text-lg"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section>
        <div className="max-w-full mx-auto sm:px-6 lg:px-8 bg-neutral-400 text-gray-800 pb-10">
          <div className="w-4/5 flex flex-col justify-center items-center mx-auto">
            <div className="flex flex-col justify-center items-center gap-5 mt-5 bg-gray-50 rounded-lg  shadow-md p-4 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-10  bg-gray-50 ">
                {/* <!-- Text content --> */}
                <section className="md:w-1/2 text-base sm:text-lg leading-relaxed ">
                  <div className="flex flex-col ">
                    <strong className="cormorant-garamond-bold p-0 md:p-4 md:text-5xl text-2xl text-amber-900 text-start underline uppercase">
                      5-BHK Design
                    </strong>
                    <div className="pt-2 md:pt-5">
                      <p className="mb-2 md:mb-7 text-amber-800 poppins-semibold md:text-2xl text-xl flex flex-col gap-1">
                        <span>Smart Home Layout Design</span>
                        <span>Concept-Driven Designs</span>
                        <span>Transforming 5BHK Spaces</span>
                      </p>

                      <p className=" poppins-regular">
                        A 5BHK home offers endless possibilities — from grand
                        living areas to private bedrooms and functional spaces.
                        Whether you love contemporary minimalism, royal
                        elegance, or a fusion of styles, we design every room to
                        match your lifestyle.
                      </p>

                      <p className="mt-4 poppins-regular">
                        With smart layouts, premium finishes, and personalized
                        themes, we transform your 5BHK into a stylish,
                        comfortable, and truly luxurious home.
                      </p>

                      <h1 className="text-black poppins-semibold text-xl md:text-4xl text-center p-2 md:p-5">
                        MAAspace Interiors
                      </h1>
                      {/* Button Centered */}
                      <div className="flex justify-center w-full">
                        <button
                          onClick={handleClick}
                          className="bg-amber-700 hover:bg-amber-600 text-white poppins-medium px-6 py-2 md:px-10 md:py-4 rounded-lg shadow-lg text-xs sm:text-sm md:text-lg"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* <!-- Image content --> */}
                <section className="md:w-1/2 h-[600px] bg-black rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.04]">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675615667682-eb53c1b7d92e?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Minimalist modern living room interior with a large grey sofa"
                    className="h-full md:w-full object-cover rounded-lg select-none transition-transform duration-300 ease-in-out hover:scale-110"
                    loading="lazy"
                    onError="this.onError=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services