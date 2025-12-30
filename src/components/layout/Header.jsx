import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll (UNCHANGED)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Content UNCHANGED
  const navItems = [
    { label: "What's New", href: "whats-new" },
    { label: "Why Tranga ", href: "about" },
    { label: "Find a Pod", href: "find-pod" },
    { label: "Support", href: "support" },
    { label: "FAQ", href: "FAQ" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] h-20 transition-all duration-500 border-b
        ${
          scrolled
            ? "bg-white shadow-md border-gray-200"
            : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-[1550px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="whats-new"
          smooth
          duration={800}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-11 w-auto object-contain"
          />
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium tracking-wide">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.href}
              spy
              smooth
              offset={-80}
              duration={800}
              className={`cursor-pointer px-3 py-2 transition-all duration-300
                ${
                  scrolled ? "text-[#14132C]" : "text-white"
                } hover:text-[#FF9178]`}
             
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 z-[200]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: scrolled ? "#14132C" : "white" }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <nav
          className="flex flex-col gap-2 py-20 h-screen shadow-xl"
          style={{ backgroundColor: "#A6D4FA" }}
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.href}
              smooth
              duration={800}
              offset={-80}
              className="block w-full text-center py-4 font-medium text-[#14132C]
                hover:bg-white/20 transition-all cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
