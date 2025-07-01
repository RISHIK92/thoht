import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectShowcase({
  images = [],
  title = "",
  description = "",
  area = "",
  type = "",
  style = "",
  location = "",
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto bg-white rounded-lg overflow-hidden shadow-xl z-30">
      {/* Image Container - Clean without overlays */}
      <div className="relative">
        <div className="w-full h-[40vh] sm:h-[60vh] lg:h-[70vh] relative bg-gray-50">
          {images.length > 0 && (
            <img
              src={images[currentImageIndex] || "/api/placeholder/1800/700"}
              alt={`Project image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain sm:object-contain"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          )}

          <div className="hidden xl:block absolute left-0 bottom-0 w-72 pt-2 pl-4 bg-white bg-opacity-90 flex items-center">
            <p className="text-gray-700 text-sm">{description}</p>
          </div>

          <div className="hidden xl:flex absolute right-0 bottom-0 top-0 w-60 bg-white bg-opacity-90 flex-col justify-end p-4">
            {area && (
              <p className="text-gray-800 text-sm mb-2">
                <span className="font-semibold">Area - </span> {area}
              </p>
            )}
            {type && (
              <p className="text-gray-800 text-sm mb-2">
                <span className="font-semibold">Type - </span> {type}
              </p>
            )}
            {style && (
              <p className="text-gray-800 text-sm mb-2">
                <span className="font-semibold">Style - </span> {style}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Separate Content Section - Below image for mobile/tablet */}
      <div className="xl:hidden bg-white px-4 sm:px-6 py-4 sm:py-1 border-b border-gray-100">
        {/* Description */}
        {description && (
          <div className="mb-4">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Project Details */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {area && (
            <div className="bg-gray-100 px-3 py-1.5 rounded-lg">
              <span className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium text-gray-800">Area:</span> {area}
              </span>
            </div>
          )}
          {type && (
            <div className="bg-gray-100 px-3 py-1.5 rounded-lg">
              <span className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium text-gray-800">Type:</span> {type}
              </span>
            </div>
          )}
          {style && (
            <div className="bg-gray-100 px-3 py-1.5 rounded-lg">
              <span className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium text-gray-800">Style:</span>{" "}
                {style}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Title and Location */}
      <div className="px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 lg:pt-2 pb-4 sm:pb-5 lg:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 z-50">
        <h2 className="text-base sm:text-lg font-normal text-gray-900 uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
          {location}
        </p>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <div className="flex justify-center items-center pb-4 sm:pb-5 lg:pb-6 gap-4 sm:gap-6 z-50">
          <button
            onClick={goToPrevious}
            className="rounded-full p-2 sm:p-3 lg:py-0 lg:px-1 text-black transition-all hover:scale-110 hover:bg-gray-100 cursor-pointer touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="sm:hidden" />
            <ChevronLeft size={18} className="hidden sm:block" />
          </button>

          <div className="bg-gray-100 bg-opacity-50 px-3 py-1 sm:px-4 sm:py-1.5 lg:px-1.5 lg:py-0 rounded-full text-gray-700 text-sm sm:text-base font-medium">
            {currentImageIndex < 9 && "0"}
            {currentImageIndex + 1}/{images.length < 10 && "0"}
            {images.length}
          </div>

          <button
            onClick={goToNext}
            className="rounded-full p-2 sm:p-3 lg:py-0 lg:px-1 text-black transition-all hover:scale-110 hover:bg-gray-100 cursor-pointer touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={18} className="hidden sm:block" />
          </button>
        </div>
      )}
    </div>
  );
}
