import React, { useState } from 'react';
import { Mail, AlertCircle, HelpCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const CustomerSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "I was charged but didn't receive my product",
      answer: "Contact support with the machine location and transaction details. We'll review the logs and process a refund if applicable."
    },
    {
      question: "The machine appears to be offline or not working",
      answer: "Please try another nearby location. All machines are monitored and serviced regularly. You can also report the issue through our contact form."
    },
    {
      question: "How long do refunds take to process?",
      answer: "Eligible refunds are reviewed within 2-3 business days and typically appear in your account within 5-7 business days."
    },
    {
      question: "Can I return a physical product?",
      answer: "Due to hygiene and safety standards, physical returns are not accepted. Refunds are handled case by case based on transaction verification."
    },
    {
      question: "Who do I contact about a damaged machine?",
      answer: "Use our contact form to report damaged or malfunctioning machines. Please include the exact location and description of the issue."
    }
  ];

  return (
    <section id="support" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <HelpCircle className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-light text-gray-900">
            Customer Support
          </h2>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-10">
          <div className="flex items-start gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                Before Contacting Support
              </h3>
              <p className="text-blue-800 mb-4">
                To help us assist you quickly, please have this information ready:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-100">
                  <h4 className="font-medium text-blue-900 mb-2">Required Information</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Machine location (city/venue)</li>
                    <li>• Date and time of transaction</li>
                    <li>• Last 4 digits of payment card</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-blue-100">
                  <h4 className="font-medium text-blue-900 mb-2">Helpful Information</h4>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Product selected</li>
                    <li>• Error message (if any)</li>
                    <li>• Machine condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-blue-800">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Support responses typically within 24-48 hours</span>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-medium text-gray-900 mb-6">
            Email Support
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <a 
                  href="mailto:support@trangapods.com" 
                  className="text-lg text-blue-600 hover:text-blue-800 font-medium"
                >
                  support@trangapods.com
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  For issues with machines, transactions, or product concerns
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Email allows us to properly document and track support requests.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;