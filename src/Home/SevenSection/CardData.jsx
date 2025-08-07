// App.jsx
import React from "react";
import CardShow from  "./CardShow";

const CardData = () => {
  return (
    <>
    
    <div className="min-h-screen  bg-[#8b5a2b] justify-center items-center p-32  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <CardShow
        title="Customer-Centric Approach"
        data="01"
        description="10+ years perfecting the art of creating beautiful, functional spaces in Udaipur."
      />
      <CardShow
        title="Customer-Centric Approach"
        data="02"
        description="Your vision is our priority, with personalized service at every step."
      />

      <CardShow
        title="Customer-Centric Approach"
        data="03"
        description="Your vision is our priority, with personalized service at every step."
      />

      <CardShow
        title="Customer-Centric Approach"
        data="04"
        description="Your vision is our priority, with personalized service at every step."
      />
      
      <CardShow
        title="Decade of Excellence"
        data="01"
        description="10+ years perfecting the art of creating beautiful, functional spaces in Udaipur."
      />

       <CardShow
        title="Decade of Excellence"
        data="01"
        description="10+ years perfecting the art of creating beautiful, functional spaces in Udaipur."
      />

       <CardShow
        title="Decade of Excellence"
        data="01"
        description="10+ years perfecting the art of creating beautiful, functional spaces in Udaipur."
      />

       <CardShow
        title="Decade of Excellence"
        data="01"
        description="10+ years perfecting the art of creating beautiful, functional spaces in Udaipur."
      />
    </div>


    </>
    
  );
};

export default CardData;
