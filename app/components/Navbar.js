"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);

    const homeSection = document.getElementById("home");

    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTransparent(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // triggers when 10% of #home is visible
      }
    );

    observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, [pathname]);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsTransparent(false);
  };

  const Underline = ({ isActive }) => (
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
        isActive ? "w-full" : "w-0"
      }`}
    ></span>
  );

  const NavLink = ({ href, children }) => {
    const isActive =
      activeLink === href ||
      (href === "#contact-section" && activeLink === "/contact") ||
      (href === "#about-us" && activeLink === "/about") ||
      (href === "#home" && activeLink === "/home") ||
      (href === "#project" && activeLink === "/project");
    href === "#/#work-with-us" && activeLink === "/work-with-us";

    return (
      <Link
        href={href}
        onClick={() => handleClick(href)}
        className={`${
          isTransparent ? "text-white" : "text-gray-800"
        } hover:text-gray-600 relative pb-1 px-1 ${
          isActive ? "font-medium" : ""
        }`}
      >
        {children}
        <Underline isActive={isActive} />
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        isTransparent
          ? "bg-transparent backdrop-blur-none border-none"
          : "border-b border-gray-200 bg-white bg-opacity-80 backdrop-blur-md"
      } z-20 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 font-[Montserrat] font-medium">
        <div className="flex justify-between items-center">
          <nav className="hidden md:flex space-x-12 mt-6 flex-grow justify-end pr-4 ml-40">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#project">Projects</NavLink>
            <NavLink href="/#about-us">About us</NavLink>
          </nav>

          <div className="relative h-20 px-10">
            <img
              src={
                isTransparent
                  ? "https://res.cloudinary.com/df622sxkk/image/upload/v1747689316/logo_web_aoal9u.png"
                  : "https://res.cloudinary.com/df622sxkk/image/upload/v1747689465/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_1_uhjfms.png"
              }
              alt="ThōnT Designs Logo"
              className="h-16 w-auto object-scale-down mt-4 ml-1.5"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </div>

          <div className="flex items-center flex-grow justify-start pl-4">
            <nav className="hidden md:flex space-x-10 mt-6">
              <NavLink href="/#work-with-us">Work with us</NavLink>
              <NavLink href="/#contact-section">Contact</NavLink>
            </nav>
            <div className="relative ml-14 mt-6">
              <input
                type="text"
                className={`pl-2 pr-8 py-1 border ${
                  isTransparent
                    ? "border-white text-white placeholder-white"
                    : "border-gray-800 text-gray-800"
                } rounded-full text-xs focus:outline-none focus:ring-1 ${
                  isTransparent ? "focus:ring-white" : "focus:ring-gray-800"
                } bg-transparent`}
                placeholder="Search"
              />
              <svg
                className={`w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 ${
                  isTransparent ? "text-white" : "text-gray-800"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
