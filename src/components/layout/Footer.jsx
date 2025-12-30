import React from "react";
import { Link } from "react-scroll";
import { Instagram, Mail } from "lucide-react";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* LEFT: Brand + Social */}
          <div className="md:col-span-3">
            <a href="/" className="inline-block">
              {/* <img src={logo} alt="Tranga Pods Logo" className="h-10" /> */}
              <img src="footerLogo.png" alt="Tranga Pods Logo" className="h-10" />
            </a>

            <p className="mt-4 text-sm text-gray-400">
              Bringing fragrance and convenience to the places you already love.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://instagram.com/TrangaPods"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={22} />
              </a>

              <a
                href="mailto:support@trangapods.com"
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT: Links */}
          <div className="md:col-span-9">
            <h3 className="text-lg font-semibold text-white mb-4">
              Discover Tranga
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div className="flex flex-col gap-3">
                <Link to="whats-new" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
                  What's New
                </Link>
                <Link to="about" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
                Why Tranga
                </Link>
                <Link to="find-pod" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
                  Find a Pod
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link to="support" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
                  Support & Refunds
                </Link>
                <Link to="faq" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
                  FAQ`s`
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tranga Pods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
