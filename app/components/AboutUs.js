// app/about/page.js
"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import TeamMemberCard from "./AboutTeamMember";
import AboutHead from "./AboutHead";
import DayNightSlider from "./DayNight";
import ProjectShowcase from "./ProjectShowcase";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const pathname = usePathname();
  const demoImages = [
    "https://res.cloudinary.com/df622sxkk/image/upload/v1747734511/Evening_02_pruupd.jpg",
    "https://res.cloudinary.com/df622sxkk/image/upload/v1746460143/samples/coffee.jpg",
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight =
            document.querySelector("header")?.offsetHeight || 0;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const teamMembers = [
    {
      name: "Nidhi Mariam Niel",
      credentials: "B.Arch (Gold Medalist)",
      image:
        "https://res.cloudinary.com/df622sxkk/image/upload/v1747687271/ce41226a5a52348ff6408e4ebcf9cb8f71f02aa0_brxz8p.png",
      quote:
        "When done right, architecture can bring in harmony and if not, it can serve as a prison",
    },
    {
      name: "Vaishakh S Nair",
      credentials: "(B.Arch)",
      image:
        "https://res.cloudinary.com/df622sxkk/image/upload/v1747687273/c83b0e596f41956b884a396ff4ec20690bc8c59a_tpdxcy.png",
      quote:
        "A good design never need to scream in it's scale and grandeur. It coexist with you and becomes a part of you!",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen flex flex-col font-[Montserrat]">
        <AboutHead />
        <div
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          id="about-us"
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain opacity-10"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747683834/image_13_ppbxla.png')",
              backgroundPosition: "center center",
              backgroundSize: "80% auto",
            }}
          ></div>
        </div>

        <div
          className={`${inter.className} relative z-10 min-h-screen flex flex-col`}
        >
          <Head>
            <title>About Us | ThōnT Designs</title>
            <meta
              name="description"
              content="Learn about ThōnT Designs and our principal architect"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Navbar />

          <main className="flex-grow container mx-auto px-4 py-12 mt-4 md:py-24">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-92 h-96 overflow-hidden border-4 border-gray-200 shadow-lg mx-auto">
                  <img
                    src="https://res.cloudinary.com/df622sxkk/image/upload/v1748038598/IMG-20250524-WA0002_tywdru.jpg"
                    alt="Ar. Harshit Srivathsava Polina"
                    className="w-full h-full object-cover filter grayscale"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 space-y-4">
                <h1 className="text-2xl md:text-2xl font-medium text-gray-900 font-[Montserrat]">
                  Ar. Harshit Srivathsava Polina
                </h1>

                <div className="uppercase text-gray-800">
                  <p className="text-md font-normal">PRINCIPAL ARCHITECT</p>
                  <p className="text-xs font-normal">B.Arch (Gold Medalist)</p>
                </div>

                <div className="mt-6 mb-16">
                  <blockquote className="text-xl md:text-xl italic text-gray-600 py-2 tracking-wider">
                    "Design is not a monologue, but an everlasting conversation
                    between soul, soil and surroundings."
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-0 w-full h-64 -z-10">
              <div
                className="w-full h-full bg-no-repeat bg-contain bg-bottom"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747686472/image_13_1_qdqsrf.png')",
                }}
              ></div>
            </div>
          </main>
        </div>
        <TeamMemberCard teamMembers={teamMembers} />
      </div>
    </>
  );
}
