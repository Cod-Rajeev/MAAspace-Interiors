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
    <div className="p-6 max-w-3xl mx-auto">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg ">
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-full rounded-lg shadow-lg pb-4"
        />
      </div>

      <h1 className="text-3xl font-bold text-amber-700 mb-2">{design.title}</h1>
      <p className="text-gray-700 text-lg">{design.description}</p>
    </div>
  );
};

export default DesignById;
