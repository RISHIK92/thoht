"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function ProjectSection() {
  const projectTypes = [
    { name: "As Architects", slug: "architecture" },
    { name: "As Interior designers", slug: "interior" },
    { name: "As Landscape architects", slug: "landscape" },
  ];

  // Staggered animation for initial load
  useEffect(() => {
    const buttons = document.querySelectorAll(".project-button");
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add("animate-in");
      }, 200 * index);
    });
  }, []);

  return (
    <div id="project">
      <section className="pt-44 py-24 px-4 md:px-8 bg-white">
        <img
          src="https://res.cloudinary.com/df622sxkk/image/upload/v1748019185/image_8_b5ei7y.png"
          alt="Decorative T shape"
          className="absolute left-0 w-[12rem] h-96 z-10"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          style={{ userSelect: "none", pointerEvents: "none" }}
        />

        <img
          src="https://res.cloudinary.com/df622sxkk/image/upload/v1748019182/image_7_1_pdnvsx.png"
          alt="Decorative T shape"
          className="absolute right-0 w-[12rem] h-96 z-10"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          style={{ userSelect: "none", pointerEvents: "none" }}
        />
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-20 text-center tracking-tight relative overflow-hidden">
            {/* <span className="block transform translate-y-0 animate-fade-in-up font-[Montserrat]">
              Our Projects
            </span> */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-black/20 mt-4"></span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {projectTypes.map((type, index) => (
              <Link
                key={type.slug}
                href={`/projects/${type.slug}`}
                className={`
                project-button opacity-0
                group relative inline-flex items-center justify-center
                px-2 py-3
                transition-all duration-700 ease-out
                
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-x"></div>

                {/* Main text */}
                <span
                  className="
                  text-2xl md:text-3xl font-normal text-black/90
                  transition-all duration-500 ease-out
                  group-hover:translate-x-1
                  relative z-10 font-[Montserrat]
                "
                >
                  {type.name}
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
