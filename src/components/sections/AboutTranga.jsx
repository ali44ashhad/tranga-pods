 
// components/sections/AboutTranga.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Smile, Heart, Zap, MapPin } from 'lucide-react';

const AboutTranga = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Locate a pod",
      description:
        "Find a Tranga Pod at your favorite community-loved venues. Quick, easy, ready when you are.",
      bg: "bg-[#FF9178]"
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Choose Your Pod iconography",
      description:
        "Pick the pod and product you want everything is simple and fast.",
      bg: "bg-[#A6D4FA]"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Enjoy Your Pick",
      description:
        "Your item is dispensed instantly. Ready to enjoy wherever you are.",
      bg: "bg-[#FFFD3A]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Loved ",
      description:
        "We partner with places everyone loves, so you get Tranga Pods where you already want to be.",
      bg: "bg-[#DB2A2A]"
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
    <div className='border-t border-[#A6D4FA]/40'>
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 border-b border-[#A6D4FA]/20 bg-gradient-to-r from-[#E9F5FF] via-[#FFF2EE] to-[#E9F5FF]"
    >
      <div className="max-w-7xl   mx-auto px-4">
        {/* Section Header */}
        <div className="py-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl text-center sm:text-6xl font-bold tracking-tight"
            style={{ color: '#14132C' }}
          >
          How Tranga<span style={{ color: '#FF9178' }}> Pods  Work</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-center max-w-3xl mx-auto text-lg"
            style={{ color: '#14132C' }}
          >
            Smart pods, simple steps, and a little magic inside every location.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#A6D4FA]/10 border border-[#A6D4FA]/20"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg}`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              <h3 className="text-xl font-medium mb-3 text-[#14132C]">
                {feature.title}
              </h3>

              <p className="text-[#14132C]/70">
                {feature.description}
              </p>
            </motion.div>
            
          ))}
        </motion.div>
         <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14 text-sm sm:text-base"
          style={{ color: "#14132C" }}
        >
          Built to fit naturally into everyday routines — no learning curve required.
        </motion.p>
      </div>
    </motion.section>
    </div>
  );
};

export default AboutTranga;
