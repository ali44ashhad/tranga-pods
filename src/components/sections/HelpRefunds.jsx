// // components/sections/HelpRefunds.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   AlertCircle,
//   Info,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// const HelpRefunds = () => {
//   const [openFaq, setOpenFaq] = useState(null);

//   // 👉 Cursor glow state (ONLY for Get Help & Support section)
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const { left, top } = e.currentTarget.getBoundingClientRect();
//     setCursorPos({
//       x: e.clientX - left,
//       y: e.clientY - top,
//     });
//   };

//   const faqs = [
//     {
//       question: "I was charged but didn't receive my product",
//       answer:
//         "Please contact support with the pod location and transaction details. We'll review the machine logs and process a refund if applicable.",
//     },
//     {
//       question: "I received the wrong item",
//       answer:
//         "This can happen if a product mis-dispenses. Contact our team with transaction details and we'll review the issue immediately.",
//     },
//     {
//       question: "Can I return a product?",
//       answer:
//         "Due to hygiene and safety standards, physical returns are not accepted. Refunds are handled case by case based on transaction verification.",
//     },
//     {
//       question: "How do I know if my refund was approved?",
//       answer:
//         "Our team will notify you by email once the review is complete. Refunds typically appear in your account within 3–5 business days.",
//     },
//     {
//       question: "The machine appears offline or isn't working",
//       answer:
//         "Please try another nearby location. All pods are monitored and serviced regularly. You can also report the issue to support.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <div className="w-full">
//       {/* ================= GET HELP & SUPPORT (WITH CURSOR GLOW) ================= */}
//       <section
//         id="support"
//         onMouseMove={handleMouseMove}
//         className="relative overflow-hidden py-24 bg-[#14132C] text-white"
//       >
//         {/* ✨ Cursor-follow glow */}
//         <motion.div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(
//               320px circle at ${cursorPos.x}px ${cursorPos.y}px,
//               rgba(255,145,120,0.18),
//               transparent 75%
//             )`,
//             transition: "background 0.1s ease-out",
//           }}
//         />

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="relative max-w-4xl mx-auto px-4 space-y-16"
//         >
//           {/* HEADER */}
//           <div className="text-center">
            
 
//                 <motion.div
//         className="relative max-w-4xl mx-auto text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//          Get  <span style={{ color: "#FF9178" }}>  Help & Support</span>
//         </h2>

//         <p className="mt-5 text-lg leading-8 opacity-90 max-w-3xl mx-auto">
//          If something didn't go as expected, we're here to help. Tranga Pods
//               are automated systems, but real people handle support.
//         </p>

       
//       </motion.div>
//           </div>

//           {/* MACHINE ISSUES CARD */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-[#1B1A3A] rounded-2xl p-8 border border-white/10"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <AlertCircle className="text-[#FF9178]" size={24} />
//               <h3 className="text-2xl font-light">
//                 Issues with a Tranga Pod?
//               </h3>
//             </div>

//             <p className="mb-4 opacity-90">
//               Tranga Pods operate as self-service machines. Occasionally, issues
//               can happen such as a product not dispensing correctly or a payment
//               error.
//             </p>

//             <p className="mb-8 opacity-90">
//               Refunds and issue reviews are handled using the transaction data
//               from the machine.
//             </p>

//             <div className="space-y-5 mb-8">
//               {[
//                 {
//                   number: "1",
//                   title: "Note the pod location",
//                   description: "Venue name or city/state",
//                 },
//                 {
//                   number: "2",
//                   title: "Keep your payment details",
//                   description: "Transaction time or card reference",
//                 },
//                 {
//                   number: "3",
//                   title: "Contact support",
//                   description: "Include all info for faster help",
//                 },
//               ].map((step) => (
//                 <div key={step.number} className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center">
//                     <span className="text-[#14132C] font-medium">
//                       {step.number}
//                     </span>
//                   </div>

//                   <div>
//                     <h4 className="font-medium">{step.title}</h4>
//                     <p className="text-sm opacity-80">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-[#FF9178]/20 border border-[#FF9178]/30 rounded-xl p-4">
//               <p className="text-[#FF9178] flex items-center gap-2">
//                 <AlertCircle size={18} />
//                 Important: Refunds are handled per machine transaction only.
//               </p>
//             </div>
//           </motion.div>

//           {/* CONTACT CARD */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-[#0F172A] rounded-2xl p-8 border border-white/10"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <Mail className="text-[#A6D4FA]" size={24} />
//               <h3 className="text-2xl font-light">
//                 Contact Tranga Support
//               </h3>
//             </div>

