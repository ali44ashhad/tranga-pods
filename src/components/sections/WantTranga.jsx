import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const WantTranga = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hewj6fr",      // service ID
        "template_jjx5phv",     // template ID
        formRef.current,
        "ehbozUE8nqV5SISea"     // public key
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="find-one"
  className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-white via-[#FFFBE6] to-white"

    >
     

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10
          bg-white/30 backdrop-blur-xl border border-[#A6D4FA]/30
          rounded-3xl p-8 md:p-12 shadow-lg"
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <span
              className="inline-block mb-4 px-4 py-1 text-sm rounded-full
              bg-[#A6D4FA]/30 text-[#14132C] w-fit"
            >
              Community-Driven Expansion
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Want a <span className="text-[#FF9178]">Tranga Pod</span> Near You?
            </h2>

            <p className="text-[#14132C]/80 text-lg mb-6">
              Tell us where and why you want a Tranga Pod. Your feedback helps us
              decide where we expand next.
            </p>

            <ul className="space-y-3 text-[#14132C]/70 text-sm">
              <li>• Suggest your area</li>
              <li>• Influence expansion decisions</li>
              <li>• Get early updates</li>
            </ul>
          </div>

          {/* RIGHT FORM / SUCCESS */}
          <div
            className="bg-gradient-to-br from-[#A6D4FA]/20 to-[#FF9178]/10
            rounded-2xl p-6 md:p-8 border border-[#A6D4FA]/30"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-2xl rounded-2xl
                  bg-gradient-to-r from-green-300 to-cyan-300
                  p-4 text-center"
                >
                  <p className="text-slate-700 font-medium">
                    Thanks! We’ll let you know when we’re nearby.
                  </p>
                </motion.div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                {/* Name (optional) */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your name (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA]
                  bg-white/60 focus:border-[#FF9178] focus:ring-2
                  focus:ring-[#FF9178]/20 outline-none"
                />

                {/* Venue (required) */}
                <select
                  name="venue"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA]
                  bg-white/60 focus:border-[#FF9178] focus:ring-2
                  focus:ring-[#FF9178]/20 outline-none"
                >
                  <option value="">Select venue type</option>
                  <option value="Gym">Gym / Fitness Studio</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Campus">University / Campus</option>
                  <option value="Apartment">Apartment Building</option>
                  <option value="Other">Other</option>
                </select>

                {/* Zip Code (required) */}
                <input
                  type="text"
                  name="zip_code"
                  required
                  placeholder="Zip / Postal Code"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA]
                  bg-white/60 focus:border-[#FF9178] focus:ring-2
                  focus:ring-[#FF9178]/20 outline-none"
                />

                {/* Email (optional) */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email for updates (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA]
                  bg-white/60 focus:border-[#FF9178] focus:ring-2
                  focus:ring-[#FF9178]/20 outline-none"
                />

                {/* Comment (optional) */}
                <textarea
                  name="comment"
                  rows="3"
                  placeholder="Why do you want a Tranga Pod here? (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA]
                  bg-white/60 focus:border-[#FF9178] focus:ring-2
                  focus:ring-[#FF9178]/20 outline-none resize-none"
                />

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg px-6 py-3 text-center text-sm font-bold
                    transition-transform focus:outline-none focus:ring-2
                    focus:ring-offset-2 disabled:opacity-50"
                    style={{ backgroundColor: "#FF9178", color: "#14132C" }}
                    whileHover={{
                      scale: loading ? 1 : 1.05,
                      backgroundColor: loading ? "#FF9178" : "#FFFD3A",
                    }}
                    whileTap={{ scale: loading ? 1 : 0.97 }}
                  >
                    {loading ? "Submitting..." : "Request a Location"}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WantTranga;
