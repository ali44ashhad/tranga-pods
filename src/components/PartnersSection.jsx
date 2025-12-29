// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import alice from '../../public/alice.png';
// // import fedx from '../../public/fedx.png';
// // import gen from '../../public/gen.png';
// // const PartnersSection = () => {
// //   const partners = [
// //     {
// //       name: 'FedEx',
// //       url: 'https://www.fedex.com/en-us/home.html',
// //       logo: fedx,
// //       alt: 'FedEx Logo'
// //     },
// //     {
// //       name: 'Hello Alice',
// //       url: 'https://helloalice.com',
// //       logo: alice,
// //       alt: 'Hello Alice Logo'
// //     },
// //     {
// //       name: 'Global Entrepreneurship Network',
// //       url: 'https://www.genglobal.org',
// //       logo: gen,
// //       alt: 'Global Entrepreneurship Network Logo'
// //     },
// //     {
// //       name: 'FedEx',
// //       url: 'https://www.fedex.com/en-us/home.html',
// //       logo: fedx,
// //       alt: 'FedEx Logo'
// //     },
// //     {
// //       name: 'Hello Alice',
// //       url: 'https://helloalice.com',
// //       logo: alice,
// //       alt: 'Hello Alice Logo'
// //     },
// //     {
// //       name: 'Global Entrepreneurship Network',
// //       url: 'https://www.genglobal.org',
// //       logo: gen,
// //       alt: 'Global Entrepreneurship Network Logo'
// //     },
// //     {
// //       name: 'FedEx',
// //       url: 'https://www.fedex.com/en-us/home.html',
// //       logo: fedx,
// //       alt: 'FedEx Logo'
// //     },
// //     {
// //       name: 'Hello Alice',
// //       url: 'https://helloalice.com',
// //       logo: alice,
// //       alt: 'Hello Alice Logo'
// //     },
// //     {
// //       name: 'Global Entrepreneurship Network',
// //       url: 'https://www.genglobal.org',
// //       logo: gen,
// //       alt: 'Global Entrepreneurship Network Logo'
// //     }
// //   ];

// //   return (
// //     <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
// //       <div className="max-w-7xl mx-auto">
// //         {/* --- Header --- */}
// //         <motion.div
// //           className="text-center mb-12 md:mb-16"
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: '#14132C' }}>
// //             Partners & <span style={{ color: '#FF9178' }}>Supporters</span>
// //           </h2>
// //         </motion.div>

// //         {/* --- Body Text --- */}
// //         <motion.div
// //           className="text-center max-w-3xl mx-auto mb-16"
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //         >
// //           <p className="text-lg leading-relaxed" style={{ color: '#14132C' }}>
// //             Collaborating with organizations that believe in bold ideas and community impact drives us forward. Together, we're bringing Tranga Pods to life in ways that matter.
// //           </p>
// //         </motion.div>

// //         {/* --- Brand Logos Row --- */}
// //         <motion.div
// //           className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //         >
// //           {partners.map((partner, index) => (
// //             <motion.a
// //               key={index}
// //               href={partner.url}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="h-32 sm:h-40 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg p-6"
// //               style={{
// //                 backgroundColor: 'rgba(255, 255, 255, 0.8)',
// //                 border: '2px solid rgba(255, 145, 120, 0.2)'
// //               }}
// //               whileHover={{
// //                 backgroundColor: 'rgba(255, 145, 120, 0.1)',
// //                 borderColor: '#FF9178',
// //                 scale: 1.05,
// //                 boxShadow: '0 10px 25px rgba(255, 145, 120, 0.15)'
// //               }}
// //               whileTap={{ scale: 0.97 }}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.1 * index }}
// //               viewport={{ once: true }}
// //             >
// //               <img
// //                 src={partner.logo}
// //                 alt={partner.alt}
// //                 className="max-h-24 max-w-full object-contain"
// //                 onError={(e) => {
// //                   e.target.style.display = 'none';
// //                   e.target.parentElement.innerHTML = `<span style="color: #14132C; font-weight: bold; text-center">${partner.name}</span>`;
// //                 }}
// //               />
// //             </motion.a>
// //           ))}
// //         </motion.div>

