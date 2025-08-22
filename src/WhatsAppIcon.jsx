import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/916350498559"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppIcon;
