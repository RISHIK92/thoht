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
                transition-all duration-500 ease-out
              `}
              >
                {/* Main text */}
                <span
                  className="
                  text-2xl md:text-3xl font-normal text-black/70
                  transition-all duration-300 ease-out
                  group-hover:text-black/90
                  group-hover:translate-x-1
                  relative z-10 font-[Montserrat]
                "
                >
                  {type.name}
                </span>

                {/* Arrow container */}
                <span
                  className="
                  ml-2 relative z-10
                  inline-flex items-center justify-center
                  w-6 h-6
                  transition-all duration-300 ease-out
                  group-hover:ml-4
                "
                >
                  <ArrowUpRight
                    size={16}
                    className="
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
                  absolute bottom-2 left-2 right-2
                  h-[1px] w-0 group-hover:w-[calc(100%-16px)]
                  bg-black/20
                  transition-all duration-500 ease-out
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
