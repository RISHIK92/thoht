// pages/fullpage.js (or any page)
import Head from "next/head";

export default function FullPageBackground() {
  return (
    <div className="relative min-h-screen" id="home">
      <Head>
        <title>Full Page Image</title>
      </Head>

      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg')",
        }}
      />
    </div>
  );
}
