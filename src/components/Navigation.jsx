import React, { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Discover the Pods", to: "discover-the-pods", type: "scroll" },
    { text: "How it works", to: "how-it-works", type: "scroll" },
    { text: "Why Tranga", to: "why-tranga", type: "scroll" },
    { text: "About us", to: "about-us", type: "scroll" },
    { text: "Contact", to: "contact", type: "scroll" },
    { text: "Customer Support", to: "/customers", type: "route" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] h-20 transition-all duration-500 border-b
        ${isScrolled ? "bg-white shadow-md border-gray-200" : "bg-transparent border-transparent"}
      `}
    >
      <div className="max-w-[1550px] h-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            src="logo.png"
            className="h-11 hover:cursor-pointer"
            alt="Tranga Pods Logo"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.text}>
                {link.type === "scroll" ? (
                  <ScrollLink
                    to={link.to}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    className={`cursor-pointer px-3 py-2 text-base transition-all duration-300
                      ${isScrolled ? "text-[#14132C]" : "text-white"} hover:text-[#FF9178]`}
                  >
                    {link.text}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={link.to}
                    className={`px-3 py-2 text-base transition-all duration-300
                      ${isScrolled ? "text-[#14132C]" : "text-white"} hover:text-[#FF9178]`}
                  >
                    {link.text}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden focus:outline-none z-[200]"
          style={{ color: isScrolled ? "#14132C" : "white" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden pt-20 absolute top-0 right-0 w-[70%] sm:w-[40%] h-[100vh]
          shadow-xl transform transition-all duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ backgroundColor: "#A6D4FA" }}
      >
        <ul className="flex flex-col items-center gap-2 py-10 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.text}
              className="border-b border-white/30 w-full text-center"
            >
              {link.type === "scroll" ? (
                <ScrollLink
                  to={link.to}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  className="block px-4 py-4 transition-all duration-300 hover:bg-white/20"
                  style={{ color: "#14132C" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={link.to}
                  className="block px-4 py-4 transition-all duration-300 hover:bg-white/20"
                  style={{ color: "#14132C" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
