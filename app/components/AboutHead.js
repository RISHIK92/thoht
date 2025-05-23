// components/ContactContent.js
"use client";

export default function AboutHead() {
  return (
    <div className="bg-white bg-opacity-60 backdrop-blur-md mt-4 relative mb-84">
      <div className="absolute mt-76 inset-0 z-0 pointer-events-none">
        <div
          className="w-[550px] h-[600px] bg-no-repeat bg-contain bg-bottom bg-center mx-auto"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747764555/png-2_1_pskshi.png')",
            backgroundPosition: "center 70%",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center relative">
          <div className="w-full flex justify-center mb-10 mt-36 z-10">
            <img
              src="https://res.cloudinary.com/df622sxkk/image/upload/v1747726683/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_2_1_rdh4ly.png"
              alt="ThōnT Designs Logo"
              className="h-24 w-auto object-scale-down"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </div>

          <div className="w-full text-center text-lg mt-1 z-20 font-[Montserrat] tracking-wide -skew-x-8">
            <h2>An Old World</h2>
            <p className="tracking-wide">Our Thought - A new World</p>
          </div>

          <div className="w-full max-w-2xl mt-32 text-center px-4 z-20">
            {/* <h2 className="text-xl">
              Here at ThohT, we aim to provide context based design solutions
              which suits your taste, your comfort and promote a healthy and
              sustainable lifestyle.
            </h2> */}
          </div>
        </div>
      </div>
    </div>
  );
}
