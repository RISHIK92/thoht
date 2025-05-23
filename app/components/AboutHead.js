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
      className="bg-white bg-opacity-60 backdrop-blur-md mt-4 relative mb-40"
      id="project"
    >
      <div className="absolute mt-76 inset-0 z-0 pointer-events-none">
        <div
          className="w-[550px] h-[600px] bg-no-repeat bg-contain bg-bottom bg-center mx-auto"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747764555/png-2_1_pskshi.png')",
            backgroundPosition: "center 70%",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center relative">
          <div className="w-full flex justify-center mb-10 mt-36 z-10">
            <img
              src="https://res.cloudinary.com/df622sxkk/image/upload/v1747726683/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_2_1_rdh4ly.png"
              alt="ThōnT Designs Logo"
              className="h-24 w-auto object-scale-down"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </div>
          <div className="w-full text-center text-lg mt-1 z-20 font-[Montserrat] font-medium tracking-wide">
            <h2>ThōhT - an old word</h2>
            <p>Our ThōhT - a new world</p>
          </div>
          <div className="w-full mt-52 px-4 z-20">
            <div className="flex justify-between items-start gap-8 relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center text-center"
                >
                  <div className="mb-6">
                    <button
                      onClick={() => handleNavigation(service.route)}
                      className={`
                        project-button opacity-100
                        group relative inline-flex items-center justify-center
                        px-4 py-3 w-full
                        transition-all duration-700 ease-out
                        cursor-pointer
                        
                        before:absolute before:inset-0
                        before:border before:border-white/[0.3] before:opacity-100
                        before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent
                        before:transition-all before:duration-300
                        before:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]
                        hover:before:from-white/[0.12] hover:before:to-white/[0.03]
                        hover:before:border-white/[0.4]

                        after:absolute after:inset-0
                        after:bg-gradient-to-br after:from-white/[0.04] after:via-transparent after:to-black/[0.02]
                        after:opacity-100 after:transition-all after:duration-300
                        hover:after:from-white/[0.06] hover:after:to-black/[0.03]

                        shadow-[0_1px_3px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.15)]
                        hover:shadow-[0_4px_12px_-2px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]

                        overflow-hidden backdrop-blur-[1px]
                      `}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.01) 100%)",
                        transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(0,0,0,0.02) 100%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.01) 100%)";
                      }}
                    >
                      {/* Ultra-subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-1000"></div>

                      {/* Main text */}
                      <span
                        className="
                          text-lg md:text-xl font-normal text-black/90
                          transition-all duration-500 ease-out
                          group-hover:translate-x-1
                          relative z-10 font-[Montserrat] text-center
                        "
                      >
                        {service.title}
                      </span>

                      {/* Arrow container with animations */}
                      <span
                        className="
                          ml-2 relative z-10
                          inline-flex items-center justify-center
                          w-6 h-6
                          overflow-hidden
                          transition-all duration-500 ease-out
                          group-hover:ml-4
                          before:absolute before:inset-0
                          before:bg-gradient-to-br before:from-white/[0.06] before:to-black/[0.02]
                          before:scale-0 group-hover:before:scale-100
                          before:transition-transform before:duration-300
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          className="
                            relative z-10 
                            transition-all duration-500 
                            group-hover:scale-110 
                            opacity-50 group-hover:opacity-100
                          "
                        />
                      </span>

                      {/* Animated border line */}
                      <div
                        className="
                          absolute bottom-0 left-0 right-0 mx-auto
                          h-[1px] w-0 group-hover:w-[calc(100%-24px)]
                          bg-gradient-to-r from-transparent via-black/30 to-transparent
                          transition-all duration-700 ease-out
                        "
                      />
                    </button>

                    {/* Description directly below button */}
                    <p className="text-sm md:text-base leading-relaxed px-2 mt-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <div className="flex-1"></div>
                <div className="w-0.5 bg-black h-52"></div>
                <div className="flex-1"></div>
                <div className="w-0.5 bg-black h-52"></div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
