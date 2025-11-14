import React from 'react';
import { Link } from 'react-scroll'; 
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-3">
            <a href="/" className="text-2xl font-bold text-white">
              <img src="footerLogo.png" className="h-10" alt="Tranga Pods Logo" />
            </a>
            
            {/* ✨ ADDED THIS SECTION FOR SOCIAL ICONS */}
           <div className="pl-3 flex items-center gap-4 mt-4">
  <a 
    href="https://www.facebook.com/people/Tranga-Pods/61581808216740/#"
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <FaFacebook size={24} />
  </a>

  <a 
    href="https://www.instagram.com/trangapods/#"
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <FaInstagram size={24} />
  </a>

  {/* 🌐 NEW LINKEDIN BUTTON */}
  <a 
    href="https://www.linkedin.com/company/trangapods/"
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <FaLinkedin size={24} />
  </a>
</div>

            {/* ✨ END OF ADDED SECTION */}

          </div>

          <div className="md:col-span-9">
            <h3 className="text-lg font-semibold text-white">Discover Tranga</h3>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <Link to="how-it-works" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">How it works</Link>
                <Link to="discover-the-pods" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">Discover the Pods</Link>
                <Link to="process" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">Process</Link>
                <Link to="safety" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">Safety</Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link to="why-tranga" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">Why partner with Tranga</Link>
                <Link to="about-us" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">About us</Link>
                <Link to="faq" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">FAQs</Link>
                <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-white transition-colors duration-200">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tranga LLC d/b/a Tranga Pods. All rights reserved.
            {/* Removed the duplicate "All rights reserved" */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
