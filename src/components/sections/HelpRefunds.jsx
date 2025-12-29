
// components/sections/HelpRefunds.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';

const HelpRefunds = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "I was charged but didn't receive my product",
      answer:
        "Please contact support with the pod location and transaction details. We'll review the machine logs and process a refund if applicable."
    },
    {
      question: "I received the wrong item",
      answer:
        "This can happen if a product mis-dispenses. Contact our team with transaction details and we'll review the issue immediately."
    },
    {
      question: "Can I return a product?",
      answer:
        "Due to hygiene and safety standards, physical returns are not accepted. Refunds are handled case by case based on transaction verification."
    },
    {
      question: "How do I know if my refund was approved?",
      answer:
        "Our team will notify you by email once the review is complete. Refunds typically appear in your account within 3–5 business days."
    },
    {
      question: "The machine appears offline or isn't working",
      answer:
        "Please try another nearby location. All pods are monitored and serviced regularly. You can also report the issue to support."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="w-full">

   <section className="py-24 bg-[#14132C] text-white">
  <motion.div
  id='support'
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-4xl mx-auto px-4 space-y-16"
  >
    {/* HEADER */}
    <div className="text-center">
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-light mb-6"
      >
        Get Help & Support
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-lg opacity-90"
      >
        If something didn't go as expected, we're here to help. Tranga Pods are automated systems, but real people handle support.
      </motion.p>
    </div>

    {/* MACHINE ISSUES CARD */}
    <motion.div
      variants={itemVariants}
      className="bg-[#1B1A3A] rounded-2xl p-8 border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="text-[#FF9178]" size={24} />
        <h3 className="text-2xl font-light">
          Issues with a Tranga Pod?
        </h3>
      </div>

      <p className="mb-4 opacity-90">
        Tranga Pods operate as self-service machines. Occasionally, issues can happen such as a product not dispensing correctly or a payment error.
      </p>

      <p className="mb-8 opacity-90">
        Refunds and issue reviews are handled using the transaction data from the machine.
      </p>

      <div className="space-y-5 mb-8">
        {[
          { number: '1', title: 'Note the pod location', description: 'Venue name or city/state' },
          { number: '2', title: 'Keep your payment details', description: 'Transaction time or card reference' },
          { number: '3', title: 'Contact support', description: 'Include all info for faster help' }
        ].map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#FF9178] rounded-full flex items-center justify-center shrink-0">
              <span className="text-[#14132C] font-medium">
                {step.number}
              </span>
            </div>

            <div>
              <h4 className="font-medium">
                {step.title}
              </h4>
              <p className="text-sm opacity-80">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FF9178]/20 border border-[#FF9178]/30 rounded-xl p-4">
        <p className="text-[#FF9178] flex items-center gap-2">
          <AlertCircle size={18} />
          Important: Refunds are handled per machine transaction only.
        </p>
      </div>
    </motion.div>

    {/* CONTACT CARD */}
    <motion.div
      variants={itemVariants}
      className="bg-[#0F172A] rounded-2xl p-8 border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <Mail className="text-[#A6D4FA]" size={24} />
        <h3 className="text-2xl font-light">
          Contact Tranga Support
        </h3>
      </div>

      <div className="flex gap-6 items-center">
        <div className="w-14 h-14 bg-[#A6D4FA] rounded-full flex items-center justify-center shrink-0">
          <Mail className="text-[#14132C]" size={24} />
        </div>

        <div>
          <h4 className="text-lg font-medium mb-1">
            Email Support
          </h4>

          <a
            href="mailto:support@trangapods.com"
            className="text-[#A6D4FA] text-md md:text-xl block"
          >
            support@trangapods.com
          </a>

          <p className="opacity-80 mt-2">
            Email allows accurate transaction review.
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
</section>


      {/* FAQ */}
     <section className="py-20 bg-[#EFF7FE] text-gray-900">
  <motion.div
  id='FAQ'
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-4xl mx-auto px-4 space-y-10"
  >
    {/* FAQ Header */}
    <h3 className="text-2xl font-light">Common Questions</h3>

    {/* FAQ List */}
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm"
        >
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full px-6 py-4 flex justify-between items-center text-left"
          >
            <span className="font-medium">{faq.question}</span>
            {openFaq === index ? <ChevronUp /> : <ChevronDown />}
          </button>

          {openFaq === index && (
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
<div className="flex justify-center">
  <div className="inline-block rounded-2xl bg-white border border-gray-200 shadow-md">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4 justify-center">
        <Info className="text-blue-600" size={22} />
        <h4 className="text-lg font-semibold whitespace-nowrap">
          Machine Information
        </h4>
      </div>

      <p className="text-gray-800 mb-2 text-center">
        All Tranga Pods are monitored and serviced regularly.
      </p>

      <p className="text-sm text-gray-600 text-center">
        If one appears offline, please try another nearby location.
      </p>
    </div>
  </div>
</div>

  </motion.div>
</section>


     
    

    </div>
  );
};

export default HelpRefunds;