//             <div className="flex gap-6 items-center">
//               <div className="w-14 h-14 bg-[#A6D4FA] rounded-full flex items-center justify-center">
//                 <Mail className="text-[#14132C]" size={24} />
//               </div>

//               <div>
//                 <h4 className="text-lg font-medium mb-1">Email Support</h4>
//                 <a
//                   href="mailto:support@trangapods.com"
//                   className="text-[#A6D4FA] text-md md:text-xl block"
//                 >
//                   support@trangapods.com
//                 </a>
//                 <p className="opacity-80 mt-2">
//                   Email allows accurate transaction review.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ================= FAQ (NO CURSOR EFFECT) ================= */}
//       <section className="py-20 bg-[#EFF7FE] text-gray-900">
//         <div className="max-w-4xl mx-auto px-4 space-y-10">
//           <h3 className="text-2xl font-light">Common Questions</h3>

//           <div className="space-y-3">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="rounded-xl bg-white border border-gray-200 shadow-sm"
//               >
//                 <button
//                   onClick={() =>
//                     setOpenFaq(openFaq === index ? null : index)
//                   }
//                   className="w-full px-6 py-4 flex justify-between items-center text-left"
//                 >
//                   <span className="font-medium">{faq.question}</span>
//                   {openFaq === index ? <ChevronUp /> : <ChevronDown />}
//                 </button>

//                 {openFaq === index && (
//                   <div className="px-6 py-4 border-t border-gray-200">
//                     <p className="text-gray-700">{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center">
//             <div className="rounded-2xl bg-white border border-gray-200 shadow-md p-6 text-center">
//               <div className="flex items-center gap-3 justify-center mb-4">
//                 <Info className="text-blue-600" size={22} />
//                 <h4 className="text-lg font-semibold">
//                   Machine Information
//                 </h4>
//               </div>

//               <p className="text-gray-800 mb-2">
//                 All Tranga Pods are monitored and serviced regularly.
//               </p>
//               <p className="text-sm text-gray-600">
//                 If one appears offline, please try another nearby location.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HelpRefunds;

