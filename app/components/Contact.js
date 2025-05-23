// components/ContactContent.js
"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactContent() {
  return (
    <div id="contact-section" className="mb-10">
      <div className="flex-grow bg-white bg-opacity-60 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row relative min-h-[70vh]">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/4 top-0 bottom-0 border-l-1 mt-44 border-black h-[36rem]"></div>

            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 mt-8 md:mb-0 flex flex-col">
              <h1 className="text-4xl font-medium mb-8 md:text-right pr-8 mt-48 font-[Montserrat]">
                Get in touch with Us!
              </h1>

              <div className="mt-auto md:text-right pr-8 font-[Montserrat]">
                <p className="text-lg mb-4">
                  T{" "}
                  <a href="tel:+919398143948" className="underline">
                    +91 93981 43948
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col font-[Montserrat]">
              <div className="mt-56">
                <h2 className="text-lg mb-2">
                  Project Enquiries and Information:
                </h2>
                <a
                  href="mailto:thohtdesigns@gmail.com"
                  className="text-lg block"
                >
                  thohtdesigns@gmail.com
                </a>
              </div>

              <div className="mt-auto">
                <h2 className="text-2xl mb-4 font-medium">Find us on</h2>
                <div className="flex space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-600"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-600"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-600"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-600"
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
