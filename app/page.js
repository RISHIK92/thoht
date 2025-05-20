// app/contact/page.js
"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import ContactContent from "./components/Contact";
import About from "./components/AboutUs";
import FullPageBackground from "./components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

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

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 z-40 w-full h-40 pointer-events-none mb-8">
        <div
          className="w-[550px] h-[550px] bg-no-repeat bg-contain bg-bottom mx-auto"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747678428/Group_2_ikixqa.png')",
          }}
        ></div>
        <footer className="w-full bg-gray-300 bg-opacity-60 backdrop-blur-md py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-700">
                  © {currentYear} ThōnT Designs. All Rights Reserved.
                </p>
              </div>

              <div className="text-sm text-gray-600">
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className={`${inter.className} relative z-10`}>
        <Head>
          <title>Contact Us | ThōnT Designs</title>
          <meta name="description" content="Get in touch with ThōnT Designs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FullPageBackground />
        <Navbar />
        <About />
        <ContactContent />
      </div>
    </div>
  );
}
