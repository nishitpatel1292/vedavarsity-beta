import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const ContactForm = () => {
  return (
    <>
      <SectionTitle title={'SEND US A MESSAGE'} />
      <p className="mb-8 text-center text-gray-600">Send us your feedback</p>
      <div className="mx-auto max-w-3xl bg-white p-6">
        <form className="space-y-6">
          {/* Name, Email, Phone in one row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 bg-[#f8f8f8] px-4 py-2 focus:bg-white focus:outline-none  "
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 bg-[#f8f8f8] px-4 py-2 focus:bg-white focus:outline-none "
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 bg-[#f8f8f8] px-4 py-2 focus:bg-white focus:outline-none  "
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
              Your message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={10}
              cols={40}
              className="w-full  border border-gray-300 bg-[#f8f8f8] px-4 py-2 focus:bg-white focus:outline-none "
              placeholder="Type your message here..."
              required></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 px-4 py-3 font-bold text-white transition duration-300 hover:bg-green-700">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
