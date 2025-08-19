import React from "react";
import interiorDesignData from "./InteriorDesignData";
import { useParams } from "react-router-dom";

const DesignById = () => {
  const { id } = useParams();
  const designId = parseInt(id, 10);
  const design = interiorDesignData.find((d) => d.id === designId);

  if (!design) {
    return (
      <div className="text-center text-red-500 text-xl">Design not found</div>
    );
  }

  return (
    <div className="bg-neutral-200 pb-5">
      <div className="max-w-6xl flex flex-col mx-auto justify-center bg-white">
        {/* 🖼 Image Section */}
        <div className="overflow-hidden items-center flex flex-col">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-[300px] sm:h-[400px] object-cover shadow-lg"
          />
        </div>

        {/* 📝 Text Section */}
        <div className="flex flex-col mx-auto justify-center text-center py-6 px-4 sm:px-8 lg:px-28">
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-700 mb-2">
            {design.title}
          </h1>
          <p className="text-gray-900 poppins-regular text-base sm:text-lg">
            {design.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignById;
