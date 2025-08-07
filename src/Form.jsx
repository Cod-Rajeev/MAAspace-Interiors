import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for datepicker

const Form = () => {
    const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <section id="contact" class="h-full ">
        <section
          id="contact-section"
          class="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8"
        >
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-10">
              <h2 class="text-3xl sm:text-4xl font-bold text-amber-600 uppercase tracking-wide">
                Schedule Your Consultation
              </h2>
              <p className="mt-5 text-gray-800 poppins-semibold text-xl">
                Begin your transformation journey with us today
              </p>
            </div>
            <form class="bg-white p-12 rounded-lg shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  placeholder="Your Name"
                  required
                  class="w-full border border-amber-700 text-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="text"
                  name="user_name"
                />
                <input
                  placeholder="Your Email"
                  required
                  class="w-full border border-amber-700 text-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  type="email"
                  name="user_email"
                />
              </div>

              <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="service"
                  className="w-full p-3 border  border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
                >
                  <option value="">Select Project Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Office_Space">Office Space</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Retail">Retail</option>
                  <option value="other">Other</option>
                </select>

                <select
                  name="service"
                  className="w-full p-3 border  border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
                >
                  <option value="">Select Project Scope</option>
                  <option value="Residential">1-BHK</option>
                  <option value="Commercial">2-BHK</option>
                  <option value="Office_Space">3-BHK</option>
                  <option value="Hospitality">4-BHK</option>
                  <option value="Retail">5-BHK</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <select
                  name="service"
                  className="w-full p-3 border  border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
                >
                  <option value="">Select Budget Range</option>
                  <option value="Residential">Under $5 Lakhs</option>
                  <option value="Commercial">$5-10 Lakhs</option>
                  <option value="Office_Space">$10-20 Lakhs</option>
                  <option value="Hospitality">$20-50 Lakhs</option>
                  <option value="Retail">Over $50 Lakhs</option>
                  <option value="other">Not Sure</option>
                </select>

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd MMM yyyy"
                  className="w-full p-3 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-amber-700"
                  placeholderText="Click to choose a date"
                />

                {selectedDate && (
                  <p className="mt-4 text-amber-700 font-medium">
                    You selected: {selectedDate.toDateString()}
                  </p>
                )}
              </div>

              <div class="mt-6">
                <textarea
                  name="time"
                  rows="1"
                  placeholder="phone"
                  required
                  class="text-amber-700 w-full border border-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>
              <div class="mt-6">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  class="text-amber-700 w-full border border-amber-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>
              <div class="mt-6 flex justify-end">
                <button
                  type="submit"
                  class="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default Form