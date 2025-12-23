import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsNew from '../components/sections/WhatsNew';
import AboutTranga from '../components/sections/AboutTranga';
import FindPod from '../components/sections/FindPod';
import HelpRefunds from '../components/sections/HelpRefunds';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <WhatsNew />
        <AboutTranga />
        <FindPod />
        <HelpRefunds />
      </main>
      
      <Footer />
      
      {/* Back to Top Button */}
      {/* <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9178] to-[#FFFD3A] flex items-center justify-center shadow-lg z-40"
      >
        <span className="text-[#14132C] font-bold">↑</span>
      </motion.button> */}
    </div>
  );
}