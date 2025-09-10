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
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePosition = `${position}%`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const newPosition = Math.min(
        Math.max((relativeX / rect.width) * 100, 0),
        100
      );
      setPosition(newPosition);
    };

    const stopDragging = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging]);

  return (
    <div className="w-full my-20">
      <div className="relative" ref={containerRef}>
        {/* Slider */}
        <ReactCompareSlider
          position={position}
          onPositionChange={setPosition}
          itemOne={<ReactCompareSliderImage src={dayImage} alt="Day" />}
          itemTwo={<ReactCompareSliderImage src={nightImage} alt="Night" />}
          style={{
            height: "550px",
            width: "100%",
            borderRadius: "0px",
            overflow: "hidden",
            zIndex: 30,
            pointerEvents: "none",
          }}
          handle={<InvisibleHandle />}
          draggable={false}
        />

        {/* Top vertical line */}
        <div
          className="absolute top-0 left-0 right-0 h-6 pointer-events-none"
          style={{ transform: "translateY(-100%)" }}
        >
          <div
            className="w-[2px] h-full bg-black absolute"
            style={{ left: handlePosition, transform: "translateX(-50%)" }}
          />
        </div>

        {/* Bottom handle and line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{ transform: "translateY(100%)" }}
        >
          <div
            className="absolute"
            style={{
              left: handlePosition,
              transform: "translateX(-50%)",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={() => setIsDragging(true)}
          >
            <div className="w-[2px] h-3/4 bg-black mx-auto" />
            <div className="text-3xl font-bold w-8 h-8 flex items-center justify-center select-none">
              ō
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Invisible handle to suppress the default UI but keep drag logic
function InvisibleHandle() {
  return <div className="h-full w-[2px] bg-black pointer-events-none" />;
}
