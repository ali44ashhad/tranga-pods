import React from "react";
import { Link } from "react-scroll";
import { Instagram, Mail } from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
       <section
        id="support-details"
        className=" text-gray-400 border-b border-gray-100/20 text-xs px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto space-y-6 leading-relaxed">
          <p className="font-semibold">
            Tranga Pods — Refunds, Transactions & Support  
            <br />
            Version 1.0 · Last updated: 01/01/2026
          </p>

          <p>
             <strong>Purchases & Transactions</strong><br />
          All purchases made through Tranga Pods occur at physical automated retail machines located inside partner venues. Tranga Pods does not process online sales or remote transactions. All payments are processed through third-party payment providers integrated into the machine at the time of purchase.

          </p>

          <p>
          <strong>Refund Eligibility</strong><br />Refunds are issued only for verified transaction or dispense failures, including but not limited to:
	•	Product not dispensing after successful payment
	•	Partial or incorrect dispensing
	•	Duplicate charges or confirmed payment errors
Refunds are not issued for reasons including, but not limited to, change of mind, product preference, venue conditions, or user error once a product has successfully dispensed.
  Refunds apply only to verified dispense or transaction failures. Change of mind, preference, or user error is not eligible.
          </p>

          <p>
          <strong>Refund Request Requirements</strong><br />
          To request a refund, customers must submit a support request within 7 days of the transaction and may be required to provide:
	•	Date and approximate time of purchase
	•	Tranga Pod location or Location ID displayed on the machine
	•	Transaction reference number from the payment provider
	•	A brief description of the issue
	•	Supporting photo or video, when applicable
Requests missing required information may be delayed or declined.

          </p>

          <p>
             <strong>Refund Processing</strong><br />
          Approved refunds are issued to the original payment method used at the machine. Processing times may vary depending on the payment provider and issuing bank. Tranga Pods does not control posting timelines once a refund has been initiated.

          </p>
          <p>
             <strong>Payment Providers & Machine Verification</strong><br />
         All transactions are logged through Tranga Pods’ machine systems and associated payment processors. Refund eligibility is determined by internal transaction records, machine telemetry, and payment provider verification. Tranga Pods reserves the right to deny refund requests that cannot be verified.

          </p>

          <p>
            <strong>Venue Responsibility</strong><br />
           Partner venues hosting Tranga Pods do not process refunds, handle disputes, or provide transaction support. Venue staff are unable to access transaction data or issue refunds. All support inquiries must be directed to Tranga Pods.

          </p>

          <p>
        <strong>Product Availability</strong><br />
            Product availability, machine functionality, and dispense performance may vary by location, inventory levels, connectivity, and machine status. Tranga Pods does not guarantee continuous availability of specific products at all locations.

          </p>
          <p>
             <strong>Location Requests & Submissions</strong><br />
          Location suggestions submitted through this site are used to inform future placement and partnership decisions. Submission does not guarantee placement at a specific venue or geographic area.


          </p>

          <p>
         <strong>Support Communications</strong><br />
            Support response times may vary based on inquiry volume and verification requirements. Tranga Pods may request additional information to resolve claims or investigate machine activity.

          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* LEFT: Brand + Social */}
          <div className="md:col-span-3">
            <a href="/" className="inline-block">
              {/* <img src={logo} alt="Tranga Pods Logo" className="h-10" /> */}
              <img src="footerLogo.png" alt="Tranga Pods Logo" className="h-10" />
            </a>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
               <a 
                  href="https://www.facebook.com/people/Tranga-Pods/61581808216740/#"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaFacebook size={24} />
                </a>
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
                  href="https://www.linkedin.com/company/trangapods/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin size={24} />
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
                How It Works
                </Link>
                <Link to="find-pod" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
             
Locations
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link to="find-one" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
      
               Request a Location
                </Link>
                <Link to="support" smooth duration={500} offset={-80}
                  className="cursor-pointer hover:text-white transition-colors">
             
Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tranga LLC d/b/a Tranga Pods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
