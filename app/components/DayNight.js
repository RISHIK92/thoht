// components/DayNightSlider.jsx
import React, { useRef, useState } from "react";

export default function DayNightSlider() {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-3xl mx-auto h-[400px] overflow-hidden cursor-ew-resize select-none my-16"
    >
      {/* Background (Night) */}
      <img
        src="https://your-cloudinary-link.com/night.jpg"
        alt="Night"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Foreground (Day) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src="https://your-cloudinary-link.com/day.jpg"
          alt="Day"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 h-full w-1 bg-white z-10"
        style={{ left: `${sliderPosition}%` }}
      ></div>
    </div>
  );
}
