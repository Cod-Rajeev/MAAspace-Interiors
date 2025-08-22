import React from 'react';
import {
  MapPin,
  MailPlus,
  PhoneIncoming,
  MessageCirclePlus,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from 'react-router-dom';

import Logo from "../navbar/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-neutral-800 poppins-regular text-start text-white w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-4 mx-auto items-start p-10 gap-5 md:gap-0">
        <div className="flex flex-col justify-start items-start  ">
           <img
                        src={Logo}
                        alt="Interior company logo"
                        className="h-20 w-40 bg-white object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3d3d7ea-4e6e-48d0-8545-c642516f907d.png";
                        }}
                      />
          {/* <h6 className="text-2xl text-orange-500 pb-2 flex justify-start font-bold">
            MAAspace Interiors
          </h6> */}
          <p className="text-sm leading-relaxed text-justify">
            MAAspace Interiors is a leading home interior design company turning
            dream spaces into reality. We blend beauty, functionality, and
            comfort to craft stunning, thoughtful interiors tailored to your
            lifestyle. Your home is more than a space—it reflects your
            personality and creates a truly memorable experience.
          </p>
        </div>
        {/* Links  */}
        <div className=" text-base space-y-4 text-start justify-start pl-0 md:pl-28">
          <h6 className="uppercase text-orange-500 font-bold text-lg justify-start">
            Quick Links
          </h6>
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-amber-500 justify-start text-start gap-3 flex flex-row"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-amber-500 justify-start text-start gap-3 flex flex-row"
          >
            Services
          </Link>

          <Link
            to="/designs"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-amber-500  gap-3 flex flex-row"
          >
            Designs
          </Link>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-amber-500  gap-3 flex flex-row"
          >
            Gallery
          </Link>
          <Link
            to="/ConsultationBooking"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-amber-500 gap-3 flex flex-row"
          >
            Consultation
          </Link>
        </div>
        <div>
          {/* Social Links */}
          <div className=" text-base space-y-4 pl-0 md:pl-10">
            <h6 className="uppercase text-orange-500 text-lg font-bold justify-start">
              Social Links
            </h6>
            <a
              href="https://www.instagram.com/maaspaceinteriors?igsh=MTl5czltcWRwbGtnbA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500  gap-3 flex flex-row"
            >
              <Instagram />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/1Zzxucd8jf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500  gap-3 flex flex-row"
            >
              <Facebook />
              Facebook
            </a>
            <a
              href="http://wa.me/916350498559"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 gap-3 flex flex-row"
            >
              <MessageCirclePlus />
              Whatsapp
            </a>
          </div>
        </div>
        {/* Contact Info */}
        <div className="space-y-4 flex flex-col justify-center text-base">
          <h6 className="uppercase text-orange-500 flex justify-start font-bold  text-lg">
            Contact
          </h6>
          <p className="flex  gap-2">
            <MapPin /> 11 A shanti Niketan Link Road Badgav Udaipur 313011
          </p>
          <p className="flex  gap-2">
            <MailPlus /> info@maaspaceinteriors.com
          </p>
          <p className="flex gap-2">
            <PhoneIncoming /> +91 6350498559
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-neutral-900 text-center text-sm p-2">
        &copy; 2025 Copyright - MAAspace Interiors
      </div>
    </footer>
  );
}



export default Footer;