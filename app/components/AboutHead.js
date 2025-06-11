"use client";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutHead() {
  const router = useRouter();

  const services = [
    {
      title: "As Architects",
      description:
        "We plan and design your spaces by prioritizing comfort and efficiency as our key parameters.",
      route: "/projects/architecture",
    },
    {
      title: "As Interior Designers",
      description:
        "We design interior spaces to suit your lifestyle and add a personal touch to the interiors.",
      route: "/projects/interior",
    },
    {
      title: "As Landscape Architects",
      description:
        "We provide landscaping that promotes a healthy micro-climate around you.",
      route: "/projects/landscape",
    },
  ];

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div
      className="bg-white bg-opacity-60 backdrop-blur-md mt-4 relative mb-20 md:mb-40"
      id="project"
    >
      {/* Background image - hidden on mobile, scaled appropriately on larger screens */}
      <div className="absolute mt-76 inset-0 z-0 pointer-events-none hidden md:block">
        <div
          className="w-[400px] lg:w-[550px] h-[500px] lg:h-[600px] bg-no-repeat bg-contain bg-bottom bg-center mx-auto"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747764555/png-2_1_pskshi.png')",
            backgroundPosition: "center 70%",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center relative">
          {/* Logo section - responsive sizing */}
          <div className="w-full flex justify-center mb-6 md:mb-10 mt-16 md:mt-36 z-10">
            <img
              src="https://res.cloudinary.com/df622sxkk/image/upload/v1747726683/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_2_1_rdh4ly.png"
              alt="ThōnT Designs Logo"
              className="h-16 md:h-24 w-auto object-scale-down"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </div>

          {/* Title section - responsive text sizing */}
          <div className="w-full text-center text-base md:text-lg mt-1 z-20 font-[Montserrat] font-medium tracking-wide px-4">
            <h2>ThōhT - an old word</h2>
            <p>Our ThōhT - a new world</p>
          </div>

          {/* Services section - responsive layout */}
          <div className="w-full mt-12 md:mt-52 px-4 z-20">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-8 relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center text-center"
                >
                  <div className="mb-6 w-full">
                    <button
                      onClick={() => handleNavigation(service.route)}
                      className={`
                        group relative inline-flex items-center justify-center
                        px-4 py-3 w-full max-w-sm mx-auto md:max-w-none
                        transition-all duration-300 ease-out
                        cursor-pointer
                      `}
                    >
                      {/* Main text - responsive sizing */}
                      <span
                        className="
                          text-base md:text-lg lg:text-xl font-medium text-black/70
                          transition-all duration-300 ease-out
                          group-hover:text-black/90
                          group-hover:translate-x-1
                          relative z-10 font-[Montserrat] text-center
                        "
                      >
                        {service.title}
                      </span>

                      {/* Arrow container */}
                      <span
                        className="
                          ml-2 relative z-10
                          inline-flex items-center justify-center
                          w-5 h-5 md:w-6 md:h-6
                          transition-all duration-300 ease-out
                          group-hover:ml-4
                        "
                      >
                        <ArrowUpRight
                          size={14}
                          className="
                            md:w-4 md:h-4
                            transition-all duration-300 
                            group-hover:scale-110 
                            opacity-40 group-hover:opacity-70
                            text-black
                          "
                        />
                      </span>

                      {/* Simple underline that appears on hover */}
                      <div
                        className="
                          absolute bottom-2 left-4 right-4
                          h-[1px] w-0 group-hover:w-[calc(100%-32px)]
                          bg-black/20
                          transition-all duration-500 ease-out
                        "
                      />
                    </button>

                    {/* Description - responsive text and spacing */}
                    <p className="text-sm md:text-base leading-relaxed px-2 md:px-4 mt-4 max-w-sm mx-auto md:max-w-none">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Vertical dividers - only show on desktop */}
              <div className="absolute inset-0 md:flex justify-between items-center pointer-events-none hidden">
                <div className="flex-1"></div>
                <div className="w-0.5 bg-black h-40 lg:h-52"></div>
                <div className="flex-1"></div>
                <div className="w-0.5 bg-black h-40 lg:h-52"></div>
                <div className="flex-1"></div>
              </div>

              {/* Mobile dividers - horizontal lines between sections */}
              <div className="md:hidden absolute inset-0 flex flex-col justify-around items-center pointer-events-none">
                <div className="w-20 h-0.5 bg-black/20 mt-20"></div>
                <div className="w-20 h-0.5 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
