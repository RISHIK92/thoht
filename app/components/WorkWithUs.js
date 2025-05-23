// components/ContactContent.js
"use client";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function WorkWithUs() {
  return (
    <div id="work-with-us">
      <div className="flex-grow bg-white bg-opacity-60 backdrop-blur-md mt-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row relative min-h-[80vh]">
            {/* Vertical divider line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px top-32 bottom-16 border-l border-gray-300"></div>

            {/* Left Section */}
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0 flex flex-col relative">
              <div className="mt-32 md:mt-48">
                <h1 className="text-4xl md:text-5xl font-medium mb-8 md:text-right pr-0 md:pr-8 font-[Montserrat] leading-tight">
                  Be a part of the team
                </h1>

                {/* Additional content for left side */}
                <div className="md:text-right pr-0 md:pr-8 font-[Montserrat] space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-gray-800">
                      Why Join Us?
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Creative freedom and innovative projects</li>
                      <li>• Collaborative and supportive work environment</li>
                      <li>• Opportunities for professional growth</li>
                      <li>• Work with cutting-edge design technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 text-gray-800">
                      What We Look For
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Passionate designers and developers</li>
                      <li>• Strong portfolio showcasing creativity</li>
                      <li>• Team players with excellent communication</li>
                      <li>• Dedication to quality and attention to detail</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Background image */}
              <div className="absolute bottom-0 -left-5 w-full h-[25rem] -z-10">
                <div
                  className="w-full h-full bg-no-repeat bg-contain bg-bottom"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747686472/image_13_1_qdqsrf.png')",
                  }}
                ></div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col font-[Montserrat]">
              <div className="mt-32 md:mt-56 space-y-8">
                {/* Main contact info */}
                <div>
                  <h2 className="text-lg mb-4 leading-relaxed">
                    We always welcome people with amazing skills. If you wish to
                    be a part of our team, send your portfolio to
                  </h2>
                  <a
                    href="mailto:thohtdesigns@gmail.com"
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
                  >
                    <FaEnvelope className="text-sm" />
                    thohtdesigns@gmail.com
                  </a>
                </div>

                {/* Additional contact details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-800">
                    Get In Touch
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-gray-500" />
                      <span className="text-gray-600">
                        Remote & On-site opportunities available
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaClock className="text-gray-500" />
                      <span className="text-gray-600">
                        Response time: 24-48 hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* Application process */}
                <div>
                  <h3 className="text-xl font-medium mb-3 text-gray-800">
                    Application Process
                  </h3>
                  <ol className="space-y-2 text-gray-600">
                    <li>1. Send your portfolio and resume</li>
                    <li>2. Initial screening call (15-30 minutes)</li>
                    <li>3. Portfolio review and technical discussion</li>
                    <li>4. Final interview with the team</li>
                    <li>5. Welcome to the team!</li>
                  </ol>
                </div>

                {/* Social media links */}
                <div>
                  <h3 className="text-xl font-medium mb-3 text-gray-800">
                    Follow Our Work
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-pink-600 transition-colors"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>

                {/* Call to action */}
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Ready to Join?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Don't wait! We're always looking for talented individuals to
                    join our creative team.
                  </p>
                  <a
                    href="mailto:thohtdesigns@gmail.com?subject=Application%20to%20Join%20Team"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply Now
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
