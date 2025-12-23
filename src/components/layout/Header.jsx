// components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "What's New", href: "whats-new" },
    { label: "Learn", href: "about" },
    { label: "Find a Pod", href: "find-pod" },
    { label: "Support", href: "support" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#14132C] backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="whats-new"
            smooth={true}
            duration={800}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-[#FF9178] to-[#FFFD3A] rounded-lg flex items-center justify-center"
            >
              <span className="text-[#14132C] font-bold text-lg">T</span>
            </motion.div>
            <span className={`text-xl font-light ${scrolled ? 'text-white' : 'text-[#14132C]'}`}>
              Tranga Pods
            </span>
          </ScrollLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  scrolled 
                    ? 'text-white/80 hover:text-white' 
                    : 'text-[#14132C]/80 hover:text-[#14132C]'
                }`}
                activeClass="!text-[#FF9178]"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className={scrolled ? 'text-white' : 'text-[#14132C]'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-white' : 'text-[#14132C]'} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.href}
                smooth={true}
                duration={800}
                offset={-80}
                className={`py-2 font-medium transition-colors ${
                  scrolled ? 'text-white/80' : 'text-[#14132C]/80'
                } hover:text-[#FF9178]`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;