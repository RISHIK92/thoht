// components/ContactContent.js
"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function WorkWithUs() {
  return (
    <div id="work-with-us">
      <div className="flex-grow bg-white bg-opacity-60 backdrop-blur-md mt-36 sm:mt-36 md:mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row relative min-h-[70vh]">
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 sm:mb-10 md:mb-0 flex flex-col relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8 text-center md:text-right pr-0 md:pr-8 mt-14 sm:mt-16 md:mt-48 font-[Montserrat] leading-tight">
                Be a part of the team
              </h1>

              <div className="hidden lg:block absolute bottom-0 left-72 w-full h-[28rem] -z-10">
                <div
                  className="w-full h-full bg-no-repeat bg-contain bg-bottom opacity-80"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747686472/image_13_1_qdqsrf.png')",
                  }}
                ></div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col font-[Montserrat]">
              <div className="mt-4 sm:mt-8 md:mt-16 lg:mt-56">
                {/* Introduction Text */}
                <h2 className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                  We always welcome people with amazing skills. If you wish to
                  be a part of our team, send your portfolio to
                </h2>

                {/* Email Link */}
                <a
                  href="mailto:thohtdesigns@gmail.com"
                  className="text-base sm:text-lg block mb-6 sm:mb-8 text-blue-600 hover:text-blue-800 transition-colors break-all sm:break-normal"
                >
                  thohtdesigns@gmail.com
                </a>

                {/* Requirements Section */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    What we're looking for:
                  </h3>

                  {/* Mobile-Optimized List */}
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Passionate designers and freelancers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Strong portfolio showcasing your design skills,
                        creativity and expertise in generating drawings and
                        visuals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Team players with excellent communication
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Dedication to quality and attention to detail
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="leading-relaxed">
                        Work type - Hybrid
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Call-to-Action Box */}
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Ready to join our creative journey? We'd love to see what
                    you can bring to our team. Send us your best work and let's
                    create something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
