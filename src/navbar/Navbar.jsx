import React, { useState } from "react";
import Logo from "../navbar/Logo.png"
import { Link } from "react-router-dom";
import Home from "../Home/FirstSction/Home";

import interiorDesignData from "../DesignData/InteriorDesignData";


const Navbar = () => {

 


  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="fixed  w-full z-50 border-b border-gray-300 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="Interior company logo"
              className="h-24 w-40 border-green-500 rounded-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3d3d7ea-4e6e-48d0-8545-c642516f907d.png";
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg poppins-semibold ">
            <Link
              to={"/"}
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo(0, 0);
              }}
              className="hover:text-amber-700 transition"
            >
              Home
            </Link>
            {/* <Link to={'/services'} className="hover:text-yellow-200 transition">Services</Link> */}
            <li className="relative group list-none">
              <Link
                to={"/services"}
                onClick={() => {
                  setIsExpanded(false);
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer hover:text-amber-700"
              >
                Services
              </Link>
            </li>

            {/* <a href="#" className="hover:text-yellow-200 transition">Designs</a> */}

            <li className="relative group list-none">
              <Link
                to={"/designs"}
                onClick={() => {
                  setIsExpanded(false);
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer hover:text-amber-700"
              >
                Designs
              </Link>

              {/* Dropdown Menu */}
              <ul
                className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-150 ease-in-out shadow-lg z-50 min-w-max flex"
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("opacity-100", "visible")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("opacity-100", "visible")
                }
              >
                <div className="font-normal rounded-xl outline outline-1 outline-amber-900 mt-6 bg-neutral-400 poppins-semibold ">
                  <h6 className="text-amber-700 flex justify-center md:justify-start ">
                    {interiorDesignData.title}
                  </h6>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-3 p-5">
                    {interiorDesignData.map((design) => (
                      <div key={design.id}>
                        <Link
                          to={`/designs/${design.id}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="text-black hover:text-amber-700 p-3"
                        >
                          {design.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </ul>
            </li>

            <Link
              to={"/gallery"}
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo(0, 0);
              }}
              className="hover:text-amber-700 transition"
            >
              Gallery
            </Link>
            <Link
              to={"/blog"}
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo(0, 0);
              }}
              className="hover:text-amber-700 transition"
            >
              Blog
            </Link>
            {/* <a href="#" className="hover:text-yellow-200 transition">
              Contact Us
            </a> */}
            <Link
              to={"/aboutUs"}
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo(0, 0);
              }}
              className="hover:text-amber-700 transition"
            >
              About Us
            </Link>
            <Link
              to={"/consultationBooking"}
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo(0, 0);
              }}
              className="hover:text-amber-700 transition"
            >
              Consultation Booking
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mr-10">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isExpanded}
              className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 "
            >
              {!isExpanded ? (
                <svg
                  className="h-6 w-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isExpanded ? "block" : "hidden"
        } md:hidden bg-white border-t border-gray-300`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 text-gray-700 text-base font-medium">
          <Link
            to={"/"}
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            Home
          </Link>
          <Link
            to={"/services"}
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            Services
          </Link>

          <li className="relative group list-none">
            <Link
              to={"/designs"}
              onClick={() => {
                setIsExpanded(false);
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer hover:text-yellow-300 ml-3"
            >
              Designs
            </Link>

            {/* Dropdown Menu */}
            <ul
              className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-150 ease-in-out grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 bg-white mt-2 py-2 px-2 rounded shadow-lg z-50 min-w-max"
              onMouseEnter={(e) =>
                e.currentTarget.classList.add("opacity-100", "visible")
              }
              onMouseLeave={(e) =>
                e.currentTarget.classList.remove("opacity-100", "visible")
              }
            >
              <div className="font-normal rounded-xl outline outline-1 outline-amber-900 mt-6 bg-neutral-400 poppins-semibold ">
                <h6 className="text-amber-700 flex justify-center md:justify-start ">
                  {interiorDesignData.title}
                </h6>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-5">
                  {interiorDesignData.map((design) => (
                    <div key={design.id}>
                      <Link
                        to={`/designs/${design.id}`}
                        onClick={() => {
                          setIsExpanded(false);
                          window.scrollTo(0, 0);
                        }}
                        className="text-black hover:text-amber-500"
                      >
                        {design.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </ul>
          </li>

          <Link
            to={"/gallery"}
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            Gallery
          </Link>
          <Link
            to={"/blog"}
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            Blog
          </Link>

          <Link
            to={"/aboutUs"}
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            About Us
          </Link>
          <Link
            to={"/consultationBooking"}
            // onClick={() => setIsExpanded(false)}
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo(0, 0);
            }}
            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            Consultation Booking
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
