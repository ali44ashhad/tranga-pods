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
{/* 
         <PageIntro />         
        <HowItWorks />        
        <SafetyGuidance />     
        <CustomerSupport />    
        <FindPodLocations />  
        <ContactPathway /> */}
      </main>
      
      <Footer />
    
    </div>
  );
}

// import React, { useEffect } from 'react';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';
// import PageIntro from '../components/sections/PageIntro';
// import HowItWorks from '../components/sections/HowItWorks';
// import SafetyGuidance from '../components/sections/SafetyGuidance';
// import FindPod from '../components/sections/FindPod';
// import CustomerSupport from '../components/sections/CustomerSupport';
// import ContactPathway from '../components/sections/ContactPathway';

// export default function Home() {
//   useEffect(() => {
//     // Simple smooth scroll for anchor links
//     const handleAnchorClick = (e) => {
//       const target = e.target.closest('a[href^="#"]');
//       if (target) {
//         e.preventDefault();
//         const id = target.getAttribute('href').substring(1);
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     };

//     document.addEventListener('click', handleAnchorClick);
//     return () => document.removeEventListener('click', handleAnchorClick);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
      
//       <main>
//         <PageIntro />
//         <HowItWorks />
//         <SafetyGuidance />
//         <FindPod />
//         <CustomerSupport />
//         <ContactPathway />
//       </main>
      
//       <Footer />
//     </div>
//   );
// }