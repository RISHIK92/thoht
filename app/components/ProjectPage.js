// components/ProjectPage.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DayNightSlider from "./DayNight";
import Navbar from "./Navbar";
import ProjectShowcase from "./ProjectShowcase";

export default function ProjectPage({
  type,
  dayImage,
  nightImage,
  title,
  description,
  images,
}) {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (index) => {
    setSelectedGalleryIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGalleryIndex(null);
    document.body.style.overflow = "auto";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 max-w-6xl mt-32 z-10 relative">
        <DayNightSlider
          dayImage={dayImage}
          nightImage={nightImage}
          description={description}
          title={title}
        />
        <div className="mt-12 relative z-10">
          {/* Vertical Type Rectangle - Fixed to left edge */}
          <div className="fixed left-6 top-1/2 transform -translate-y-1/2 bg-[#F2F2F2] text-black w-4 h-full flex items-center justify-center z-10 border-black shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)]">
            <div className="transform -rotate-90 whitespace-nowrap">
              <span className="text-sm font-normal tracking-widest">
                {type || "Architecture"}
              </span>
            </div>
          </div>
          <div className="mb-6 z-10 relative">
            <div className="flex gap-4 items-start relative">
              {/* Gallery Columns */}
              <div className="flex gap-4 flex-[3]">
                {/* Left Column */}
                <div className="flex-[2.5] flex flex-col gap-4">
                  {/* Big Image */}
                  {images.thumbnails[0] && (
                    <div
                      className="relative w-full bg-gray-100 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
                      style={{ aspectRatio: "16/9" }}
                      onClick={() => openModal(0)}
                    >
                      <img
                        src={images.thumbnails[0].image}
                        alt={images.thumbnails[0].title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                        style={{ userSelect: "none", pointerEvents: "none" }}
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                        <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-sm font-light">
                            {images.thumbnails[0].title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-4 z-10 relative">
                    {images.thumbnails.slice(1, 5).map((thumbnail, index) => (
                      <div
                        key={index + 1}
                        className="relative w-full bg-gray-100 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
                        style={{ aspectRatio: "16/9" }}
                        onClick={() => openModal(index + 1)}
                      >
                        <img
                          src={thumbnail.image}
                          alt={thumbnail.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                          style={{ userSelect: "none", pointerEvents: "none" }}
                        />
                        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                          <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-sm font-light">
                              {thumbnail.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-4 z-10 relative">
                  {images.thumbnails.slice(5, 7).map((thumbnail, index) => (
                    <div
                      key={index + 5}
                      className="relative w-full bg-gray-100 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
                      style={{ aspectRatio: "16/9" }}
                      onClick={() => openModal(index + 5)}
                    >
                      <Image
                        src={thumbnail.image}
                        alt={thumbnail.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                        style={{ userSelect: "none", pointerEvents: "none" }}
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                        <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-sm font-light">
                            {thumbnail.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Image - Fixed to complete bottom and right of screen */}
              <div
                className="fixed bottom-0 right-0 flex-shrink-0 w-[400px] h-[400px] bg-no-repeat bg-right-bottom bg-contain pointer-events-none z-0"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/df622sxkk/image/upload/v1748015095/Group_2_3_cgcryt.png')",
                  backgroundPosition: "100% 100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Page Modal with Transparent Background */}
      {isModalOpen && selectedGalleryIndex !== null && (
        <div className="fixed inset-0 z-30 bg-opacity-60 backdrop-blur-lg overflow-y-auto">
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 z-10 p-3 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all shadow-lg cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="min-h-screen flex items-center justify-center p-4 z-10">
            <div className="w-full max-w-none">
              <ProjectShowcase
                images={
                  images.thumbnails[selectedGalleryIndex]?.galleries || []
                }
                title={images.thumbnails[selectedGalleryIndex]?.title || ""}
                description={
                  images.thumbnails[selectedGalleryIndex]?.description || ""
                }
                area={images.thumbnails[selectedGalleryIndex]?.area || ""}
                type={images.thumbnails[selectedGalleryIndex]?.type || ""}
                style={images.thumbnails[selectedGalleryIndex]?.style || ""}
                location={
                  images.thumbnails[selectedGalleryIndex]?.location || ""
                }
                onClose={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
