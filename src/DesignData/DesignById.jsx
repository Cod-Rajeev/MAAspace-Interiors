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
    <div className="pb-6 max-w-6xl flex flex-col mx-auto justify-center">
      <div className="overflow-hidden rounded-lg p-2 ">
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-3xl font-bold text-amber-700 mb-2">{design.title}</h1>
      <p className="text-gray-700 text-lg">{design.description}</p>
    </div>
  );
};

export default DesignById;
