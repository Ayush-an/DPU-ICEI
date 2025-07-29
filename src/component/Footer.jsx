import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1c] to-[#1a1a2e] text-gray-300 py-10 px-4 font-sans overflow-hidden">

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 lg:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center col-span-1 md:col-span-1 lg:col-span-1 md:items-start">
            <h3 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 drop-shadow-lg">
              ICEI-2026
            </h3>
            <p className="max-w-xs mb-4 text-sm leading-relaxed">
              ICEI Conference. <span className="text-lg font-semibold">19th-21th</span> January 202<span className="text-2xl font-semibold">5</span>
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h4 className="inline-block pb-2 mb-6 text-lg font-semibold text-white border-b-2 border-blue-500">USEFUL LINKS</h4>
            <ul className="space-y-3">
              {/* Added icon and underline effect for specific links */}
              {[
                { name: 'HOME', link: '/welcome', hasIconAndUnderline: true },
                { name: 'ABOUT US', link: '/aboutus', hasIconAndUnderline: true },
                { name: 'Our Mission & Vision', link: '/visionpage', hasIconAndUnderline: true },
                { name: 'PROGRAM', link: '#program', hasIconAndUnderline: true },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className={`flex items-center text-sm transition-colors duration-200 hover:text-blue-400 relative group ${item.hasIconAndUnderline ? 'pl-4' : ''}`}>
                    {item.hasIconAndUnderline && (
                      <svg
                        className="absolute left-0 w-3 h-3 text-blue-400 transition-transform duration-200 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                    {item.name}
                    {item.hasIconAndUnderline && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h4 className="inline-block pb-2 mb-2 text-lg font-semibold text-white border-b-2 border-purple-500">CONTACT US</h4>
            <div className="flex flex-col items-center mt-4 space-y-2 md:items-start">
              <div  className="flex items-start text-gray-400 transition-colors duration-300 transform hover:text-green-400 hover:scale-105 text-left">
                <FiMapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/ByaDt29gJ5RmuS3Z9" >
                Dr. D. Y. Patil Science & Computer Science College, Sector No.27-A, Near Lokmanya Hospital, Nigdi Pradhikaran, Akurdi 411044
                </a>
              </div>
              <a href="tel:2027650313" className="flex items-center text-gray-400 transition-colors duration-300 transform hover:text-green-400 hover:scale-105">
                <FiPhone size={18} className="mr-2" /> Phone: +91 2027650313
              </a>
              <a href="mailto:sandeepkumar@dypvp.edu.in" className="flex items-center text-gray-400 transition-colors duration-300 transform hover:text-green-400 hover:scale-105">
                <FiMail size={18} className="mr-2" /> Email: sandeepkumar@dypvp.edu.in
              </a>
              
            </div>
            <div className="flex justify-center mt-6 space-x-6 md:justify-start">
              <a href="https://www.facebook.com/PROFESSOR.EDU.IN/" className="text-gray-400 transition-colors duration-300 transform hover:text-blue-500 hover:scale-125" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="https://x.com/dpuunitech" className="text-gray-400 transition-colors duration-300 transform hover:text-blue-400 hover:scale-125" aria-label="Twitter">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/drdypatilunitechsociety/" className="text-gray-400 transition-colors duration-300 transform hover:text-blue-600 hover:scale-125" aria-label="LinkedIn">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://www.instagram.com/explore/locations/104013684928901/dr-d-y-patil-science-computer-science-college/" className="text-gray-400 transition-colors duration-300 transform hover:text-pink-500 hover:scale-125" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@dpu.vidyapeeth" className="text-gray-400 transition-colors duration-300 transform hover:text-red-600 hover:scale-125" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-5 text-sm text-center text-gray-500 border-t border-gray-700">
          <p>&copy; 2025 University ERP. All rights reserved.</p>
          <p className="mt-2">Empowering the next generation of leaders.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;