import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs
        .sendForm(
          "service_g79z1mw", // ✅ Service ID
          "template_1mp3duf", // ✅ Template ID
          formRef.current,
          "omlel3bMkhjxhMwJR" // ✅ Public Key
        )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          setShowPopup(false);
          
          formRef.current.reset();
          setSelectedDate(null);
        },
        (error) => {
          alert("❌ Failed to send message, try again.");
          console.log(error.text);
        }
      );
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-lg p-6 overflow-auto max-h-[90vh] relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-red-500 font-bold text-2xl"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-600 uppercase tracking-wide">
            Schedule Your Consultation
          </h2>
        </div>

        {/* EmailJS Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              placeholder="Your Name"
              required
              className="w-full border border-amber-700 text-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              name="user_name"
            />
            <input
              placeholder="Your Email"
              required
              className="w-full border border-amber-700 text-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="email"
              name="user_email"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="project_type"
              required
              className="w-full p-3 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
            >
              <option value="">Select Project Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Office Space">Office Space</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Retail">Retail</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="project_scope"
              required
              className="w-full p-3 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
            >
              <option value="">Select Project Scope</option>
              <option value="1BHK">1-BHK</option>
              <option value="2BHK">2-BHK</option>
              <option value="3BHK">3-BHK</option>
              <option value="4BHK">4-BHK</option>
              <option value="5BHK">5-BHK</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="budget"
              required
              className="w-full p-3 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
            >
              <option value="">Select Budget Range</option>
              <option value="Under 5 Lakhs">Under ₹5 Lakhs</option>
              <option value="5-10 Lakhs">₹5-10 Lakhs</option>
              <option value="10-20 Lakhs">₹10-20 Lakhs</option>
              <option value="20-50 Lakhs">₹20-50 Lakhs</option>
              <option value="Over 50 Lakhs">Over ₹50 Lakhs</option>
              <option value="Not Sure">Not Sure</option>
            </select>

            <div>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd MMM yyyy"
                className="w-full p-3 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
                placeholderText="Click to choose a date"
                name="preferred_date"
              />
              {selectedDate && (
                <p className="mt-2 text-amber-700 font-medium">
                  You selected: {selectedDate.toDateString()}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              className="text-amber-700 w-full border border-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mt-6">
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="text-amber-700 w-full border border-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
