// components/sections/AboutTranga.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Package, Users, Target, Zap } from 'lucide-react';

const AboutTranga = () => {
 const features = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "How It Works",
    description: "Visit a Tranga Pod machine, choose your fragrance, and enjoy convenience on the go. Our machines are designed to be fast, easy, and accessible.",
    bg: "bg-[#FF9178]"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community First",
    description: "We place Tranga Pods in public and community-loved venues so customers can access them where they already spend time.",
    bg: "bg-[#A6D4FA]"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Why Tranga Pods",
    description: "Tranga Pods exist to make everyday moments easier while supporting local spaces and venues our customers care about.",
    bg: "bg-[#FFFD3A]"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Designed for Real Life",
    description: "Simple, practical, and easy to use. Tranga Pods are built for real people and real routines.",
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
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className='py-10'>
 <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl text-center sm:text-6xl font-bold tracking-tight"
          style={{ color: '#14132C' }}
        >
        Learn About <span style={{ color: '#FF9178' }}>Tranga Pods.</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-center max-w-3xl mx-auto text-lg"
          style={{ color: '#14132C' }}
        >
           Tranga Pods bring convenience and fragrance to the places you already love. Our machines are designed to be simple, accessible, and placed in community-loved partners. Here's how it works and how you can help us decide where we go next.
             </motion.p>
             </div>
        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#A6D4FA]/10 border border-[#A6D4FA]/20"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg}`}>
  <div className="text-white">
    {feature.icon}
  </div>
</div>


              <h3 className="text-xl font-medium mb-3 text-[#14132C]">{feature.title}</h3>
              <p className="text-[#14132C]/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Request Form */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#A6D4FA]/20 to-[#FF9178]/10 rounded-2xl p-8 border border-[#A6D4FA]/30">
            <h3 className="text-2xl font-light mb-4 text-[#14132C]">Want a Tranga Pod Near You?</h3>
            <p className="text-[#14132C]/80 mb-6">
              Tell us where you'd like to see a Tranga Pod next. Your suggestions help us choose future locations across the U.S.
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="City, State or Venue name"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all bg-white/50"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all bg-white/50">
                  <option value="">Venue type (optional)</option>
                  <option value="gym">Gym / Fitness Studio</option>
                  <option value="hotel">Hotel</option>
                  <option value="campus">University / Campus</option>
                  <option value="apartment">Apartment Building</option>
                  <option value="other">Other</option>
                </select>
                
                <input
                  type="email"
                  placeholder="Email for updates (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all bg-white/50"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-medium text-lg transition-all bg-[#FF9178] text-[#14132C] hover:bg-[#FF9178]/90"
              >
                Submit Location Request
              </motion.button>
              
              <p className="text-sm text-[#14132C]/60 text-center">
                Submissions help guide future partnerships and location planning.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutTranga;