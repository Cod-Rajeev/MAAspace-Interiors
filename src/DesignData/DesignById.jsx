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
      <div className=" max-w-6xl flex flex-col mx-auto justify-center bg-white">
        <div className="overflow-hidden items-center flex flex-col ">
          <img
            src={design.image}
            alt={design.title}
            className="w-full h-[400px] object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col mx-auto justify-center text-center py-6 px-8">
          <h1 className="text-3xl font-bold text-amber-700 mb-2 ">
            {design.title}
          </h1>
          <p className="text-gray-900 poppins-regular text-lg px-28">
            {design.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignById;
