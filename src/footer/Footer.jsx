import React from 'react';
import {
  MapPin,
  MailPlus,
  PhoneIncoming,
  MessageCircleHeart,
  Instagram,
  Facebook,
  MessageCirclePlus,
} from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative bg-neutral-800 text-white overflow-x-hidden ">
      <div className="p-0 md:px-10 md:py-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Description */}
          <div>
            <h6 className="text-2xl pb-2">
              MAAspace Interiors
            </h6>
            <p className="text-sm leading-relaxed">
              MAAspace Interiors is a leading home interior design company
              turning dream spaces into reality. We blend beauty, functionality,
              and comfort to craft stunning, thoughtful interiors tailored to
              your lifestyle. Your home is more than a space—it reflects your
              personality and creates a truly memorable experience.
            </p>
          </div>

          {/* Social Links */}
          <div className="font-semibold text-base px-20 space-y-4">
            <h6 className="uppercase text-lg">Social Links</h6>
            <a
              href="https://www.instagram.com/maaspaceinteriors?igsh=MTl5czltcWRwbGtnbA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 items-center gap-3 flex flex-row"
            >
              <Instagram />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/1Zzxucd8jf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 items-center gap-3 flex flex-row"
            >
              <Facebook />
              Facebook
            </a>
            <a
              href="http://wa.me/916350498559"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 items-center gap-3 flex flex-row"
            >
              <MessageCirclePlus />
              Whatsapp
            </a>
            {/* <Link className="hover:text-amber-500 items-center gap-3 flex flex-row">
              <Twitter />
              Twitter
            </Link> */}
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:px-0 px-20 font-semibold text-base">
            <h6 className="uppercase text-lg">Contact</h6>
            <p className="flex items-center gap-2">
              <MapPin /> New Delhi, Delhi 10012, India
            </p>
            <p className="flex items-center gap-2">
              <MailPlus /> maainteriors01@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <PhoneIncoming /> +91 6350498559
            </p>
          </div>

          {/* Map */}
          <div className="h-48 w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1750.9406673038673!2d77.07901021426392!3d28.633318407270526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a2311569c1%3A0x3dc64f65fa91a12d!2sSABKA%20SABKUCH%20BUSINESS%20PRIVATE%20LTD%20(SS%20BUSINESS%20PVT%20LTD.)!5e0!3m2!1sen!2sin!4v1753901917400!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing location"
            ></iframe>
          </div>
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