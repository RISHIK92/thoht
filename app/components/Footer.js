// components/ContactFooter.js
"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactFooter() {
  return (
    <div className="bg-white bg-opacity-60 backdrop-blur-md w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Column - Contact Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
            <p className="mb-2">
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+919398143948" className="underline">
                +91 93981 43948
              </a>
            </p>
            <p className="mb-2">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:thohtdesigns@gmail.com" className="underline">
                thohtdesigns@gmail.com
              </a>
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-600"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} ThōhT Designs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
