// components/ContactContent.js
"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function WorkWithUs() {
  return (
    <div id="work-with-us">
      <div className="flex-grow bg-white bg-opacity-60 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row relative min-h-[70vh]">
            {/* <div className="hidden md:block absolute left-1/2 transform -translate-x-1/4 top-0 bottom-0 border-l-1 mt-44 border-black h-[36rem]"></div> */}

            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 mt-8 md:mb-0 flex flex-col relative">
              <h1 className="text-4xl font-medium mb-8 md:text-right pr-8 mt-48 font-[Montserrat]">
                Be a part of the team
              </h1>

              {/* Background image positioned better */}
              <div className="absolute bottom-0 left-72 w-full h-[28rem] -z-10">
                <div
                  className="w-full h-full bg-no-repeat bg-contain bg-bottom"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747686472/image_13_1_qdqsrf.png')",
                  }}
                ></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 pl-0 md:pl-12 flex flex-col font-[Montserrat]">
              <div className="mt-16 md:mt-56">
                <h2 className="text-lg mb-6">
                  We always welcome people with amazing skills. If you wish to
                  be a part of our team, send your portfolio to
                </h2>
                <a
                  href="mailto:thohtdesigns@gmail.com"
                  className="text-lg block mb-8 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  thohtdesigns@gmail.com
                </a>

                {/* New content section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    What we're looking for:
                  </h3>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Passionate designers and freelancers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>
                        Strong portfolio showcasing your design skills,
                        creativity and expertise in generating drawings and
                        visuals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Team players with excellent communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Dedication to quality and attention to detail</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>Work type - Hybrid</span>
                    </li>
                  </ul>
                </div>

                {/* Additional call-to-action */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-base text-gray-700">
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
