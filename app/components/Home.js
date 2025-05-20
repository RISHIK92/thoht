// pages/fullpage.js
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function FullPageBackground() {
  const homeRef = useRef();

  return (
    <div ref={homeRef} className="relative min-h-screen" id="home">
      <Head>
        <title>Full Page Image</title>
      </Head>

      <div className="absolute inset-0 bg-no-repeat object-contain z-0">
        <img
          src="https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
