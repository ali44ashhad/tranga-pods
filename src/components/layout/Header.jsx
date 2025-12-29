
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../../../public/logo.png';

// 👉 Use TWO logos (recommended)
// import logoDark from '../../../public/logo-dark.png';
// import logoWhite from '../../../public/logo-white.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "What's New", href: "whats-new" },
    { label: "Learn", href: "about" },
    { label: "Find a Pod", href: "find-pod" },
    { label: "Support", href: "support" },
    { label: "FAQ", href: "FAQ" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 
        ${scrolled
          ? 'bg-[#ffff] shadow-md '
          : 'bg-transparent '
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Logo */}
        <ScrollLink
          to="whats-new"
          smooth={true}
          duration={800}
          className="flex items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain transition-all duration-300"
          />
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
              className={`text-sm font-medium cursor-pointer transition-colors
                ${scrolled
                  ? 'text-[#14132C] hover:text-[#FF9178]'
                  : 'text-[#14132C] hover:text-[#FF9178]'
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
            <Menu size={24} className={scrolled ? 'text-gray-900' : 'text-[#14132C]'} />
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
        <nav className="flex flex-col gap-4 px-6 py-6 bg-[#14132C]">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.href}
              smooth={true}
              duration={800}
              offset={-80}
              className="text-white/80 hover:text-[#FF9178] font-medium cursor-pointer"
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
