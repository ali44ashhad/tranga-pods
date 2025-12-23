// components/sections/HelpRefunds.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, AlertCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';

const HelpRefunds = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "I was charged but didn't receive my product",
      answer: "Please contact support with the pod location and transaction details. We'll review the machine logs and process a refund if applicable."
    },
    {
      question: "I received the wrong item",
      answer: "This can happen if a product mis-dispenses. Contact our team with transaction details and we'll review the issue immediately."
    },
    {
      question: "Can I return a product?",
      answer: "Due to hygiene and safety standards, physical returns are not accepted. Refunds are handled case by case based on transaction verification."
    },
    {
      question: "How do I know if my refund was approved?",
      answer: "Our team will notify you by email once the review is complete. Refunds typically appear in your account within 3-5 business days."
    },
    {
      question: "The machine appears offline or isn't working",
      answer: "Please try another nearby location. All pods are monitored and serviced regularly. You can also report the issue to support."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section
      id="support"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-[#14132C] text-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-6">
            Get Help & Support
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg opacity-90">
            If something didn't go as expected, we're here to help. Tranga Pods are automated systems, but real people handle support.
          </motion.p>
        </motion.div>

        {/* Machine Issues & Refunds */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-[#FF9178]" size={24} />
            <h3 className="text-2xl font-light">Issues with a Tranga Pod?</h3>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <p className="mb-4 opacity-90">
              Tranga Pods operate as self-service machines. Occasionally, issues can happen such as a product not dispensing correctly or a payment error.
            </p>
            <p className="mb-6 opacity-90">
              Refunds and issue reviews are handled using the transaction data from the machine.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  number: "1",
                  title: "Note the pod location",
                  description: "Venue name or city/state"
                },
                {
                  number: "2",
                  title: "Keep your payment details",
                  description: "Transaction time, card type, or bank reference"
                },
                {
                  number: "3",
                  title: "Contact our support team",
                  description: "Include the information above so we can help quickly"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF9178] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#14132C] font-medium">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{step.title}</h4>
                    <p className="text-sm opacity-80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#FF9178]/20 border border-[#FF9178]/30 rounded-xl p-4 mb-6">
            <p className="text-[#FF9178] font-medium flex items-center gap-2">
              <AlertCircle size={18} />
              Important: We do not process refunds through online orders. All purchases are made directly at Tranga Pods.
            </p>
          </div>
          
          <p className="opacity-90">
            Eligible refunds are typically reviewed within 3–5 business days.
          </p>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-[#A6D4FA]" size={24} />
            <h3 className="text-2xl font-light">Contact Tranga Support</h3>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-[#A6D4FA]/20 backdrop-blur-sm rounded-xl p-6 flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-[#A6D4FA] flex items-center justify-center">
                <Mail size={24} className="text-[#14132C]" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Email Support</h4>
              <a 
                href="mailto:support@trangapods.com" 
                className="text-[#A6D4FA] hover:text-[#A6D4FA]/80 text-xl transition-colors"
              >
                support@trangapods.com
              </a>
              <p className="opacity-90 mt-2">
                Email allows us to review transaction details and respond accurately.
              </p>
            </div>
          </div>
          
          <p className="text-sm opacity-70 mt-4">
            Live chat and additional support options may be added as Tranga expands.
          </p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-light mb-6">Common Questions</h3>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-all"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-[#FF9178]" size={20} />
                  ) : (
                    <ChevronDown className="text-[#A6D4FA]" size={20} />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                    <p className="opacity-90">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Machine Information */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-[#FFFD3A]/10 backdrop-blur-sm rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Info className="text-[#FFFD3A]" size={24} />
            <h3 className="text-xl font-medium">Machine Information</h3>
          </div>
          <p className="opacity-90 mb-2">
            All Tranga Pods are monitored and serviced regularly to ensure quality, cleanliness, and proper operation.
          </p>
          <p className="text-sm opacity-70">
            If a machine appears offline, please try another nearby location.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HelpRefunds;