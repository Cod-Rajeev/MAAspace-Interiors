import React from "react";
import PopupForm from "../PopupForm";
import PortFolioData from "../PortFolio/PortFolioData";

const PortFolio = () => {
  const data = PortFolioData;

  return (
    <>
      <div className="bg-neutral-300 flex flex-col items-center pt-0 p-10">
        {/* Heading Section */}
        <section className="max-w-7xl w-full text-center bg-neutral-700 mb-5 p-10 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 select-none">
            MAAspace <span className="text-sm font-medium">INTERIORS</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-xl select-none">
            Comprehensive solutions for every space in your home
          </p>
        </section>
        <section className="max-w-7xl w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg shadow-md hover:scale-[1.02] outline outline-1 outline-gray-200 transition-transform duration-300 flex flex-col"
            >
              <div className="overflow-hidden rounded-t-lg">
                {item.video ? (
                  <video
                    src={item.video}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-60 object-cover"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                )}
              </div>

              <div className="p-4 md:p-6 flex flex-col grow">
                <h2 className="text-yellow-700 font-semibold text-xl md:text-2xl mb-2 ">
                  {item.title}
                </h2>
                <p className="text-neutral-800 poppins-medium md:text-lg grow">
                  {item.description.slice(0, 150)}
                </p>
              </div>
            </article>
          ))}
        </section>

        <PopupForm />
      </div>
    </>
  );
};

export default PortFolio;
