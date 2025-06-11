"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isTransparent, setIsTransparent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

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
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      if (homeSection) observer.unobserve(homeSection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsTransparent(false);
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/#home", label: "Home", description: "Welcome to our world" },
    { href: "/#project", label: "Projects", description: "Our creative works" },
    { href: "/#about-us", label: "About", description: "Our story & team" },
    {
      href: "/#work-with-us",
      label: "Work with us",
      description: "What we offer",
    },
    {
      href: "/#contact-section",
      label: "Contact",
      description: "Let's connect",
    },
  ];

  const Underline = ({ isActive }) => (
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${
        isActive ? "w-full" : "w-0"
      }`}
    />
  );

  const NavLink = ({ href, children }) => {
    const isActive =
      activeLink === href ||
      (href === "/#contact-section" && activeLink === "/contact") ||
      (href === "/#about-us" && activeLink === "/about") ||
      (href === "/#home" && activeLink === "/home") ||
      (href === "/#project" && activeLink === "/project") ||
      (href === "/#work-with-us" && activeLink === "/work-with-us");

    return (
      <Link
        href={href}
        onClick={() => handleClick(href)}
        className={`relative pb-1 px-1 transition-colors duration-300 ${
          isTransparent
            ? "text-white hover:text-gray-200"
            : "text-gray-800 hover:text-gray-600"
        } ${isActive ? "font-medium" : ""}`}
      >
        {children}
        <Underline isActive={isActive} />
      </Link>
    );
  };

  const MobileNavLink = ({ href, label, description }) => {
    const isActive =
      activeLink === href ||
      (href === "/#contact-section" && activeLink === "/contact") ||
      (href === "/#about-us" && activeLink === "/about") ||
      (href === "/#home" && activeLink === "/home") ||
      (href === "/#project" && activeLink === "/project") ||
      (href === "/#work-with-us" && activeLink === "/work-with-us");

    return (
      <Link
        href={href}
        onClick={() => handleClick(href)}
        className={`w-full group flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 hover:bg-gray-100 hover:shadow-md transform hover:scale-[1.02] ${
          isActive ? "bg-gray-100 shadow-md" : ""
        }`}
      >
        <div>
          <div className="font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-200">
            {label}
          </div>
          <div className="text-sm text-gray-500 mt-1">{description}</div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" />
      </Link>
    );
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent backdrop-blur-none border-none"
            : "bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 font-[Montserrat] font-medium">
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center">
            {/* Left Navigation */}
            <nav className="flex space-x-12 mt-6 flex-grow justify-end pr-4 ml-40">
              <NavLink href="/#home">Home</NavLink>
              <NavLink href="/#project">Projects</NavLink>
              <NavLink href="/#about-us">About us</NavLink>
            </nav>

            {/* Logo - Center */}
            <div className="relative h-20 px-10">
              <img
                src={
                  isTransparent
                    ? "https://res.cloudinary.com/df622sxkk/image/upload/v1747689316/logo_web_aoal9u.png"
                    : "https://res.cloudinary.com/df622sxkk/image/upload/v1747689465/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_1_uhjfms.png"
                }
                alt="ThōnT Designs Logo"
                className="h-16 w-auto object-scale-down mt-4 transition-opacity duration-300"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                style={{ userSelect: "none", pointerEvents: "none" }}
              />
            </div>

            {/* Right Navigation & Search */}
            <div className="flex items-center flex-grow justify-start pl-4">
              <nav className="flex space-x-10 mt-6">
                <NavLink href="/#work-with-us">Work with us</NavLink>
                <NavLink href="/#contact-section">Contact us</NavLink>
              </nav>
              <div className="relative ml-10 mt-4">
                <input
                  type="text"
                  className={`pl-2 pr-8 py-1 border rounded-full text-xs focus:outline-none focus:ring-1 transition-all duration-300 ${
                    isTransparent
                      ? "border-white/30 text-white bg-white/10 placeholder-white/70 focus:ring-white/50 backdrop-blur-sm"
                      : "border-gray-300 text-gray-800 bg-white focus:ring-gray-400"
                  }`}
                  placeholder="Search"
                />
                <svg
                  className={`w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    isTransparent ? "text-white/70" : "text-gray-600"
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

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-20">
            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0 z-10">
              <img
                src={
                  isTransparent
                    ? "https://res.cloudinary.com/df622sxkk/image/upload/v1747689316/logo_web_aoal9u.png"
                    : "https://res.cloudinary.com/df622sxkk/image/upload/v1747689465/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_1_uhjfms.png"
                }
                alt="ThōnT Designs Logo"
                className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>

            {/* Mobile Menu Button - Right Side */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 relative z-10 ml-auto ${
                isTransparent
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              <Menu
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`w-6 h-6 absolute top-2 left-2 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background with blur */}
        <div
          className={`absolute inset-0 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-out Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-all duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <img
              src="https://res.cloudinary.com/df622sxkk/image/upload/v1747689465/4ad277f4cfefe84d5f8fa8b84997de52f6f8bc6c_1_uhjfms.png"
              alt="ThōnT Designs Logo"
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                <MobileNavLink
                  href={item.href}
                  label={item.label}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`absolute bottom-6 left-6 right-6 text-center transition-all duration-500 ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <p className="text-xs text-gray-400">
              © 2024 ThōnT Designs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
