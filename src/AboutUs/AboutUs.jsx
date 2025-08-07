import React from 'react'

import aboutimg from "../AboutUs/aboutimg.avif";

const AboutUs = () => {
  return (
    <>
      {/* Owner Details */}

      <div class="max-w-full mx-auto px-10 bg-gray-700 md:text-justify text-white">
        <div class="flex flex-col md:flex-row md:items-start gap-10 py-5 px-10 md:px-20">
          {/* <!-- Text content --> */}
          <section class="md:w-1/2 leading-relaxed space-y-4">
            <h2 class=" font-bold text-lg sm:text-xl md:text-5xl ">
              Meet Mr. B.L. Sharma{" "}
            </h2>
            <h2 class="font-bold text-lg sm:text-xl md:text-1xl ">
              Founder & Creative Director
            </h2>
            <div className="flex flex-row gap-20 items-start">
              {/* Timeline */}
              <div className="flex flex-col">
                <h1 className="text-sm md:text-2xl font-bold">2000</h1>
                <div className="w-px h-20 bg-white"></div>
                <h1 className="text-sm md:text-2xl poppins-semibold">2025</h1>
              </div>

              {/* Contact Info (right beside timeline) */}
              <div className="space-y-4 text-white text-sm md:text-base p-4">
                <p>
                  <strong>Email:</strong> maainteriors01@gmail.com
                </p>
                <p>
                  <strong>Mobile:</strong> +91 6350498559
                </p>
                <p>
                  <strong>Address:</strong> 123, Interior Street, New Delhi,
                  India
                </p>
              </div>
            </div>

            <p class="">
              Since the year 2000, MAAspace Interiors has been transforming
              spaces into soulful experiences. Over the past 25 years, we've
              grown from a small design studio into a trusted name in
              residential and commercial interior design. With a deep commitment
              to quality, creativity, and client satisfaction, our work blends
              beauty with functionality. From elegant living rooms to functional
              kitchens, serene pooja rooms to playful kids' spaces, every
              project is a reflection of our passion and precision. Our designs
              range from minimalist modern to rich luxurious, always tailored to
              each client's lifestyle.
            </p>
            <p class="mb-5">
              In 2025, MAAspace Interiors proudly stands on a legacy built with
              trust, innovation, and timeless aesthetics. We don't just design
              spaces — we craft experiences that last.
            </p>
            <h1 className=" text-2xl sm:text-3xl mt-8 font-script kaushan-script-regular">
              MAAspace Interiors
            </h1>
          </section>

          {/* <!-- Image content --> */}

          <section class="md:w-1/2 object-cover bg-gray-900 rounded-lg p-5 shadow-lg transform ">
            <img
              src={aboutimg}
              alt="Minimalist modern living room interior..."
              class="w-full h-64 sm:h-80 md:h-[600px] object-cover rounded-lg select-none transition-transform duration-300 ease-in-out hover:scale-105"
              loading="lazy"
              onerror="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
            />
          </section>
        </div>
      </div>

      {/* Clint numbers */}

      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100 md:text-justify text-gray-800">
        <div class="flex flex-col md:flex-row md:items-start gap-10 px-20 py-14">
          {/* <!-- Text content --> */}
          <section class="md:w-1/2 text-base sm:text-lg leading-relaxed">
            <h2 class=" text-black font-bold text-lg sm:text-xl md:text-4xl mb-2">
              Why Choose Us for Your Any BHK Interior Design in Udaipur
            </h2>
            <p class="mb-5">
              As a leading interior design company in Udaipur, we specialize in
              creating stunning 2BHK interiors that combine aesthetics with
              functionality. Our team of experienced designers understands the
              unique architectural styles and cultural influences of Udaipur,
              allowing us to create spaces that feel both modern and rooted in
              local tradition.
            </p>
            <p class="mb-5">
              We believe that every 2BHK apartment has the potential to be
              transformed into a dream home. Whether you prefer contemporary
              minimalism, royal Rajasthani elegance, or a fusion of styles,
              we'll work closely with you to bring your vision to life.
            </p>

            {/* <div class="mx-2 inline-block w-40 rounded-xl overflow-hidden bg-white px-6 py-3 hover:bg-orange-100 transition text-center">
              <h1 className="text-5xl text-amber-700 font-bold">
                500<sup>+</sup>
              </h1>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div class="mx-2 inline-block w-40 rounded-xl overflow-hidden bg-white px-6 py-3 hover:bg-orange-100 transition text-center">
              <h1 className="text-5xl text-amber-700 font-bold">
                500<sup>+</sup>
              </h1>
              <p className="text-gray-400">Creative Experts</p>
            </div>
            <div class="inline-block w-40 rounded-xl overflow-hidden bg-white px-6 py-3 hover:bg-orange-100 transition text-center">
              <h1 className="text-5xl text-amber-700 font-bold">
                10K<sup>+</sup>
              </h1>
              <p className="text-gray-400">Happy Clients More than</p>
            </div> */}
          </section>

          {/* <!-- Image content --> */}
          <section class="md:w-1/2 bg-gray-300 rounded-lg p-6 shadow-lg transform hover:-skew-y-6">
            <img
              src={aboutimg}
              alt="Minimalist modern living room interior with a large grey sofa, two wooden rounded coffee tables, neutral cushions and printed artwork on light grey walls, styled with green plants and soft natural light"
              class="w-full h-3/6 object-cover rounded-lg select-none "
              loading="lazy"
              onerror="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7121465-90a9-48ab-b21e-3b5db9457b01.png';"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutUs