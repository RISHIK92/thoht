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
import ProjectSection from "./components/Project";
import WorkWithUs from "./components/WorkWithUs";

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
      {/* Footer Section - Mobile Responsive */}
      <div className="absolute bottom-0 left-0 right-0 z-30 w-full pointer-events-none">
        {/* Background Image - Responsive */}
        <div className="w-full flex justify-center">
          <div
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] bg-no-repeat bg-contain bg-bottom"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/df622sxkk/image/upload/v1747678428/Group_2_ikixqa.png')",
            }}
          ></div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-gray-300 bg-opacity-60 backdrop-blur-md py-4 sm:py-6 pointer-events-auto z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
              {/* Copyright */}
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  © {currentYear} ThōhT Designs. All Rights Reserved.
                </p>
              </div>

              {/* Location */}
              <div className="text-center sm:text-right">
                <p className="text-xs sm:text-sm text-gray-600">
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Main Content */}
      <div className={`${inter.className} relative z-10 flex-1`}>
        <Head>
          <title>Contact Us | ThōhT Designs</title>
          <meta name="description" content="Get in touch with ThōnT Designs" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation */}
        <Navbar />

        {/* Page Sections */}
        <main className="w-full">
          {/* Full Page Background */}
          <section id="home" className="w-full">
            <FullPageBackground />
          </section>

          {/* About Section */}
          <section id="about-us" className="w-full">
            <About />
          </section>

          {/* Projects Section - Commented out but kept for reference */}
          {/* <section id="project" className="w-full">
            <ProjectSection />
          </section> */}

          {/* Work With Us Section */}
          <section id="work-with-us" className="w-full">
            <WorkWithUs />
          </section>

          {/* Contact Section */}
          <section
            id="contact-section"
            className="w-full pb-32 sm:pb-40 md:pb-48 lg:pb-56"
          >
            <ContactContent />
          </section>
        </main>
      </div>
    </div>
  );
}
