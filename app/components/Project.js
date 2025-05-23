// components/ProjectSection.js
"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export default function ProjectSection() {
  const projectTypes = [
    { name: "Architecture", slug: "architecture" },
    { name: "Landscape", slug: "landscape" },
    { name: "Interior", slug: "interior" },
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
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-light mb-20 text-center tracking-tight relative overflow-hidden">
          <span className="block transform translate-y-0 animate-fade-in-up">
            Our Projects
          </span>
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
                px-6 py-3 rounded-full
                transition-all duration-700 ease-out
                before:absolute before:inset-0 before:rounded-full
                before:border before:border-black/10 before:opacity-0
                before:transition-all before:duration-300
                hover:before:opacity-100
                after:absolute after:inset-0 after:rounded-full
                after:bg-black/[0.02] after:opacity-0 
                after:transition-all after:duration-300
                hover:after:opacity-100
                overflow-hidden
              `}
              style={{
                boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px -5px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-x rounded-full"></div>

              {/* Main text */}
              <span
                className="
                  text-2xl md:text-3xl font-light text-black/90
                  transition-all duration-500 ease-out
                  group-hover:translate-x-1
                  relative z-10
                "
              >
                {type.name}
              </span>

              {/* Arrow container with animations */}
              <span
                className="
                  ml-2 relative z-10
                  inline-flex items-center justify-center
                  w-6 h-6 rounded-full
                  overflow-hidden
                  transition-all duration-500 ease-out
                  group-hover:ml-4
                  before:absolute before:inset-0
                  before:bg-black/[0.03] before:rounded-full
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
  );
}
