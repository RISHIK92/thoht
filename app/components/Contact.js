// components/ContactContent.js
"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactContent() {
  return (
    <div id="contact-section" className="mb-6 sm:mb-10">
      <div className="flex-grow bg-white bg-opacity-60 backdrop-blur-md mt-6 sm:mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row relative min-h-[60vh] sm:min-h-[70vh]">
            {/* Desktop Divider Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/4 top-0 bottom-0 border-l-1 mt-32 xl:mt-44 border-black h-[28rem] xl:h-[36rem]"></div>

            {/* Left Section - Contact Header & Phone Numbers */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 sm:mb-10 lg:mb-0 flex flex-col">
              {/* Main Heading */}
              <div className="mt-8 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-48">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium mb-6 sm:mb-8 text-center lg:text-right lg:pr-8 font-[Montserrat] leading-tight">
                  Get in touch with Us!
                </h1>
              </div>

              {/* Phone Numbers */}
              <div className="mt-auto text-center lg:text-right lg:pr-8 font-[Montserrat] space-y-2 sm:space-y-3">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-base sm:text-lg">
                    T{" "}
                    <a
                      href="tel:+919398143948"
                      className="underline hover:text-gray-600 transition-colors duration-300"
                    >
                      +91 93981 43948
                    </a>
                  </p>
                  <p className="text-base sm:text-lg">
                    T{" "}
                    <a
                      href="tel:+447774645161"
                      className="underline hover:text-gray-600 transition-colors duration-300"
                    >
                      +44 77746 45161
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Divider */}
            <div className="lg:hidden w-full flex justify-center my-8 sm:my-10">
              <div className="w-24 sm:w-32 h-px bg-black"></div>
            </div>

            {/* Right Section - Email & Social Media */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-12 flex flex-col font-[Montserrat]">
              {/* Email Section */}
              <div className="mt-0 sm:mt-8 md:mt-16 lg:mt-32 xl:mt-56 text-center lg:text-left">
                <h2 className="text-base sm:text-lg mb-2 sm:mb-3 font-medium text-gray-700">
                  Project Enquiries and Information:
                </h2>
                <a
                  href="mailto:thohtdesigns@gmail.com"
                  className="text-base sm:text-lg block hover:text-gray-600 transition-colors duration-300 underline decoration-2 underline-offset-2"
                >
                  thohtdesigns@gmail.com
                </a>
              </div>

              {/* Social Media Section */}
              <div className="mt-8 sm:mt-12 lg:mt-auto text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 font-medium">
                  Find us on
                </h2>
                <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl hover:text-blue-600 hover:scale-110 transition-all duration-300 transform"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl hover:text-pink-600 hover:scale-110 transition-all duration-300 transform"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl hover:text-blue-700 hover:scale-110 transition-all duration-300 transform"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
