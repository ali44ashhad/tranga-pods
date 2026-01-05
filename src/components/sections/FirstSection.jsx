import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const FirstSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-[85vh] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#A6D4FA" }}
    >
      <div className="max-w-4xl w-full text-center flex flex-col gap-8">

        {/* Primary Header */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          style={{ color: "#14132C" }}
        >
          Welcome to Tranga Pods
        </motion.h1>

        {/* Sub Header */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[1.3rem] sm:text-[1.7rem] font-extrabold md:text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3.2rem]"
          style={{ color: "#FF9178" }}
        >
          Discover what’s new, locate a pod nearby, or get support — all in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
        >

          {/* Nearby Pods */}
          <ScrollLink
            to="find-one"
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
              Nearby Pods
            </motion.button>
          </ScrollLink>

          {/* Get Support */}
          <ScrollLink
            to="support"
            smooth={true}
            duration={600}
            offset={-80}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#14132C",
                color: "#FFFFFF",
                boxShadow: "0 8px 20px rgba(20,19,44,0.25)"
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="px-8 py-3 rounded-full font-semibold text-lg w-full sm:w-auto border-2"
              style={{
                backgroundColor: "transparent",
                color: "#14132C",
                borderColor: "#14132C"
              }}
            >
              Need Help? Get Support
            </motion.button>
          </ScrollLink>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default FirstSection;