// //         {/* --- Optional CTA --- */}
// //         <motion.div
// //           className="text-center mt-16"
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.6 }}
// //           viewport={{ once: true }}
// //         >
   
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PartnersSection;


// import React from 'react';
// import { motion } from 'framer-motion';
// import alice from '../../public/alice.png';
// import fedx from '../../public/fedx.png';
// import gen from '../../public/gen.png';

// const PartnersSection = () => {
//   const partners = [
//     { name: 'FedEx', url: 'https://www.fedex.com/en-us/home.html', logo: fedx, alt: 'FedEx Logo' },
//     { name: 'Hello Alice', url: 'https://helloalice.com', logo: alice, alt: 'Hello Alice Logo' },
//     { name: 'Global Entrepreneurship Network', url: 'https://www.genglobal.org', logo: gen, alt: 'GEN Logo' },
//   ];

//   // Duplicate for seamless loop
//   const scrollingPartners = [...partners, ...partners, ...partners];

//   return (
//     <section className="py-16 sm:py-24 px-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: '#14132C' }}>
//             Partners & <span style={{ color: '#FF9178' }}>Supporters</span>
//           </h2>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative w-full overflow-hidden">
//           <motion.div
//             className="flex gap-8"
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{
//               repeat: Infinity,
//               repeatType: 'loop',
//               duration: 15,
//               ease: 'linear',
//             }}
//             whileHover={{ animationPlayState: 'paused' }}
//           >
//             {scrollingPartners.map((partner, index) => (
//               <a
//                 key={index}
//                 href={partner.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="min-w-[260px] h-32 sm:h-40 flex items-center justify-center rounded-xl p-6 transition-all duration-300"
//                 style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.85)',
//                   border: '2px solid rgba(255, 145, 120, 0.25)',
//                 }}
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.alt}
//                   className="max-h-24 object-contain"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.parentElement.innerHTML = `<span style="font-weight:bold;color:#14132C">${partner.name}</span>`;
//                   }}
//                 />
//               </a>
//             ))}
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PartnersSection;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  HelpCircle,
  MapPin,
  Phone,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle,
  AlertCircle,
  Clock,
  Send,
  Users,
  Smartphone
} from 'lucide-react';

const TrangaPodsInfoPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [locations, setLocations] = useState([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

  /* ------------------ Responsive Check ------------------ */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* ------------------ Simulated Location Fetch ------------------ */
  useEffect(() => {
    setTimeout(() => {
      setLocations([]); // intentionally empty
      setIsLoadingLocations(false);
    }, 1000);
  }, []);

  /* ------------------ FAQ Content ------------------ */
  const accordionItems = [
    {
      id: 'how-it-works',
      title: 'How Tranga Pods Work',
      icon: <Smartphone size={20} />,
      content: (
        <p className="text-gray-700">
          Tranga Pods are self-contained public devices. Instructions are displayed clearly on the screen.
          Follow each step exactly as shown.
        </p>
      )
    },
    {
      id: 'safety',
      title: 'Safety & Responsibility',
      icon: <Shield size={20} />,
      content: (
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Follow all on-screen instructions</li>
          <li>• Do not attempt to open or modify the pod</li>
          <li>• Report unusual behavior or damage</li>
        </ul>
      )
    },
    {
      id: 'locations',
      title: 'Where You May See Tranga Pods',
      icon: <MapPin size={20} />,
      content: (
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Airports and terminals</li>
          <li>• Shopping centers</li>
          <li>• Transportation hubs</li>
          <li>• Public buildings</li>
        </ul>
      )
    }
  ];

  /* ------------------ Form Options ------------------ */
  const issueTypes = [
    { value: 'safety', label: 'Safety concern' },
    { value: 'usage', label: 'Usage question' },
    { value: 'location', label: 'Location inquiry' },
    { value: 'technical', label: 'Technical issue' },
    { value: 'feedback', label: 'General feedback' }
  ];

  /* ------------------ Submit Handler ------------------ */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');

    setTimeout(() => {
      e.target.reset();
      setSelectedIssue('');
      setFormStatus('idle');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      
      {/* Analytics Hook */}
      <div className="hidden" data-analytics="tranga-pods-info-page">
        Tranga Pods Information Page
      </div>

      <div className="max-w-4xl mx-auto">

        {/* ------------------ PAGE INTRO ------------------ */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
            <Info size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Information & Guidance
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Tranga Pods
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            This page provides clear guidance for people who encounter Tranga Pods in public spaces.
            It explains how they work, important safety information, and how to get support.
          </p>
        </header>

        {/* ------------------ HOW IT WORKS ------------------ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How Tranga Pods Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {['Locate the pod', 'Follow on-screen steps', 'Complete the process'].map((text, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------ SUPPORT & GUIDANCE ------------------ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Customer Support & Guidance
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg flex gap-3">
              <Clock className="text-blue-600" size={18} />
              <p className="text-sm text-gray-700">
                Support responses are typically provided within 24 hours.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg flex gap-3">
              <Users className="text-blue-600" size={18} />
              <p className="text-sm text-gray-700">
                Support is available through a structured contact form and chat.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------ SAFETY ------------------ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Safety & Responsibility
          </h2>

          <div className="bg-white p-6 rounded-xl border border-amber-100">
            <div className="flex gap-3 mb-4">
              <AlertTriangle className="text-amber-600" size={20} />
              <p className="text-sm text-gray-700">
                Tranga Pods must be used only as instructed. Tampering or misuse is not permitted.
              </p>
            </div>

            <p className="text-xs text-gray-500">
              Availability, features, and locations may vary.
            </p>
          </div>
        </section>

        {/* ------------------ LOCATIONS ------------------ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Location Awareness
          </h2>

          {isLoadingLocations ? (
            <div className="bg-white p-6 rounded-xl border animate-pulse">
              <div className="h-4 bg-gray-200 w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 w-1/2"></div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl border text-center">
              <MapPin className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-700">
                No active locations are currently listed. Tranga Pods may be introduced in additional
                areas in the future.
              </p>
            </div>
          )}
        </section>

        {/* ------------------ FAQ ------------------ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>

          {accordionItems.map(item => (
            <div key={item.id} className="mb-3 border rounded-lg">
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                {openAccordion === item.id ? <ChevronUp /> : <ChevronDown />}
              </button>

              {openAccordion === item.id && (
                <div className="p-4 border-t text-sm">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ------------------ CONTACT FORM ------------------ */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Support
          </h2>

          {formStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
              <CheckCircle className="mx-auto text-green-500 mb-3" />
              <p className="text-gray-700">
                Your request has been received. Support will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input required placeholder="Full name" className="input" />
                <input required type="email" placeholder="Email address" className="input" />
              </div>

              <select
                required
                value={selectedIssue}
                onChange={e => setSelectedIssue(e.target.value)}
                className="input mb-4"
              >
                <option value="">Select issue type</option>
                {issueTypes.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>

              <textarea
                required
                maxLength={500}
                rows={4}
                placeholder="Brief description (what happened, where, and when)"
                className="input mb-4 resize-none"
              />

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center gap-2"
              >
                {formStatus === 'submitting' ? 'Sending…' : 'Submit request'}
              </button>
            </form>
          )}
        </section>

        {/* ------------------ CHAT ------------------ */}
        <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'} z-50`}>
          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
            <Phone className="text-white" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrangaPodsInfoPage;
