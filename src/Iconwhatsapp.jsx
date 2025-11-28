import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Iconwhatsapp = () => {
  const handleWhatsappClick = () => {
    // Google Ads Conversion Event
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17331565031/OTmaCOaNj8cbEOfjqshA",
      });
    }

    // WhatsApp open
    window.open("https://wa.me/916350498559", "_blank");
  };

  return (
    <>
      <button
        onClick={handleWhatsappClick}
        className="fixed bottom-40 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={40} />
      </button>
    </>
  );
};

export default Iconwhatsapp;
