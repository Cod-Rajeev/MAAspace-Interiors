import React from "react";

const WhyChoose = () => {
  const features = [
    {
      title: "Modern Design",
      description:
        "MAAspace creates innovative, functional, and stylish interiors blending comfort with elegance.",
    },
    {
      title: "End-to-End Services",
      description:
        "From concept to furnishing, we ensure smooth and consistent project execution.",
    },
    {
      title: "Quality Transparency",
      description:
        "Clients get clear communication with durable, high-quality materials.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Efficient management ensures timely delivery with precision and satisfaction.",
    },
    {
      title: "Local Presence",
      description:
        "Strong client base in Hyderabad & Udaipur with local design expertise.",
    },
    {
      title: "Personalized Design",
      description:
        "Each project reflects client lifestyle, taste, and unique vision.",
    },
  ];

  return (
    <section className="py-5 bg-[#06475a]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center py-1">
          <h2 className="text-3xl md:text-4xl text-white poppins-bold mb-6">
            Why Choose MAAspace ?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" bg-[#4a7f8f] rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105 flex flex-col
              w-3/4 sm:w-full h-[220px] p-5 mx-auto"
            >
              {/* Number */}
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 poppins-bold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-100 text-sm md:text-base poppins-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
