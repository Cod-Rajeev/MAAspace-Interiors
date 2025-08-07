import React from 'react'
import SecondImg from "../SecondSection/homeMainImage.png"

const SecondSection = () => {
    const user = {
        // imgurl: {SecondImg}
    }
  return (
    <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-400 text-gray-800 pb-10">
      <div className="w-4/5 flex flex-col justify-center items-center mx-auto my-10">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-8 mt-10">
          2BHK Design Services
        </h2>
        <div class="flex flex-col justify-center items-center bg-gray-100 rounded-lg  shadow-md md:p-10 p-2">
          <div class="flex flex-col md:flex-row md:items-start gap-10  bg-gray-100 ">
            {/* <!-- Text content --> */}
            <section class="md:w-1/2 text-base sm:text-lg leading-relaxed p-0 md:p-5 text-justify">
              <div className='flex flex-col justify-center items-center'>
                <strong className='text-4xl text-neutral-600 uppercase mb-4 '>2BHK Design</strong>
                <p class="mb-5 poppins-regular">
                  As a leading interior design company in Udaipur, we specialize
                  in creating stunning 2BHK interiors that combine aesthetics
                  with functionality. Our team of experienced designers
                  understands the unique architectural styles and cultural
                  influences of Udaipur, allowing us to create spaces that feel
                  both modern and rooted in local tradition.
                </p>
                <p class="mb-5 poppins-regular">
                  We believe that every 2BHK apartment has the potential to be
                  transformed into a dream home. Whether you prefer contemporary
                  minimalism, royal Rajasthani elegance, or a fusion of styles,
                  we'll work closely with you to bring your vision to life.
                </p>
              </div>
            </section>

            {/* <!-- Image content --> */}
            <section class="md:w-1/2 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.04]">
              <img
                src={SecondImg}
                alt="Minimalist modern living room interior with a large grey sofa, two wooden rounded coffee tables, neutral cushions and printed artwork on light grey walls, styled with green plants and soft natural light"
                class="w-full h-3/6 object-cover rounded-lg select-none transition-transform duration-300 ease-in-out hover:scale-110"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection