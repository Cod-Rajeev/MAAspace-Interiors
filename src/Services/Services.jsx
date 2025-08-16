import React from 'react'

import seconsectionmaniimg from "../Services/seconsectionmaniimg.jpeg";
import threebhkimg from "../Services/threebhkimg.png";

const Services = () => {
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
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png";
              }}
            />
          </div>

          {/* 📝 Text Card */}
          <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8">
            <strong className="text-3xl sm:text-4xl text-amber-900 uppercase block mb-4 cormorant-garamond-bold text-center">
              2-BHK Design
            </strong>
            <p className="text-gray-700 mb-4 poppins-semibold">
              We believe that every 2BHK apartment has the potential to be
              transformed into a dream home. Whether you prefer contemporary
              minimalism or royal Rajasthani elegance...
            </p>
            <p className="text-gray-700 mb-4 poppins-semibold">
              We believe that every 2BHK apartment has the potential to be
              transformed into a dream home. Whether you prefer contemporary
              minimalism or royal Rajasthani elegance...
            </p>
            <p className="text-gray-700 poppins-bold">
              ...we’ll work closely with you to bring your vision to life.
            </p>
            <h1 className="text-black poppins-semibold text-4xl text-center p-10">
              MAAspace Interiors
            </h1>
          </div>
        </div>
      </section>

      {/* section 2  */}
      <section class="max-w-full mx-auto">
        <div class="flex flex-col items-center justify-center text-center">
          <div className="overflow-hidden flex flex-col items-center justify-center  shadow-lg bg-white pb-4">
            <img
              class="w-full  h-64 md:h-[500px] object-cover mb-4 "
              src={seconsectionmaniimg}
              alt="Sample Image"
            />
            <div className="w-3/4 flex flex-col justify-center items-center p-4 rounded-lg bg-amber-100 ">
              <h2 class="text-4xl cormorant-garamond-bold uppercase mb-8">
                3-BHK Interior
              </h2>
              <p class="text-gray-600 poppins-medium text-lg">
                Discover space-saving and elegant interior ideas tailored for
                your lifestyle. Perfect for every corner of your home. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                nulla amet iure rerum ea, et animi praesentium autem ratione
                eaque asperiores beatae tempora quo delectus saepe esse eum
                aliquam cum? Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Voluptatibus harum aut quae adipisci est iste ratione enim
                placeat. Eligendi nam voluptatem iure aut dolorem assumenda
                accusantium voluptatibus, nostrum nobis consequatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="relative w-full">
        <div class="max-w-full mx-auto flex flex-col justify-center items-center text-gray-800">
          <img
            src={threebhkimg}
            alt="backgraund img"
            className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden opacity-80 z-[-1] inset-0"
          />
          <div className="w-full h-full flex flex-row justify-center items-center backdrop-blur-sm bg-black/40">
            <div className="  w-4/5 flex flex-col justify-center  items-center p-10">
              <div class="flex flex-col md:flex-row md:items-start gap-20  ">
                {/* <!-- Image content --> */}
                <section class=" md:w-2/3 lg:h-[760px] rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.04]">
                  <img
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Minimalist modern living room interior with a large grey sofa, two wooden rounded coffee tables, neutral cushions and printed artwork on light grey walls, styled with green plants and soft natural light"
                    class="md:w-full object-cover rounded-lg select-none transition-transform duration-300 ease-in-out hover:scale-110"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
                  />
                </section>

                {/* <!-- Text content --> */}
                <section class="md:w-2/3 h-fit bg-gray-100 text-base sm:text-lg leading-relaxed text-justify px-5 rounded-lg">
                  <div className="flex flex-col ">
                    <strong className="cormorant-garamond-bold mt-5 p-4 text-5xl text-amber-900 text-start underline uppercase">
                      4-BHK Design
                    </strong>
                    <div className=" p-5">
                      <p class="mb-2 text-amber-800 poppins-semibold text-2xl poppins-regular flex flex-col gap-4">
                        Br Concept-Driven Designs -
                      </p>
                      <p class="mb-5 poppins-regular">
                        We believe that every 4BHK apartment has the potential
                        to be transformed into a dream home. Whether you prefer
                        contemporary minimalism, royal Rajasthani elegance, or a
                        fusion of styles, we'll work closely with you to bring
                        your vision to life.
                      </p>
                      <p class="mb-2 text-amber-800 poppins-semibold text-2xl poppins-regular flex flex-col gap-4">
                        Transforming 4BHK Spaces -
                      </p>
                      <p class=" poppins-regular">
                        We believe that every 4BHK apartment has the potential
                        to be transformed into a dream home. Whether you prefer
                        contemporary minimalism, royal Rajasthani elegance, or a
                        fusion of styles, we'll work closely with you to bring
                        your vision to life. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.accusamus alias accusantium
                        ex pariatur.
                      </p>

                      <h1 className="text-black poppins-semibold text-4xl text-center p-10">
                        MAAspace Interiors
                      </h1>
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
        <div class="max-w-full mx-auto sm:px-6 lg:px-8 bg-neutral-400 text-gray-800 pb-10">
          <div className="w-4/5 flex flex-col justify-center items-center mx-auto">
            <div class="flex flex-col justify-center items-center gap-10 mt-10 bg-gray-50 rounded-lg  shadow-md p-10">
              <div class="flex flex-col md:flex-row md:items-start gap-10  bg-gray-50 ">
                {/* <!-- Text content --> */}
                <section class="md:w-1/2 text-base sm:text-lg leading-relaxed ">
                  <div className="flex flex-col ">
                    <strong className="cormorant-garamond-bold p-4 md:text-5xl text-lg text-amber-900 text-start underline uppercase">
                      5-BHK Design
                    </strong>
                    <div className="pt-14">
                      <p class="mb-10 text-amber-800 poppins-semibold md:text-1xl text-2xl poppins-regular flex flex-col gap-4">
                        <span>Smart Home Layout Design -</span>
                        <span>Br Concept-Driven Designs -</span>
                        <span>Transforming 2BHK Spaces -</span>
                      </p>
                      <p class="mb-5 poppins-regular ">
                        We believe that every 5BHK apartment has the potential
                        to be transformed into a dream home. Whether you prefer
                        contemporary minimalism, royal Rajasthani elegance, or a
                        fusion of styles, we'll work closely with you to bring
                        your vision to life.
                      </p>
                      <p class="mt-10 poppins-regular">
                        We believe that every 5BHK apartment has the potential
                        to be transformed into a dream home. Whether you prefer
                        contemporary minimalism, royal Rajasthani elegance, or a
                        fusion of styles, we'll work closely with you to bring
                        your vision to life.
                      </p>

                      <h1 className="text-black poppins-semibold text-4xl text-center">
                        MAAspace Interiors
                      </h1>
                    </div>
                  </div>
                </section>

                {/* <!-- Image content --> */}
                <section class="md:w-1/2 h-[700px] bg-black rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.04]">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675615667682-eb53c1b7d92e?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Minimalist modern living room interior with a large grey sofa"
                    class="h-full md:w-full object-cover rounded-lg select-none transition-transform duration-300 ease-in-out hover:scale-110"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
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