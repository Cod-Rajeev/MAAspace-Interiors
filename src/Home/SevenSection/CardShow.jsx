import React from "react";


const CardShow = ({ title, data, description }) => {
  return (
    <div className="m-4 p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden max-w-56 transition transform hover:scale-105">
      <h1 className="text-4xl  font-bold text-gray-200/50">{data}</h1>
      
      <div className="">
        <h3 className="text-xl mt-5 font-bold text-gray-200">{title}</h3>
        <p className="text-base   text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardShow;
