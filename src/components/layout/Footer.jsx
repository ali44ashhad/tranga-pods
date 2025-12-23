// components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#14132C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF9178] to-[#FFFD3A] rounded-lg flex items-center justify-center">
                <span className="text-[#14132C] font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="text-xl font-light">Tranga Pods</h3>
                <p className="text-sm text-white/60">Convenience, reimagined</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Bringing fragrance and convenience to the places you already love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-[#FF9178]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#whats-new" className="text-white/70 hover:text-white text-sm transition-colors">
                  What's New
                </a>
              </li>
              <li>
                <a href="#find-pod" className="text-white/70 hover:text-white text-sm transition-colors">
                  Find a Pod
                </a>
              </li>
              <li>
                <a href="#support" className="text-white/70 hover:text-white text-sm transition-colors">
                  Support & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4 text-[#FF9178]">Connect</h4>
            <div className="space-y-4">
              <a
                href="https://instagram.com/TrangaPods"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={18} />
                </div>
                <span>@TrangaPods</span>
              </a>
              <a
                href="mailto:support@trangapods.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <span>support@trangapods.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Tranga Pods. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
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