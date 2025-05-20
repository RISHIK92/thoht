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
    <div className="w-full max-w-[1800px] mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
      <div className="relative">
        <div className="w-full h-[35rem] relative">
          {images.length > 0 && (
            <img
              src={images[currentImageIndex] || "/api/placeholder/1800/700"}
              alt={`Project image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          )}

          <div className="absolute left-0 bottom-0 w-84 p-6 bg-white bg-opacity-90 flex items-center">
            <p className="text-gray-700 text-sm">{description}</p>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-80 bg-white bg-opacity-90 flex flex-col justify-end">
            {area && (
              <p className="text-gray-800 text-sm">
                <span className="font-semibold">Area - </span> {area}
              </p>
            )}
            {type && (
              <p className="text-gray-800 text-sm">
                <span className="font-semibold">Type - </span> {type}
              </p>
            )}
            {style && (
              <p className="text-gray-800 text-sm">
                <span className="font-semibold">Style - </span> {style}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="px-84 pt-2 pb-6 flex justify-between items-center">
        <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-500 text-md">{location}</p>
      </div>

      {images.length > 1 && (
        <div className="flex justify-center items-center pb-6">
          <button
            onClick={goToPrevious}
            className="rounded-full py-0 px-1 text-black transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="bg-opacity-50 px-1.5 rounded-full text-gray-700 text-base font-medium">
            0{currentImageIndex + 1}/0{images.length}
          </div>

          <button
            onClick={goToNext}
            className="rounded-full py-0 px-1 text-black transition-all hover:scale-110 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