// components/sections/HelpRefunds.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  AlertCircle,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const HelpRefunds = () => {
  /* ================= FAQ STATE ================= */
  const [openIndex, setOpenIndex] = useState(null);

  /* ================= CURSOR GLOW ================= */
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - left, y: e.clientY - top });
  };

  /* ================= PROGRESS TIMELINE ================= */
  const timelineRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const updateProgress = (scrollPos) => {
      if (!step1Ref.current || !step2Ref.current || !step3Ref.current) return;

      const s1 = step1Ref.current.offsetTop;
      const s2 = step2Ref.current.offsetTop;
      const s3 = step3Ref.current.offsetTop;

      const d1 = s2 - s1 || 1;
      const d2 = s3 - s2 || 1;

      setProgress1(Math.max(0, Math.min(100, ((scrollPos - s1) / d1) * 100)));
      setProgress2(Math.max(0, Math.min(100, ((scrollPos - s2) / d2) * 100)));
    };

    const onScroll = () => {
      if (!timelineRef.current) return;
      const top = timelineRef.current.getBoundingClientRect().top;
      targetScrollRef.current = window.innerHeight * 0.7 - top;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    };

    const animate = () => {
      currentScrollRef.current = lerp(
        currentScrollRef.current,
        targetScrollRef.current,
        0.08
      );
      updateProgress(currentScrollRef.current);

      if (Math.abs(currentScrollRef.current - targetScrollRef.current) > 0.5) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ================= FAQ DATA ================= */
  const faqsData = [
    {
      question: "I was charged but didn't receive my product",
      answer:
        "Please contact support with the pod location and transaction details. We'll review the machine logs and process a refund if applicable.",
    },
    {
      question: "I received the wrong item",
      answer:
        "This can happen if a product mis-dispenses. Contact our team with transaction details and we'll review the issue immediately.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Due to hygiene and safety standards, physical returns are not accepted. Refunds are handled case by case based on transaction verification.",
    },
    {
      question: "How do I know if my refund was approved?",
      answer:
        "Our team will notify you by email once the review is complete. Refunds typically appear in your account within 3–5 business days.",
    },
    {
      question: "The machine appears offline or isn't working",
      answer:
        "Please try another nearby location. All pods are monitored and serviced regularly.",
    },
  ];

  return (
    <div className="w-full">
      {/* ================= SUPPORT SECTION ================= */}
      <section
        id="support"
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden py-24 bg-[#14132C] text-white"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              320px circle at ${cursorPos.x}px ${cursorPos.y}px,
              rgba(255,145,120,0.18),
              transparent 75%
            )`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get <span className="text-[#FF9178]">Help & Support</span>
            </h2>
            <p className="text-lg opacity-90">
              Automated systems — backed by real human support.
            </p>
          </div>

          {/* ================= STEPS ================= */}
          <div className="bg-[#1B1A3A] rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-[#FF9178]" size={24} />
              <h3 className="text-2xl font-light">Issues with a Tranga Pod?</h3>
            </div>

            <div ref={timelineRef} className="relative space-y-8">
              <div
                className="absolute left-4 top-0 w-0.5 bg-white/20"
                style={{
                  height:
                    step3Ref.current && step1Ref.current
                      ? step3Ref.current.offsetTop -
                        step1Ref.current.offsetTop
                      : 0,
                }}
              />

              <motion.div
                className="absolute left-4 w-0.5 bg-[#FF9178]"
                animate={{
                  height:
                    step2Ref.current && step1Ref.current
                      ? (step2Ref.current.offsetTop -
                          step1Ref.current.offsetTop) *
                        (progress1 / 100)
                      : 0,
                }}
                transition={{ duration: 1.2 }}
                style={{ top: step1Ref.current?.offsetTop ?? 0 }}
              />

              <motion.div
                className="absolute left-4 w-0.5 bg-[#FF9178]"
                animate={{
                  height:
                    step3Ref.current && step2Ref.current
                      ? (step3Ref.current.offsetTop -
                          step2Ref.current.offsetTop) *
                        (progress2 / 100)
                      : 0,
                }}
                transition={{ duration: 1.2 }}
                style={{ top: step2Ref.current?.offsetTop ?? 0 }}
              />

              <div ref={step1Ref} className="flex gap-4">
                <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center">
                  <span className="text-[#14132C] font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Note the pod location</h4>
                  <p className="text-sm opacity-80">Venue or city/state</p>
                </div>
              </div>

              <div ref={step2Ref} className="flex gap-4">
                <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center">
                  <span className="text-[#14132C] font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Keep payment details</h4>
                  <p className="text-sm opacity-80">Time or card reference</p>
                </div>
              </div>

              <div ref={step3Ref} className="flex gap-4">
                <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center">
                  <span className="text-[#14132C] font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Contact support</h4>
                  <p className="text-sm opacity-80">Include all details</p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="bg-[#0F172A] rounded-2xl p-8 border border-white/10">
            <Mail className="text-[#A6D4FA]" />
            <a
              href="mailto:support@trangapods.com"
              className="text-[#A6D4FA] text-lg block mt-3"
            >
              support@trangapods.com
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION (YOUR LAYOUT) ================= */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl xl:text-5xl font-bold mb-4"
              style={{ color: "#14132C" }}
            >
              Your Questions, Answered.
            </h2>
          </motion.div>

          {(() => {
            const midPoint = Math.ceil(faqsData.length / 2);
            const left = faqsData.slice(0, midPoint);
            const right = faqsData.slice(midPoint);

            return (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {[left, right].map((col, colIndex) => (
                  <div key={colIndex}>
                    {col.map((faq, index) => {
                      const realIndex =
                        colIndex === 0 ? index : index + midPoint;
                      return (
                        <motion.div
                          key={realIndex}
                          className="border-b border-gray-200 py-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className="flex justify-between cursor-pointer"
                            onClick={() =>
                              setOpenIndex(
                                openIndex === realIndex ? null : realIndex
                              )
                            }
                          >
                            <h3
                              className="text-lg font-medium"
                              style={{ color: "#14132C" }}
                            >
                              {faq.question}
                            </h3>
                            <div
                              className="text-2xl transition-transform duration-500"
                              style={{
                                color: "#FF9178",
                                transform:
                                  openIndex === realIndex
                                    ? "rotate(45deg)"
                                    : "rotate(0deg)",
                              }}
                            >
                              +
                            </div>
                          </div>

                          <AnimatePresence>
                            {openIndex === realIndex && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <p
                                  className="pr-8 pt-4"
                                  style={{ color: "#14132C" }}
                                >
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })()}

          
        </div>
      </section>
    </div>
  );
};

export default HelpRefunds;
