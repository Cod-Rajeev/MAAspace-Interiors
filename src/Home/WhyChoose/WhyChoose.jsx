import React from "react";

const WhyChoose = () => {
  const features = [
    {
      title: "Expertise in Modern Design",
      description:
        "MAAspace excels in creating innovative, functional, and stylish interiors for both residential and commercial spaces, blending creativity, comfort, and timeless elegance.",
    },
    {
      title: "Comprehensive End-to-End Services",
      description:
        "We handle everything from conceptual design to construction and furnishing, ensuring a seamless and consistent project execution.",
    },
    {
      title: "Transparent Process & Quality Materials",
      description:
        "Clients experience clear communication throughout, with a commitment to using good-quality, durable materials.",
    },
    {
      title: "On-Time Delivery",
      description:
        "Efficient project management means your interiors will be completed as promised without delays, ensuring quality, precision, and satisfaction.",
    },
    {
      title: "Strong Local Presence",
      description:
        "Based in key locations like Hyderabad and Udaipur, MAAspace has a strong client base and proven reliability in understanding local design trends.",
    },
    {
      title: "Personalized Design Approach",
      description:
        "Every project is tailored to reflect each client’s unique lifestyle, taste, and vision, ensuring interiors that truly feel like 'home.'",
    },
  ];

  return (
    <section className="py-10 bg-[#82B2C0]">
      <div className="container mx-auto px-4 ">
        <div className="text-center py-1">
          <h2 className="text-3xl md:text-4xl text-gray-900 poppins-bold text-primary mb-6">
            Why Choose MAAspace ?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-gray-700 transition duration-300  hover:scale-105"
            >
              <h3 className="text-xl font-bold text-primary mb-4 poppins-bold">
                {feature.title}
              </h3>
              <p className="text-gray-900 poppins-medium">
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
