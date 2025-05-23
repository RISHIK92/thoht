"use client";

import { useRef, useState, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function DayNightSlider({
  dayImage,
  nightImage,
  title,
  description,
}) {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Update container width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - containerRect.left;
    const percentage = Math.min(
      Math.max((relativeX / containerRect.width) * 100, 0),
      100
    );
    setPosition(percentage);
  };

  // Calculate the position of the handle based on slider position
  const handlePosition = `${position}%`;

  return (
    <div className="w-full max-w-6xl mx-auto my-16">
      {/* Container for slider with extended line */}
      <div
        className="relative"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Main slider */}
        <ReactCompareSlider
          ref={sliderRef}
          position={position}
          onPositionChange={(pos) => setPosition(pos)}
          itemOne={<ReactCompareSliderImage src={dayImage} alt="Day" />}
          itemTwo={<ReactCompareSliderImage src={nightImage} alt="Night" />}
          style={{
            height: "550px",
            width: "100%",
            borderRadius: "0px",
            overflow: "hidden",
            zIndex: 30,
            userSelect: "none",
            pointerEvents: "none",
          }}
          handle={<CustomHandle />}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />

        <div
          className="absolute top-0 left-0 right-0 h-6 pointer-events-none"
          style={{ transform: "translateY(-100%)" }}
        >
          <div
            className="w-[2px] h-full bg-black absolute"
            style={{ left: handlePosition, transform: "translateX(-50%)" }}
          ></div>
        </div>

        {/* Shorter line below image with ō character */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            transform: "translateY(100%)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
        >
          <div
            className="relative h-full pointer-events-none"
            style={{
              left: handlePosition,
              position: "absolute",
              transform: "translateX(-50%)",
            }}
          >
            <div className="w-[2px] h-3/4 bg-black mx-auto"></div>{" "}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-3xl font-bold w-8 h-8 flex items-center justify-center">
              ō
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-left">
        <h2 className="text-xl font-medium uppercase text-black mb-1">
          {title}
        </h2>
        <p className="text-gray-700 font-light text-lg">{description}</p>
      </div>
    </div>
  );
}

function CustomHandle() {
  return (
    <div className="h-full w-[2px] bg-black flex items-center justify-center">
      {/* This is just a vertical line with no visible handle */}
    </div>
  );
}
