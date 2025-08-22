import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const Iconwhatsapp = () => {
  return (
    <>
      <a
        href="https://wa.me/916350498559"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-40 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={40} />
      </a>
    </>
  );
}

export default Iconwhatsapp