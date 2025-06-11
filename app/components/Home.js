// pages/fullpage.js
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function FullPageBackground() {
  const homeRef = useRef();
  const [viewportHeight, setViewportHeight] = useState("100vh");

  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    window.addEventListener("orientationchange", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("orientationchange", updateViewportHeight);
    };
  }, []);

  return (
    <div
      ref={homeRef}
      className="relative w-full overflow-hidden"
      id="home"
      style={{ height: viewportHeight }}
    >
      <Head>
        <title>Full Page Image</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      {/* Main background image container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg"
          alt="Full page background"
          className={`w-full h-full transition-opacity duration-500 object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover`}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          style={{
            userSelect: "none",
            pointerEvents: "none",
            objectPosition: "center center",
          }}
        />
      </div>
    </div>
  );
}
