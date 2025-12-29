// components/layout/Footer.jsx
import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-[#14132C]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
               
              <div>
                <a href="/">
                <img className='h-10' src={logo} alt="Tranga Pods Logo" /></a>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Bringing fragrance and convenience to the places you already love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#FF9178]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "What's New", href: "#whats-new" },
                { label: "Find a Pod", href: "#find-pod" },
                { label: "Support & Refunds", href: "#support" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#14132C] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#FF9178]">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://instagram.com/TrangaPods"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-[#14132C] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                  <Instagram size={18} />
                </div>
                <span>@TrangaPods</span>
              </a>

              <a
                href="mailto:support@trangapods.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#14132C] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                  <Mail size={18} />
                </div>
                <span>support@trangapods.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tranga Pods. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-[#14132C] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#14132C] text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
