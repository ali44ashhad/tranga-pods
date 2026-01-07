// components/sections/HelpRefunds.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  AlertCircle,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-scroll";
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


  const faqsData = [
  {
    question: "What if my payment went through but nothing dispensed?",
    answer:
      "If a product fails to dispense after payment, you may be eligible for a refund. Simply follow our refund request process and include the location and approximate time of your purchase so we can investigate and resolve it quickly.",
  },
  {
    question: "How long do refunds take?",
    answer:
      "Once approved, refunds are typically processed within 5–10 business days, depending on your bank or payment provider.",
  },
 {
  question: "What information do I need to submit a refund request?",
  answer: {
    text: "To help us resolve your request efficiently, we may ask for:",
    points: [
      "The Tranga Pod location",
      "Approximate date and time of purchase",
      "Transaction or payment reference",
      "A photo of the issue, if applicable",
    ],
  },
},
  {
    question: "Do I need a receipt",
    answer:
      "Receipts are not required. Providing accurate purchase details helps us locate and verify your transaction faster.",
  },
  {
    question: "What if I’m not sure which Tranga Pod I used?",
    answer:
      "No problem. If you include the venue name and approximate time of purchase, we’ll do our best to locate the transaction.",
  },
  {
    question: "Are all purchases refundable?",
    answer:
      "No problem. If you include the venue name and approximate time of purchase, we’ll do our best to locate the transaction.",
  },
  {
    question: "How long do refunds take?",
    answer:
      "Once approved, refunds are typically processed within 5–10 business days, depending on your bank or card provider.",
  },
  {
    question: "Can I get a refund at the venue where the Tranga Pod is located?",
    answer:
      "Refunds are handled directly by Tranga, not the venue. Venue staff are unable to issue refunds or access pod transactions.",
  },
];

  return (
    <div className="w-full">
      {/* ================= SUPPORT SECTION ================= */}
      <section
        id="support"
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden py-24 bg-[#A6D4FA] text-white"
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
              Get Help<span className="text-[#FF9178]"> & Refunds</span>
            </h2>
           <p className="text-lg opacity-90">
 Quick answers, clear next steps, and support when you need it.
   
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
                  <h4 className="font-medium">Capture the Issue</h4>
                  <p className="text-sm opacity-80">Take a clear photo or short video of the product and the Tranga Pod screen.
Note the location, date, and approximate time of purchase.
</p>
                </div>
              </div>

              <div ref={step2Ref} className="flex gap-4">
                <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center">
                  <span className="text-[#14132C] font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Submit a Refund Request</h4>
                  <p className="text-sm opacity-80">Complete our quick refund form with your details and transaction info.
No accounts, no back-and-forth.</p>
                </div>
              </div>

              <div ref={step3Ref} className="flex gap-4">
                <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center">
                  <span className="text-[#14132C] font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium"> We Review & Resolve</h4>
                  <p className="text-sm opacity-80">Approved refunds are processed within 3–5 business days back to your original payment method.
</p>
                </div>
              </div>
              <div className="bg-[#1B1A3A] rounded-xl p-6 border border-white/10">
  <p className="text-sm opacity-90">
    <strong>Important:</strong> All purchases are made directly at Tranga Pods.
    There are no online orders. Refunds are reviewed using machine transaction
    data.
  </p>
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
            <p className="text-sm opacity-80 mt-2">
  Email allows us to review transaction details and respond accurately.
</p>

          </div>
        </div>
        <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 px-4 justify-center pt-18"
                >
        
                  {/* Nearby Pods */}
                  <ScrollLink
                    to=""
                    smooth={true}
                    duration={600}
                    offset={-80}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#FFFD3A",
                        boxShadow: "0 10px 25px rgba(255,253,58,0.35)"
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="px-8 py-3 rounded-full font-semibold text-lg w-full sm:w-auto"
                      style={{
                        backgroundColor: "#FF9178",
                        color: "#14132C"
                      }}
                    >
                      Contact Support
                    </motion.button>
                  </ScrollLink>
        
                  {/* Get Support */}
                  <ScrollLink
                    to=""
                    smooth={true}
                    duration={600}
                    offset={-80}
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#FFFFFF",
                        color: " #14132C",
                        boxShadow: "0 8px 20px rgba(20,19,44,0.25)"
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="px-8 py-3 rounded-full font-semibold text-lg w-full sm:w-auto border-2"
                      style={{
                        backgroundColor: "transparent",
                        color: "#FFFFFF",
                        borderColor: "#FFFFFF"
                      }}
                    >
                 View full refund policy
                    </motion.button>
                  </ScrollLink>
        
                </motion.div>
      </section>

      {/* ================= FAQ SECTION (YOUR LAYOUT) ================= */}
      <section id="faq" className="py-16 bg-[#DDDCFF] sm:py-24 px-4 sm:px-6 lg:px-8">
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
                                <div className="pr-8 pt-4 text-[#14132C] space-y-2">
                                  {typeof faq.answer === "string" ? (
                                    <p>{faq.answer}</p>
                                  ) : (
                                    <>
                                      <p>{faq.answer.text}</p>
                                      <ul className="list-disc pl-5 space-y-1">
                                        {faq.answer.points.map((point, i) => (
                                          <li key={i}>{point}</li>
                                        ))}
                                      </ul>
                                    </>
                                  )}
                                </div>
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
<p className="mt-8 text-center" style={{ color: "#14132C" }}>
  Still have questions?{" "}
  <a
    href="mailto:support@trangapods.com"
    className="cursor-pointer hover:underline font-bold text-[#FE9E78] transition-colors"
  >
    Contact us anytime
  </a>
  {" "}for help with using the machine, refunds, purchase-related issues, or any general customer support.
</p>



          
        </div>
      </section>
     
    </div>
  );
};

export default HelpRefunds;
